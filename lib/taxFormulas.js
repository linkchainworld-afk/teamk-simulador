// ⚠️ DEMO: tasas ficticias
export function calculateSavings({ gross, costs = 0 }) {
  const taxable = Math.max((gross || 0) - (costs || 0), 0);
  const provisionalTax = taxable * 0.22; // 22% sin plan
  const optimizedTax   = taxable * 0.18; // 18% con plan
  const potentialSavings = Math.max(provisionalTax - optimizedTax, 0);
  return { taxable, provisionalTax, potentialSavings };
}
