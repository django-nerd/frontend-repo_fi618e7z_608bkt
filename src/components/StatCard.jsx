export default function StatCard({ title, value }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm">
      <div className="text-xs uppercase tracking-wide text-slate-400 mb-1">{title}</div>
      <div className="text-lg font-semibold text-slate-100">{value}</div>
    </div>
  )
}
