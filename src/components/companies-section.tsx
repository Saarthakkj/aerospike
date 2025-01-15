"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'
import dynamic from 'next/dynamic'
import { useRef } from "react"
import Autoplay from "embla-carousel-autoplay"

const Carousel = dynamic(() => import('@/components/ui/carousel').then((mod) => mod.Carousel), {
  ssr: false,
})
const CarouselContent = dynamic(() => import('@/components/ui/carousel').then((mod) => mod.CarouselContent), {
  ssr: false,
})
const CarouselItem = dynamic(() => import('@/components/ui/carousel').then((mod) => mod.CarouselItem), {
  ssr: false,
})

export function CompaniesSection() {
  const autoplayRef = useRef(
    Autoplay({ 
      delay: 2000, 
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      rootNode: (emblaRoot) => emblaRoot.parentElement,
    })
  )

  return (
    <section className="relative py-24 bg-white mx-auto max-w-4xl -my-10 shadow-lg z-10">
      <div className="container px-4 mx-auto text-center">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-bold tracking-tight">
              Why leading companies choose Aerospike
            </h2>
            <Link 
              href="#" 
              className="inline-flex items-center mt-6 text-lg font-medium hover:text-gray-600 transition-colors"
            >
              See all customer stories
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="md:w-2/3">
            <Carousel
              plugins={[autoplayRef.current]}
              className="w-full"
              opts={{
                align: "center",
                loop: true,
                dragFree: true,
                skipSnaps: true,
              }}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {Array.from({ length: 9 }).map((_, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:w-1/3">
                    <div className="p-1">
                      <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100%" height="100%" fill="#eee"/>
                        <text x="50%" y="50%" fill="#000" fontSize="16" textAnchor="middle" dominantBaseline="middle">
                          Company {index + 1}
                        </text>
                      </svg>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}

