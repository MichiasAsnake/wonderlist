'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-[#003B5C] text-white py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-poppins font-bold text-xl mb-4">wonderlister</h3>
            <p className="text-gray-300 mb-4">
              Manage all your listing for multiple eBay accounts and multiple eBay sites with a single login. Create eBay listings, item, submit to eBay site listing fees including UK, US, Canada, Australia, Germany, Singapore, HongKong, India and others.
            </p>
            <p className="text-sm text-gray-400">
              Copyright © 2024 wonderlister.com<br />
              All Rights Reserved.
            </p>
          </motion.div>

          {/* Useful Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:ml-12"
          >
            <h3 className="font-bold text-xl mb-6">Useful Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/testimonials" className="text-gray-300 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-gray-300 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/employment" className="text-gray-300 hover:text-white transition-colors">
                  Employment
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/ca-privacy" className="text-gray-300 hover:text-white transition-colors">
                  CA Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
                  Terms Of Use
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="text-gray-300 hover:text-white transition-colors">
                  Sitemap
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-xl mb-6">Contact Us</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 bg-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-2 bg-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <select className="w-full px-4 py-2 bg-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-white/20">
                <option value="">Category</option>
                <option value="support">Support</option>
                <option value="sales">Sales</option>
                <option value="other">Other</option>
              </select>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-2 bg-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-white/20"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-white text-primary font-semibold py-2 rounded-md hover:bg-white/90 transition-colors"
              >
                Send
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 