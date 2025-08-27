// lib/taxFormulas.js
import { toNum } from "@/lib/number";

// Etiquetas bonitas
const LABELS = {
  "llc": "LLC / Sole Prop",
  "s-corp": "S-Corp",
  "c-corp": "C-Corp",
};

// Tasa base para estimar el "ahorro potencial" (NO se muestra el impuesto base)
const BASELINE_RATE = 0.25;

export function calculateSavings(values) {
  // 1) Sanitizar entradas
  const entityType  = values?.entityType || "llc";
  const revenue     = toNum(values?.revenue);
  const cogs        = toNum(values?.cogs);
  const opex        = toNum(values?.opex);
  const ownerSalary = toNum(values?.ownerSalary);

  // 2) Utilidad antes de impuestos (según entidad)
  let profitBeforeTax = 0;
  if (entityType === "llc") {
    // LLC / Sole Prop no descuenta salario del dueño
    profitBeforeTax = revenue - cogs - opex;
  } else {
    // S-Corp / C-Corp descuentan salario
    profitBeforeTax = revenue - cogs - opex - ownerSalary;
  }

  // 3) Tasas demo reales por entidad
  let entityTaxRate = 0.22; // default (LLC)
  if (entityType === "s-corp") entityTaxRate = 0.18;
  if (entityType === "c-corp") entityTaxRate = 0.21;

  // 4) Cálculos
  const base = Math.max(profitBeforeTax, 0);
  const entityTax = base * entityTaxRate;

  // QBI: solo pass-through (LLC y S-Corp). C-Corp no aplica QBI.
  const qbi = (entityType !== "c-corp") ? base * 0.20 : 0;

  // Flujo al dueño (demo)
  let ownerCash = 0;
  if (entityType === "llc") {
    ownerCash = profitBeforeTax - entityTax;
  } else if (entityType === "s-corp") {
    ownerCash = ownerSalary + (profitBeforeTax - entityTax);
  } else {
    ownerCash = profitBeforeTax - entityTax; // C-Corp
  }

  // 5) Ahorro potencial vs tasa base (NO mostramos el impuesto base)
  const baselineTax = base * BASELINE_RATE;
  const potentialSavings = Math.max(baselineTax - entityTax, 0);

  // Devolvemos valores "crudos"; el formateo en USD se hace en la página
  return {
    label: LABELS[entityType] || entityType,
    _view: {
      profit:        profitBeforeTax,
      entityTax,
      qbi,
      ownerCash,
      base,
      potentialSavings,
    },
  };
}
