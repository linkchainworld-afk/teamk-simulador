"use client";
import { useState } from "react";
import SimulatorForm from "@/components/SimulatorForm";
import ResultCard from "@/components/ResultCard";
import { calculateSavings } from "@/lib/taxFormulas";

export default function SimuladorPage() {
  const [result, setResult] = useState(null);

  const handleCalculate = (values) => {
    const r = calculateSavings(values);
    setResult(r);
  };

  return (
    <section className="mx-auto max-w-3xl p-8">
      <h1 className="text-2xl font-bold mb-4">Simulador Fiscal — Demo</h1>
      <SimulatorForm onCalculate={handleCalculate} />
      <ResultCard result={result} />
    </section>
  );
}
