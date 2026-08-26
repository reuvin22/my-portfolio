import { useState } from 'react'
import { profile } from '../data'
import { LocationIcon, MailIcon, SocialIcon } from './icons'
import Reveal from './Reveal'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'your website'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="flex min-h-screen flex-col justify-center px-6 py-24">
      <div className="mx-auto w-full max-w-5xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Contact Me
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Have a project in mind or just want to say hi? My inbox is open.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-5">
          <Reveal className="space-y-6 md:col-span-2">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 rounded-xl border border-slate-200 p-4 transition-colors hover:border-indigo-300 dark:border-slate-800 dark:hover:border-indigo-700"
            >
              <span className="flex size-10 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                <MailIcon className="size-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">Email</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">{profile.email}</p>
              </div>
            </a>

            <div className="flex items-center gap-3 rounded-xl border border-slate-200 p-4 dark:border-slate-800">
              <span className="flex size-10 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                <LocationIcon className="size-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">Location</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">{profile.location}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2">
              {profile.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex size-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-800 dark:text-slate-400 dark:hover:border-indigo-700 dark:hover:text-indigo-400"
                >
                  <SocialIcon name={social.icon} className="size-4.5" />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal as="form" onSubmit={handleSubmit} delay={150} className="space-y-4 md:col-span-3">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                  placeholder="jane@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-200">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                className="mt-1.5 w-full resize-none rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-500"
            >
              Send Message
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
