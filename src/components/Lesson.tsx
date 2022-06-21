export function Lesson() {
  return (
    <a href="#">
      <span className="text-gray-300">Domingo • 20 de junho • 19h00</span>
      <div className="rounded border border-gray-500 p-4 mt-2">
        <header className="flex items-center justify-between">
          <span className="flex text-sm text-blue-500 font-medium">
            Conteúdo liberado
          </span>
          <span className="text-xs rounded px-2 py-[0.125rem] border border-green-300 text-white font-bold">
            Ao vivo
          </span>
        </header>
        <strong className="text-gray-200 mt-5 block">
          Abertura do Ignite Lab
        </strong>
      </div>
    </a>
  );
}
