import { useInView } from '../hooks/useInView'

const STATEMENTS = [
  'Quiero enseñarte un camino seguro y eficiente, que entiendas lo que estás haciendo con tu cuerpo, sin forzar articulaciones ni entrenar desde el dolor.',
  'Vas a poderlo todo, en su debido nivel con asistencia. Respetaré tus tiempos y celebraré con vos cada logro.',
  'Integrarás fuerza + movilidad y control + elongación en tus clases de elongación post-entreno.',
  'No busco que solo llegues a una postura. Busco que puedas sostenerla, controlarla, sentirte seguro y que puedas usarla en movimiento.',
]

export default function Philosophy() {
  const [headerRef, headerIn] = useInView()
  const [listRef, listIn]     = useInView()

  return (
    <section className="relative bg-dark py-24 px-6 md:px-10 overflow-hidden">

      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 65%)' }}
      />

      <div className="relative max-w-3xl mx-auto">

        {/* Header */}
        <div
          ref={headerRef}
          className="mb-12 transition-all duration-700"
          style={{ opacity: headerIn ? 1 : 0, transform: headerIn ? 'none' : 'translateY(24px)' }}
        >
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="block w-6 h-[2px] bg-blue" />
            <span className="font-condensed font-semibold text-[0.7rem] tracking-[0.22em] uppercase text-blue-lt">
              Mi filosofía
            </span>
          </div>
          <h2 className="font-bebas leading-[0.92]" style={{ fontSize: 'clamp(40px,5.5vw,64px)' }}>
            ASÍ ES COMO{' '}
            <span className="text-blue-grad bg-gradient-to-r from-blue to-blue-lt bg-clip-text text-transparent">
              TRABAJO
            </span>
          </h2>
        </div>

        {/* Statements */}
        <div ref={listRef} className="flex flex-col gap-8">
          {STATEMENTS.map((text, i) => (
            <div
              key={i}
              className="flex gap-5 transition-all duration-700"
              style={{
                opacity:         listIn ? 1 : 0,
                transform:       listIn ? 'translateY(0)' : 'translateY(24px)',
                transitionDelay: `${i * 120}ms`,
              }}
            >
              <div className="flex-shrink-0 mt-[0.35em]">
                <div className="w-[3px] min-h-[2.5rem] h-full bg-gradient-to-b from-blue to-blue-lt/20 rounded-full" />
              </div>
              <p className="font-barlow font-light text-white/75 leading-relaxed" style={{ fontSize: 'clamp(1rem,1.6vw,1.1rem)' }}>
                {text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
