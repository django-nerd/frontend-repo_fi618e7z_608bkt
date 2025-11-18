import HeroVideo from '../components/HeroVideo'

export default function Security() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <HeroVideo>
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Security Dynamics & Sector Movement</h1>
          <p className="mt-2 text-slate-300">Overview of threats, assaults, and relocations</p>
        </div>
      </HeroVideo>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <p className="text-slate-300">
          Threats, assaults, and tent burnings still occur, mainly in the Annex hosting foreign nationals. Management is moving residents from the overcrowded Iraqi-majority Sectors 1 and 2 to the newer Sector 7.
        </p>

        <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <div className="text-sm text-slate-300">Map / Sector Movement Video Placeholder</div>
          <div className="mt-2 text-xs text-slate-400">Embed a visualizing video for sector movements here.</div>
        </div>
      </main>
    </div>
  )
}
