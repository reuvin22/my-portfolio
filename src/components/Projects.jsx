import { useState } from 'react'
import { projects } from '../data'
import { ExternalLinkIcon, GitHubIcon, KeyIcon } from './icons'
import Reveal from './Reveal'
import ProjectModal from './ProjectModal'
import CredentialsModal from './CredentialsModal'
import StatusBadge from './StatusBadge'

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null)
  const [credentialsProject, setCredentialsProject] = useState(null)

  return (
    <section
      id="projects"
      className="flex min-h-screen flex-col justify-center bg-slate-50 px-6 py-24 dark:bg-slate-900/40"
    >
      <div className="mx-auto w-full max-w-5xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Projects
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            A selection of things I&apos;ve designed, built, and shipped.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal
              as="article"
              key={project.title}
              delay={i * 100}
              role="button"
              tabIndex={0}
              onClick={() => setActiveProject(project)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setActiveProject(project)
                }
              }}
              className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.03] hover:border-indigo-300 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-indigo-500 focus-visible:outline-offset-2 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-600"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={project.media.find((m) => m.type === 'image')?.src ?? project.media[0].src}
                  alt={`${project.title} preview`}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <StatusBadge status={project.status} className="absolute left-3 top-3" />
                {project.credentials && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      setCredentialsProject(project)
                    }}
                    aria-label={`View sample credentials for ${project.title}`}
                    title="Sample credentials"
                    className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-md transition-colors hover:bg-white hover:text-indigo-600 dark:bg-slate-900/90 dark:text-slate-200 dark:hover:bg-slate-900 dark:hover:text-indigo-400"
                  >
                    <KeyIcon className="size-4" />
                  </button>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex items-center gap-5 border-t border-slate-100 pt-4 dark:border-slate-800">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
                  >
                    Live demo
                    <ExternalLinkIcon className="size-3.5" />
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                  >
                    <GitHubIcon className="size-3.5" />
                    Source
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
          credentialsOpen={!!credentialsProject}
          onShowCredentials={() => setCredentialsProject(activeProject)}
        />
      )}

      {credentialsProject && (
        <CredentialsModal
          credentials={credentialsProject.credentials}
          onClose={() => setCredentialsProject(null)}
        />
      )}
    </section>
  )
}
