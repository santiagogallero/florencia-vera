import { useInView } from '../hooks/useInView'
import { WA_LINK } from '../constants'

const ICONS = {
  recovery: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12a8 8 0 018-8"/>
      <path d="M20 12a8 8 0 01-8 8"/>
      <path d="M4 8v4H8M20 16v-4h-4"/>
    </svg>
  ),
  strength: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5.5" y="8" width="2" height="8" rx="0.8"/>
      <rect x="16.5" y="8" width="2" height="8" rx="0.8"/>
      <rect x="2" y="10" width="3.5" height="4" rx="0.8"/>
      <rect x="18.5" y="10" width="3.5" height="4" rx="0.8"/>
      <line x1="7.5" y1="12" x2="16.5" y2="12"/>
    </svg>
  ),
}

const SERVICES = [
  {
    num: '01',
    icon: ICONS.recovery,
    title: 'ELONGACIÓN POST-ENTRENO',
    desc: 'Recuperá tu range of motion con técnica Facilitación Neuromuscular Propioceptiva para prevenir lesiones después de tu entrenamiento. Ganá postura y enseñale a tu cuerpo lugares seguros para ampliar tu movilidad.',
  },
  {
    num: '02',
    icon: ICONS.strength,
    title: 'FUERZA Y RESISTENCIA',
    desc: 'Escultí tu cuerpo atlético, mejorá tu velocidad de respuesta y rendí al máximo.',
    note: 'Modalidad: presencial Parque de Golf Villa Adelina / ONLINE vía ZOOM',
  },
]

function ServiceCard({ service, delay }) {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      className="transition-all duration-700"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(32px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="border-grad group transition-all duration-300 hover:shadow-card-hover h-full">
        <div className="relative bg-card rounded-[9px] p-8 h-full overflow-hidden flex flex-col">

          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue via-blue-lt to-blue opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

          <span aria-hidden="true" className="absolute bottom-3 right-4 font-bebas leading-none select-none pointer-events-none text-[6rem] text-blue/[0.06] group-hover:text-blue/[0.1] transition-colors duration-300">
            {service.num}
          </span>

          <span className="inline-block font-condensed font-semibold text-[0.65rem] tracking-[0.2em] uppercase text-blue mb-4 bg-blue/10 px-2.5 py-1 rounded-full border border-blue/20 self-start">
            {service.num}
          </span>

          <div className="text-blue-lt mb-4">{service.icon}</div>

          <h3 className="font-bebas text-[1.75rem] leading-[1.05] text-white mb-3 group-hover:text-blue-lt transition-colors duration-300">
            {service.title}
          </h3>

          <p className="font-barlow font-light text-[0.87rem] text-white/65 leading-[1.75] flex-1">
            {service.desc}
          </p>

          {service.note && (
            <p className="font-condensed text-[0.7rem] tracking-[0.08em] text-blue/55 mt-3 pt-3 border-t border-blue/10">
              {service.note}
            </p>
          )}

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-5 font-condensed font-semibold text-[0.75rem] tracking-[0.12em] uppercase text-blue/60 hover:text-blue-lt transition-colors duration-200 self-start"
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
            <h2 className="font-bebas leading-[0.92]" style={{ fontSize: 'clamp(44px,6.5vw,76px)' }}>
              MIS <span className="text-blue-grad bg-gradient-to-r from-blue to-blue-lt bg-clip-text text-transparent">SERVICIOS</span>
            </h2>
          </div>
          <p className="font-barlow font-light text-[0.95rem] text-white/65 max-w-sm leading-relaxed md:text-right">
            Cada entrenamiento se adapta a donde estás hoy. Empezá a ganar ventaja. La movilidad también es parte del rendimiento.
          </p>
        </div>

        {/* Grid — 2 servicios */}
        <div className="grid sm:grid-cols-2 gap-5 max-w-3xl">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.num} service={s} delay={i * 100} />
          ))}
        </div>

      </div>
    </section>
  )
}
