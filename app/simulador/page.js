// app/simulador/page.js
"use client";
import { useState } from "react";
import SimulatorForm from "@/components/SimulatorForm";
import ResultCard from "@/components/ResultCard";
import { calculateSavings } from "@/lib/taxFormulas";
import { usd } from "@/lib/formatters";

export default function SimuladorPage() {
  const [result, setResult] = useState(null);

  const handleCalculate = (values) => {
    const r = calculateSavings(values);
    setResult({
      label: r.label,
      _view: {
        profit:           usd(r._view.profit || 0),
        entityTax:        usd(r._view.entityTax || 0),
        qbi:              usd(r._view.qbi || 0),
        ownerCash:        usd(r._view.ownerCash || 0),
        base:             usd(r._view.base || 0),
        potentialSavings: usd(r._view.potentialSavings || 0),
      },
    });
  };

  return (
    <section className="mx-auto max-w-3xl p-8">
      <h1 className="text-2xl font-bold mb-4">
        Simulador Fiscal — Construcción (Demo)
      </h1>

      <SimulatorForm onCalculate={handleCalculate} />
      <ResultCard result={result} />
    </section>
  );
}
