import { useState } from "react";
import { Upload, Image as ImageIcon, Package, Type } from "lucide-react";

export default function SubmitItemForm() {
  const [images, setImages] = useState([]);

  const onFiles = (files) => {
    const list = Array.from(files).slice(0, 4);
    const previews = list.map((file) => ({ file, url: URL.createObjectURL(file) }));
    setImages(previews);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-10" id="submit">
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">Submit e-waste item</h3>
          <span className="text-xs text-slate-500">Disposer</span>
        </div>

        <form
          className="space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Item submitted! (demo)");
          }}
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Item name</label>
              <div className="relative">
                <Package className="h-4 w-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input className="w-full rounded-lg border p-2.5 pl-9 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Old Laptop, Smartphone..." />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Type</label>
              <div className="relative">
                <Type className="h-4 w-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <select className="w-full appearance-none rounded-lg border p-2.5 pl-9 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  <option>Computer</option>
                  <option>Phone</option>
                  <option>Appliance</option>
                  <option>Battery</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
            <textarea rows={3} className="w-full rounded-lg border p-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Model, condition, hazards, access notes..." />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Photos</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {images.map((img, idx) => (
                <div key={idx} className="aspect-video rounded-lg overflow-hidden border">
                  <img src={img.url} alt="preview" className="w-full h-full object-cover" />
                </div>
              ))}
              {images.length < 4 && (
                <label className="aspect-video flex flex-col items-center justify-center rounded-lg border-2 border-dashed text-slate-500 hover:border-emerald-400 hover:text-emerald-600 cursor-pointer">
                  <input type="file" accept="image/*" className="hidden" onChange={(e) => onFiles(e.target.files)} multiple />
                  <ImageIcon className="h-6 w-6 mb-1" />
                  <span className="text-xs">Upload up to 4</span>
                </label>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Pickup Address</label>
              <input className="w-full rounded-lg border p-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="123 Green St, City" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Preferred Time</label>
              <input type="datetime-local" className="w-full rounded-lg border p-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Special Instructions</label>
              <input className="w-full rounded-lg border p-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Gate code, elevator access..." />
            </div>
          </div>

          <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 text-white font-semibold px-4 py-2.5 hover:bg-emerald-700">
            <Upload className="h-4 w-4" /> Submit Request
          </button>
        </form>
      </div>
    </section>
  );
}
