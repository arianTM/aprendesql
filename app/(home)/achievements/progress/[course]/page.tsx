import Link from "next/link";

export default function CourseProgressPage() {
  return (
    <>
      <h1 className="block text-4xl font-bold">
        Detalles de Introduccion a SQL
      </h1>
      <div className="w-full max-w-lg flex flex-col ">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium ">Progreso</span>
          <span className="text-sm font-medium ">100%</span>
        </div>

        <div className="w-full h-4 bg-blue-100 rounded-full overflow-hidden">
          <div
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            className="h-full rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 shadow-inner transition-all duration-500"
            style={{ width: `70%` }}
          />
        </div>

        <p className="mt-3 text-sm">Has completado 70% del curso.</p>
      </div>
      <div>
        <p className="mt-3 text-sm">Fecha de inicio: 01/01/2024</p>
        <p className="mt-3 text-sm">Fecha de fin: En progreso</p>
      </div>
      <div className="flex gap-6 justify-around w-full max-w-3xl text-sm">
        <div className="flex flex-col gap-4">
          <p className="text-2xl">Lecciones finalizadas</p>
          <ul className="flex flex-col gap-5">
            <li>Lección 1: Qué es SQL</li>
            <li>Lección 2: Historia de SQL</li>
            <li>Lección 3: Importancia en el mundo real</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-2xl">Lecciones pendientes</p>
          <ul className="flex flex-col gap-5">
            <li>Lección 4: Bases de datos</li>
            <li>Lección 5: Conocimientos Previos</li>
          </ul>
        </div>
      </div>
      <Link href="/courses/introduccion-a-sql">
        <button className="bg-blue-900 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-700">
          Ir al curso
        </button>
      </Link>
    </>
  );
}
