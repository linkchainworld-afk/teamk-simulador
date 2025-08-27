// lib/number.js
export function toNum(value) {
  if (!value) return 0;

  // Asegura que sea string y elimina símbolos raros
  const cleaned = String(value).replace(/[^0-9.-]+/g, "");

  // Convierte a número
  const n = Number(cleaned);

  return isNaN(n) ? 0 : n;
}
