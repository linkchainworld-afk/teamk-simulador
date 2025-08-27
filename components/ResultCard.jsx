// components/ResultCard.jsx
export default function ResultCard({ result }) {
  if (!result) return null;
  const { label, _view } = result;

  return (
    <div className="mt-6 border rounded p-4 space-y-3">
      <p><strong>Entidad:</strong> {label}</p>

      <p>
        Utilidad del negocio (antes de impuestos):{" "}
        <strong>{_view.profit}</strong>
      </p>

      <p>
        Impuestos del negocio (demo):{" "}
        <strong>{_view.entityTax}</strong>
      </p>

      <p>
        Deducción QBI (demo):{" "}
        <strong>{_view.qbi}</strong>
      </p>

      <p className="text-green-700">
        Flujo total estimado al dueño (demo):{" "}
        <strong>{_view.ownerCash}</strong>
      </p>

      <hr className="my-3" />

      <p>
        <strong>Base imponible estimada:</strong> {_view.base}
      </p>

      {/* 🔻 Ya NO mostramos “Impuesto sin planificar (demo)” */}

      <p className="text-green-700">
        Ahorro potencial con planificación (demo):{" "}
        <strong>{_view.potentialSavings}</strong>
      </p>

      <p className="text-xs text-gray-500 pt-2">
        *Resultados simplificados para exploración. Ajustes de tasas/tope y
        escenarios reales se configuran con tu CPA.
      </p>

      {/* Link de contacto */}
      <p className="pt-2">
        ¿Quieres que afinemos estos números para tu empresa?
        {" "}
        <a
          href="mailto:info@teamkmiami.com?subject=Interés%20en%20Simulador%20Fiscal&body=Hola%2C%20quiero%20que%20me%20contacten%20para%20revisar%20mi%20situaci%C3%B3n%20fiscal."
          className="text-blue-600 underline"
        >
          Escríbenos a info@teamkmiami.com
        </a>
      </p>
    </div>
  );
}
