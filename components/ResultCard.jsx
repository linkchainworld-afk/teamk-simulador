import { usd } from "@/lib/formatters";

export default function ResultCard({ result }) {
  if (!result) return null;
  const { taxable, provisionalTax, potentialSavings } = result;

  return (
    <div className="mt-6 border rounded p-4 space-y-2">
      <p>Base imponible estimada: <strong>{usd(taxable)}</strong></p>
      <p>Impuesto “sin planificar” (demo): <strong>{usd(provisionalTax)}</strong></p>
      <p className="text-green-700">
        Ahorro potencial con planificación (demo): <strong>{usd(potentialSavings)}</strong>
      </p>
    </div>
  );
}
