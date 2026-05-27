export default function FitnessHeroSVG() {
  return (
    <div className="relative w-[360px] h-[440px] select-none">

      {/* Ambient glow behind figure */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '30%', left: '12%', right: '12%', bottom: '8%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.45) 0%, transparent 68%)',
          filter: 'blur(48px)',
        }}
      />

      <svg
        viewBox="0 0 360 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 w-full h-full"
        aria-hidden="true"
      >
        <defs>
          {/* Left silk strap gradient (anchor → grip) */}
          <linearGradient id="sl" gradientUnits="userSpaceOnUse" x1="38" y1="0" x2="138" y2="274">
            <stop offset="0%"   stopColor="#2563eb" stopOpacity="0.95"/>
            <stop offset="60%"  stopColor="#4f8ef7" stopOpacity="0.6"/>
            <stop offset="100%" stopColor="#7ab4ff" stopOpacity="0.15"/>
          </linearGradient>
          {/* Right silk strap gradient */}
          <linearGradient id="sr" gradientUnits="userSpaceOnUse" x1="322" y1="0" x2="222" y2="274">
            <stop offset="0%"   stopColor="#2563eb" stopOpacity="0.95"/>
            <stop offset="60%"  stopColor="#4f8ef7" stopOpacity="0.6"/>
            <stop offset="100%" stopColor="#7ab4ff" stopOpacity="0.15"/>
          </linearGradient>
          {/* Glow filter for accent dots */}
          <filter id="fg">
            <feGaussianBlur stdDeviation="3.5" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          {/* Subtle body glow */}
          <filter id="fb">
            <feGaussianBlur stdDeviation="2" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* ── ANCHOR POINTS AT TOP ─────────────────── */}
        <rect x="16" y="0" width="44" height="10" rx="5" fill="rgba(37,99,235,0.55)"/>
        <rect x="300" y="0" width="44" height="10" rx="5" fill="rgba(37,99,235,0.55)"/>
        <circle cx="38"  cy="5" r="5" fill="rgba(122,180,255,0.8)" filter="url(#fg)"/>
        <circle cx="322" cy="5" r="5" fill="rgba(122,180,255,0.8)" filter="url(#fg)"/>

        {/* ── LEFT SILK STRAP ───────────────────────── */}
        {/* Main wide stroke */}
        <path
          d="M 38 10 Q 62 100 92 178 Q 114 230 138 272"
          stroke="url(#sl)" strokeWidth="22" strokeLinecap="round"
        />
        {/* Fold highlight (inner edge) */}
        <path
          d="M 38 10 Q 62 100 92 178 Q 114 230 138 272"
          stroke="rgba(200,225,255,0.25)" strokeWidth="8" strokeLinecap="round"
        />

        {/* ── RIGHT SILK STRAP ──────────────────────── */}
        <path
          d="M 322 10 Q 298 100 268 178 Q 246 230 222 272"
          stroke="url(#sr)" strokeWidth="22" strokeLinecap="round"
        />
        <path
          d="M 322 10 Q 298 100 268 178 Q 246 230 222 272"
          stroke="rgba(200,225,255,0.25)" strokeWidth="8" strokeLinecap="round"
        />

        {/* ── PERSON SILHOUETTE ─────────────────────── */}
        {/* Head */}
        <circle cx="180" cy="296" r="22" fill="white" fillOpacity="0.93" filter="url(#fb)"/>

        {/* Body */}
        <line x1="180" y1="318" x2="180" y2="372"
          stroke="white" strokeWidth="11" strokeLinecap="round" strokeOpacity="0.9"/>

        {/* Left arm → left grip */}
        <path d="M 173 332 Q 156 306 140 276"
          stroke="white" strokeWidth="10" strokeLinecap="round" strokeOpacity="0.9" fill="none"/>

        {/* Right arm → right grip */}
        <path d="M 187 332 Q 204 306 220 276"
          stroke="white" strokeWidth="10" strokeLinecap="round" strokeOpacity="0.9" fill="none"/>

        {/* Left leg */}
        <path d="M 176 370 Q 160 398 150 422"
          stroke="white" strokeWidth="10" strokeLinecap="round" strokeOpacity="0.88" fill="none"/>

        {/* Right leg */}
        <path d="M 184 370 Q 200 398 210 422"
          stroke="white" strokeWidth="10" strokeLinecap="round" strokeOpacity="0.88" fill="none"/>

        {/* Feet */}
        <ellipse cx="148" cy="424" rx="12" ry="5" fill="white" fillOpacity="0.75"/>
        <ellipse cx="212" cy="424" rx="12" ry="5" fill="white" fillOpacity="0.75"/>

        {/* ── GRIP POINTS (hands on silk) ───────────── */}
        <circle cx="140" cy="274" r="11" fill="#2563eb" fillOpacity="0.9" filter="url(#fg)"/>
        <circle cx="140" cy="274" r="6"  fill="#7ab4ff"/>
        <circle cx="220" cy="274" r="11" fill="#2563eb" fillOpacity="0.9" filter="url(#fg)"/>
        <circle cx="220" cy="274" r="6"  fill="#7ab4ff"/>

        {/* ── HALO RINGS around figure ──────────────── */}
        <circle cx="180" cy="310" r="62"
          stroke="rgba(37,99,235,0.18)" strokeWidth="1.5" strokeDasharray="6 10"/>
        <circle cx="180" cy="310" r="46"
          stroke="rgba(79,142,247,0.12)" strokeWidth="1"/>

        {/* ── DASHED GUIDE LINES (horizontal) ─────── */}
        <line x1="0"   y1="274" x2="122" y2="274"
          stroke="rgba(79,142,247,0.13)" strokeWidth="1" strokeDasharray="5 10"/>
        <line x1="238" y1="274" x2="360" y2="274"
          stroke="rgba(79,142,247,0.13)" strokeWidth="1" strokeDasharray="5 10"/>

        {/* ── DECORATIVE PARTICLES ─────────────────── */}
        <circle cx="50"  cy="170" r="3"   fill="rgba(79,142,247,0.55)"/>
        <circle cx="310" cy="170" r="3"   fill="rgba(79,142,247,0.55)"/>
        <circle cx="30"  cy="310" r="2.5" fill="rgba(79,142,247,0.4)"/>
        <circle cx="330" cy="310" r="2.5" fill="rgba(79,142,247,0.4)"/>
        <circle cx="70"  cy="390" r="2"   fill="rgba(79,142,247,0.28)"/>
        <circle cx="290" cy="390" r="2"   fill="rgba(79,142,247,0.28)"/>
        <circle cx="20"  cy="220" r="1.5" fill="rgba(122,180,255,0.35)"/>
        <circle cx="340" cy="220" r="1.5" fill="rgba(122,180,255,0.35)"/>
      </svg>
    </div>
  )
}
