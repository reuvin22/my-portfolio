import { useState } from 'react'
import { experience } from '../data'
import { BriefcaseIcon } from './icons'
import Reveal from './Reveal'

const PREVIEW_COUNT = 3

function CompanyLogo({ item }) {
  if (!item.logo) {
    return (
      <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white">
        <BriefcaseIcon className="size-6" />
      </span>
    )
  }

  return (
    <img
      src={item.logo}
      alt={`${item.company} logo`}
      loading="lazy"
      className="size-12 shrink-0 rounded-xl object-cover ring-1 ring-slate-200 dark:ring-slate-800"
    />
  )
}

function ExperienceItem({ item, delay }) {
  const [expanded, setExpanded] = useState(false)
  const highlights = item.highlights ?? []
  const visible = expanded ? highlights : highlights.slice(0, PREVIEW_COUNT)
  const hidden = highlights.length - PREVIEW_COUNT

  return (
    <Reveal
      as="li"
      delay={delay}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/40"
    >
      <div className="flex items-start gap-4">
        <CompanyLogo item={item} />
        <div className="min-w-0">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.role}</h3>
          <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
            {item.company} · {item.type}
          </p>
          <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
            {item.period} · {item.duration}
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">{item.location}</p>
        </div>
      </div>

      {highlights.length > 0 && (
        <>
          <ul className="mt-5 space-y-2.5">
            {visible.map((point) => (
              <li
                key={point}
                className="relative pl-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
              >
                <span className="absolute left-0 top-2 size-1.5 rounded-full bg-indigo-500" />
                {point}
              </li>
            ))}
          </ul>

          {hidden > 0 && (
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="mt-4 text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              {expanded ? 'Show less' : `Show ${hidden} more`}
            </button>
          )}
        </>
      )}

      {item.skills?.length > 0 && (
        <ul className="mt-5 flex flex-wrap gap-2">
          {item.skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              {skill}
            </li>
          ))}
        </ul>
      )}
    </Reveal>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto w-full max-w-5xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Work Experience
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Where I've been building and the teams I've built with.
          </p>
        </Reveal>

        <ol className="mx-auto mt-14 max-w-3xl space-y-6">
          {experience.map((item, i) => (
            <ExperienceItem key={`${item.company}-${item.period}`} item={item} delay={i * 100} />
          ))}
        </ol>
      </div>
    </section>
  )
}
