import { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from './icons'

function getInitialTheme() {
  const stored = localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <button
      type="button"
      onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to night mode'}
      className="inline-flex size-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-indigo-600 dark:hover:text-indigo-400"
    >
      {theme === 'dark' ? <SunIcon className="size-4.5" /> : <MoonIcon className="size-4.5" />}
    </button>
  )
}
