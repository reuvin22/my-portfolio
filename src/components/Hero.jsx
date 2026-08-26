import { profile } from '../data'
import { LocationIcon, SocialIcon } from './icons'
import Reveal from './Reveal'
import AnimatedText from './AnimatedText'

export default function Hero() {
  return (
    <section
      id="summary"
      className="flex min-h-screen flex-col justify-center px-6 py-24"
    >
      <Reveal className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
          Hi, I&apos;m {profile.name}
        </p>
        <AnimatedText
          as="h1"
          text={profile.title}
          startDelay={150}
          className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white"
        />
        <p className="mt-2 flex items-center justify-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
          <LocationIcon className="size-4" />
          {profile.location}
        </p>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg dark:text-slate-300">
          {profile.summary}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-500"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-indigo-400 hover:text-indigo-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-indigo-500 dark:hover:text-indigo-400"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="text-slate-500 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
            >
              <SocialIcon name={social.icon} className="size-5" />
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
