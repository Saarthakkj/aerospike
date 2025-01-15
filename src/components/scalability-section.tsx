import { Database, Network, Leaf, ArrowRight } from 'lucide-react'
import Link from "next/link"

export function ScalabilitySection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            Infinite scalability, lowest latency, lowest costs
          </h2>
          <p className="text-xl text-gray-600 mb-16">
            Count on the real-time database that&apos;s always on – globally.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-lg p-8 group">
              <div className="mb-6">
                <Database className="w-12 h-12 text-navy-900 stroke-[1.5]" />
              </div>
              <h3 className="text-2xl font-medium mb-4">
                Grow from gigabytes to petabytes without tradeoffs
              </h3>
              <p className="text-gray-600 mb-6">
                Predictable and consistent performance, for any amount of data.
              </p>
              <Link 
                href="#"
                className="inline-flex items-center text-lg font-medium group-hover:text-gray-600 transition-colors relative"
              >
                How we make it happen
                <ArrowRight className="ml-2 h-5 w-5" />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg p-8 group">
              <div className="mb-6">
                <Network className="w-12 h-12 text-navy-900 stroke-[1.5]" />
              </div>
              <h3 className="text-2xl font-medium mb-4">
                Do more with sub-millisecond access
              </h3>
              <p className="text-gray-600 mb-6">
                See how our patented Hybrid Memory Architecture™ helps you work faster.
              </p>
              <Link 
                href="#"
                className="inline-flex items-center text-lg font-medium group-hover:text-gray-600 transition-colors relative"
              >
                All about HMA
                <ArrowRight className="ml-2 h-5 w-5" />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg p-8 group">
              <div className="mb-6">
                <Leaf className="w-12 h-12 text-navy-900 stroke-[1.5]" />
              </div>
              <h3 className="text-2xl font-medium mb-4">
                Meet sustainability and profitability goals
              </h3>
              <p className="text-gray-600 mb-6">
                Use fewer servers than ever before to reduce your carbon footprint and infrastructure costs.
              </p>
              <Link 
                href="#"
                className="inline-flex items-center text-lg font-medium group-hover:text-gray-600 transition-colors relative"
              >
                Too good to be true?
                <ArrowRight className="ml-2 h-5 w-5" />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

