import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { to: '/', label: 'Dashboard Home' },
  { to: '/security', label: 'Security & Sectors' },
  { to: '/conditions', label: 'Living Conditions' },
  { to: '/services', label: 'Services & Economy' },
  { to: '/return', label: 'The Return Process' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-8 w-8 rounded bg-blue-500/20 border border-blue-400/30 grid place-items-center">
              <div className="h-3 w-3 rounded-full bg-blue-400" />
            </div>
            <div className="leading-tight">
              <div className="text-sm uppercase tracking-widest text-slate-300">IN2</div>
              <div className="text-xs text-slate-400">Intelligence & Security</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive ? 'text-white' : 'text-slate-300 hover:text-white'
                  }`
                }
                end={item.to === '/'}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Open Menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950/95">
          <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-medium ${
                    isActive ? 'text-white' : 'text-slate-300'
                  }`
                }
                end={item.to === '/'}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
