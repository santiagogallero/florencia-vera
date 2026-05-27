import { WA_LINK } from '../constants'
import WaIcon from './WaIcon'

export default function WhatsAppFloat() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatear por WhatsApp"
      className="fixed bottom-7 right-7 z-40 flex items-center justify-center w-[58px] h-[58px] rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:scale-110 hover:shadow-[0_8px_32px_rgba(37,211,102,0.55)] transition-all duration-200"
    >
      {/* Pulse ring */}
      <span className="absolute inset-[-5px] rounded-full border-2 border-[#25D366]/50 animate-wa-ring" />
      <WaIcon size={28} />
    </a>
  )
}
