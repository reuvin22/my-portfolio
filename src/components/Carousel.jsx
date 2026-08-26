import { useEffect, useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from './icons'

export default function Carousel({ media }) {
  const [index, setIndex] = useState(0)
  const hasMultiple = media.length > 1

  function go(delta) {
    setIndex((i) => (i + delta + media.length) % media.length)
  }

  useEffect(() => {
    if (!hasMultiple) return

    function handleKeyDown(e) {
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + media.length) % media.length)
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % media.length)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [hasMultiple, media.length])

  const item = media[index]

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
      {item.type === 'video' ? (
        <video key={item.src} src={item.src} controls className="size-full object-cover" />
      ) : (
        <img
          key={item.src}
          src={item.src}
          alt={item.alt || `Slide ${index + 1}`}
          className="size-full object-cover"
        />
      )}

      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-md transition-colors hover:bg-white dark:bg-slate-900/90 dark:text-slate-200 dark:hover:bg-slate-900"
          >
            <ChevronLeftIcon className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-md transition-colors hover:bg-white dark:bg-slate-900/90 dark:text-slate-200 dark:hover:bg-slate-900"
          >
            <ChevronRightIcon className="size-5" />
          </button>

          <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-1.5">
            {media.map((m, i) => (
              <button
                key={m.src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? 'w-5 bg-white' : 'w-1.5 bg-white/60 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
