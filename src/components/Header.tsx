"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const Header = () => {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto h-24">
        <nav className="h-full flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center">
              <Image
                src="/header-logo.jpg"
                alt="WonderLister Logo"
                width={240}
                height={53}
                className="h-24 w-auto"
                priority
              />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-8"
          >
            <Link 
              href="/products"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Products
            </Link>
            <Link 
              href="/testimonials"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Testimonials
            </Link>
            <Link 
              href="/contact"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>
        </nav>
      </div>
    </header>
  )
}

export default Header 