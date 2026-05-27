import { useInView } from '../hooks/useInView'
import { WA_LINK } from '../constants'

const SERVICES = [
  {
    num: '01',
    icon: '🔁',
    title: 'Movilidad Articular',
    desc: 'Recuperá el rango de movimiento y eliminá tensiones acumuladas con rutinas específicas para tus articulaciones y tejido conectivo.',
  },
  {
    num: '02',
    icon: '⚡',
    title: 'Entrenamiento de Fuerza',
    desc: 'Construí músculo real y ganás densidad ósea con programas progresivos adaptados a tu nivel y tus objetivos concretos.',
  },
  {
    num: '03',
    icon: '🌀',
    title: 'Recuperación Activa',
    desc: 'Acelerá la recuperación post-entrenamiento con stretching dinámico, foam rolling y trabajo de movilidad consciente.',
  },
  {
    num: '04',
    icon: '🌬️',
    title: 'Técnica Respiratoria',
    desc: 'Dominá tu respiración para mejorar el rendimiento deportivo, reducir el estrés y potenciar tu energía durante todo el día.',
  },
]

function ServiceCard({ service, delay }) {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      className="transition-all duration-700"
      style={{
        opacity:    inView ? 1 : 0,
        transform:  inView ? 'translateY(0)' : 'translateY(32px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* Gradient border wrapper */}
      <div className="border-grad group transition-all duration-300 hover:shadow-card-hover">
        <div className="relative bg-card rounded-[9px] p-8 h-full overflow-hidden">

          {/* Top gradient stripe */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue via-blue-lt to-blue opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Number watermark */}
          <span
            aria-hidden="true"
            className="absolute bottom-3 right-4 font-bebas leading-none select-none pointer-events-none text-[6rem] text-blue/[0.06] group-hover:text-blue/[0.1] transition-colors duration-300"
          >
            {service.num}
          </span>

          {/* Tag num */}
          <span className="inline-block font-condensed font-semibold text-[0.65rem] tracking-[0.2em] uppercase text-blue mb-4 bg-blue/10 px-2.5 py-1 rounded-full border border-blue/20">
            {service.num}
          </span>

          {/* Icon */}
          <div className="text-[2.4rem] mb-4 leading-none">{service.icon}</div>

          {/* Title */}
          <h3 className="font-bebas text-[1.75rem] leading-none text-white mb-3 group-hover:text-blue-lt transition-colors duration-300">
            {service.title}
          </h3>

          {/* Desc */}
          <p className="font-barlow font-light text-[0.88rem] text-white/65 leading-[1.75]">
            {service.desc}
          </p>

          {/* CTA link */}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-6 font-condensed font-semibold text-[0.75rem] tracking-[0.12em] uppercase text-blue/60 hover:text-blue-lt transition-colors duration-200"
          >
            Consultar →
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  const [ref, inView] = useInView()

  return (
    <section id="servicios" className="relative bg-dark py-24 px-6 md:px-10">

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid-sm opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div
          ref={ref}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(24px)' }}
        >
          <div>
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="block w-6 h-[2px] bg-blue" />
              <span className="font-condensed font-semibold text-[0.7rem] tracking-[0.22em] uppercase text-blue-lt">
                Lo que ofrezco
              </span>
            </div>
            <h2
              className="font-bebas leading-[0.92]"
              style={{ fontSize: 'clamp(44px,6.5vw,76px)' }}
            >
              MIS <span className="text-blue-grad bg-gradient-to-r from-blue to-blue-lt bg-clip-text text-transparent">SERVICIOS</span>
            </h2>
          </div>
          <p className="font-barlow font-light text-[0.95rem] text-white/65 max-w-sm leading-relaxed md:text-right">
            Empezás sin saber nada. Terminás sin poder parar.
            Cada programa se adapta a donde estás hoy.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.num} service={s} delay={i * 90} />
          ))}
        </div>
      </div>
    </section>
  )
}
