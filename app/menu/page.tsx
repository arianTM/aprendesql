import Link from "next/link";
import Navbar from "../_components/navbar";

export default function Menu() {
  return (
    <div className="flex h-full w-full">
      <Navbar />
      <main className="flex flex-col justify-center items-center h-full w-full">
        <div>
          <h1 className="text-4xl mb-20 font-bold text-center">
            Bienvenido, Arian
          </h1>
          <div className="flex gap-20 flex-wrap justify-center items-center h-full w-full">
            <div className="flex w-96 h-50">
              <div className="flex flex-col gap-5 justify-center items-center border-white border-2 rounded-lg p-8">
                <p className="text-center">
                  Te ofrecemos un catálogo de cursos para mejorar tus
                  habilidades en SQL.
                </p>
                <Link href="/courses">
                  <button className="bg-blue-900 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-700">
                    Explorar Cursos
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex w-96 h-50">
              <div className="flex flex-col gap-5 justify-center items-center border-white border-2 rounded-lg p-8">
                <p className="text-center">
                  Mide tus conocimientos tomando pruebas personalizadas.
                </p>
                <Link href="/tests">
                  <button className="bg-blue-900 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-700">
                    Realizar Pruebas
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex w-96 h-50">
              <div className="flex flex-col gap-5 justify-center items-center border-white border-2 rounded-lg p-8">
                <p className="text-center">
                  Resuelve tus dudas con nuestro asistente virtual.
                </p>
                <Link href="/chatbot">
                  <button className="bg-blue-900 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-700">
                    Hablar con el Asistente
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
