import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 dark:border-slate-800">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 text-sm text-slate-500 sm:flex-row dark:text-slate-400">
        <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <a href="#summary" className="font-medium hover:text-indigo-600 dark:hover:text-indigo-400">
          Back to top
        </a>
      </div>
    </footer>
  )
}
