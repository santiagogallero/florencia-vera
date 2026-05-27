import { useState, useEffect } from 'react'
import { WA_LINK } from '../constants'

const LINKS = [
  { label: 'Servicios',  href: '#servicios' },
  { label: 'Beneficios', href: '#beneficios' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 44)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const close = () => {
    setOpen(false)
    document.body.style.overflow = ''
  }
  const toggle = () => {
    const next = !open
    setOpen(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 h-[68px] flex items-center justify-between px-6 md:px-10 transition-all duration-300
          ${scrolled ? 'bg-ink/90 backdrop-blur-2xl border-b border-white/[0.05]' : ''}`}
      >
        {/* Logo */}
        <a href="#inicio" className="font-bebas text-[1.6rem] tracking-[0.1em] leading-none select-none">
          Florencia
          <span className="text-blue-grad bg-gradient-to-r from-blue to-blue-lt bg-clip-text text-transparent">
            .
          </span>
          Vera
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="font-condensed font-semibold text-[0.75rem] tracking-[0.18em] uppercase text-white/50 hover:text-white transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="font-condensed font-bold text-[0.75rem] tracking-[0.15em] uppercase text-white bg-blue px-5 py-2.5 rounded-md hover:bg-blue-lt hover:-translate-y-px transition-all duration-200 shadow-[0_4px_16px_rgba(26,86,219,0.4)]"
            >
              Reservar
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          onClick={toggle}
          className="md:hidden z-[70] flex flex-col justify-center gap-[5px] p-2 -mr-1"
          aria-label="Menú"
        >
          <span className={`block w-[22px] h-[2px] bg-white rounded-full transition-all duration-300 origin-center ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block w-[22px] h-[2px] bg-white rounded-full transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-[22px] h-[2px] bg-white rounded-full transition-all duration-300 origin-center ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </nav>

      {/* Mobile fullscreen menu */}
      <div
        className={`fixed inset-0 z-[60] flex flex-col items-center justify-center gap-10 bg-ink/97 backdrop-blur-2xl transition-all duration-300 md:hidden
          ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            onClick={close}
            className="font-bebas text-[2.5rem] tracking-[0.08em] hover:text-blue transition-colors duration-200"
          >
            {label}
          </a>
        ))}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={close}
          className="mt-4 font-condensed font-bold text-sm tracking-[0.18em] uppercase text-white bg-blue px-10 py-4 rounded-md hover:bg-blue-lt transition-colors shadow-[0_4px_24px_rgba(26,86,219,0.45)]"
        >
          Reservar Clase
        </a>
      </div>
    </>
  )
}
