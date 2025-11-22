export default function ChatbotPage() {
  return (
    <>
      <h1 className="block text-4xl font-bold">Chatbot</h1>

      <div className="mx-auto mt-8 max-w-3xl rounded-xl bg-white/70 shadow-lg ring-1 ring-black/5 dark:bg-slate-900">
        <header className="flex items-center justify-between gap-4 rounded-t-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-3 text-white">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center text-sm font-semibold">
              CB
            </div>
            <div>
              <h2 className="text-lg font-semibold">Chatbot</h2>
              <p className="text-xs opacity-90">
                Asistente conversacional — prueba preguntas o ejemplos
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="rounded-md bg-white/10 px-3 py-1 text-sm hover:bg-white/20">
              Nuevo
            </button>
            <button className="rounded-md bg-white/10 px-3 py-1 text-sm hover:bg-white/20">
              Borrar
            </button>
          </div>
        </header>

        <main className="flex h-[580px] flex-col">
          <div
            className="flex-1 overflow-y-auto px-4 py-6 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent"
            role="log"
            aria-live="polite"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="h-9 w-9 flex-shrink-0 rounded-full bg-indigo-500/90 text-white grid place-items-center font-medium">
                  A
                </div>
                <div className="max-w-[75%] rounded-xl bg-indigo-50 px-4 py-2 text-sm text-slate-800 dark:bg-indigo-900/40 dark:text-slate-100">
                  ¡Hola! Soy tu asistente. ¿En qué puedo ayudarte hoy?
                  <div className="mt-1 text-xs text-slate-500">10:00</div>
                </div>
              </div>

              <div className="flex justify-end">
                <div className="max-w-[70%] rounded-xl bg-indigo-600/90 px-4 py-2 text-sm text-white">
                  Quiero ejemplos de consultas SQL básicas.
                  <div className="mt-1 text-xs text-indigo-100/80 text-right">
                    10:01
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-9 w-9 flex-shrink-0 rounded-full bg-indigo-500/90 text-white grid place-items-center font-medium">
                  A
                </div>
                <div className="max-w-[75%] rounded-xl bg-indigo-50 px-4 py-2 text-sm text-slate-800 dark:bg-indigo-900/40 dark:text-slate-100">
                  Claro. Por ejemplo:
                  <pre className="mt-2 rounded-md bg-slate-100 p-3 text-xs text-slate-800 dark:bg-slate-800 dark:text-slate-100">
                    SELECT * FROM usuarios WHERE edad &gt; 30;
                  </pre>
                  <div className="mt-1 text-xs text-slate-500">10:02</div>
                </div>
              </div>
            </div>
          </div>

          <form className="border-t px-4 py-3">
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="hidden rounded-md p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 md:inline-flex"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.172 7l-6.586 6.586a2 2 0 11-2.828-2.828L12.344 4.172"
                  />
                </svg>
              </button>

              <textarea
                rows={1}
                placeholder="Escribe un mensaje..."
                className="flex-1 resize-none rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:placeholder:text-slate-500"
              />

              <button
                type="submit"
                className="ml-2 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
                Enviar
              </button>
            </div>

            <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
              <span>
                Presiona Enter para enviar • Shift+Enter para nueva línea
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="rounded-md px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Ejemplo 1
                </button>
                <button
                  type="button"
                  className="rounded-md px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Ejemplo 2
                </button>
              </div>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}
