'use client';

import { ChangeEvent, FormEvent, ReactNode, useState } from 'react';
import {
  AlertCircle,
  ArrowRight,
  Building2,
  CheckCircle2,
  Mail,
  ShieldCheck,
} from 'lucide-react';

import { Button } from './ui/button';
import { useLanguage } from './LanguageProvider';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  organization: string;
  message: string;
  privacyAccepted: boolean;
};

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  organization: '',
  message: '',
  privacyAccepted: false,
};

const inputClassName =
  'h-12 w-full rounded-md border border-[color:rgba(154,166,188,0.42)] bg-[color:rgba(253,253,255,0.96)] px-4 text-base text-foreground shadow-[0_12px_24px_-22px_rgba(17,27,43,0.18)] outline-none transition-[border-color,box-shadow,background-color] duration-200 placeholder:text-[color:rgba(74,85,111,0.52)] focus:border-[color:rgba(34,111,253,0.62)] focus:bg-white focus:shadow-[0_0_0_3px_rgba(34,111,253,0.10)]';

const labelClassName =
  'text-sm font-semibold leading-none text-[color:rgba(21,27,43,0.78)]';

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className={labelClassName} htmlFor={id}>
        {label}
        {required ? <span className="text-zonda-blue"> *</span> : null}
      </label>
      {children}
    </div>
  );
}

export function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData((current) => ({
      ...current,
      privacyAccepted: event.target.checked,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
        setFormData(initialFormData);
        return;
      }

      setSubmitStatus('error');
      setErrorMessage(result.error || t('site.contact.fallbackError'));
    } catch {
      setSubmitStatus('error');
      setErrorMessage(t('site.contact.connectionError'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid overflow-hidden rounded-md border border-[color:rgba(21,27,43,0.08)] bg-[color:rgba(244,246,253,0.86)] shadow-[0_24px_60px_-46px_rgba(14,60,117,0.38)] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.35fr)]">
      <aside className="relative overflow-hidden bg-zonda-blue-dark px-6 py-8 text-white sm:px-8 lg:px-10 lg:py-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(234,234,0,0.12),transparent_28%),radial-gradient(circle_at_90%_80%,rgba(92,140,255,0.22),transparent_32%)]" />
        <div className="relative flex h-full flex-col justify-between gap-14">
          <div className="flex flex-col gap-5">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[color:rgba(248,250,255,0.68)]">
              {t('site.contact.eyebrow')}
            </p>
            <div className="flex flex-col gap-4">
              <h1 className="max-w-xl text-balance text-4xl font-semibold leading-[0.98] sm:text-5xl">
                {t('site.contact.title')}
              </h1>
              <p className="max-w-lg text-pretty text-base font-medium leading-relaxed text-[color:rgba(248,250,255,0.76)] sm:text-lg">
                {t('site.contact.copy')}
              </p>
            </div>
          </div>
        </div>
      </aside>

      <div className="bg-[color:rgba(253,253,255,0.96)] px-6 py-8 sm:px-8 lg:px-10 lg:py-12">
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          {submitStatus === 'success' ? (
            <div
              className="flex items-start gap-3 rounded-md border border-[color:rgba(0,168,120,0.24)] bg-[color:rgba(0,168,120,0.08)] p-4 text-[color:rgb(5,116,75)]"
              role="status"
            >
              <CheckCircle2 className="mt-0.5 size-5 shrink-0" />
              <p className="text-sm font-semibold leading-relaxed">
                {t('site.contact.success')}
              </p>
            </div>
          ) : null}

          {submitStatus === 'error' ? (
            <div
              className="flex items-start gap-3 rounded-md border border-[color:rgba(147,0,10,0.18)] bg-[color:rgba(255,218,214,0.42)] p-4 text-[color:rgb(147,0,10)]"
              role="alert"
            >
              <AlertCircle className="mt-0.5 size-5 shrink-0" />
              <p className="text-sm font-semibold leading-relaxed">
                {errorMessage}
              </p>
            </div>
          ) : null}

          <div className="grid gap-5 md:grid-cols-2">
            <Field id="firstName" label={t('site.contact.fields.firstName')} required>
              <input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder={t('site.contact.placeholders.firstName')}
                required
                className={inputClassName}
              />
            </Field>
            <Field id="lastName" label={t('site.contact.fields.lastName')} required>
              <input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder={t('site.contact.placeholders.lastName')}
                required
                className={inputClassName}
              />
            </Field>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <Field id="email" label={t('site.contact.fields.email')} required>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder={t('site.contact.placeholders.email')}
                required
                className={inputClassName}
              />
            </Field>
            <Field id="phone" label={t('site.contact.fields.phone')}>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder={t('site.contact.placeholders.phone')}
                className={inputClassName}
              />
            </Field>
          </div>

          <Field id="organization" label={t('site.contact.fields.organization')}>
            <input
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleInputChange}
              placeholder={t('site.contact.placeholders.organization')}
              className={inputClassName}
            />
          </Field>

          <Field id="message" label={t('site.contact.fields.message')} required>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder={t('site.contact.placeholders.message')}
              required
              rows={6}
              className={`${inputClassName} h-auto min-h-36 resize-y py-3 leading-relaxed`}
            />
          </Field>

          <div className="flex items-start gap-3 rounded-md border border-[color:rgba(154,166,188,0.24)] bg-[color:rgba(244,246,253,0.58)] p-4">
            <input
              id="privacyAccepted"
              name="privacyAccepted"
              type="checkbox"
              checked={formData.privacyAccepted}
              onChange={handleCheckboxChange}
              required
              className="mt-1 size-4 shrink-0 rounded border-[color:rgba(154,166,188,0.8)] text-zonda-blue focus:ring-2 focus:ring-[color:rgba(34,111,253,0.24)]"
            />
            <label
              className="text-sm font-medium leading-relaxed text-on-surface-variant"
              htmlFor="privacyAccepted"
            >
              {t('site.contact.privacy')}
            </label>
          </div>

          <Button
            type="submit"
            size="lg"
            className="mt-1 w-full sm:w-fit sm:min-w-56"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? t('common.buttons.sending')
              : t('common.buttons.sendMessage')}
            <ArrowRight />
          </Button>
        </form>
      </div>
    </div>
  );
}
