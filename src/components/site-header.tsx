/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Search } from 'lucide-react'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-xl font-bold text-center">Aerospike</span>
        </Link>
        <NavigationMenu className="hidden md:flex flex-1 justify-center">
          <NavigationMenuList className="space-x-2">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-center">Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li><a href="https://example.com/product1">Cool Product 1</a></li>
                  <li><a href="https://example.com/product2">Another Product</a></li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li><a href="https://example.com/solution1">Powerful Solution</a></li>
                  <li><a href="https://example.com/solution2">Future Tech</a></li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white shadow-md rounded-lg">
                  <li className="p-3 border-b border-gray-200">
                    <h3 className="font-semibold">Random Title A</h3>
                    <a href="https://example.com/blog">Our Blog</a>
                  </li>
                  <li className="p-3">
                    <h3 className="font-semibold">Random Title B</h3>
                    <a href="https://example.com/docs">Documentation</a>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Company</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white shadow-md rounded-lg">
                  <li className="p-3 border-b border-gray-200">
                    <h3 className="font-semibold">Random Title C</h3>
                    <a href="https://example.com/about">About Us</a>
                  </li>
                  <li className="p-3">
                    <h3 className="font-semibold">Random Title D</h3>
                    <a href="https://example.com/careers">Join Our Team</a>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">Contact</Button>
            <Button variant="ghost" size="sm">Login</Button>
            <Button size="sm">Try now</Button>
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}

