'use client'

import Link from 'next/link'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'
import { FaChevronDown } from 'react-icons/fa'

// Static services data with full details for mega dropdown
const services = [
  {
    id: 1,
    name: 'Strategy',
    slug: 'strategy',
    description: 'Unlock project value by integrating geological and metallurgical ore characteristics, mine planning and environmental drivers.',
    fullDescription: 'Our strategy service helps mining companies maximize project value through integrated planning. We combine geological understanding with operational expertise to create comprehensive mine plans that optimize resource extraction while minimizing environmental impact.',
    icon: '📊',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    name: 'Exploration',
    slug: 'exploration',
    description: 'Identify and evaluate mineral deposits using advanced geological exploration techniques to maximise discovery potential.',
    fullDescription: 'We utilize cutting-edge geological exploration techniques to identify and evaluate mineral deposits with precision. Our team of expert geologists employs advanced geophysical, geochemical, and remote sensing methods to maximize discovery potential.',
    icon: '⛏️',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 3,
    name: 'Resource Modelling & GIS',
    slug: 'modelling-gis',
    description: 'Integrate complex geological, structural and geometallurgical data into well-informed optimised mine plans.',
    fullDescription: 'We transform complex geological data into actionable insights using advanced 3D modelling and GIS technologies. Our integrated approach combines structural, geochemical, and geometallurgical data to create optimized mine plans that drive NPV growth.',
    icon: '🗺️',
    color: 'from-green-500 to-teal-500'
  },
  {
    id: 4,
    name: 'Mining Geology',
    slug: 'mining-geology',
    description: 'Expert integration of mine planning and grade control practices for efficient ore extraction and reserve reconciliation.',
    fullDescription: 'Our mining geology services bridge the gap between exploration and production. We provide expert grade control, resource reconciliation, and mine planning support to ensure efficient ore extraction and maximum recovery.',
    icon: '⛰️',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 5,
    name: 'Hydrogeology',
    slug: 'hydrogeology',
    description: 'Specialize in groundwater detection, quantification, management, and sustainability solutions for mining operations.',
    fullDescription: 'We provide comprehensive hydrogeological services including groundwater detection, quantification, and sustainable management. Our solutions help mining operations maintain environmental compliance while optimizing water resource usage.',
    icon: '💧',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    id: 6,
    name: 'Training',
    slug: 'training',
    description: 'Equip professionals with hands-on skills in mineral exploration, resource estimation, and mine planning.',
    fullDescription: 'Our training programs provide hands-on skills development for mining professionals. From mineral exploration to mine planning, our courses are designed to prepare teams for real-world mining applications.',
    icon: '🎓',
    color: 'from-red-500 to-orange-500'
  },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#', hasDropdown: true },
    { name: 'Projects', href: '/projects' },
    { name: 'Media', href: '/media' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <>
      <nav className="bg-miningDark/95 backdrop-blur-md fixed w-full z-50 border-b border-miningGold/20">
        <div className="container-custom">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-miningGold rounded-md flex items-center justify-center">
                <span className="text-miningDark font-bold text-xl">GE</span>
              </div>
              <span className="text-white font-display font-bold text-xl hidden sm:inline">
                GOLDEN <span className="text-miningGold">EXPRO</span>
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setIsServicesOpen(true)}
                  onMouseLeave={() => item.hasDropdown && setIsServicesOpen(false)}
                >
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-miningGold transition-colors duration-300 font-medium flex items-center gap-1"
                  >
                    {item.name}
                    {item.hasDropdown && <FaChevronDown className="text-xs" />}
                  </Link>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link href="/contact" className="btn-primary py-2 px-4">
                Partner With Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white text-2xl"
            >
              {isOpen ? <IoClose /> : <GiHamburgerMenu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Full-Width Mega Dropdown - Separate from nav */}
      {isServicesOpen && (
        <div 
          className="fixed left-0 right-0 top-20 z-40 bg-miningGray/95 backdrop-blur-md border-b border-miningGold/20 shadow-2xl"
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}
        >
          <div className="container-custom py-8">
            {/* Header */}
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-miningGold/20">
              <h3 className="text-miningGold font-semibold text-xl">Our Services</h3>
              <Link
                href="/services"
                className="text-gray-400 hover:text-miningGold transition text-sm flex items-center gap-1"
              >
                View All Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Services Grid - 2 rows of 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="group block p-5 rounded-xl bg-miningDark hover:bg-miningDark/70 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{service.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold group-hover:text-miningGold transition text-lg mb-2">
                        {service.name}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                        {service.description}
                      </p>
                      <div className="mt-3 inline-flex items-center text-miningGold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn more
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-8 pt-6 border-t border-miningGold/20">
              <div className="bg-miningDark/50 rounded-lg p-4 text-center">
                <p className="text-gray-300">
                  <span className="text-miningGold font-semibold">Need expert advice?</span>{' '}
                  Contact us to discuss how our services can benefit your project.
                </p>
                <Link
                  href="/contact"
                  className="inline-block mt-3 text-miningGold hover:underline text-sm"
                >
                  Request a Consultation →
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-miningDark/95 backdrop-blur-md overflow-y-auto md:hidden">
          <div className="container-custom py-4">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block py-3 text-gray-300 hover:text-miningGold transition-colors text-lg"
            >
              Home
            </Link>
            
            {/* Mobile Services Section */}
            <div>
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="w-full flex justify-between items-center py-3 text-gray-300 hover:text-miningGold transition-colors text-lg"
              >
                <span>Services</span>
                <FaChevronDown className={`text-xs transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isMobileServicesOpen && (
                <div className="pl-4 pb-2 space-y-3">
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      href={`/services/${service.slug}`}
                      onClick={() => {
                        setIsOpen(false)
                        setIsMobileServicesOpen(false)
                      }}
                      className="block p-3 rounded-lg bg-miningGray hover:bg-miningGray/70 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-3xl">{service.icon}</div>
                        <div>
                          <div className="text-white font-medium">{service.name}</div>
                          <div className="text-gray-400 text-sm mt-1 line-clamp-2">
                            {service.description}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    onClick={() => setIsOpen(false)}
                    className="block mt-2 text-miningGold text-center py-2 hover:underline"
                  >
                    View All Services →
                  </Link>
                </div>
              )}
            </div>
            
            <Link
              href="/projects"
              onClick={() => setIsOpen(false)}
              className="block py-3 text-gray-300 hover:text-miningGold transition-colors text-lg"
            >
              Projects
            </Link>
            <Link
              href="/media"
              onClick={() => setIsOpen(false)}
              className="block py-3 text-gray-300 hover:text-miningGold transition-colors text-lg"
            >
              Media
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block py-3 text-gray-300 hover:text-miningGold transition-colors text-lg"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block mt-4 btn-primary text-center"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar