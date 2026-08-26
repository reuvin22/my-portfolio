import useInView from '../hooks/useInView'

/** Fades/slides children in once the element crosses the viewport threshold. */
export default function Reveal({ children, as: Tag = 'div', delay = 0, className = '', ...rest }) {
  const [ref, inView] = useInView()

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      } ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
