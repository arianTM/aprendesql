import Link from "next/link";

export default function Login() {
  return (
    <form className="flex flex-col items-center bg-white p-10 rounded-lg shadow-md max-w-md mx-auto text-gray-900">
      <h1 className="text-4xl font-bold mt-5 mb-7 text-center">
        Inicio de Sesión
      </h1>
      <fieldset className="mb-5">
        <label htmlFor="username" className="text-gray-900">
          Usuario:
        </label>
        <input
          type="text"
          id="username"
          name="username"
          required
          className="block focus:outline-none border border-gray-300 rounded px-3 py-2 w-full"
        />
      </fieldset>
      <fieldset className="mb-5">
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          className="block focus:outline-none border border-gray-300 rounded px-3 py-2 w-full"
        />
      </fieldset>
      <fieldset className="mb-5">
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 mt-5 rounded hover:bg-blue-600 cursor-pointer"
        >
          Iniciar Sesión
        </button>
      </fieldset>
      <Link href="/register" className="text-blue-500 hover:underline">
        ¿No tienes una cuenta? Regístrate
      </Link>
    </form>
  );
}
