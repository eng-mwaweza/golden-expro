'use client'

import { notFound, useParams } from 'next/navigation'
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
    benefits: [
      'Increased NPV and IRR returns',
      'Optimized resource utilization',
      'Risk mitigation strategies',
      'Environmental compliance'
    ],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    name: 'Exploration',
    slug: 'exploration',
    description: 'Minrom\'s Exploration services identify and evaluate mineral deposits using advanced geological exploration techniques to maximise discovery potential and investment returns.',
    fullDescription: 'We utilize cutting-edge geological exploration techniques to identify and evaluate mineral deposits with precision. Our team of expert geologists employs advanced geophysical, geochemical, and remote sensing methods to maximize discovery potential.',
    icon: '⛏️',
    benefits: [
      'High discovery success rate',
      'Advanced exploration methods',
      'Cost-effective programs',
      'Data-driven targeting'
    ],
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 3,
    name: 'Resource Modelling & GIS',
    slug: 'modelling-gis',
    description: 'Minrom\'s Modelling and GIS services integrate complex geological data, structural data and geometallurgical data into well-informed optimised mine plans, driving the increase in NPV.',
    fullDescription: 'We transform complex geological data into actionable insights using advanced 3D modelling and GIS technologies. Our integrated approach combines structural, geochemical, and geometallurgical data to create optimized mine plans that drive NPV growth.',
    icon: '🗺️',
    benefits: [
      'Accurate resource estimation',
      '3D geological modelling',
      'GIS spatial analysis',
      'Optimized mine planning'
    ],
    color: 'from-green-500 to-teal-500'
  },
  {
    id: 4,
    name: 'Mining Geology',
    slug: 'mining-geology',
    description: 'Minrom\'s Mining Geology services deliver expert integration of mine planning and grade control practices and delivers efficient ore extraction, grade control and reserve reconciliation to maximise mining efficiency.',
    fullDescription: 'Our mining geology services bridge the gap between exploration and production. We provide expert grade control, resource reconciliation, and mine planning support to ensure efficient ore extraction and maximum recovery.',
    icon: '⛰️',
    benefits: [
      'Improved grade control',
      'Reserve reconciliation',
      'Efficient ore extraction',
      'Production optimization'
    ],
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 5,
    name: 'Hydrogeology',
    slug: 'hydrogeology',
    description: 'Minrom\'s Hydrology services specialise in groundwater detection, quantification, management, and sustainability solutions to support mining operations and environmental compliance.',
    fullDescription: 'We provide comprehensive hydrogeological services including groundwater detection, quantification, and sustainable management. Our solutions help mining operations maintain environmental compliance while optimizing water resource usage.',
    icon: '💧',
    benefits: [
      'Groundwater detection',
      'Water management solutions',
      'Environmental compliance',
      'Sustainable practices'
    ],
    color: 'from-blue-500 to-indigo-500'
  },
  {
    id: 6,
    name: 'Training',
    slug: 'training',
    description: 'Minrom\'s Training programmes equip professionals with hands-on skills in mineral exploration, resource estimation, geological mapping, mine planning, and mining 101 for real-world mining applications.',
    fullDescription: 'Our training programs provide hands-on skills development for mining professionals. From mineral exploration to mine planning, our courses are designed to prepare teams for real-world mining applications.',
    icon: '🎓',
    benefits: [
      'Hands-on training',
      'Expert instructors',
      'Practical applications',
      'Certificate programs'
    ],
    color: 'from-red-500 to-orange-500'
  },
]

export default function ServiceDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  
  const service = services.find(s => s.slug === slug)
  
  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen py-20" style={{ backgroundColor: '#0D0E11' }}>
      <div className="container-custom">
        {/* Back Button */}
        <Link
          href="/services"
          className="inline-flex items-center text-gray-400 hover:text-miningGold transition-colors mb-8"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Services
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className={`inline-block p-4 rounded-2xl bg-gradient-to-r ${service.color} bg-opacity-10 mb-6`}>
            <span className="text-6xl">{service.icon}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span style={{ color: '#D4AF37' }}>{service.name}</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {service.description}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="rounded-xl p-8" style={{ backgroundColor: '#1F222A' }}>
              <h2 className="text-2xl font-semibold mb-4 text-miningGold">Overview</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                {service.fullDescription}
              </p>
              <h2 className="text-2xl font-semibold mb-4 text-miningGold">Why Choose Our {service.name} Service?</h2>
              <p className="text-gray-300 leading-relaxed">
                With years of experience in the mining industry, our team delivers exceptional results through
                technical expertise, innovative solutions, and commitment to excellence. We work closely with our
                clients to understand their unique challenges and develop tailored strategies that drive success.
              </p>
            </div>
          </div>

          {/* Sidebar - Benefits */}
          <div>
            <div className="rounded-xl p-8" style={{ backgroundColor: '#1F222A' }}>
              <h3 className="text-xl font-semibold mb-4 text-miningGold">Key Benefits</h3>
              <ul className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <svg className="w-5 h-5 text-miningGold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-gray-700">
                <Link
                  href="/contact"
                  className="block w-full text-center btn-primary"
                >
                  Request a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}