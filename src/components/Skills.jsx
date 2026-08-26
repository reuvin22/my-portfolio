import { skills } from '../data'
import Reveal from './Reveal'
import SkillIcon from './SkillIcon'

export default function Skills() {
  return (
    <section id="skills" className="flex min-h-screen flex-col justify-center px-6 py-24">
      <div className="mx-auto w-full max-w-5xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Skills
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Technologies and tools I use to bring ideas to life.
          </p>
        </Reveal>

        <div className="mt-14 space-y-10">
          {skills.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 100}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                {group.category}
              </h3>
              <div className="mt-4 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="group flex cursor-default flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.05] hover:border-indigo-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-600"
                  >
                    <SkillIcon
                      name={item.icon}
                      className="size-9 text-slate-500 transition-all duration-300 group-hover:scale-110 group-hover:text-indigo-600 dark:text-slate-400 dark:group-hover:text-indigo-400"
                    />
                    <span className="text-xs font-medium text-slate-700 dark:text-slate-200">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
