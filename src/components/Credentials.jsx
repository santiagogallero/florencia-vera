import { useInView } from '../hooks/useInView'

const CERTS = [
  { abbr: 'ECYT', full: 'Entre el Cielo y la Tierra' },
  { abbr: 'AHA',  full: 'Asociación Hispanoamericana de Acróbatas' },
]

export default function Credentials() {
  const [headerRef, headerIn] = useInView()
  const [certsRef, certsIn]   = useInView()

  return (
    <section className="relative bg-ink py-24 px-6 md:px-10 overflow-hidden">

      {/* Glow right */}
      <div
        className="absolute right-[-8%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(26,86,219,0.08) 0%, transparent 65%)' }}
      />

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div
          ref={headerRef}
          className="max-w-3xl mb-14 transition-all duration-700"
          style={{ opacity: headerIn ? 1 : 0, transform: headerIn ? 'none' : 'translateY(24px)' }}
        >
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="block w-6 h-[2px] bg-blue" />
            <span className="font-condensed font-semibold text-[0.7rem] tracking-[0.22em] uppercase text-blue-lt">
              Formación y credenciales
            </span>
          </div>

          <h2 className="font-bebas leading-[0.92] mb-6" style={{ fontSize: 'clamp(36px,5.5vw,68px)' }}>
            INSTRUCTORA DE GIMNASIA{' '}
            <span className="text-blue-grad bg-gradient-to-r from-blue to-blue-lt bg-clip-text text-transparent">
              ACROBÁTICA Y DEPORTIVA
            </span>
          </h2>

          <p className="font-barlow font-light text-[1rem] text-white/65 leading-relaxed">
            Recibida en 2022. Certificada con el aval de{' '}
            <strong className="text-white/80 font-normal">Entre el Cielo y la Tierra</strong>, avalada y certificada por la{' '}
            <strong className="text-white/80 font-normal">AHA</strong> (Asociación Hispanoamericana de Acróbatas),{' '}
            <strong className="text-white/80 font-normal">Cenpro</strong> (Centro de Formación Profesional) y{' '}
            <strong className="text-white/80 font-normal">FAAA</strong> (Federación Argentina de Acrobacia Aérea).
          </p>
        </div>

        {/* Certification badges */}
        <div ref={certsRef} className="grid sm:grid-cols-2 gap-4 max-w-md">
          {CERTS.map(({ abbr, full }, i) => (
            <div
              key={abbr}
              className="transition-all duration-700"
              style={{
                opacity: certsIn ? 1 : 0,
                transform: certsIn ? 'translateY(0)' : 'translateY(24px)',
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <div className="border-grad h-full">
                <div className="bg-card rounded-[9px] px-6 py-8 h-full flex flex-col items-center justify-center text-center gap-3">
                  <div className="font-bebas text-[2rem] leading-none text-blue-lt tracking-wider">{abbr}</div>
                  <div className="font-barlow font-light text-[0.78rem] text-white/40 leading-snug">{full}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
