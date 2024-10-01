import Image from 'next/image'

export default function CTASection() {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 lg:py-12 lg:flex lg:justify-center">
      <div className="overflow-hidden bg-white dark:bg-black lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
        <div className="lg:w-1/2">
          <Image
            src="/"
            alt="Background Image"
            width={1470}
            height={980}
            priority={true}
            loading="eager"
            quality={100}
            className="h-64 w-full object-cover lg:h-full"
          />
        </div>

        <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
          <h2 className="text-[2xl] font-bold text-gray-800 dark:text-white md:text-[24px]">
            Está pronto para sua <span className="text-blue-500">transformação</span> digital?
          </h2>

          <p className="mt-4 text-gray-500 dark:text-gray-300 font-semibold">
            Nossa solução abrange todos os nichos, desde e-commerce até consultoria, oferecendo
            automação, performance e crescimento instantâneo.
          </p>

          <div className="inline-flex w-full mt-6 sm:w-auto">
            <a
              href="#"
              className="inline-flex items-center justify-center w-full px-6 font-bold py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
            >
              Descubra como
            </a>
          </div>
        </div>    
      </div>
    </section>
  )
}
