'use client';

import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { ArrowRight, Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    message: '',
    privacyAccepted: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const contactInfo = {
    title: 'Contactanos',
    details: 'support@zondahealth.com',
    subtitle: 'Responderemos dentro de 24 horas',
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      privacyAccepted: checked,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          organization: '',
          message: '',
          privacyAccepted: false,
        });
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'Error al enviar el mensaje');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Error de conexión. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-26">
      <div className="container mx-auto px-4">
        <div
          className="rounded-2xl p-8 lg:p-12 shadow-lg border border-blue-200/60 relative overflow-hidden"
          style={{
            background:
              'linear-gradient(30deg, #036AFA 0%, #1E88E5 25%, #1976D2 50%, #1565C0 75%, #0D47A1 100%)',
            boxShadow:
              '0 0 40px rgba(3, 106, 250, 0.3), 0 0 80px rgba(25, 118, 210, 0.2)',
          }}
        >
          <div className="text-center mb-16 flex flex-col gap-4">
            <h2 className="text-3xl lg:text-4xl text-white mb-4 font-bold">
              ¿Listo para Transformar tus Operaciones de{' '}
              <span className="text-yellow-400">Salud?</span>
            </h2>
            <p className="text-xl text-white/90 max-w-5xl mx-auto">
              Ponte en contacto con nuestro equipo para aprender cómo Zonda
              Health puede ayudarte a brindar mejor atención al paciente a
              través de soluciones tecnológicas innovadoras.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="space-y-8 flex items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        {contactInfo.title}
                      </h4>
                      <p className="text-white mb-1">{contactInfo.details}</p>
                      <p className="text-sm text-white/80">
                        {contactInfo.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg border-0 border-t-1 pt-4">
                <CardContent className="space-y-6">
                  {submitStatus === 'success' && (
                    <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-lg">
                      <CheckCircle className="w-5 h-5" />
                      <span>
                        ¡Mensaje enviado exitosamente! Te contactaremos pronto.
                      </span>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-lg">
                      <AlertCircle className="w-5 h-5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm text-gray-700">
                          Nombre *
                        </label>
                        <Input
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="Ingresa tu nombre"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-gray-700">
                          Apellido *
                        </label>
                        <Input
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Ingresa tu apellido"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm text-gray-700">Email *</label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Ingresa tu email"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-gray-700">
                          Teléfono
                        </label>
                        <Input
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Ingresa tu número de teléfono"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm text-gray-700">
                        Organización
                      </label>
                      <Input
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        placeholder="Ingresa el nombre de tu organización"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm text-gray-700">Mensaje *</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Cuéntanos sobre tus necesidades de tecnología de la salud..."
                        className="min-h-[120px] resize-none"
                        required
                      />
                    </div>

                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="privacy"
                        name="privacyAccepted"
                        checked={formData.privacyAccepted}
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1"
                        required
                      />
                      <label
                        htmlFor="privacy"
                        className="text-sm text-gray-600"
                      >
                        Estoy de acuerdo con la{' '}
                        <a href="#" className="text-blue-600 hover:underline">
                          Política de Privacidad
                        </a>{' '}
                        y los{' '}
                        <a href="#" className="text-blue-600 hover:underline">
                          Términos de Servicio
                        </a>
                      </label>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      disabled={isSubmitting}
                      onClick={() => console.log('Button clicked!')}
                    >
                      {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
