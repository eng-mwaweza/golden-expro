'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'
import { FaChevronDown } from 'react-icons/fa'

// Static services data with full details for mega dropdown
const services = [
  {
    id: 1,
    name: 'Strategy',
    slug: 'strategy',
    description: 'Minrom\'s strategy service aims to unlock the value of a project by integrating geological and metallurgical ore characteristics, mine planning and environmental drivers of ore deposits.',
    fullDescription: 'We combine geological and geometallurgical expertise with strategic planning to optimise resource utilisation, improve operational efficiency, and enhance project viability. From feasibility studies to life-of-mine planning, we help clients navigate complex geological, technical, and economic challenges.',
    icon: '📊',
    color: 'border-blue-500'
  },
  {
    id: 2,
    name: 'Exploration',
    slug: 'exploration',
    description: 'Minrom\'s Exploration services identify and evaluate mineral deposits using advanced geological exploration techniques to maximise discovery potential and investment returns.',
    fullDescription: 'We provide junior explorers or prospecting companies with the expertise and tools needed to discover and define valuable mineral resources. Whether it\'s mineral target generation, structural geology analysis, geometallurgical characterisation, or prospecting work programme development.',
    icon: '⛏️',
    color: 'border-yellow-500'
  },
  {
    id: 3,
    name: 'Resource Modelling & GIS',
    slug: 'modelling-gis',
    description: 'Transform complex geological data into actionable insights, enabling precise Mineral Resource estimation and strategic decision-making.',
    fullDescription: 'Using advanced geological modelling and Geographic Information Systems (GIS), we create highly detailed 3D resource models that accurately represent subsurface conditions to drive increase in NPV.',
    icon: '🗺️',
    color: 'border-green-500'
  },
  {
    id: 4,
    name: 'Mining Geology',
    slug: 'mining-geology',
    description: 'Bridge the gap between exploration and operational success with expert grade control, structural geology analysis, and reconciliation.',
    fullDescription: 'We turn geological data into actionable intelligence, ensuring sustainable and efficient mining practices. From grade control to reconciliation, we ensure you extract maximum value from your mineral resources.',
    icon: '⛰️',
    color: 'border-purple-500'
  },
  {
    id: 5,
    name: 'Hydrogeology',
    slug: 'hydrogeology',
    description: 'Specialise in the detection, quantification, and management of valuable groundwater resources for mining operations.',
    fullDescription: 'Our hydrogeology services provide critical insights into groundwater availability, movement, and quality, helping clients mitigate risks, optimise resource use, and comply with environmental regulations.',
    icon: '💧',
    color: 'border-cyan-500'
  },
  {
    id: 6,
    name: 'Training',
    slug: 'training',
    description: 'Equip exploration and mining professionals with the knowledge and practical skills needed to excel in the field.',
    fullDescription: 'From mapping and geological modelling to grade control and mining 101, we help professionals master real-world mining applications and drive NPV growth for your project.',
    icon: '🎓',
    color: 'border-orange-500'
  },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsServicesOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false)
    }, 300) // 300ms delay before closing
  }

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

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
                onMouseEnter={item.hasDropdown ? handleMouseEnter : undefined}
                onMouseLeave={item.hasDropdown ? handleMouseLeave : undefined}
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

      {/* FULL SCREEN MEGA DROPDOWN - Appears when hovering over Services */}
      {isServicesOpen && (
        <div 
          className="hidden md:block fixed left-0 right-0 top-20 bg-miningGray/95 backdrop-blur-md border-b border-miningGold/20 shadow-2xl z-40"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ minHeight: 'auto', maxHeight: '80vh', overflowY: 'auto' }}
        >
          <div className="container-custom py-8">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-miningGold/20">
              <h2 className="text-2xl font-display font-bold">
                <span className="text-miningGold">Our</span> Services
              </h2>
              <Link
                href="/services"
                className="text-gray-400 hover:text-miningGold transition-colors text-sm"
                onClick={() => setIsServicesOpen(false)}
              >
                View All Services →
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className={`group block p-6 rounded-xl bg-miningDark/50 border-l-4 ${service.color} hover:bg-miningDark transition-all duration-300 hover:transform hover:scale-[1.02]`}
                  onClick={() => setIsServicesOpen(false)}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{service.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white group-hover:text-miningGold transition-colors mb-2">
                        {service.name}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-3">
                        {service.description}
                      </p>
                      <p className="text-gray-500 text-xs leading-relaxed">
                        {service.fullDescription.substring(0, 120)}...
                      </p>
                      <div className="mt-3 inline-flex items-center text-miningGold text-sm font-medium group-hover:underline">
                        Learn More
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Bottom CTA Section */}
            <div className="mt-8 pt-6 border-t border-miningGold/20">
              <div className="bg-miningDark/50 rounded-xl p-6 text-center">
                <p className="text-gray-300">
                  <span className="text-miningGold font-semibold text-lg">Ready to discuss your next project?</span>
                  <br />
                  <span className="text-gray-400">Our team of experts is ready to help you achieve your mining goals.</span>
                </p>
                <Link
                  href="/contact"
                  onClick={() => setIsServicesOpen(false)}
                  className="inline-block mt-4 btn-primary"
                >
                  Request a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar