import Link from "next/link";
import Navbar from "../_components/navbar";

export default function Courses() {
  const courses = [
    {
      id: 1,
      title: "Qué es SQL",
      description: "La importancia de SQL para el mundo.",
    },
    {
      id: 2,
      title: "Sistemas de Gestion SQL",
      description: "Conoce PostgreSQL, MySQL, SQLite,...",
    },
    {
      id: 3,
      title: "Consultas Básicas en SQL",
      description: "Realiza tus primeras consultas en SQL.",
    },
    {
      id: 4,
      title: "Consultas Básicas en SQL",
      description: "Realiza tus primeras consultas en SQL.",
    },
    {
      id: 5,
      title: "Consultas Básicas en SQL",
      description: "Realiza tus primeras consultas en SQL.",
    },
    {
      id: 6,
      title: "Consultas Básicas en SQL",
      description: "Realiza tus primeras consultas en SQL.",
    },
    {
      id: 7,
      title: "Consultas Básicas en SQL",
      description: "Realiza tus primeras consultas en SQL.",
    },
  ];

  return (
    <div className="flex h-full w-full">
      <Navbar />
      <main className="flex flex-col p-20 gap-20 justify-center items-center w-full">
        <h1 className="block mt-20 text-4xl font-bold text-center">
          Cursos Disponibles
        </h1>
        <ul className="flex justify-center items-center flex-wrap w-full gap-5 max-h-[700px] overflow-y-scroll">
          {courses.map((course) => (
            <li
              key={course.id}
              className="block border-2 min-h-[280px] min-w-[300px] max-w-[30%]"
            >
              <Link href="/">
                <img
                  src={`https://cdn.pixabay.com/index/2025/01/30/05-35-40-326_1440x550.png`}
                  alt={course.title}
                />
                <div className="p-5">
                  <h2 className="text-2xl font-semibold">{course.title}</h2>
                  <p className="text-gray-500">{course.description}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
