import Image from 'next/image'

export default function Footer() {
  const links = [
    { href: '#', label: 'Overview' },
    { href: '#', label: 'Features' },
    { href: '#', label: 'Pricing' },
    { href: '#', label: 'Careers' },
    { href: '#', label: 'Help' },
    { href: '#', label: 'Privacy' },
  ]

  return (
    <footer className="bg-black dark:bg-black">
      <div className="container flex flex-col items-center justify-around px-6 py-8 mx-auto lg:flex-row">
        <a href="#">
          <Image
            alt="App screenshot"
            src="/path/to/your-image.jpg"
            width={1824}
            height={1080}
            priority={true}
            loading="eager"
            quality={100}
            className="w-auto h-7"
          />
        </a>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-6 lg:gap-6 lg:mt-0">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <p className="my-6 text-sm text-gray-500 lg:my-6 dark:text-gray-400 font-semibold">
          © Copyright 2024 DEVCORE.
        </p>
      </div>
    </footer>
  )
}
