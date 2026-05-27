import { useInView } from '../hooks/useInView'

const BENEFITS = [
  { icon: '🎯', title: 'Clases Personalizadas',  desc: 'Cada sesión adaptada a tu cuerpo, nivel e historial de entrenamiento sin excepciones.' },
  { icon: '📈', title: 'Progresión Medida',       desc: 'Seguimiento semanal con métricas concretas para ver y entender tu avance real.' },
  { icon: '🕐', title: 'Horarios Flexibles',      desc: 'Encontramos el horario que encaje en tu rutina y en tu vida, no al revés.' },
  { icon: '🏆', title: 'Resultados Comprobados',  desc: 'Metodología validada con miles de alumnos de todos los niveles y edades.' },
  { icon: '💬', title: 'Soporte Continuo',        desc: 'Consultas ilimitadas entre sesiones. Nunca vas a entrenar solo/a.' },
  { icon: '🔥', title: 'Ambiente Motivador',      desc: 'Un espacio donde el esfuerzo se celebra y el progreso se disfruta de verdad.' },
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

          {/* Top gradient stripe */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue via-blue-lt to-blue opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Icon */}
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[1.3rem] border border-blue/20 bg-blue/[0.08] group-hover:bg-blue/[0.14] group-hover:border-blue/35 group-hover:shadow-[0_0_20px_rgba(26,86,219,0.15)] transition-all duration-300 mb-5">
            {item.icon}
          </div>

          {/* Title */}
          <h3 className="font-bebas text-[1.6rem] leading-none text-white mb-3 group-hover:text-blue-lt transition-colors duration-300">
            {item.title}
          </h3>

          {/* Desc */}
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

      {/* Faint glow left side */}
      <div
        className="absolute left-[-10%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(26,86,219,0.07) 0%, transparent 65%)' }}
      />

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 transition-all duration-700"
          style={{ opacity: headerIn ? 1 : 0, transform: headerIn ? 'none' : 'translateY(24px)' }}
        >
          <div>
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="block w-6 h-[2px] bg-blue" />
              <span className="font-condensed font-semibold text-[0.7rem] tracking-[0.22em] uppercase text-blue-lt">
                Por qué entrenar conmigo
              </span>
            </div>
            <h2
              className="font-bebas leading-[0.92]"
              style={{ fontSize: 'clamp(44px,6vw,72px)' }}
            >
              BENEFICIOS{' '}
              <span className="text-blue-grad bg-gradient-to-r from-blue to-blue-lt bg-clip-text text-transparent">
                REALES
              </span>
            </h2>
          </div>
          <p className="font-barlow font-light text-[0.95rem] text-white/65 max-w-sm leading-relaxed md:text-right">
            Para los que nunca fueron al gym, para los que lo
            dejaron, para los que quieren empezar de cero.
            Acá todo es posible.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {BENEFITS.map((b, i) => (
            <BenefitCard key={b.title} item={b} delay={i * 80} inView={gridIn} />
          ))}
        </div>

      </div>
    </section>
  )
}
