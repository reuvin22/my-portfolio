import { useState } from 'react'
import { MoonIcon, SunIcon } from './icons'

function getInitialTheme() {
  const stored = localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applyTheme(next) {
  document.documentElement.classList.toggle('dark', next === 'dark')
  localStorage.setItem('theme', next)
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme)

  function handleToggle(e) {
    const next = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.style.setProperty('--theme-x', `${e.clientX}px`)
    document.documentElement.style.setProperty('--theme-y', `${e.clientY}px`)

    const update = () => {
      applyTheme(next)
      setTheme(next)
    }

    if (document.startViewTransition) {
      document.startViewTransition(update)
    } else {
      update()
    }
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to night mode'}
      className="inline-flex size-9 items-center justify-center overflow-hidden rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-indigo-600 dark:hover:text-indigo-400"
    >
      {theme === 'dark' ? (
        <SunIcon key="sun" className="size-4.5 animate-[icon-pop_0.35s_ease-out]" />
      ) : (
        <MoonIcon key="moon" className="size-4.5 animate-[icon-pop_0.35s_ease-out]" />
      )}
    </button>
  )
}
