import HeroVideo from '../components/HeroVideo'

export default function Services() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <HeroVideo>
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Markets, Healthcare, & NGOs</h1>
          <p className="mt-2 text-slate-300">Services, access, and local economy</p>
        </div>
      </HeroVideo>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <p className="text-slate-300">
          High market prices push residents into debt. Lack of refrigeration causes food spoilage. While NGOs and healthcare exist in secure areas, fear of attacks and long walking distances deter participation.
        </p>

        <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <div className="text-sm text-slate-300">Market / NGO Facilities Video Placeholder</div>
          <div className="mt-2 text-xs text-slate-400">Embed a loop illustrating market activity or facilities here.</div>
        </div>
      </main>
    </div>
  )
}
