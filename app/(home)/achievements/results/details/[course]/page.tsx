import Link from "next/link";

export default function TestResultsDetailsPage() {
  return (
    <>
      <h1 className="block text-4xl font-bold">
        Detalles de los resultados del examen
      </h1>
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <span>Curso: Introduccion a SQL</span>
        <span>·</span>
        <span>Examen realizado el 15 de marzo de 2024</span>
      </div>
      <div className="max-w-4xl flex flex-col gap-5">
        <p>
          Pregunta 1: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Excepturi ducimus quae repellat? Eos amet inventore ut numquam
          praesentium illum eum! Corrupti maxime quibusdam eius aliquam
          inventore, similique soluta esse qui?
        </p>
        <p>Respuesta marcada: SELECT * FROM users WHERE age &gt; 18;</p>
        <p>
          Respuesta correcta: SELECT name, age FROM users WHERE age &gt; 18;
        </p>
      </div>
      <div className="flex w-full max-w-3xl justify-between">
        <button
          type="button"
          className="px-4 py-2 bg-blue-900 text-white rounded cursor-pointer hover:bg-blue-700"
        >
          Anterior pregunta
        </button>
        <button
          type="button"
          className="px-4 py-2 bg-blue-900 text-white rounded cursor-pointer hover:bg-blue-700"
        >
          Siguiente pregunta
        </button>
      </div>
      <Link href="/achievements/results/introduccion-a-sql">
        <button className="bg-blue-900 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-700">
          Regresar a los resultados
        </button>
      </Link>
    </>
  );
}
