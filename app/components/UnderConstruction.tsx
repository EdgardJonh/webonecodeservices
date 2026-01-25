export default function UnderConstruction() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-gray-50 dark:from-gray-900 dark:via-black dark:to-gray-900">
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          {/* Logo o nombre de la empresa */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-blue-600 dark:text-blue-500 mb-4">
              OneCodeServices
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto dark:bg-blue-500"></div>
          </div>

          {/* Icono de construcción */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-6">
              <svg
                className="w-16 h-16 text-blue-600 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </div>

          {/* Título principal */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Página en Construcción
          </h2>

          {/* Descripción */}
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            Estamos trabajando en algo increíble
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            Pronto estaremos listos para ofrecerte nuestros servicios de
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              {" "}creación de sistemas{" "}
            </span>
            y
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              {" "}desarrollo de páginas web{" "}
            </span>
            para empresas.
          </p>

          {/* Información de contacto */}
          <div className="mt-12 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <span className="font-semibold text-gray-900 dark:text-white">
                ¿Necesitas nuestros servicios ahora?
              </span>
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Contáctanos y te ayudaremos a llevar tu negocio al siguiente nivel
            </p>
          </div>

          {/* Decoración */}
          <div className="mt-12 flex justify-center space-x-2">
            <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
