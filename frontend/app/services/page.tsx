'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const services = [
  {
    id: 1,
    name: 'Strategy',
    slug: 'strategy',
    description: 'Minrom\'s strategy service aims to unlock the value of a project by integrating geological and metallurgical ore characteristics, mine planning and environmental drivers of ore deposits.',
    fullDescription: 'Our strategy service helps mining companies maximize project value through integrated planning. We combine geological understanding with operational expertise to create comprehensive mine plans that optimize resource extraction while minimizing environmental impact.',
    icon: '📊',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    name: 'Exploration',
    slug: 'exploration',
    description: 'Minrom\'s Exploration services identify and evaluate mineral deposits using advanced geological exploration techniques to maximise discovery potential and investment returns.',
    fullDescription: 'We utilize cutting-edge geological exploration techniques to identify and evaluate mineral deposits with precision. Our team of expert geologists employs advanced geophysical, geochemical, and remote sensing methods to maximize discovery potential.',
    icon: '⛏️',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 3,
    name: 'Resource Modelling & GIS',
    slug: 'modelling-gis',
    description: 'Minrom\'s Modelling and GIS services integrate complex geological data, structural data and geometallurgical data into well-informed optimised mine plans, driving the increase in NPV.',
    fullDescription: 'We transform complex geological data into actionable insights using advanced 3D modelling and GIS technologies. Our integrated approach combines structural, geochemical, and geometallurgical data to create optimized mine plans that drive NPV growth.',
    icon: '🗺️',
    color: 'from-green-500 to-teal-500'
  },
  {
    id: 4,
    name: 'Mining Geology',
    slug: 'mining-geology',
    description: 'Minrom\'s Mining Geology services deliver expert integration of mine planning and grade control practices and delivers efficient ore extraction, grade control and reserve reconciliation to maximise mining efficiency.',
    fullDescription: 'Our mining geology services bridge the gap between exploration and production. We provide expert grade control, resource reconciliation, and mine planning support to ensure efficient ore extraction and maximum recovery.',
    icon: '⛰️',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 5,
    name: 'Hydrogeology',
    slug: 'hydrogeology',
    description: 'Minrom\'s Hydrology services specialise in groundwater detection, quantification, management, and sustainability solutions to support mining operations and environmental compliance.',
    fullDescription: 'We provide comprehensive hydrogeological services including groundwater detection, quantification, and sustainable management. Our solutions help mining operations maintain environmental compliance while optimizing water resource usage.',
    icon: '💧',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    id: 6,
    name: 'Training',
    slug: 'training',
    description: 'Minrom\'s Training programmes equip professionals with hands-on skills in mineral exploration, resource estimation, geological mapping, mine planning, and mining 101 for real-world mining applications.',
    fullDescription: 'Our training programs provide hands-on skills development for mining professionals. From mineral exploration to mine planning, our courses are designed to prepare teams for real-world mining applications.',
    icon: '🎓',
    color: 'from-red-500 to-orange-500'
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen py-20" style={{ backgroundColor: '#0D0E11' }}>
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span style={{ color: '#D4AF37' }}>Services</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive mining solutions from exploration to development, delivered with technical excellence
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: '#1F222A' }}
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`} />
              <div className="p-6">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{service.name}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{service.description}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center text-miningGold hover:text-miningGoldHover transition-colors font-medium"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}