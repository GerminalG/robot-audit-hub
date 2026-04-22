/**
 * ContactForm — front-end-only contact form.
 *
 * Behaviour:
 *  - Validates inputs with zod (length limits, email format).
 *  - On submit, opens the user's mail client via a `mailto:` URL with the
 *    message pre-filled. No backend request is made.
 *
 * To later wire this to a real backend (e.g. an Edge Function or 3rd-party
 * email service), replace the body of `onSubmit` with the network call and
 * keep the same zod schema for validation.
 */
import { useState } from "react";
import { z } from "zod";
import { project } from "@/data/project";
import { useTranslation } from "@/i18n/LanguageContext";

interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactForm = () => {
  const { t } = useTranslation();
  const f = t.contact.form;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});

  const schema = z.object({
    name: z
      .string()
      .trim()
      .nonempty({ message: f.errors.nameRequired })
      .max(100, { message: f.errors.nameTooLong }),
    email: z
      .string()
      .trim()
      .email({ message: f.errors.emailInvalid })
      .max(255, { message: f.errors.emailTooLong }),
    message: z
      .string()
      .trim()
      .nonempty({ message: f.errors.messageRequired })
      .max(1000, { message: f.errors.messageTooLong }),
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const parsed = schema.safeParse({ name, email, message });

    if (!parsed.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FieldErrors;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});

    // Build a mailto URL with properly encoded subject and body.
    const subject = `Scanos contact — ${parsed.data.name}`;
    const body = `${parsed.data.message}\n\n— ${parsed.data.name} (${parsed.data.email})`;
    const mailto = `mailto:${project.contactEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  const inputBase =
    "w-full rounded-md border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring transition-colors";
  const inputOk = "border-border hover:border-accent/60";
  const inputErr = "border-destructive";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-lg border border-border bg-card p-6 shadow-sm sm:p-8"
    >
      <h3 className="font-heading text-xl font-semibold text-card-foreground">{f.title}</h3>

      <div className="mt-6 space-y-5">
        {/* Name */}
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-foreground">
            {f.nameLabel}
          </label>
          <input
            id="contact-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={f.namePlaceholder}
            maxLength={100}
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={`mt-1.5 ${inputBase} ${errors.name ? inputErr : inputOk}`}
          />
          {errors.name && (
            <p id="contact-name-error" className="mt-1.5 text-xs text-destructive">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-foreground">
            {f.emailLabel}
          </label>
          <input
            id="contact-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={f.emailPlaceholder}
            maxLength={255}
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={`mt-1.5 ${inputBase} ${errors.email ? inputErr : inputOk}`}
          />
          {errors.email && (
            <p id="contact-email-error" className="mt-1.5 text-xs text-destructive">
              {errors.email}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="contact-message" className="block text-sm font-medium text-foreground">
            {f.messageLabel}
          </label>
          <textarea
            id="contact-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={f.messagePlaceholder}
            maxLength={1000}
            rows={5}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
            className={`mt-1.5 resize-y ${inputBase} ${errors.message ? inputErr : inputOk}`}
          />
          <div className="mt-1.5 flex items-start justify-between gap-3">
            {errors.message ? (
              <p id="contact-message-error" className="text-xs text-destructive">
                {errors.message}
              </p>
            ) : (
              <span />
            )}
            <span className="shrink-0 text-xs text-muted-foreground">{message.length}/1000</span>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
      >
        {f.submit}
      </button>

      <p className="mt-4 text-xs italic text-muted-foreground">{f.hint}</p>
    </form>
  );
};

export default ContactForm;
