import HeroVideo from '../components/HeroVideo'
import StatCard from '../components/StatCard'
import VideoEmbed from '../components/VideoEmbed'

const HOME_VIDEO_URL = import.meta.env.VITE_HOME_VIDEO_URL || ''

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <HeroVideo>
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Al-Hol Camp: The Current Situation</h1>
          <p className="mt-2 text-slate-300">Executive summary overview</p>
        </div>
      </HeroVideo>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard title="Security" value="Incidents declining, but threats persist." />
          <StatCard title="Population" value="Reducing due to Iraqi returns." />
          <StatCard title="Conditions" value="Remains difficult and hazardous." />
        </div>

        <div className="mt-8">
          <VideoEmbed url={HOME_VIDEO_URL} title="Iraq Map (Dashboard)" />
        </div>
      </main>
    </div>
  )
}
