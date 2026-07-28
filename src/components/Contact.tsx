import { useState, useRef } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2, Github, Linkedin } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import { useReveal } from '../hooks/useReveal';
import { profile, web3formsKey } from '../data/profile';

const Contact = () => {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (Object.values(formData).some((v) => !v.trim())) {
      setError('All fields are required');
      return;
    }

    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: web3formsKey,
          subject: formData.subject,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: 'Portfolio Contact Form',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error(result.message || 'Something went wrong!');
      }
    } catch (err: unknown) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="section-pad hairline" ref={ref}>
      <div className="max-w-content mx-auto">
        <SectionHeader number="06" label="Contact" title="Got a project in mind?" />

        {/* Giant email */}
        <div className="reveal mb-14 md:mb-20">
          <a
            href={`mailto:${profile.email}`}
            className="font-display text-2xl sm:text-4xl md:text-6xl font-medium text-ink link-underline break-all hover:text-accent-ink transition-colors duration-300"
          >
            {profile.email}
          </a>
          <p className="mt-4 text-ink-faint text-sm">
            {profile.locationDetail} · {profile.timezone}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <form onSubmit={handleSubmit} className="reveal lg:col-span-7 space-y-8">
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            {error && (
              <div className="flex items-center gap-2 text-sm text-red-700 bg-red-50 border border-red-200 px-4 py-3 rounded-lg">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                {error}
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="section-label block mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-editorial"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="section-label block mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-editorial"
                  placeholder="you@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="section-label block mb-2">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="input-editorial"
                placeholder="Project inquiry"
              />
            </div>

            <div>
              <label htmlFor="message" className="section-label block mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="input-editorial resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending' || status === 'success'}
              className="btn-primary disabled:opacity-60"
            >
              {status === 'idle' && (
                <>
                  <Send className="w-4 h-4" />
                  Send message
                </>
              )}
              {status === 'sending' && (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              )}
              {status === 'success' && (
                <>
                  <CheckCircle className="w-4 h-4" />
                  Message sent
                </>
              )}
              {status === 'error' && (
                <>
                  <AlertCircle className="w-4 h-4" />
                  Try again
                </>
              )}
            </button>
          </form>

          <div className="reveal lg:col-span-5 flex flex-col gap-8">
            <div>
              <p className="section-label mb-4">Elsewhere</p>
              <div className="space-y-3">
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-ink-dim hover:text-accent-ink transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span className="link-underline">GitHub</span>
                </a>
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-ink-dim hover:text-accent-ink transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="link-underline">LinkedIn</span>
                </a>
              </div>
            </div>

            <div className="card-soft p-6">
              <p className="font-display text-lg font-medium text-ink mb-2">
                Open to new opportunities.
              </p>
              <p className="text-sm text-ink-faint leading-relaxed">
                Tell me what you&apos;re building. I&apos;ll bring the architecture, the code, and
                the follow-through.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
