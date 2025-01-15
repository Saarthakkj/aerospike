"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

const codeExamples = {
  java: `import com.aerospike.client.AerospikeClient;
import com.aerospike.client.Bin;
import com.aerospike.client.IAerospikeClient;
import com.aerospike.client.Key;
import com.aerospike.client.Record;

public class App {
    public static void main(String[] args) {
        try (IAerospikeClient client = new AerospikeClient("127.0.0.1", 3000)) {
            Key key = new Key("test", "dataset", 123);
            
            client.put(null, key, new Bin("foo", "bar"), new Bin("baz", "qux"));
            Record record = client.get(null, key);
            System.out.format("Record created\\nRecord: %s\\n", record.bins);
        }
    }
}`,
  csharp: `using Aerospike.Client;

class Program
{
    static void Main(string[] args)
    {
        using (var client = new AerospikeClient("127.0.0.1", 3000))
        {
            var key = new Key("test", "dataset", 123);
            var bins = new Bin[] {
                new Bin("foo", "bar"),
                new Bin("baz", "qux")
            };
            
            client.Put(null, key, bins);
            var record = client.Get(null, key);
            Console.WriteLine($"Record created\\nRecord: {record.bins}");
        }
    }
}`,
  go: `package main

import (
    "fmt"
    "log"
    
    as "github.com/aerospike/aerospike-client-go"
)

func main() {
    client, err := as.NewClient("127.0.0.1", 3000)
    if err != nil {
        log.Fatal(err)
    }
    
    key, err := as.NewKey("test", "dataset", 123)
    if err != nil {
        log.Fatal(err)
    }
    
    bins := as.BinMap{
        "foo": "bar",
        "baz": "qux",
    }
    
    err = client.Put(nil, key, bins)
    if err != nil {
        log.Fatal(err)
    }
    
    record, err := client.Get(nil, key)
    if err != nil {
        log.Fatal(err)
    }
    
    fmt.Printf("Record created\\nRecord: %v\\n", record.Bins)
}`,
  nodejs: `const Aerospike = require('aerospike')

async function main() {
    const config = {
        hosts: [{ addr: "127.0.0.1", port: 3000 }]
    }
    
    const client = await Aerospike.connect(config)
    const key = new Aerospike.Key("test", "dataset", 123)
    
    try {
        await client.put(key, {
            foo: "bar",
            baz: "qux"
        })
        
        const record = await client.get(key)
        console.log("Record created\\nRecord:", record.bins)
    } finally {
        client.close()
    }
}

main().catch(console.error)`,
  python: `import aerospike

config = {
    'hosts': [('127.0.0.1', 3000)]
}

try:
    client = aerospike.client(config).connect()
    key = ('test', 'dataset', 123)
    bins = {
        'foo': 'bar',
        'baz': 'qux'
    }
    
    client.put(key, bins)
    _, _, record = client.get(key)
    print(f"Record created\\nRecord: {record}")
except Exception as e:
    print(f"Error: {e}")
finally:
    client.close()`
}

export function CodeExampleSection() {
  const [activeTab, setActiveTab] = useState("java")

  return (
    <section className="bg-gray-800 text-white p-8 rounded-md">
      <section className="py-24 bg-[#0B1623] text-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-serif mb-8">Multi-model for developers</h2>
            <p className="text-lg mb-4">
              Aerospike Graph, utilizing Apache TinkerPop and Gremlin, suits applications that rely on
              vital data relationships, ensuring easy integration and powerful traversal capabilities.
            </p>
            <p className="text-lg mb-8">
              Support for flexible <span className="text-yellow-400">JSON document models</span> to query support to store, search, and
              manage complex, hierarchical data sets and workloads.
            </p>
            
            <div className="mt-12 rounded-lg overflow-hidden border border-gray-800">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="w-full justify-start rounded-none border-b border-gray-800 bg-[#1C2834]">
                  {Object.keys(codeExamples).map((lang) => (
                    <TabsTrigger
                      key={lang}
                      value={lang}
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-yellow-400 data-[state=active]:bg-[#1C2834]"
                    >
                      {lang.charAt(0).toUpperCase() + lang.slice(1)}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {Object.entries(codeExamples).map(([lang, code]) => (
                  <TabsContent key={lang} value={lang} className="mt-0">
                    <pre className="p-4 bg-[#0B1623] overflow-x-auto">
                      <code className="text-sm font-mono text-gray-300">{code}</code>
                    </pre>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

