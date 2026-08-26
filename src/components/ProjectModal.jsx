import { useEffect, useRef } from 'react'
import { CloseIcon, ExternalLinkIcon, GitHubIcon, KeyIcon } from './icons'
import Carousel from './Carousel'
import StatusBadge from './StatusBadge'

export default function ProjectModal({ project, onClose, credentialsOpen, onShowCredentials }) {
  const closeRef = useRef(null)

  useEffect(() => {
    closeRef.current?.focus()
  }, [])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [])

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key !== 'Escape') return
      if (!credentialsOpen) onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose, credentialsOpen])

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center overflow-y-auto bg-slate-900/60 p-4 backdrop-blur-sm animate-[fade-in_0.2s_ease-out]"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl animate-[modal-in_0.25s_ease-out] dark:bg-slate-900"
      >
        <div className="relative">
          <Carousel media={project.media} />
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="absolute right-3 top-3 z-10 flex size-9 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-md transition-colors hover:bg-white dark:bg-slate-900/90 dark:text-slate-200 dark:hover:bg-slate-900"
          >
            <CloseIcon className="size-5" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <h3 id="project-modal-title" className="text-2xl font-bold text-slate-900 dark:text-white">
              {project.title}
            </h3>
            <StatusBadge status={project.status} />
          </div>
          <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            {project.description}
          </p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300"
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-500"
            >
              Live demo
              <ExternalLinkIcon className="size-4" />
            </a>
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-indigo-400 hover:text-indigo-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-indigo-500 dark:hover:text-indigo-400"
            >
              <GitHubIcon className="size-4" />
              Source
            </a>
            {project.credentials && (
              <button
                type="button"
                onClick={onShowCredentials}
                className="inline-flex items-center gap-2 rounded-full border border-indigo-200 px-5 py-2.5 text-sm font-semibold text-indigo-700 transition-colors hover:border-indigo-400 hover:bg-indigo-50 dark:border-indigo-800 dark:text-indigo-300 dark:hover:bg-indigo-500/10"
              >
                <KeyIcon className="size-4" />
                Sample Credentials
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
