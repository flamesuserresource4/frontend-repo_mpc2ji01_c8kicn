import HeaderNav from './components/HeaderNav';
import AuthSection from './components/AuthSection';
import SubmitItemForm from './components/SubmitItemForm';
import MapHeatmap from './components/MapHeatmap';
import { Recycle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 text-slate-900">
      <HeaderNav />

      <main>
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-4 pt-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-emerald-700 bg-emerald-50 border-emerald-200">
                <Recycle className="h-3.5 w-3.5" /> E-waste collection made simple
              </div>
              <h1 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight">
                Connect Disposers with Collectors in real-time
              </h1>
              <p className="mt-3 text-slate-600 text-lg">
                List your e-waste, match with nearby collectors, chat to coordinate, and keep electronics out of landfills.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#submit" className="px-5 py-2.5 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700">Submit an item</a>
                <a href="#browse" className="px-5 py-2.5 rounded-lg bg-white border font-semibold hover:border-emerald-300 hover:text-emerald-700">Browse nearby</a>
              </div>
            </div>
            <div className="rounded-2xl border bg-white/70 backdrop-blur p-6 shadow-sm">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="rounded-xl bg-gradient-to-br from-emerald-50 to-white border p-4">
                  <div className="text-3xl font-extrabold">12k</div>
                  <div className="text-xs text-slate-500">Items recycled</div>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-blue-50 to-white border p-4">
                  <div className="text-3xl font-extrabold">7.8k</div>
                  <div className="text-xs text-slate-500">Users</div>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-amber-50 to-white border p-4">
                  <div className="text-3xl font-extrabold">36m</div>
                  <div className="text-xs text-slate-500">Avg pickup</div>
                </div>
              </div>
              <div className="mt-6 text-sm text-slate-600">
                Join a community committed to responsible recycling.
              </div>
            </div>
          </div>
        </section>

        <AuthSection />
        <SubmitItemForm />
        <MapHeatmap />

        {/* Safety */}
        <section className="max-w-6xl mx-auto px-4 pb-14" id="safety">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Safety & guidelines</h3>
            <ul className="grid md:grid-cols-3 gap-4 text-sm text-slate-700">
              <li className="rounded-xl border p-4 bg-emerald-50/50">Verify identities and meet in safe, well-lit areas.</li>
              <li className="rounded-xl border p-4 bg-blue-50/50">Secure batteries and avoid handling damaged cells.</li>
              <li className="rounded-xl border p-4 bg-amber-50/50">Use in-app chat and keep communication on-platform.</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t bg-white/70 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-slate-600 flex items-center justify-between">
          <span>© {new Date().getFullYear()} EcoLink</span>
          <div className="flex gap-4">
            <a href="#auth" className="hover:text-slate-900">Account</a>
            <a href="#submit" className="hover:text-slate-900">Submit</a>
            <a href="#browse" className="hover:text-slate-900">Map</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
