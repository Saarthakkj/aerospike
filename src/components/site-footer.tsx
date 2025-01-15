import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Github, 
  Youtube, 
  Twitter, 
  Linkedin 
} from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="bg-[#0B1623] text-white py-16 text-left">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
          <div>
            <h3 className="font-semibold mb-4 text-yellow-400">About</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Legal notices</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Privacy policy</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Terms of service</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Marketing preference center</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Update Cookie Preferences</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-yellow-400">Support</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Support portal</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Knowledge base</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Community forum</Link></li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="flex flex-col h-full justify-between">
              <div>
                <p className="text-yellow-400 font-semibold mb-2">(+1) 408-462-AERO (2376)</p>
                <p className="text-gray-300">
                  2440 W. El Camino Real, Suite 100<br />
                  Mountain View, CA 94040
                </p>
                <Button variant="outline" className="mt-4 border-gray-600 text-black hover:bg-yellow-400">
                  Contact us
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link href="#" className="text-gray-400 hover:text-white">
              <Github className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Youtube className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>
          <div className="text-sm text-gray-400">
            <p>© 2025 Aerospike, Inc. – All rights reserved</p>
            <p>Aerospike® is a registered trademark of Aerospike, Inc.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

