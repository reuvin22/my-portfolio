/** Animates text in letter by letter. Screen readers get the plain text via aria-label. */
export default function AnimatedText({
  text,
  as: Tag = 'span',
  className = '',
  letterDelay = 35,
  startDelay = 0,
}) {
  return (
    <Tag className={className} aria-label={text}>
      {[...text].map((char, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="inline-block opacity-0"
          style={{
            animation: 'letter-in 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
            animationDelay: `${startDelay + i * letterDelay}ms`,
          }}
        >
          {char === ' ' ? ' ' : char}
        </span>
      ))}
    </Tag>
  )
}
