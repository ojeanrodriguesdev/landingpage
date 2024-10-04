import Image from 'next/image'

export default function CTASectionTwo() {
  return (
    <div className="relative overflow-hidden w-full">
      <div className="relative z-10 w-full">
        <div className="bg-black flex items-center justify-center">
          <div className="relative isolate overflow-hidden sm:flex-col bg-black px-6 pt-16 shadow-2xl  sm:px-16 md:pt-24  lg:flex lg:-0 lg:gap-x-20 lg:px-24 xl:pt-10">
            <div className="flex items-center justify-center flex-col lg:flex-row ">
              <div className="mx-auto max-w-md text-center lg:mx-0 lg:justify-center lg:py-32 lg:text-left">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Não fique para trás
                  <br />
                  na <span className="text-blue-700">transformação</span> digital
                </h2>
                <p className="mt-6 text-lg leading-8 text-white">
                  O futuro já chegou. Empresas que implementam nossa solução crescem 3x mais rápido.
                  E a sua, <br />
                  como está se preparando?
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                  <a
                    href="#"
                    className="rounded-md bg-blue-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-900 duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Experimente agora!
                  </a>
                </div>
              </div>
              <div className="relative mt-10 h-auto lg:mt-8 lg:h-auto w-full">
                <div className="flex items-center justify-center xl:flex-2">
                  <Image
                    alt="image"
                    src="/images/CTASectionTwo/image.png"
                    width={1824}
                    height={1080}
                    priority={true}
                    loading="eager"
                    quality={100}
                    className="w-full mt-0 sm:w-[21rem] sm:mt-0 md:w-[41rem] md:mt-0 lg:w-[57rem] lg:mt-36 xl:w-[50rem] max-full rounded-md bg-white/5 ring-1 ring-white/10 lg:mb-40 lg:left-0 lg:top-0 xl:mt-10 z-20 xl:mb-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
