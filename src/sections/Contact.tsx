import { motion } from 'framer-motion';
import { CheckCircle2, Github, Linkedin, Mail, MapPin, Send, type LucideIcon } from 'lucide-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import { Section } from '../components/Section';
import { portfolio } from '../data/portfolio';
import { fadeUp } from '../utils/motion';

type Errors = Partial<Record<'name' | 'email' | 'message', string>>;
type ContactItem = [LucideIcon, string, string | null];

export const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const clearFieldError = (field: keyof Errors) => (_event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setErrors((currentErrors) => {
      if (!currentErrors[field]) return currentErrors;
      const nextErrors = { ...currentErrors };
      delete nextErrors[field];
      return nextErrors;
    });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = {
      name: String(data.get('name') ?? '').trim(),
      email: String(data.get('email') ?? '').trim(),
      message: String(data.get('message') ?? '').trim(),
    };
    const nextErrors: Errors = {};
    if (!values.name) nextErrors.name = 'Enter your name.';
    if (!/^\S+@\S+\.\S+$/.test(values.email)) nextErrors.email = 'Enter a valid email.';
    if (values.message.length < 10) nextErrors.message = 'Message should be at least 10 characters.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${values.name}`);
      const body = encodeURIComponent(`Name: ${values.name}\nEmail: ${values.email}\n\nMessage:\n${values.message}`);
      window.location.href = `mailto:${portfolio.email}?subject=${subject}&body=${body}`;
      setSuccess(true);
      event.currentTarget.reset();
      window.setTimeout(() => setSuccess(false), 3500);
    }
  };

  return (
    <Section id="contact" eyebrow="Contact" title="Tell me what you are building.">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="rounded-brand border border-line bg-panel p-6 shadow-card sm:p-8">
          <p className="text-lg leading-8 text-zinc-300">I’m happy to talk through frontend systems, enterprise workflows, polished UI, or the next product experience on your roadmap.</p>
          <div className="mt-8 grid gap-4">
            {([
              [Mail, portfolio.email, `mailto:${portfolio.email}`],
              [Linkedin, 'LinkedIn', portfolio.linkedin],
              [Github, 'GitHub', portfolio.github],
              [MapPin, portfolio.location, null],
            ] satisfies ContactItem[]).map(([Icon, label, href]) => (
              <div key={label} className="flex items-center gap-3 text-zinc-300">
                <span className="grid size-11 place-items-center rounded-full border border-line bg-white/[0.04] text-accent">
                  <Icon size={18} />
                </span>
                {href ? (
                  <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="transition hover:text-white">
                    {label}
                  </a>
                ) : (
                  <span>{label}</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
        <motion.form variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }} onSubmit={onSubmit} noValidate className="rounded-brand border border-line bg-white/[0.04] p-6 shadow-card backdrop-blur sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-zinc-200">
              Name
              <input name="name" className="field" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} onChange={clearFieldError('name')} />
              {errors.name && <span id="name-error" className="text-xs text-red-300">{errors.name}</span>}
            </label>
            <label className="grid gap-2 text-sm font-medium text-zinc-200">
              Email
              <input name="email" type="email" className="field" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} onChange={clearFieldError('email')} />
              {errors.email && <span id="email-error" className="text-xs text-red-300">{errors.email}</span>}
            </label>
          </div>
          <label className="mt-5 grid gap-2 text-sm font-medium text-zinc-200">
            Message
            <textarea name="message" rows={6} className="field resize-none" aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} onChange={clearFieldError('message')} />
            {errors.message && <span id="message-error" className="text-xs text-red-300">{errors.message}</span>}
          </label>
          <button type="submit" className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-accent sm:w-auto">
            <Send size={17} /> Send Message
          </button>
          {success && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-5 flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
              <CheckCircle2 size={18} /> Your email app is opening with the message ready to send.
            </motion.div>
          )}
        </motion.form>
      </div>
    </Section>
  );
};
