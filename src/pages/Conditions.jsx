import HeroVideo from '../components/HeroVideo'

export default function Conditions() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <HeroVideo>
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Environmental Challenges</h1>
          <p className="mt-2 text-slate-300">Living conditions across the camp</p>
        </div>
      </HeroVideo>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <p className="text-slate-300">
          Tents are fragile, flammable, and vulnerable to flooding and dust storms. Residents face illness due to ruined belongings and stagnant sewage water where children play.
        </p>

        <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <div className="text-sm text-slate-300">Tents & Grounds Video Placeholder</div>
          <div className="mt-2 text-xs text-slate-400">Embed a loop showing tents and camp grounds here.</div>
        </div>
      </main>
    </div>
  )
}
