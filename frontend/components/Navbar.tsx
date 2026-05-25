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
    icon: '📊',
    fullDescription: 'Our strategy service helps mining companies maximize project value through integrated planning. We combine geological understanding with operational expertise to create comprehensive mine plans.'
  },
  {
    id: 2,
    name: 'Exploration',
    slug: 'exploration',
    description: 'Identify and evaluate mineral deposits using advanced geological exploration techniques to maximise discovery potential.',
    icon: '⛏️',
    fullDescription: 'We utilize cutting-edge geological exploration techniques to identify and evaluate mineral deposits with precision using advanced geophysical, geochemical, and remote sensing methods.'
  },
  {
    id: 3,
    name: 'Resource Modelling & GIS',
    slug: 'modelling-gis',
    description: 'Integrate complex geological, structural and geometallurgical data into well-informed optimised mine plans.',
    icon: '🗺️',
    fullDescription: 'We transform complex geological data into actionable insights using advanced 3D modelling and GIS technologies to create optimized mine plans that drive NPV growth.'
  },
  {
    id: 4,
    name: 'Mining Geology',
    slug: 'mining-geology',
    description: 'Expert integration of mine planning and grade control practices for efficient ore extraction and reserve reconciliation.',
    icon: '⛰️',
    fullDescription: 'Our mining geology services bridge the gap between exploration and production, providing expert grade control, resource reconciliation, and mine planning support.'
  },
  {
    id: 5,
    name: 'Hydrogeology',
    slug: 'hydrogeology',
    description: 'Specialize in groundwater detection, quantification, management, and sustainability solutions for mining operations.',
    icon: '💧',
    fullDescription: 'We provide comprehensive hydrogeological services including groundwater detection, quantification, and sustainable management to support mining operations.'
  },
  {
    id: 6,
    name: 'Training',
    slug: 'training',
    description: 'Equip professionals with hands-on skills in mineral exploration, resource estimation, and mine planning.',
    icon: '🎓',
    fullDescription: 'Our training programs provide hands-on skills development for mining professionals, preparing teams for real-world mining applications.'
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

                {/* Mega Dropdown - Full Service Details */}
                {item.hasDropdown && isServicesOpen && (
                  <div className="absolute left-0 mt-2 w-[700px] bg-miningGray rounded-xl shadow-2xl border border-miningGold/20 overflow-hidden z-50">
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-miningGold font-semibold text-lg">Our Services</h3>
                        <Link
                          href="/services"
                          className="text-sm text-gray-400 hover:text-miningGold transition"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          View All Services →
                        </Link>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {services.map((service) => (
                          <Link
                            key={service.id}
                            href={`/services/${service.slug}`}
                            className="group block p-4 rounded-lg hover:bg-miningDark transition-all duration-200"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            <div className="flex items-start gap-3">
                              <div className="text-3xl">{service.icon}</div>
                              <div className="flex-1">
                                <h4 className="text-white font-semibold group-hover:text-miningGold transition text-base">
                                  {service.name}
                                </h4>
                                <p className="text-gray-400 text-sm mt-1 line-clamp-2 leading-relaxed">
                                  {service.description}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-miningGold/20">
                        <div className="bg-miningDark/50 rounded-lg p-3">
                          <p className="text-gray-300 text-sm text-center">
                            <span className="text-miningGold font-semibold">Need expert advice?</span>{' '}
                            Contact us to discuss how our services can benefit your project.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
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

        {/* Mobile Menu with Services Expandable */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-miningGold/20 max-h-[80vh] overflow-y-auto">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block py-3 text-gray-300 hover:text-miningGold transition-colors"
            >
              Home
            </Link>
            
            {/* Mobile Services Section */}
            <div>
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="w-full flex justify-between items-center py-3 text-gray-300 hover:text-miningGold transition-colors"
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
                      className="block p-3 rounded-lg hover:bg-miningGray transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-2xl">{service.icon}</div>
                        <div>
                          <div className="text-white font-medium">{service.name}</div>
                          <div className="text-gray-400 text-xs mt-1 line-clamp-2">
                            {service.description.substring(0, 80)}...
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    onClick={() => setIsOpen(false)}
                    className="block mt-2 text-miningGold text-sm text-center py-2 hover:underline"
                  >
                    View All Services →
                  </Link>
                </div>
              )}
            </div>
            
            <Link
              href="/projects"
              onClick={() => setIsOpen(false)}
              className="block py-3 text-gray-300 hover:text-miningGold transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/media"
              onClick={() => setIsOpen(false)}
              className="block py-3 text-gray-300 hover:text-miningGold transition-colors"
            >
              Media
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block py-3 text-gray-300 hover:text-miningGold transition-colors"
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
        )}
      </div>
    </nav>
  )
}

export default Navbar