'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    name: 'Mia Brown',
    role: 'Marketer',
    imageUrl: '/',
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, quam. Odio voluptatem officiis eos illo! Pariatur, totam alias.',
  },
  {
    id: 2,
    name: 'John Doe',
    role: 'Developer',
    imageUrl: '/',
    feedback:
      'Ea voluptates fugiat corrupti laudantium dolores reiciendis pariatur esse quod nihil quia cupiditate debitis quisquam nemo.',
  },
]

const AUTO_PLAY_INTERVAL = 5000

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null)

  const handlePrevious = useCallback(() => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }, [])

  const handleNext = useCallback(() => {
    setCurrentIndex(prevIndex => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }, [])

  const resetAutoPlayTimer = useCallback(() => {
    if (autoPlayTimerRef.current) {
      clearTimeout(autoPlayTimerRef.current)
    }
    if (!isPaused) {
      autoPlayTimerRef.current = setTimeout(() => {
        handleNext()
      }, AUTO_PLAY_INTERVAL)
    }
  }, [handleNext, isPaused])

  useEffect(() => {
    resetAutoPlayTimer()
    return () => {
      if (autoPlayTimerRef.current) {
        clearTimeout(autoPlayTimerRef.current)
      }
    }
  }, [currentIndex, isPaused, resetAutoPlayTimer])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    setIsPaused(true)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }


  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      handleNext()
    }
    if (touchEndX.current - touchStartX.current > 50) {
      handlePrevious()
    }

    setTimeout(() => {
      setIsPaused(false)
    }, 1000)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="bg-white dark:bg-black">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          Depoimentos de clientes
        </h1>

        <div className="flex justify-center mx-auto mt-6">
          <span className="inline-block w-40 h-1 bg-blue-700 rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-blue-700 rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-blue-700 rounded-full"></span>
        </div>

        <div
          className="flex items-start justify-center max-w-6xl mx-auto mt-16 touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <button
            onClick={() => {
              handlePrevious()
              setIsPaused(true)
              setTimeout(() => setIsPaused(false), 1000)
            }}
            title="Previous"
            className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:block hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 lg:w-6 h-3 lg:h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="text-center lg:mx-8">
            <p className="flex items-center text-center text-white/80 transition-opacity duration-300">
              {currentTestimonial.feedback}
            </p>

            <div className="flex flex-col items-center justify-center mt-8">
              <Image
                className="object-cover rounded-full"
                src={currentTestimonial.imageUrl}
                alt={currentTestimonial.name}
                width={56}
                height={56}
              />

              <div className="mt-4 text-center">
                <h1 className="font-semibold text-gray-800 dark:text-white">
                  {currentTestimonial.name}
                </h1>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {currentTestimonial.role}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              handleNext()
              setIsPaused(true)
              setTimeout(() => setIsPaused(false), 1000)
            }}
            title="Next"
            className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:block hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 lg:w-6 h-3 lg:h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
