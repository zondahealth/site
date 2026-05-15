# Shader hero background

Three files. Open `hero-example.html` in a browser.

- `hero-example.html` — drop-in hero template
- `shader-runtime.jsx` — WebGL runtime, exposes `<ShaderWallpaper>`
- `wallpapers.jsx` — the five shader sources, exposed as `window.WALLPAPERS`

## Use one specific shader

In `hero-example.html`, change `let current = 0;` to the index you want
(0=Tide, 1=Drift, 2=Aurora, 3=Magnet, 4=Sonar) and delete the
`.switcher` div + switcher-building script block.
