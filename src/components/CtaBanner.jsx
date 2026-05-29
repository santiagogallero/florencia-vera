import { useInView } from '../hooks/useInView'
import { WA_LINK } from '../constants'
import WaIcon from './WaIcon'

export default function CtaBanner() {
  const [ref, inView] = useInView()

  return (
    <div
      className="relative overflow-hidden py-28 px-6 md:px-10 text-center"
      style={{
        background: 'linear-gradient(140deg, #03091a 0%, #0a1e60 30%, #2563eb 58%, #091e60 82%, #03091a 100%)',
      }}
    >
      {/* Grid */}
      <div className="absolute inset-0 bg-grid-sm opacity-40 pointer-events-none" />

      {/* Radial highlight centre */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(79,142,247,0.18) 0%, transparent 70%)' }}
      />

      {/* Diagonal sheen lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-40%] right-[18%] w-px h-[200%] rotate-[-18deg]" style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.09) 40%, transparent)' }} />
        <div className="absolute top-[-40%] right-[32%] w-px h-[200%] rotate-[-18deg]" style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.05) 40%, transparent)' }} />
        <div className="absolute top-[-40%] left-[28%] w-px h-[200%] rotate-[-18deg]" style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.04) 40%, transparent)' }} />
      </div>

      {/* Watermark */}
      <span
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center font-bebas select-none pointer-events-none leading-none"
        style={{ fontSize: 'clamp(120px,22vw,320px)', color: 'rgba(255,255,255,0.03)' }}
      >
        AHORA
      </span>

      {/* Content */}
      <div
        ref={ref}
        className="relative z-10 max-w-3xl mx-auto transition-all duration-700"
        style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(28px)' }}
      >
        <h2
          className="font-bebas leading-[0.9] mb-7 text-white"
          style={{ fontSize: 'clamp(50px,8vw,100px)' }}
        >
          NO IMPORTA<br />
          CUÁNTO TIEMPO<br />
          <span className="text-blue-shimmer">PASÓ SIN MOVERTE.</span>
        </h2>

        <div className="mb-10 max-w-xl mx-auto space-y-1">
          <p className="font-condensed font-semibold text-[1.1rem] tracking-[0.1em] uppercase text-white">
            Te acompaño en todo el proceso.
          </p>
          <p className="font-condensed font-semibold text-[1.1rem] tracking-[0.1em] uppercase text-white">
            Seguimiento y coaching ilimitado.
          </p>
          <p className="font-condensed font-semibold text-[1.1rem] tracking-[0.1em] uppercase text-white">
            Online vía ZOOM
          </p>
        </div>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 font-condensed font-bold text-[0.95rem] tracking-[0.13em] uppercase text-blue bg-white px-9 py-4 rounded-md hover:-translate-y-0.5 transition-all duration-200"
          style={{ boxShadow: '0 4px 32px rgba(0,0,0,0.4)' }}
          onMouseEnter={e => e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.5)'}
          onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 32px rgba(0,0,0,0.4)'}
        >
          <WaIcon size={22} className="text-[#25D366]" />
          Reservá
        </a>
      </div>
    </div>
  )
}
