import { useMemo, useState } from "react";
import { MapPin, Filter } from "lucide-react";

// Simple fake dataset of hot spots and pins
const HOTSPOTS = [
  { x: 25, y: 35, intensity: 0.7 },
  { x: 60, y: 45, intensity: 0.9 },
  { x: 72, y: 72, intensity: 0.6 },
  { x: 40, y: 70, intensity: 0.5 },
];

const PINS = [
  { x: 22, y: 38, type: "Computer" },
  { x: 58, y: 47, type: "Phone" },
  { x: 74, y: 73, type: "Battery" },
  { x: 42, y: 68, type: "Appliance" },
];

export default function MapHeatmap() {
  const [radius, setRadius] = useState(10);
  const [type, setType] = useState("All");

  const pins = useMemo(() => {
    return type === "All" ? PINS : PINS.filter((p) => p.type === type);
  }, [type]);

  return (
    <section className="max-w-6xl mx-auto px-4 py-10" id="browse">
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">Collector map & heatmap</h3>
          <div className="flex items-center gap-2 text-sm">
            <Filter className="h-4 w-4 text-slate-500" />
            <select className="border rounded-lg px-2 py-1" value={type} onChange={(e) => setType(e.target.value)}>
              <option>All</option>
              <option>Computer</option>
              <option>Phone</option>
              <option>Appliance</option>
              <option>Battery</option>
            </select>
            <div className="flex items-center gap-2">
              <span className="text-slate-500">Radius</span>
              <input type="range" min="5" max="50" value={radius} onChange={(e) => setRadius(Number(e.target.value))} />
              <span className="w-10 text-right">{radius} km</span>
            </div>
          </div>
        </div>

        <div className="relative w-full h-80 rounded-xl overflow-hidden border bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIzNTg2NzV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover">
          {/* Heat spots */}
          {HOTSPOTS.map((spot, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${spot.x}%`,
                top: `${spot.y}%`,
                width: `${radius * spot.intensity}px`,
                height: `${radius * spot.intensity}px`,
                transform: "translate(-50%, -50%)",
                background: "radial-gradient(circle, rgba(16,185,129,0.35) 0%, rgba(16,185,129,0.18) 40%, rgba(16,185,129,0) 70%)",
                filter: "blur(4px)",
              }}
            />
          ))}

          {/* Pins */}
          {pins.map((pin, i) => (
            <div
              key={i}
              className="absolute -translate-x-1/2 -translate-y-full text-emerald-700 drop-shadow"
              style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
            >
              <MapPin className="h-6 w-6 fill-emerald-500/90" />
              <div className="mt-0.5 text-xs bg-white/90 border rounded px-2 py-0.5">{pin.type}</div>
            </div>
          ))}

          <div className="absolute bottom-3 left-3 bg-white/90 rounded-lg border px-3 py-2 text-xs text-slate-700">
            Heatmap shows active requests density. Pins represent sample items.
          </div>
        </div>
      </div>
    </section>
  );
}
