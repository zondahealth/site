// WebGL runtime for shader wallpapers.
// Compiles a fragment shader, manages a fullscreen quad, and wires
// mouse + click uniforms so the shader can react to user input.

const __VS = `
attribute vec2 a_pos;
varying vec2 v_uv;
void main(){
  v_uv = a_pos * 0.5 + 0.5;
  gl_Position = vec4(a_pos, 0.0, 1.0);
}`;

const __FRAG_PREAMBLE = `
precision highp float;
varying vec2 v_uv;
uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;        // raw mouse 0..1
uniform vec2 u_mouseSmooth;  // eased mouse 0..1
uniform float u_mouseVel;    // speed of mouse motion
uniform vec3 u_clicks[4];    // x,y in 0..1; z = age in seconds

#define NAVY vec3(0.051, 0.227, 0.478)
#define NAVY_DEEP vec3(0.027, 0.137, 0.318)
#define INK vec3(0.973, 0.973, 0.965)

float hash11(float p){ p = fract(p*0.1031); p *= p+33.33; p *= p+p; return fract(p); }
float hash21(vec2 p){ vec3 q = fract(vec3(p.xyx)*0.1031); q += dot(q, q.yzx+33.33); return fract((q.x+q.y)*q.z); }
vec2  hash22(vec2 p){ vec3 q = fract(vec3(p.xyx)*vec3(0.1031,0.1030,0.0973)); q += dot(q, q.yzx+33.33); return fract((q.xx+q.yz)*q.zy); }

float vnoise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  float a = hash21(i), b = hash21(i+vec2(1,0)), c = hash21(i+vec2(0,1)), d = hash21(i+vec2(1,1));
  vec2 u = f*f*(3.0-2.0*f);
  return mix(mix(a,b,u.x), mix(c,d,u.x), u.y);
}
float fbm(vec2 p){
  float v = 0.0, a = 0.5;
  for(int i=0;i<5;i++){ v += a*vnoise(p); p *= 2.02; a *= 0.5; }
  return v;
}
`;

