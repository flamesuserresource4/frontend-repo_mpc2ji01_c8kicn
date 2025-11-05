import { Recycle, MapPin, MessageCircle, Shield } from "lucide-react";

export default function HeaderNav() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-emerald-600 text-white grid place-items-center shadow">
            <Recycle className="h-5 w-5" />
          </div>
          <div>
            <div className="text-lg font-semibold tracking-tight">EcoLink</div>
            <div className="text-xs text-slate-500 -mt-0.5">Connect. Collect. Recycle.</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-slate-600">
          <a href="#browse" className="hover:text-slate-900 flex items-center gap-2">
            <MapPin className="h-4 w-4" /> Browse Nearby
          </a>
          <a href="#chat" className="hover:text-slate-900 flex items-center gap-2">
            <MessageCircle className="h-4 w-4" /> Chat
          </a>
          <a href="#safety" className="hover:text-slate-900 flex items-center gap-2">
            <Shield className="h-4 w-4" /> Safety
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <button className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900">Log in</button>
          <button className="px-4 py-2 text-sm font-semibold bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg shadow-sm">Sign up</button>
        </div>
      </div>
    </header>
  );
}
