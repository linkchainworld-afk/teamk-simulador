export default function Navbar() {
  return (
    <header className="w-full border-b">
      <nav className="mx-auto max-w-5xl p-4 flex items-center justify-between">
        <span className="font-bold">Team K Miami</span>
        {/* De momento iremos a /simulador (luego podemos moverlo) */}
        <a className="text-blue-600 underline" href="/simulador">
          Ir al Simulador
        </a>
      </nav>
    </header>
  );
}