function ShaderWallpaper({ fragmentSource, label, hint, badge }) {
  const canvasRef = React.useRef(null);
  const containerRef = React.useRef(null);
  const [hasError, setHasError] = React.useState(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const gl = canvas.getContext('webgl', { antialias: false, premultipliedAlpha: false, alpha: false });
    if (!gl) { setHasError('WebGL unavailable'); return; }

    const compile = (type, src) => {
      const sh = gl.createShader(type);
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
        const log = gl.getShaderInfoLog(sh);
        console.error('Shader compile error:', log, '\n---\n', src);
        setHasError(log);
        return null;
      }
      return sh;
    };
    const vs = compile(gl.VERTEX_SHADER, __VS);
    const fs = compile(gl.FRAGMENT_SHADER, __FRAG_PREAMBLE + '\n' + fragmentSource);
    if (!vs || !fs) return;

    const prog = gl.createProgram();
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error('Link error:', gl.getProgramInfoLog(prog));
      setHasError(gl.getProgramInfoLog(prog));
      return;
    }
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(prog, 'a_pos');
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, 'u_resolution');
    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uMouse = gl.getUniformLocation(prog, 'u_mouse');
    const uMouseSmooth = gl.getUniformLocation(prog, 'u_mouseSmooth');
    const uMouseVel = gl.getUniformLocation(prog, 'u_mouseVel');
    const uClicks = gl.getUniformLocation(prog, 'u_clicks');

    const state = {
      mouse: [0.5, 0.5],
      mouseSmooth: [0.5, 0.5],
      prevMouse: [0.5, 0.5],
      mouseVel: 0,
      clicks: new Float32Array(12).fill(-9),
      clickIdx: 0,
      start: performance.now(),
      lastTouchedAt: 0,
    };
    // initialize click ages high so no ghost ripple
    for (let i = 0; i < 4; i++) state.clicks[i*3+2] = 99;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      const w = Math.max(1, Math.floor(rect.width * dpr));
      const h = Math.max(1, Math.floor(rect.height * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w; canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    const onMove = (clientX, clientY) => {
      const rect = canvas.getBoundingClientRect();
      const x = (clientX - rect.left) / rect.width;
      const y = 1 - (clientY - rect.top) / rect.height;
      state.mouse = [Math.max(0, Math.min(1, x)), Math.max(0, Math.min(1, y))];
      state.lastTouchedAt = performance.now();
    };
    const handleMove = (e) => onMove(e.clientX, e.clientY);
    const handleTouchMove = (e) => {
      if (e.touches.length) {
        onMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };
    const onClick = (clientX, clientY) => {
      const rect = canvas.getBoundingClientRect();
      const x = (clientX - rect.left) / rect.width;
      const y = 1 - (clientY - rect.top) / rect.height;
      const i = state.clickIdx % 4;
      state.clicks[i*3] = x;
      state.clicks[i*3+1] = y;
      state.clicks[i*3+2] = 0;
      state.clickIdx++;
    };
    const handlePointerDown = (e) => onClick(e.clientX, e.clientY);
    container.addEventListener('mousemove', handleMove);
    container.addEventListener('touchmove', handleTouchMove, { passive: true });
    container.addEventListener('touchstart', (e) => {
      if (e.touches.length) onClick(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });
    container.addEventListener('pointerdown', handlePointerDown);

    let raf;
    let last = performance.now();
    const render = () => {
      const now = performance.now();
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const t = (now - state.start) / 1000;

      // ease the smoothed mouse toward target
      const k = 1 - Math.exp(-dt * 7);
      const sx = state.mouseSmooth[0] + (state.mouse[0] - state.mouseSmooth[0]) * k;
      const sy = state.mouseSmooth[1] + (state.mouseSmooth[1] !== state.mouse[1] ? (state.mouse[1] - state.mouseSmooth[1]) * k : 0);
      state.mouseSmooth = [sx, sy];

      // mouse velocity (eased)
      const vx = (state.mouse[0] - state.prevMouse[0]) / Math.max(0.001, dt);
      const vy = (state.mouse[1] - state.prevMouse[1]) / Math.max(0.001, dt);
      const v = Math.min(8, Math.hypot(vx, vy));
      state.mouseVel = state.mouseVel + (v - state.mouseVel) * (1 - Math.exp(-dt * 4));
      state.prevMouse = [state.mouse[0], state.mouse[1]];

      // age clicks
      for (let i = 0; i < 4; i++) state.clicks[i*3+2] += dt;

      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, t);
      gl.uniform2f(uMouse, state.mouse[0], state.mouse[1]);
      gl.uniform2f(uMouseSmooth, state.mouseSmooth[0], state.mouseSmooth[1]);
      gl.uniform1f(uMouseVel, state.mouseVel);
      gl.uniform3fv(uClicks, state.clicks);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      raf = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      container.removeEventListener('mousemove', handleMove);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('pointerdown', handlePointerDown);
      gl.deleteProgram(prog);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(buf);
    };
  }, [fragmentSource]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        background: '#0D3A7A',
        cursor: 'crosshair',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ display: 'block', width: '100%', height: '100%' }}
      />
      {hasError && (
        <div style={{
          position: 'absolute', inset: 0, color: '#fff', padding: 24,
          fontFamily: 'ui-monospace, monospace', fontSize: 11, whiteSpace: 'pre-wrap',
          background: 'rgba(13,58,122,0.95)', overflow: 'auto',
        }}>{String(hasError)}</div>
      )}
      {(label || badge || hint) && (
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          padding: '28px 32px',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            {badge && (
              <div style={{
                color: 'rgba(255,255,255,0.78)',
                fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace',
                fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase',
              }}>{badge}</div>
            )}
            <div style={{
              color: 'rgba(255,255,255,0.45)',
              fontFamily: 'ui-monospace, monospace', fontSize: 10, letterSpacing: '0.18em',
            }}>● LIVE</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24 }}>
            {label && (
              <div style={{
                color: 'rgba(255,255,255,0.95)',
                fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
                fontWeight: 600, fontSize: 28, letterSpacing: '-0.01em', lineHeight: 1,
              }}>{label}</div>
            )}
            {hint && (
              <div style={{
                color: 'rgba(255,255,255,0.55)',
                fontFamily: 'ui-monospace, monospace', fontSize: 10, letterSpacing: '0.18em',
                textTransform: 'uppercase', textAlign: 'right',
              }}>{hint}</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

window.ShaderWallpaper = ShaderWallpaper;
