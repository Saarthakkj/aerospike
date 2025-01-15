import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section 
      className="relative min-h-[80vh] flex items-center justify-center"
      // style={{
        // backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aerospike.com_%20(1)-aoWq1QEInU9Fr8O66pxWq8m8TtLL8c.png')`,
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
      // }}
    >
      <div className="absolute inset-0 bg-black/20" />
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="max-w-4xl mx-auto text-4xl font-serif md:text-6xl lg:text-7xl text-navy-900 font-medium tracking-tight">
          Build for infinite scale,{" "}
          <span className="block">speed, and savings</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-gray-800">
          The massively scalable, millisecond latency, real-time database.
        </p>
        <Button className="mt-8" size="lg">
          Try Aerospike now
        </Button>
      </div>
    </section>
  )
}

