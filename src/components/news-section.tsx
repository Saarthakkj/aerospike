import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export function NewsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-4">Latest from Aerospike</h2>
              <p className="text-xl text-gray-600">
                Learn more from technical insights and success stories.
              </p>
            </div>
            <div className="flex gap-4 mt-6 md:mt-0">
              <Button variant="outline" className="bg-navy-900 text-white hover:bg-navy-800">
                Resource library
              </Button>
              <Button variant="ghost" className="text-gray-900 hover:text-gray-600">
                Blog <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-8">
            {/* News Item 1 */}
            <Link href="#" className="block group">
              <article className="border-b border-gray-200 pb-8">
                <div className="text-red-500 mb-2">Blog</div>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-2xl font-medium mb-2 group-hover:text-red-500 transition-colors">
                      Announcing new features to boost LRU cache performance
                    </h3>
                    <p className="text-gray-600">
                      Discover how Aerospike Database 7.1 optimizes LRU cache with automated
                      touch operations, reducing unnecessary writes and boosting cache efficiency.
                    </p>
                  </div>
                  <ArrowRight className="h-6 w-6 flex-shrink-0" />
                </div>
              </article>
            </Link>

            {/* News Item 2 */}
            <Link href="#" className="block group">
              <article className="border-b border-gray-200 pb-8">
                <div className="text-red-500 mb-2">Blog</div>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-2xl font-medium mb-2 group-hover:text-red-500 transition-colors">
                      Aerospike Database 7.1 Enhances Caching and Storage Speed
                    </h3>
                    <p className="text-gray-600">
                      Discover how Aerospike Database 7.1 accelerates caching and storage solutions with
                      LRU cache evictions and optimized NVMe block storage for improved performance.
                    </p>
                  </div>
                  <ArrowRight className="h-6 w-6 flex-shrink-0" />
                </div>
              </article>
            </Link>

            {/* News Item 3 */}
            <Link href="#" className="block group">
              <article className="border-b border-gray-200 pb-8">
                <div className="text-red-500 mb-2">White Paper</div>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-2xl font-medium mb-2 group-hover:text-red-500 transition-colors">
                      Five Signs You Have Outgrown Redis
                    </h3>
                    <p className="text-gray-600">
                      What are five signs that your firm may have outgrown Redis?
                    </p>
                  </div>
                  <ArrowRight className="h-6 w-6 flex-shrink-0" />
                </div>
              </article>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

