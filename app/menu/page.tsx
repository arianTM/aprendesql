import Link from "next/link";

export default function Menu() {
  return (
    <div className="flex h-full w-full">
      <nav className="flex justify-center items-center h-full w-min p-16 bg-blue-900">
        <ul className="flex flex-col justify-around h-full">
          <li>
            <Link href="/menu">Menú</Link>
          </li>
          <li>
            <Link href="/courses">Cursos</Link>
          </li>
          <li>
            <Link href="/tests">Pruebas</Link>
          </li>
          <li>
            <Link href="/chatbot">Chatbot</Link>
          </li>
          <li>
            <Link href="/achievements">Logros</Link>
          </li>
        </ul>
      </nav>
      <main className="flex flex-col justify-center items-center h-full w-full">
        <div className="h-[50%]">
          <h1 className="text-4xl font-bold text-center">Bienvenido, Arian</h1>
          <div className="flex gap-20 justify-center items-center h-full w-full">
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
