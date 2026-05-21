'use client'

import Link from 'next/link'
import { FaHardHat, FaChartLine, FaMap, FaWater, FaGraduationCap } from 'react-icons/fa'

export default function Home() {
  const services = [
    { icon: FaHardHat, title: 'Exploration', description: 'Mineral exploration and prospecting services' },
    { icon: FaChartLine, title: 'Strategy', description: 'Mining strategy and feasibility studies' },
    { icon: FaMap, title: 'Modelling & GIS', description: '3D geological modelling and mapping' },
    { icon: FaWater, title: 'Hydrogeology', description: 'Groundwater detection and management' },
    { icon: FaGraduationCap, title: 'Training', description: 'Geology and mining training programs' },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center" style={{ backgroundColor: '#0D0E11' }}>
        <div className="container-custom">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span style={{ color: '#D4AF37' }}>Your Partner in Mining.</span>
            <br />
            <span className="text-white">From Strategy to Success.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Premium mining exploration and consulting services for international investors. 
            From grassroots exploration to full-scale production.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Partner With Us
            </Link>
            <Link href="/services" className="btn-secondary">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20" style={{ backgroundColor: '#1F222A' }}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span style={{ color: '#D4AF37' }}>Services</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive mining solutions from exploration to development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-miningDark rounded-lg p-6 card-hover cursor-pointer"
                style={{ backgroundColor: '#0D0E11' }}
              >
                <service.icon style={{ color: '#D4AF37', fontSize: '2.5rem', marginBottom: '1rem' }} />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20" style={{ backgroundColor: '#0D0E11' }}>
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: '#D4AF37' }}>15+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: '#D4AF37' }}>50+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: '#D4AF37' }}>25+</div>
              <div className="text-gray-400">Expert Geologists</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: '#D4AF37' }}>10+</div>
              <div className="text-gray-400">Countries Served</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}