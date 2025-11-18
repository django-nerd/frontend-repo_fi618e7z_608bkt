import Spline from '@splinetool/react-spline'

export default function HeroVideo({ children }) {
  return (
    <section className="relative w-full h-[55vh] min-h-[360px] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6tUXqVcUA0xgJugv/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full w-full bg-gradient-to-b from-black/40 via-black/20 to-slate-950/80 pointer-events-none" />

      <div className="absolute inset-0 z-20 flex items-end">
        <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pb-8">
          {children}
        </div>
      </div>
    </section>
  )
}
