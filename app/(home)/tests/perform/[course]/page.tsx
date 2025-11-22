import Link from "next/link";

export default function TestPerformPage() {
  return (
    <>
      <h1 className="block text-4xl font-bold">Examen de Introduccion a SQL</h1>
      <div className="flex flex-col gap-10 max-w-[1000px]">
        <p className="">
          <b>Pregunta 1.</b> Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Iste cumque nemo dolore exercitationem quam sequi est numquam
          porro ea expedita.
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 mb-5">
            <div>
              <input
                type="radio"
                name="respuesta"
                value="opcion1"
                id="opcion1"
              />
              <label htmlFor="opcion1" className="ml-2">
                Opción 1
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="respuesta"
                value="opcion2"
                id="opcion2"
              />
              <label htmlFor="opcion2" className="ml-2">
                Opción 2
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="respuesta"
                value="opcion3"
                id="opcion3"
              />
              <label htmlFor="opcion3" className="ml-2">
                Opción 3
              </label>
            </div>
          </div>
          <div className="flex justify-between">
            <Link href="/tests/perform/introduccion-a-sql">
              <button
                type="button"
                className="px-4 py-2 bg-blue-900 text-white rounded cursor-pointer hover:bg-blue-700"
              >
                Anterior pregunta
              </button>
            </Link>
            <Link href="/tests/results/introduccion-a-sql">
              <button
                type="button"
                className="px-4 py-2 bg-blue-900 text-white rounded cursor-pointer hover:bg-blue-700"
              >
                Finalizar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
