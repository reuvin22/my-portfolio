import { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  EraserIcon,
  ItalicIcon,
  ListBulletIcon,
  ListNumberedIcon,
  UnderlineIcon,
} from './icons'

const styleCommands = [
  { command: 'bold', icon: BoldIcon, label: 'Bold' },
  { command: 'italic', icon: ItalicIcon, label: 'Italic' },
  { command: 'underline', icon: UnderlineIcon, label: 'Underline' },
]

const listCommands = [
  { command: 'insertUnorderedList', icon: ListBulletIcon, label: 'Bulleted list' },
  { command: 'insertOrderedList', icon: ListNumberedIcon, label: 'Numbered list' },
]

const alignCommands = [
  { command: 'justifyLeft', icon: AlignLeftIcon, label: 'Align left' },
  { command: 'justifyCenter', icon: AlignCenterIcon, label: 'Align center' },
  { command: 'justifyRight', icon: AlignRightIcon, label: 'Align right' },
  { command: 'justifyFull', icon: AlignJustifyIcon, label: 'Justify' },
]

function Divider() {
  return <span className="mx-1 h-5 w-px bg-slate-300 dark:bg-slate-600" />
}

function ToolbarButton({ onClick, icon: Icon, label }) {
  return (
    <button
      type="button"
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
      aria-label={label}
      title={label}
      className="flex size-7 items-center justify-center rounded text-slate-600 transition-colors hover:bg-slate-200 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-indigo-400"
    >
      <Icon className="size-4" />
    </button>
  )
}

const RichTextEditor = forwardRef(function RichTextEditor(
  { id, onChange, placeholder },
  ref,
) {
  const editorRef = useRef(null)
  const [isEmpty, setIsEmpty] = useState(true)

  useImperativeHandle(ref, () => ({
    clear() {
      if (editorRef.current) editorRef.current.innerHTML = ''
      setIsEmpty(true)
      onChange('')
    },
  }))

  function handleInput() {
    const el = editorRef.current
    if (!el) return
    setIsEmpty(el.textContent.trim().length === 0)
    onChange(el.innerHTML)
  }

  function exec(command) {
    editorRef.current?.focus()
    document.execCommand(command)
    handleInput()
  }

  return (
    <div className="mt-1.5 overflow-hidden rounded-lg border border-slate-300 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/30 dark:border-slate-700">
      <div className="flex flex-wrap items-center gap-1 border-b border-slate-200 bg-slate-50 px-2 py-1.5 dark:border-slate-700 dark:bg-slate-800/60">
        {styleCommands.map(({ command, icon, label }) => (
          <ToolbarButton key={command} onClick={() => exec(command)} icon={icon} label={label} />
        ))}

        <Divider />

        {alignCommands.map(({ command, icon, label }) => (
          <ToolbarButton key={command} onClick={() => exec(command)} icon={icon} label={label} />
        ))}

        <Divider />

        {listCommands.map(({ command, icon, label }) => (
          <ToolbarButton key={command} onClick={() => exec(command)} icon={icon} label={label} />
        ))}

        <Divider />

        <ToolbarButton
          onClick={() => exec('removeFormat')}
          icon={EraserIcon}
          label="Clear formatting"
        />
      </div>

      <div className="relative">
        {isEmpty && (
          <p className="pointer-events-none absolute left-3.5 top-2.5 text-[13px] text-slate-400 dark:text-slate-500">
            {placeholder}
          </p>
        )}
        <div
          id={id}
          ref={editorRef}
          contentEditable
          onInput={handleInput}
          role="textbox"
          aria-multiline="true"
          aria-label="Message"
          suppressContentEditableWarning
          className="min-h-32 w-full px-3.5 py-2.5 text-[13px] text-slate-900 outline-none [&_ol]:list-decimal [&_ol]:pl-5 [&_ul]:list-disc [&_ul]:pl-5 dark:text-white"
        />
      </div>
    </div>
  )
})

export default RichTextEditor
