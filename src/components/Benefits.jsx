import { useInView } from '../hooks/useInView'

const ICONS = {
  joint: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="9" r="3.5"/>
      <path d="M12 12.5v3.5M9 21l3-5 3 5M5 9H2M22 9h-3"/>
    </svg>
  ),
  spine: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M12 2v20"/>
      <path d="M9 5.5h6M8 9.5h8M9 13.5h6M8 17.5h8"/>
    </svg>
  ),
  energy: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L5 13h7l-1 9 8-11h-7l1-9z"/>
    </svg>
  ),
  posture: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="12" cy="4" r="2"/>
      <path d="M12 6v8M5 10l7 4 7-4M9 22v-4M15 22v-4"/>
    </svg>
  ),
}

const BENEFITS = [
  {
    icon: ICONS.joint,
    title: 'Eliminá el dolor de cadera y rodillas',
    desc: 'Entrenamiento sin impacto articular pensado para prevenir el desgaste. Construimos musculatura específica para prevenir sobrecargas.',
  },
  {
    icon: ICONS.spine,
    title: 'Aliviá tu espalda cargada',
    desc: 'Imponé presencia con ejercicios posturales y ganá una ejecución más limpia contra tu rival.',
  },
  {
    icon: ICONS.energy,
    title: 'Resolvé tu rigidez, pesadez y fatiga muscular',
    desc: 'Recuperá tu energía y volvete ágil en la cancha trabajando la atención plena. Rejuvenece tu cuerpo y mente. Más elongación, menos estrés.',
  },
  {
    icon: ICONS.posture,
    title: 'Ganá postura, potencia, movilidad y estabilidad',
    desc: 'Tené el control de tu cuerpo. Ganá seguridad en lo que hacés. Moviéndote con confianza.',
  },
]

function BenefitCard({ item, delay, inView }) {
  return (
    <div
      className="transition-all duration-700"
      style={{
        opacity:         inView ? 1 : 0,
        transform:       inView ? 'translateY(0)' : 'translateY(32px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="border-grad group transition-all duration-300 hover:shadow-card-hover h-full">
        <div className="relative bg-card rounded-[9px] p-7 h-full overflow-hidden">

          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue via-blue-lt to-blue opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-blue-lt border border-blue/20 bg-blue/[0.08] group-hover:bg-blue/[0.14] group-hover:border-blue/35 group-hover:shadow-[0_0_20px_rgba(26,86,219,0.15)] transition-all duration-300 mb-5">
            {item.icon}
          </div>

          <h3 className="font-bebas text-[1.5rem] leading-[1.1] text-white mb-3 group-hover:text-blue-lt transition-colors duration-300">
            {item.title}
          </h3>

          <p className="font-barlow font-light text-[0.88rem] text-white/65 leading-[1.75]">
            {item.desc}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Benefits() {
  const [headerRef, headerIn] = useInView()
  const [gridRef, gridIn]     = useInView()

  return (
    <section id="beneficios" className="relative bg-ink py-24 px-6 md:px-10 overflow-hidden">

      <div
        className="absolute left-[-10%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(26,86,219,0.07) 0%, transparent 65%)' }}
      />

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div
          ref={headerRef}
          className="mb-14 transition-all duration-700"
          style={{ opacity: headerIn ? 1 : 0, transform: headerIn ? 'none' : 'translateY(24px)' }}
        >
          <a href="#beneficios" className="inline-flex items-center gap-3 mb-3 group">
            <span className="block w-6 h-[2px] bg-blue" />
            <span className="font-condensed font-semibold text-[0.7rem] tracking-[0.22em] uppercase text-blue-lt group-hover:text-blue-xl transition-colors duration-200">
              Por qué entrenar conmigo →
            </span>
          </a>
          <h2 className="font-bebas leading-[0.92]" style={{ fontSize: 'clamp(44px,6vw,72px)' }}>
            MI{' '}
            <span className="text-blue-grad bg-gradient-to-r from-blue to-blue-lt bg-clip-text text-transparent">
              ENFOQUE
            </span>
          </h2>
        </div>

        {/* Grid — 4 beneficios */}
        <div
          ref={gridRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {BENEFITS.map((b, i) => (
            <BenefitCard key={b.title} item={b} delay={i * 90} inView={gridIn} />
          ))}
        </div>

      </div>
    </section>
  )
}
