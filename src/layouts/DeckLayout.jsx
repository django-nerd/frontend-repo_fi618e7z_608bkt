import Navbar from '../components/Navbar'

export default function DeckLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      {children}
      <footer className="border-t border-slate-800/80 bg-slate-950/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 text-xs text-slate-500 flex items-center justify-between">
          <div>IN2 | Al-Hol Camp: Situational Briefing</div>
          <div>Confidential — For internal situational awareness</div>
        </div>
      </footer>
    </div>
  )
}
