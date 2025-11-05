import { useState } from "react";
import { User, LogIn } from "lucide-react";

export default function AuthSection() {
  const [mode, setMode] = useState("login");
  const [role, setRole] = useState("disposer");

  return (
    <section className="max-w-6xl mx-auto px-4 py-10" id="auth">
      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-2 bg-slate-100 p-1 rounded-lg">
              <button
                className={`px-3 py-1.5 text-sm rounded-md ${mode === "login" ? "bg-white shadow font-semibold" : "text-slate-600"}`}
                onClick={() => setMode("login")}
              >
                Log in
              </button>
              <button
                className={`px-3 py-1.5 text-sm rounded-md ${mode === "register" ? "bg-white shadow font-semibold" : "text-slate-600"}`}
                onClick={() => setMode("register")}
              >
                Register
              </button>
            </div>

            <div className="flex gap-2 bg-slate-100 p-1 rounded-lg">
              <button
                className={`px-3 py-1.5 text-xs rounded-md ${role === "disposer" ? "bg-emerald-600 text-white" : "text-slate-700"}`}
                onClick={() => setRole("disposer")}
              >
                Disposer
              </button>
              <button
                className={`px-3 py-1.5 text-xs rounded-md ${role === "collector" ? "bg-emerald-600 text-white" : "text-slate-700"}`}
                onClick={() => setRole("collector")}
              >
                Collector
              </button>
            </div>
          </div>

          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              alert(`${mode === "login" ? "Logged in" : "Registered"} as ${role}`);
            }}
          >
            {mode === "register" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Full name</label>
                  <input className="w-full rounded-lg border p-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Alex Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                  <input className="w-full rounded-lg border p-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="+1 555 123 4567" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Address</label>
                  <input className="w-full rounded-lg border p-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="123 Green St, Springfield" />
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input type="email" className="w-full rounded-lg border p-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                <input type="password" className="w-full rounded-lg border p-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="••••••••" />
              </div>
            </div>

            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 text-white font-semibold px-4 py-2.5 hover:bg-emerald-700">
              {mode === "login" ? <LogIn className="h-4 w-4" /> : <User className="h-4 w-4" />} {mode === "login" ? "Log in" : "Create account"}
            </button>
          </form>
        </div>

        <div className="rounded-2xl border bg-gradient-to-br from-emerald-50 to-blue-50 p-6">
          <h3 className="text-xl font-semibold mb-2">How it works</h3>
          <ul className="space-y-3 text-slate-700">
            <li>1. Create your account and set your role.</li>
            <li>2. Disposers submit items with photos and pickup details.</li>
            <li>3. Collectors filter nearby requests and claim pickups.</li>
            <li>4. Chat in-app to coordinate and track status changes.</li>
          </ul>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div className="rounded-xl bg-white p-4 border shadow-sm">
              <div className="text-slate-500 mb-1">Active listings</div>
              <div className="text-2xl font-bold">1,248</div>
            </div>
            <div className="rounded-xl bg-white p-4 border shadow-sm">
              <div className="text-slate-500 mb-1">Avg. pickup time</div>
              <div className="text-2xl font-bold">36m</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
