import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Database, Zap, Shield, Clock } from 'lucide-react'

export function FeaturesSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Aerospike can do for you
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card>
            <CardContent className="pt-6">
              <Database className="h-10 w-10 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Managed Aerospike</h3>
              <p className="text-gray-600">
                Deploy Aerospike clusters in minutes with our fully managed service
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <Zap className="h-10 w-10 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-time Performance</h3>
              <p className="text-gray-600">
                Consistent sub-millisecond performance at any scale
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <Shield className="h-10 w-10 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
              <p className="text-gray-600">
                Advanced security features for enterprise deployments
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <Clock className="h-10 w-10 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock expert support for your mission-critical applications
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

