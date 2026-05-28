import { useState } from 'react'

const WA_BASE = 'https://wa.me/5491132907998?text='

const INPUT_BASE = 'w-full bg-card border rounded-md px-4 py-3 font-barlow text-[0.9rem] text-white placeholder-white/20 outline-none transition-all duration-200'
const INPUT_NORMAL = 'border-white/[0.08] focus:border-blue/60 focus:bg-card-2'
const INPUT_ERROR  = 'border-red-500/60 focus:border-red-400'

const FIELDS = [
  { name: 'nombre',  label: 'Nombre completo',            type: 'text',   required: true },
  { name: 'celular', label: 'Celular',                    type: 'tel',    required: true },
  { name: 'email',   label: 'Gmail / Email',              type: 'email',  required: false },
  { name: 'edad',    label: 'Edad',                       type: 'number', required: false },
  { name: 'deporte', label: 'Deporte que practicás',      type: 'text',   required: true },
  { name: 'anios',   label: 'Hace cuántos años practicás', type: 'text',  required: false },
]

function WaIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

export default function ContactForm() {
  const [form, setForm] = useState({
    nombre: '', celular: '', email: '', edad: '',
    deporte: '', anios: '', lesiones: '', contacto: 'Instagram',
  })
  const [errors, setErrors] = useState({})

  const handle = e => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }))
  }

  const submit = e => {
    e.preventDefault()
    const errs = {}
    if (!form.nombre.trim())  errs.nombre  = 'Este campo es requerido'
    if (!form.celular.trim()) errs.celular = 'Este campo es requerido'
    if (!form.deporte.trim()) errs.deporte = 'Este campo es requerido'
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})

    const msg = [
      `Hola Florencia! 👋 Me contacto desde tu web.`,
      `*Nombre:* ${form.nombre}`,
      `*Celular:* ${form.celular}`,
      `*Email:* ${form.email || '-'}`,
      `*Edad:* ${form.edad || '-'}`,
      `*Deporte:* ${form.deporte}`,
      `*Años practicando:* ${form.anios || '-'}`,
      `*Lesiones:* ${form.lesiones || 'Ninguna'}`,
      `*Cómo te conocí:* ${form.contacto}`,
    ].join('\n')

    window.open(WA_BASE + encodeURIComponent(msg), '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contacto" className="relative bg-dark py-24 px-6 md:px-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid-sm opacity-60 pointer-events-none" />

      {/* Top glow */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[280px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(37,99,235,0.1) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <span className="block w-6 h-[2px] bg-blue" />
            <span className="font-condensed font-semibold text-[0.7rem] tracking-[0.22em] uppercase text-blue-lt">
              Primer contacto
            </span>
            <span className="block w-6 h-[2px] bg-blue" />
          </div>
          <h2 className="font-bebas leading-[0.9] mb-4" style={{ fontSize: 'clamp(40px,6vw,72px)' }}>
            EMPEZÁ HOY —{' '}
            <span className="text-blue-grad bg-gradient-to-r from-blue to-blue-lt bg-clip-text text-transparent">
              PRIMER CONTACTO
            </span>
          </h2>
          <p className="font-barlow font-light text-[0.95rem] text-white/55">
            Completá el formulario y te respondo por WhatsApp
          </p>
        </div>

        {/* Form card */}
        <div className="border-grad">
          <div className="bg-card rounded-[9px] p-8 md:p-10">
            <form onSubmit={submit} noValidate>

              {/* 2-col grid fields */}
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                {FIELDS.map(({ name, label, type, required }) => (
                  <div key={name}>
                    <label className="block font-condensed font-semibold text-[0.7rem] tracking-[0.16em] uppercase text-white/40 mb-2">
                      {label}{required && <span className="text-blue ml-1">*</span>}
                    </label>
                    <input
                      type={type}
                      name={name}
                      value={form[name]}
                      onChange={handle}
                      placeholder={label}
                      className={`${INPUT_BASE} ${errors[name] ? INPUT_ERROR : INPUT_NORMAL}`}
                    />
                    {errors[name] && (
                      <p className="font-barlow text-[0.75rem] text-red-400 mt-1">{errors[name]}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Lesiones textarea */}
              <div className="mb-5">
                <label className="block font-condensed font-semibold text-[0.7rem] tracking-[0.16em] uppercase text-white/40 mb-2">
                  ¿Tenés alguna lesión?
                </label>
                <textarea
                  name="lesiones"
                  value={form.lesiones}
                  onChange={handle}
                  placeholder="Describí cualquier lesión o limitación física (opcional)"
                  rows={3}
                  className={`${INPUT_BASE} ${INPUT_NORMAL} resize-none`}
                />
              </div>

              {/* Cómo te conocí — select */}
              <div className="mb-8">
                <label className="block font-condensed font-semibold text-[0.7rem] tracking-[0.16em] uppercase text-white/40 mb-2">
                  ¿Cómo fue tu primer contacto conmigo?
                </label>
                <select
                  name="contacto"
                  value={form.contacto}
                  onChange={handle}
                  className={`${INPUT_BASE} ${INPUT_NORMAL} cursor-pointer`}
                  style={{ backgroundColor: '#091830', colorScheme: 'dark' }}
                >
                  {['Instagram', 'Recomendación', 'Google', 'Otro'].map(o => (
                    <option key={o} value={o} style={{ backgroundColor: '#091830' }}>{o}</option>
                  ))}
                </select>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 font-condensed font-bold text-[0.95rem] tracking-[0.15em] uppercase text-white bg-blue py-4 rounded-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-lt"
                style={{ boxShadow: '0 4px 28px rgba(37,99,235,0.5)' }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 40px rgba(79,142,247,0.65)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 28px rgba(37,99,235,0.5)'}
              >
                <WaIcon />
                Enviar por WhatsApp
              </button>

              <p className="text-center font-barlow text-[0.75rem] text-white/25 mt-4">
                * Campos obligatorios — Al enviar se abrirá WhatsApp con tu consulta
              </p>
            </form>
          </div>
        </div>

      </div>
    </section>
  )
}
