'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaEye, FaBullseye, FaHandshake, FaUsers, FaGlobe, FaTrophy } from 'react-icons/fa'

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20" style={{ backgroundColor: '#F8F9FA' }}>
      <div className="container-custom">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            About <span style={{ color: '#D4AF37' }}>GOLDEN EXPRO</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Your trusted partner in mining exploration, geological modelling, and strategic consulting
          </p>
        </motion.div>

        {/* Company Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-md mb-12"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Who We Are</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                GOLDEN EXPRO is a premier mining exploration and consulting company based in Tanzania, 
                specializing in exploration project management, 3D geological modelling, geometallurgical 
                modelling, and mining studies for international investors.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With years of experience in the mining industry, we provide technical support that ensures 
                your project is delivered successfully. Resource modelling forms the basis of project value 
                realisation, ensuring resource extraction, mining risks mitigation, and the realisation of 
                NPV and IRR through proper mineral resource management.
              </p>
            </div>
            <div className="flex-1">
              <div className="bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-2xl p-6 text-center">
                <FaUsers className="text-5xl text-[#D4AF37] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Expert Team</h3>
                <p className="text-gray-600">Dedicated professionals with decades of combined experience</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Vision, Mission, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-md text-center"
          >
            <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-4">
              <FaEye className="text-2xl text-[#D4AF37]" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To maintain our status as a global leader in mineral resource consulting, recognised for 
              our excellence, quality, customer satisfaction, as well as our ability to create value by 
              identifying and unlocking potential in every mining project we undertake.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-2xl p-8 shadow-md text-center"
          >
            <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-4">
              <FaBullseye className="text-2xl text-[#D4AF37]" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To create value by helping our clients achieve their strategic objectives through the 
              delivery of innovative, reliable, and cost-effective solutions for mineral exploration, 
              3D resource estimation, mine design, valuation and strategy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-md text-center"
          >
            <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-4">
              <FaHandshake className="text-2xl text-[#D4AF37]" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Values</h3>
            <p className="text-gray-600 leading-relaxed">
              Excellence, integrity, innovation, and sustainability. We adhere to the highest standards 
              of professionalism, ethics, and competence in everything we do.
            </p>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-md mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Why Choose <span className="text-[#D4AF37]">GOLDEN EXPRO</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-3">
                <FaGlobe className="text-xl text-[#D4AF37]" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Local Expertise</h4>
              <p className="text-gray-500 text-sm">Deep understanding of Tanzania's mining landscape</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-3">
                <FaTrophy className="text-xl text-[#D4AF37]" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">International Standards</h4>
              <p className="text-gray-500 text-sm">Adherence to global best practices and standards</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-3">
                <FaUsers className="text-xl text-[#D4AF37]" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Expert Team</h4>
              <p className="text-gray-500 text-sm">Highly qualified geologists and mining engineers</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="rounded-2xl p-8 border" style={{ 
            background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.08), rgba(212, 175, 55, 0.03))',
            borderColor: 'rgba(212, 175, 55, 0.15)'
          }}>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Ready to Work With Us?</h3>
            <p className="text-gray-600 mb-6">
              Let's discuss how GOLDEN EXPRO can help with your mining and exploration needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <Link href="/services" className="btn-secondary">
                Our Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}