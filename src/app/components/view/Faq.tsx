export default function Faq() {
  const faqs = [
    {
      question: 'Lorem ipsum dolor sit amet consectetur adipisicing?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!',
    },
    {
      question: 'Another common question that people ask?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae odio ullamcorper, venenatis justo a, lacinia nulla.',
    },
    {
      question: 'Can I use this in my project?',
      answer: 'Absolutely! Feel free to integrate this FAQ component in any of your projects.',
    },
    {
      question: 'What is the refund policy?',
      answer:
        'We offer a 30-day money-back guarantee. If you are not satisfied, you can request a full refund.',
    },
  ]

  return (
    <div className="relative space-y-4 p-6 md:px-40 xl:px-60 z-10">
      <div className="absolute inset-0 animate-eclipse-background-faq"></div>
      <div className="flex flex-col justify-center items-center pt-5 z-10">
        <h1 className="font-bold drop-shadow-lg text-gray-900 text-[24px] leading-relaxed z-10">
          FAQ
        </h1>
        <span className="font-semibold drop-shadow-lg text-gray-900 text-[20px] leading-relaxed z-10">
          Perguntas Frequentes:
        </span>
      </div>

      {faqs.map((faq, index) => (
        <details
          key={index}
          className="group shadow-xl border-2 border-slate-400/20 rounded-lg bg-gray-300 p-6 [&_summary::-webkit-details-marker]:hidden z-10"
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-black font-semibold z-10">
            <h2 className="font-semibold z-10">{faq.question}</h2>

            <span className="relative size-5 shrink-0 z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="z-10 absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 size-5 opacity-0 group-open:opacity-100 z-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 mb-4 leading-relaxed font-normal text-gray-900 z-10">{faq.answer}</p>
        </details>
      ))}
    </div>
  )
}
