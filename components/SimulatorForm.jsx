"use client";
import { useState } from "react";

export default function SimulatorForm({ onCalculate }) {
  const [gross, setGross] = useState("");
  const [costs, setCosts] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const g = Number((gross || "0").replace(/,/g, ""));
    const c = Number((costs || "0").replace(/,/g, ""));
    onCalculate({ gross: g, costs: c }); // <<-- ENVÍA gross y costs
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Ingresos brutos anuales ($)</label>
        <input
          className="border px-3 py-2 w-full rounded"
          value={gross}
          onChange={(e) => setGross(e.target.value)}
          placeholder="Ej: 1200000"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Costos / deducciones estimadas ($)</label>
        <input
          className="border px-3 py-2 w-full rounded"
          value={costs}
          onChange={(e) => setCosts(e.target.value)}
          placeholder="Ej: 250000"
        />
      </div>

      <button className="bg-black text-white px-4 py-2 rounded">Calcular</button>
    </form>
  );
}
