import Navbar        from './components/Navbar'
import Hero          from './components/Hero'
import Services      from './components/Services'
import Credentials   from './components/Credentials'
import CtaBanner     from './components/CtaBanner'
import Benefits      from './components/Benefits'
import Philosophy    from './components/Philosophy'
import ContactForm   from './components/ContactForm'
import Footer        from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  return (
    <>
      {/* Global grid — one canvas fixed behind everything, no section seams */}
      <div className="bg-grid-global fixed inset-0 z-0 pointer-events-none" />

      {/* Top accent stripe */}
      <div
        className="fixed top-0 left-0 right-0 h-[2px] z-[100] pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent 0%, #2563eb 20%, #7ab4ff 50%, #2563eb 80%, transparent 100%)' }}
      />

      <Navbar />

      <main>
        <Hero />
        <Benefits />
        <Services />
        <CtaBanner />
        <Philosophy />
        <ContactForm />
        <Credentials />
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  )
}
