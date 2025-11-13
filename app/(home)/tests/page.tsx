export default function TestsPage() {
  return (
    <>
      <h1 className="block text-4xl font-bold">Pruebas</h1>
      <div className="flex flex-col gap-4 w-full max-w-[1200px]">
        <div className="bg-blue-950 flex items-center justify-between p-5 rounded">
          <p>Introduccion a SQL</p>
          <div className="flex gap-5">
            <button
              type="button"
              className="bg-blue-900 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-700"
            >
              Iniciar prueba
            </button>
            <button
              type="button"
              className="bg-blue-900 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-700"
            >
              Configuracion
            </button>
          </div>
        </div>
        <div className="bg-blue-950 flex items-center justify-between p-5  rounded">
          <p>Sistemas de Gestion de SQL</p>
          <div className="flex gap-5">
            <button
              type="button"
              className="bg-blue-900 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-700"
            >
              Iniciar prueba
            </button>
            <button
              type="button"
              className="bg-blue-900 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-700"
            >
              Configuracion
            </button>
          </div>
        </div>
        <div className="bg-blue-950 flex items-center justify-between p-5  rounded">
          <p>Consultas Básicas en SQL</p>
          <div className="flex gap-5">
            <button
              type="button"
              className="bg-blue-900 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-700"
            >
              Iniciar prueba
            </button>
            <button
              type="button"
              className="bg-blue-900 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-700"
            >
              Configuracion
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
