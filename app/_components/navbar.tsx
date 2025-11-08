import Link from "next/link";

export default function Navbar() {
  return (
    <div className="sticky top-0">
      <nav className="flex justify-center h-full items-center p-16 bg-blue-900">
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
    </div>
  );
}
