import HeroVideo from '../components/HeroVideo'

export default function Return() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <HeroVideo>
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Returning to Iraq</h1>
          <p className="mt-2 text-slate-300">Process overview and current status</p>
        </div>
      </HeroVideo>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <p className="text-slate-300">
          Iraqis register interest, take family photos, and await security approval. On return day, they stay at reception for document checks before boarding buses provided by the Iraqi Ministry of Migration.
        </p>

        <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <div className="text-sm text-slate-300">Return Process Video Placeholder</div>
          <div className="mt-2 text-xs text-slate-400">Embed a loop showing buses and departure procedures here.</div>
        </div>
      </main>
    </div>
  )
}
