import Image from 'next/image'

export default function CTASectionTwo() {
  return (
    <div className="relative py-24 sm:py-32 overflow-hidden border-t-2">
      <div className="absolute inset-0 animate-eclipse-background-hero bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 opacity-40 scale-150"></div>
      <div className="relative z-10 mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#000000" />
                <stop offset={1} stopColor="#7775D6" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Não fique para trás
              <br />
              na <span className="text-blue-700">transformação</span> digital
            </h2>
            <p className="mt-6 text-lg leading-8 text-white">
              O futuro já chegou. Empresas que implementam nossa solução crescem 3x mais rápido. E a
              sua, <br/>como está se preparando?
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Experimente agora
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <Image
              alt="App screenshot"
              src="/path/to/your-image.jpg"
              width={1824}
              height={1080}
              priority={true}
              loading="eager"
              quality={100}
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  )
}