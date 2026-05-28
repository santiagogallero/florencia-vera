import { WA_LINK } from '../constants'
import WaIcon from './WaIcon'

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-ink">
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      {/* Glows */}
      <div className="absolute pointer-events-none" style={{ top: '-20%', right: '-12%', width: '820px', height: '820px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.5) 0%, rgba(37,99,235,0.18) 40%, transparent 70%)' }} />
      <div className="absolute pointer-events-none" style={{ bottom: '-30%', left: '-8%', width: '640px', height: '640px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.28) 0%, transparent 65%)' }} />
      <div className="absolute pointer-events-none" style={{ top: '50%', left: '-4%', transform: 'translateY(-50%)', width: '560px', height: '560px', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(37,99,235,0.1) 0%, transparent 68%)' }} />

      {/* Diagonal lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-35%] left-[55%] w-px h-[180%] rotate-[-22deg]" style={{ background: 'linear-gradient(to bottom, transparent, rgba(79,142,247,0.12) 40%, rgba(79,142,247,0.06) 70%, transparent)' }} />
        <div className="absolute top-[-35%] left-[65%] w-px h-[180%] rotate-[-22deg]" style={{ background: 'linear-gradient(to bottom, transparent, rgba(79,142,247,0.07) 40%, transparent)' }} />
        <div className="absolute top-[-35%] right-[18%] w-px h-[180%] rotate-[-22deg]" style={{ background: 'linear-gradient(to bottom, transparent, rgba(79,142,247,0.05) 40%, transparent)' }} />
      </div>

      {/* Watermark */}
      <span aria-hidden="true" className="absolute bottom-0 right-0 font-bebas leading-none select-none pointer-events-none" style={{ fontSize: 'clamp(130px,21vw,300px)', color: 'rgba(37,99,235,0.07)', transform: 'translate(0.04em, 0.05em)' }}>FV</span>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pt-28 pb-16 grid lg:grid-cols-[1fr_420px] gap-16 items-center">

        {/* LEFT */}
        <div>
          {/* Eyebrow */}
          <div className="flex items-start gap-3 mb-5 animate-fade-up" style={{ animationDelay: '0.06s' }}>
            <span className="block w-8 h-[2px] bg-blue flex-shrink-0 mt-[0.45em]" />
            <span className="font-condensed font-semibold text-[0.65rem] tracking-[0.18em] uppercase text-blue-lt leading-relaxed">
              Florencia.Vera / Instructora Certificada de Gimnasia Acrobática y Deportiva
            </span>
          </div>

          {/* Pre-headline */}
          <p className="font-condensed font-semibold text-[0.9rem] tracking-[0.2em] uppercase text-white/50 animate-fade-up" style={{ animationDelay: '0.12s' }}>
            ¿Estás rígido? Probá el
          </p>

          {/* NUEVO */}
          <div
            className="font-bebas text-blue-shimmer leading-[0.85] animate-fade-up"
            style={{ fontSize: 'clamp(64px,13vw,156px)', animationDelay: '0.16s' }}
          >
            NUEVO
          </div>

          {/* Main title */}
          <h1
            className="font-bebas leading-[0.9] mb-5 animate-fade-up"
            style={{ fontSize: 'clamp(38px,6vw,78px)', animationDelay: '0.22s' }}
          >
            PROGRAMA DE RECUPERACIÓN<br />MUSCULAR DEPORTIVA
          </h1>

          {/* EMPEZÁ HOY badge */}
          <div className="inline-flex items-center gap-2 mb-4 px-5 py-2 rounded-full bg-blue animate-fade-up" style={{ animationDelay: '0.28s', boxShadow: '0 4px 20px rgba(37,99,235,0.55)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-white/70" style={{ animation: 'blink 1.8s ease-in-out infinite' }} />
            <span className="font-condensed font-bold text-[0.7rem] tracking-[0.22em] uppercase text-white">Empezá Hoy</span>
          </div>

          {/* Subtitle */}
          <p
            className="font-barlow font-light text-white/70 leading-relaxed max-w-[460px] mb-8 animate-fade-up"
            style={{ fontSize: 'clamp(0.95rem,1.6vw,1.05rem)', animationDelay: '0.32s' }}
          >
            Descargá tensión, recuperá movilidad y aliviá tus hombros para rendir mejor en cada partido.
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
              Reservá tu clase
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2.5 font-condensed font-bold text-[0.88rem] tracking-[0.13em] uppercase text-white/80 border border-white/20 px-7 py-3.5 rounded-md hover:border-blue hover:bg-blue/15 hover:text-white transition-all duration-200"
            >
              Ver servicios ↓
            </a>
          </div>

        </div>

        {/* RIGHT: Florencia photo */}
        <div className="hidden lg:flex items-center justify-center animate-fade-up" style={{ animationDelay: '0.28s' }}>
          <div className="relative w-full max-w-[380px]">
            <div className="absolute -inset-6 rounded-3xl pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.2) 0%, transparent 70%)' }} />
            <img
              src="/florencia.jpeg"
              alt="Florencia Vera — Instructora Certificada de Fitness"
              className="relative z-10 w-full rounded-2xl object-cover shadow-[0_24px_80px_rgba(0,0,0,0.7)]"
              style={{ aspectRatio: '3/4' }}
            />
            <div className="absolute inset-0 z-20 rounded-2xl border border-blue/20 pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  )
}
