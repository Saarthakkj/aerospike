export function StatsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4">
        <div className="grid md:grid-cols-4 gap-8 items-center">
          <div className="text-center md:text-left">
            <p className="text-gray-600 text-lg">
              Aerospike is a distributed NoSQL database with blazing-fast reads/writes and unmatched uptime.
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-red-500 mb-2">&lt;1ms</div>
            <p className="text-gray-600">Read and write times</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-red-500 mb-2">10x</div>
            <p className="text-gray-600">Ingestion volume</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-red-500 mb-2">80%</div>
            <p className="text-gray-600">Fewer servers</p>
          </div>
        </div>
      </div>
    </section>
  )
}

