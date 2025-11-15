export default function TestsPage() {
  return (
    <>
      <h1 className="block text-4xl font-bold">
        Configuracion de la prueba para Introduccion a SQL
      </h1>
      <form className="flex flex-col gap-4 space-y-6 w-full max-w-[800px]">
        <fieldset className="border rounded flex gap-5 p-6">
          <legend className="text-2xl font-semibold">Dificultad</legend>
          <div>
            <input
              type="radio"
              name="dificultad"
              value="facil"
              id="facil"
              defaultChecked
            />
            <label htmlFor="facil" className="p-2">
              Facil
            </label>
          </div>
          <div>
            <input type="radio" name="dificultad" value="medio" id="medio" />
            <label htmlFor="medio" className="p-2">
              Medio
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="dificultad"
              value="dificil"
              id="dificil"
            />
            <label htmlFor="dificil" className="p-2">
              Dificil
            </label>
          </div>
        </fieldset>
        <fieldset className="border rounded flex gap-5 p-6">
          <legend className="text-2xl font-semibold">
            Número de Preguntas
          </legend>
          <input
            type="number"
            className="bg-gray-700 focus:outline-none rounded px-4 py-2 w-full max-w-[100px]"
            min={3}
            max={10}
            defaultValue={3}
          />
        </fieldset>
        <fieldset className="flex flex-col border rounded gap-5 p-6">
          <legend className="text-2xl font-semibold">Tópicos</legend>
          <div>
            <input
              type="checkbox"
              name="topicos"
              value="leccion-1"
              id="leccion-1"
            />
            <label htmlFor="leccion-1" className="p-2">
              Lección 1: Qué es SQL
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              name="topicos"
              value="leccion-2"
              id="leccion-2"
            />
            <label htmlFor="leccion-2" className="p-2">
              Lección 2: Historia de SQL
            </label>
          </div>
        </fieldset>
        <button className="bg-blue-900 mt-4 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-700">
          Guardar
        </button>
      </form>
    </>
  );
}
