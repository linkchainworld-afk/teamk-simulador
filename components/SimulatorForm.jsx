// components/SimulatorForm.jsx
"use client";
import { useState, useCallback } from "react";

export default function SimulatorForm({ onCalculate }) {
  const [form, setForm] = useState({
    entityType: "llc",
    revenue: "",
    cogs: "",
    opex: "",
    ownerSalary: "", // usado solo en s-corp / c-corp
  });

  // Cambia solo el tipo de entidad (evita conflictos con el handler genérico)
  const handleEntityChange = useCallback((e) => {
    const value = e.target.value; // "llc" | "s-corp" | "c-corp"
    setForm((f) => ({ ...f, entityType: value }));
  }, []);

  // Cambia los demás campos
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      // Enviamos exactamente las claves esperadas por calculateSavings
      onCalculate?.(form);
    },
    [form, onCalculate]
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Tipo de entidad */}
      <label className="block">
        <span className="block mb-1">Tipo de entidad</span>
        <select
          id="entityType"
          name="entityType"
          value={form.entityType}
          onChange={handleEntityChange}
          className="w-full border rounded p-2"
        >
          <option value="llc">LLC / Sole Prop</option>
          <option value="s-corp">S-Corp</option>
          <option value="c-corp">C-Corp</option>
        </select>
      </label>

      {/* Ingresos brutos */}
      <label className="block">
        <span className="block mb-1">Ingresos brutos ($)</span>
        <input
          name="revenue"
          value={form.revenue}
          onChange={handleChange}
          className="w-full border rounded p-2"
          placeholder="1,200,000"
          inputMode="numeric"
        />
      </label>

      {/* COGS */}
      <label className="block">
        <span className="block mb-1">Costos directos / COGS ($)</span>
        <input
          name="cogs"
          value={form.cogs}
          onChange={handleChange}
          className="w-full border rounded p-2"
          placeholder="350,000"
          inputMode="numeric"
        />
      </label>

      {/* Gastos operativos */}
      <label className="block">
        <span className="block mb-1">Gastos operativos ($)</span>
        <input
          name="opex"
          value={form.opex}
          onChange={handleChange}
          className="w-full border rounded p-2"
          placeholder="250,000"
          inputMode="numeric"
        />
      </label>

      {/* Salario del dueño (solo S-Corp / C-Corp) */}
      <label className="block">
        <span className="block mb-1">Salario del dueño ($) (solo S-Corp / C-Corp)</span>
        <input
          name="ownerSalary"
          value={form.ownerSalary}
          onChange={handleChange}
          className="w-full border rounded p-2"
          placeholder="100,000"
          inputMode="numeric"
        />
      </label>

      <button type="submit" className="bg-black text-white rounded px-4 py-2">
        Calcular
      </button>
    </form>
  );
}
