const statusStyles = {
  Live: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300',
  'In Development': 'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300',
  'In Revision': 'bg-sky-100 text-sky-700 dark:bg-sky-500/10 dark:text-sky-300',
  'Not Live': 'bg-slate-200 text-slate-600 dark:bg-slate-700/60 dark:text-slate-300',
}

export default function StatusBadge({ status, className = '' }) {
  const style = statusStyles[status] ?? statusStyles['Not Live']

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold backdrop-blur-sm ${style} ${className}`}
    >
      <span className="size-1.5 rounded-full bg-current" />
      {status}
    </span>
  )
}
