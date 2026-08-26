import { useEffect, useRef, useState } from 'react'
import { CheckIcon, CloseIcon, CopyIcon } from './icons'

function CopyField({ label, value }) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // Clipboard API unavailable (e.g. insecure context) — value is still readable in the field.
    }
  }

  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
        {label}
      </p>
      <div className="mt-1.5 flex items-center gap-2">
        <code className="flex-1 truncate rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-800 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100">
          {value}
        </code>
        <button
          type="button"
          onClick={handleCopy}
          aria-label={`Copy ${label}`}
          className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-700 dark:text-slate-400 dark:hover:border-indigo-600 dark:hover:text-indigo-400"
        >
          {copied ? (
            <CheckIcon className="size-4 text-emerald-500" />
          ) : (
            <CopyIcon className="size-4" />
          )}
        </button>
      </div>
    </div>
  )
}

export default function CredentialsModal({ credentials, onClose }) {
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
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-110 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-[fade-in_0.2s_ease-out]"
      onClick={(e) => {
        e.stopPropagation()
        onClose()
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="credentials-modal-title"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl animate-[modal-in_0.25s_ease-out] dark:bg-slate-900"
      >
        <div className="flex items-start justify-between gap-4">
          <h4
            id="credentials-modal-title"
            className="text-lg font-bold text-slate-900 dark:text-white"
          >
            Sample Credentials
          </h4>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close credentials"
            className="flex size-8 shrink-0 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200"
          >
            <CloseIcon className="size-4" />
          </button>
        </div>

        {credentials.note && (
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{credentials.note}</p>
        )}

        <div className="mt-5 space-y-4">
          {credentials.fields.map((field) => (
            <CopyField key={field.label} label={field.label} value={field.value} />
          ))}
        </div>
      </div>
    </div>
  )
}
