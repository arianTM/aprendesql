import Link from "next/link";

export default async function CoursePage({
  params,
}: {
  params: { course: string };
}) {
  const { course: courseId } = await params;
  return (
    <>
      <img
        src={`https://cdn.pixabay.com/index/2025/01/30/05-35-40-326_1440x550.png`}
        alt="Nombre del Curso"
        className="max-h-[30vh] w-full"
      />
      <div className="flex gap-30">
        <div className="w-2/3 flex flex-col gap-5">
          <h1 className="block text-4xl font-bold">Introducción a SQL</h1>
          <p className="text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
            vel sint corrupti sit a ducimus minima quidem doloribus saepe
            delectus facilis voluptatibus sapiente odio maiores ipsum at nisi,
            tempore iusto accusamus adipisci dicta distinctio? Possimus,
            laboriosam qui facilis odit esse provident dignissimos enim vitae
            ipsam quo facere accusamus explicabo sit.
          </p>
          <Link
            href={`/courses/${courseId}/lesson/1`}
            className="inline self-start"
          >
            <button className="bg-blue-900 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-700">
              Comenzar Curso
            </button>
          </Link>
        </div>
        <ul className="w-1/3 flex flex-col gap-5">
          <li>Lección 1: Qué es SQL</li>
          <li>Lección 2: Historia de SQL</li>
          <li>Lección 3: Importancia en el mundo real</li>
          <li>Lección 4: Bases de datos</li>
          <li>Lección 5: Conocimientos Previos</li>
        </ul>
      </div>
    </>
  );
}
