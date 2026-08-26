import { education } from '../data'
import { CapIcon } from './icons'
import Reveal from './Reveal'

export default function Education() {
  return (
    <section
      id="education"
      className="flex min-h-screen flex-col justify-center bg-slate-50 px-6 py-24 dark:bg-slate-900/40"
    >
      <div className="mx-auto w-full max-w-5xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Education
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            My academic background and certifications.
          </p>
        </Reveal>

        <ol className="mx-auto mt-14 max-w-2xl space-y-8 border-l border-slate-200 pl-8 dark:border-slate-800">
          {education.map((item, i) => (
            <Reveal as="li" key={item.school} delay={i * 100} className="relative">
              <span className="absolute -left-[38.5px] flex size-6 items-center justify-center rounded-full bg-indigo-600 text-white ring-4 ring-slate-50 dark:ring-slate-900/40">
                <CapIcon className="size-3.5" />
              </span>
              <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                {item.period}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
                {item.degree}
              </h3>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                {item.school}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {item.details}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
