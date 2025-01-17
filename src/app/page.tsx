"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayVideo = () => {
    setIsPlaying(true)
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#003B5C] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
              Best eBay<br />
              Lister to<br />
              Grow Your<br />
              ECommerce<br />
              Business
            </h1>
            <p className="text-lg mb-8 opacity-90">
              WonderLister - a premier eBay Seller Software - has helped
              thousands of customers manage over 20+ million listings in
              the last 7 years. Copy eBay Listings from one account to
              another with ease.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2"
          >
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl">
              <video
                className="w-full h-full"
                src="/Wonder%20Lister-1080p-240614.mp4"
                controls={isPlaying}
                autoPlay={isPlaying}
                playsInline
                preload="metadata"
              >
                Your browser does not support the video tag.
              </video>
              <AnimatePresence>
                {!isPlaying && (
                  <motion.div 
                    key="overlay"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/20"
                  >
                    <button 
                      onClick={handlePlayVideo}
                      className="absolute inset-0 w-full h-full flex items-center justify-center"
                    >
                      <div className="p-4 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
                        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              WONDERLISTER - THE BEST EBAY LISTER
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Grow your eCommerce Business with the <span className="font-semibold">Best eBay Lister</span>. WonderLister, an <span className="font-semibold">eBay Seller software</span>, has helped thousands of customers manage over 20+ million listings. WonderLister – the most viable, affordable and the <span className="font-semibold">best eBay lister</span> that you will find to replace Turbo Lister. Read what users have to say and why they simply love us to grow your eCommerce business. This tool has been used by <span className="font-semibold">some of the largest eCommerce sellers</span> in the world. Easily <span className="font-semibold">copy eBay listings from one account to another</span>, bulk edit listings easily in seconds. Design your Description Templates or bring in their party templates.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Online Version */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="text-primary">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">WonderLister Online</h3>
              </div>
              <ul className="space-y-4 text-gray-600">
                <li>• Unlimited employee accounts for global collaboration</li>
                <li>• Data lives online. Split work between team members</li>
                <li>• Kick off large workflows and let our systems do the heavy lifting</li>
                <li>• Accessible on all your devices</li>
                <li>• Get started in minutes</li>
              </ul>
              <Link 
                href="/explore-online"
                className="inline-block mt-8 px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
              >
                Explore
              </Link>
            </motion.div>

            {/* Desktop Version */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="text-primary">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">WonderLister Desktop</h3>
              </div>
              <ul className="space-y-4 text-gray-600">
                <li>• Best-in-class speed and performance</li>
                <li>• Stay in control. Your data lives on your computer</li>
                <li>• Great for local teams, all working within the same office</li>
                <li>• Runs on Windows computers</li>
                <li>• Get started in under thirty minutes</li>
              </ul>
              <Link 
                href="/explore-desktop"
                className="inline-block mt-8 px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
              >
                Explore
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
