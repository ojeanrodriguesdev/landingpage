'use client'

export default function HeroSection() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 animate-eclipse-background-hero"></div>

      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-[28px] md:text-[58px] lg:text-[58px] font-bold tracking-tight text-gray-900 sm:text-6xl">
              A Revolução <span className="text-blue-600">Digital</span> que o Seu{' '}
              <span className="text-blue-600">Negócio</span> Esperava!
            </h1>
            <h2 className="mt-6 text-[20px] sm:text-[28px] md:text-[28px] lg:text-[28px] font-semibold leading-8 text-gray-700">
              Simplifique, automatize, expanda seus resultados com nossa solução digital inovadora.
            </h2>
            <div className="flex items-center justify-center">
              <div className="bg-white w-[300px] md:w-[340px] lg:w-[400px] rounded-[20px] shadow-xl py-3 mt-10 flex flex-col items-center justify-center">
                <span className="mb-3 text-[14px] lg:text-[18px] font-semibold leading-7 ">
                  Transforme seu futuro digital hoje.
                </span>
                <a
                  href="#"
                  className="duration-300 rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Comece Agora!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
