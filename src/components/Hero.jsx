import { WA_LINK } from '../constants'
import WaIcon from './WaIcon'
import FitnessHeroSVG from './FitnessHeroSVG'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-ink"
    >
      {/* Grid */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      {/* === GLOWS === */}
      {/* Main orb — top right, strong */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-20%', right: '-12%',
          width: '820px', height: '820px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.5) 0%, rgba(37,99,235,0.18) 40%, transparent 70%)',
        }}
      />
      {/* Secondary orb — bottom left */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-30%', left: '-8%',
          width: '640px', height: '640px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.28) 0%, transparent 65%)',
        }}
      />
      {/* Spotlight behind headline text */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '50%', left: '-4%',
          transform: 'translateY(-50%)',
          width: '560px', height: '560px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(37,99,235,0.1) 0%, transparent 68%)',
        }}
      />

      {/* Diagonal decorative lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-35%] left-[55%] w-px h-[180%] rotate-[-22deg]" style={{ background: 'linear-gradient(to bottom, transparent, rgba(79,142,247,0.12) 40%, rgba(79,142,247,0.06) 70%, transparent)' }} />
        <div className="absolute top-[-35%] left-[65%] w-px h-[180%] rotate-[-22deg]" style={{ background: 'linear-gradient(to bottom, transparent, rgba(79,142,247,0.07) 40%, transparent)' }} />
        <div className="absolute top-[-35%] right-[18%]  w-px h-[180%] rotate-[-22deg]" style={{ background: 'linear-gradient(to bottom, transparent, rgba(79,142,247,0.05) 40%, transparent)' }} />
      </div>

      {/* Watermark */}
      <span
        aria-hidden="true"
        className="absolute bottom-0 right-0 font-bebas leading-none select-none pointer-events-none"
        style={{
          fontSize: 'clamp(130px,21vw,300px)',
          color: 'rgba(37,99,235,0.07)',
          transform: 'translate(0.04em, 0.05em)',
        }}
      >
        FV
      </span>

      {/* === CONTENT === */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pt-28 pb-16 grid lg:grid-cols-[1fr_420px] gap-16 items-center">

        {/* LEFT */}
        <div>
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-5 animate-fade-up" style={{ animationDelay: '0.06s' }}>
            <span className="block w-8 h-[2px] bg-blue flex-shrink-0" />
            <span className="font-condensed font-semibold text-[0.7rem] tracking-[0.24em] uppercase text-blue-lt">
              Instructora Certificada de Fitness
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-bebas leading-[0.88] mb-6 animate-fade-up"
            style={{ fontSize: 'clamp(60px,10.5vw,132px)', animationDelay: '0.16s' }}
          >
            DEJÁ DE<br />
            ESPERARLO.<br />
            <span className="text-blue-shimmer">EMPEZÁ HOY.</span>
          </h1>

          {/* Subtitle */}
          <p
            className="font-barlow font-light text-white/70 leading-relaxed max-w-[460px] mb-8 animate-fade-up"
            style={{ fontSize: 'clamp(1rem,1.8vw,1.1rem)', animationDelay: '0.26s' }}
          >
            No necesitás experiencia previa. Solo la decisión de arrancar.
            Programas 100% personalizados para personas que quieren cambiar de
            verdad — sin importar de dónde parten.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3.5 mb-14 animate-fade-up" style={{ animationDelay: '0.36s' }}>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 font-condensed font-bold text-[0.88rem] tracking-[0.13em] uppercase text-white bg-blue px-7 py-3.5 rounded-md transition-all duration-200 hover:-translate-y-0.5"
              style={{ boxShadow: '0 4px 28px rgba(37,99,235,0.6)' }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 40px rgba(79,142,247,0.7)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 28px rgba(37,99,235,0.6)'}
            >
              <WaIcon size={18} />
              Reservá tu clase gratis
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2.5 font-condensed font-bold text-[0.88rem] tracking-[0.13em] uppercase text-white/80 border border-white/20 px-7 py-3.5 rounded-md hover:border-blue hover:bg-blue/15 hover:text-white transition-all duration-200"
            >
              Ver servicios ↓
            </a>
          </div>

          {/* Stats */}
          <div
            className="flex flex-wrap gap-10 pt-7 border-t border-white/[0.08] animate-fade-up"
            style={{ animationDelay: '0.46s' }}
          >
            {[
              { value: '+5K',  label: 'Alumnos entrenados' },
              { value: '8',    label: 'Años de experiencia' },
              { value: '100%', label: 'Personalizado' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="font-bebas text-[2.6rem] leading-none text-blue-shimmer">
                  {value}
                </div>
                <div className="font-condensed text-[0.62rem] tracking-[0.16em] uppercase text-white/40 mt-1">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Aerial silk exercise illustration */}
        <div
          className="hidden lg:flex items-center justify-center animate-fade-up"
          style={{ animationDelay: '0.28s' }}
        >
          <FitnessHeroSVG />
        </div>
      </div>
    </section>
  )
}
