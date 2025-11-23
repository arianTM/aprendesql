import Link from "next/link";

export default function AchievementsPage() {
  return (
    <>
      <h1 className="block text-4xl font-bold">Logros</h1>
      <div className="flex gap-20">
        <div className="mt-6 overflow-hidden rounded-lg shadow">
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-full bg-blue-900 text-white divide-y divide-blue-800">
              <thead className="bg-blue-800">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-sm font-semibold"
                  >
                    Curso
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-sm font-semibold"
                  >
                    Avance
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-sm font-semibold"
                  >
                    Detalles
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-blue-800">
                <tr>
                  <td className="px-6 py-4 text-sm">Introduccion a SQL</td>
                  <td className="px-6 py-4 text-sm text-right">100%</td>
                  <td className="px-6 py-4 text-center">
                    <Link href="/achievements/progress/introduccion-a-sql">
                      <button
                        aria-label="Ver logro"
                        className="inline-flex items-center justify-center rounded-md p-2 hover:bg-blue-800 cursor-pointer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-white"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-4.35-4.35"
                          />
                          <circle
                            cx="11"
                            cy="11"
                            r="6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </Link>
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 text-sm">
                    Sistemas de Gestion de SQL
                  </td>
                  <td className="px-6 py-4 text-sm text-right">70%</td>
                  <td className="px-6 py-4 text-center">
                    <Link href="/achievements/progress/sistemas-de-gestion-de-sql">
                      <button
                        aria-label="Ver logro"
                        className="inline-flex items-center justify-center rounded-md p-2 hover:bg-blue-800 cursor-pointer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-white"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-4.35-4.35"
                          />
                          <circle
                            cx="11"
                            cy="11"
                            r="6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </Link>
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 text-sm">
                    Consultas Basicas en SQL
                  </td>
                  <td className="px-6 py-4 text-sm text-right">0%</td>
                  <td className="px-6 py-4 text-center">
                    <Link href="/achievements/progress/consultas-basicas-en-sql">
                      <button
                        aria-label="Ver logro"
                        className="inline-flex items-center justify-center rounded-md p-2 hover:bg-blue-800 cursor-pointer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-white"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-4.35-4.35"
                          />
                          <circle
                            cx="11"
                            cy="11"
                            r="6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-6 overflow-hidden rounded-lg shadow">
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-full bg-blue-900 text-white divide-y divide-blue-800">
              <thead className="bg-blue-800">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-sm font-semibold"
                  >
                    Examen
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-sm font-semibold"
                  >
                    Resultado
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-sm font-semibold"
                  >
                    Detalles
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-blue-800">
                <tr>
                  <td className="px-6 py-4 text-sm">Introduccion a SQL</td>
                  <td className="px-6 py-4 text-sm text-right">100%</td>
                  <td className="px-6 py-4 text-center">
                    <button
                      aria-label="Ver logro"
                      className="inline-flex items-center justify-center rounded-md p-2 hover:bg-blue-800 cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-4.35-4.35"
                        />
                        <circle
                          cx="11"
                          cy="11"
                          r="6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 text-sm">
                    Sistemas de Gestion de SQL
                  </td>
                  <td className="px-6 py-4 text-sm text-right">70%</td>
                  <td className="px-6 py-4 text-center">
                    <button
                      aria-label="Ver logro"
                      className="inline-flex items-center justify-center rounded-md p-2 hover:bg-blue-800 cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-4.35-4.35"
                        />
                        <circle
                          cx="11"
                          cy="11"
                          r="6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 text-sm">
                    Consultas Basicas en SQL
                  </td>
                  <td className="px-6 py-4 text-sm text-right">0%</td>
                  <td className="px-6 py-4 text-center">
                    <button
                      aria-label="Ver logro"
                      className="inline-flex items-center justify-center rounded-md p-2 hover:bg-blue-800 cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-4.35-4.35"
                        />
                        <circle
                          cx="11"
                          cy="11"
                          r="6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
