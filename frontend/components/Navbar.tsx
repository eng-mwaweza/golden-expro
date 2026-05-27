'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'
import { FaChevronDown } from 'react-icons/fa'
import { 
  FaChartLine, 
  FaHardHat, 
  FaMap, 
  FaMountain, 
  FaWater, 
  FaGraduationCap 
} from 'react-icons/fa'

// Services with FULL DETAILS (4+ lines of description)
const services = [
  { 
    id: 1, 
    name: 'Mining Strategy', 
    slug: 'mining-strategy', 
    icon: FaChartLine,
    iconColor: 'text-blue-500',
    description: 'GOLDEN EXPRO\'s mining strategy services provide mining companies with the insights and direction needed to make informed, long-term decisions that maximize project value.',
    fullDescription: 'We combine geological and geometallurgical expertise with strategic planning to optimise resource utilisation, improve operational efficiency, and enhance project viability. From feasibility studies to life-of-mine planning, we help clients navigate complex geological, technical, and economic challenges. Our tailored strategies ensure that mining projects are not only profitable but also sustainable, aligning with industry best practices and regulatory requirements.'
  },
  { 
    id: 2, 
    name: 'Mineral Exploration', 
    slug: 'mineral-exploration', 
    icon: FaHardHat,
    iconColor: 'text-yellow-500',
    description: 'GOLDEN EXPRO\'s mineral exploration services help junior explorers and mining companies discover and define valuable mineral resources across Tanzania and beyond.',
    fullDescription: 'We provide junior explorers and mining companies with the expertise and tools needed to discover and define valuable mineral resources. Whether it\'s mineral target generation, structural geology analysis, geometallurgical characterisation, or prospecting work programme development, we work closely with our clients to turn geological data into actionable intelligence, ensuring sustainable and efficient mining practices.'
  },
  { 
    id: 3, 
    name: '3D Modelling & GIS', 
    slug: 'modelling-gis', 
    icon: FaMap,
    iconColor: 'text-green-500',
    description: 'GOLDEN EXPRO\'s modelling and GIS services transform complex geological data into actionable insights, enabling precise Mineral Resource estimation.',
    fullDescription: 'Our Modelling and GIS services transform complex geological data into actionable insights, enabling precise Mineral Resource estimation and strategic decision-making. Using advanced geological modelling and Geographic Information Systems (GIS), we create highly detailed 3D resource models that accurately represent subsurface conditions. This integrated approach ensures that your mining operations are based on the most accurate and comprehensive data available, driving significant increases in project NPV.'
  },
  { 
    id: 4, 
    name: 'Mining Geology', 
    slug: 'mining-geology', 
    icon: FaMountain,
    iconColor: 'text-purple-500',
    description: 'GOLDEN EXPRO\'s mining geology services bridge the gap between exploration and operational success for efficient ore extraction.',
    fullDescription: 'At GOLDEN EXPRO, our Mining Geology services are designed to bridge the gap between exploration and operational success. Whether it\'s grade control, structural geology analysis, geometallurgical modelling or reconciliation, we work closely with clients to turn geological data into actionable intelligence, ensuring sustainable and efficient mining practices. With GOLDEN EXPRO, you don\'t just extract minerals; you extract maximum value from your resource.'
  },
  { 
    id: 5, 
    name: 'Hydrogeology', 
    slug: 'hydrogeology', 
    icon: FaWater,
    iconColor: 'text-cyan-500',
    description: 'GOLDEN EXPRO\'s hydrogeology services specialise in groundwater detection, management, and sustainability solutions for mining operations.',
    fullDescription: 'GOLDEN EXPRO Hydrogeology specialises in the detection, quantification, and management of valuable groundwater and surface water resources, ensuring sustainable and efficient water solutions for mining, industrial operations, and the community. Our hydrogeology services provide critical insights into groundwater availability, movement, and quality, helping clients mitigate risks, optimise resource use, and comply with environmental regulations.'
  },
  { 
    id: 6, 
    name: 'Geology Training', 
    slug: 'geology-training', 
    icon: FaGraduationCap,
    iconColor: 'text-orange-500',
    description: 'GOLDEN EXPRO\'s training programmes equip professionals with practical skills in exploration, resource estimation, and mine planning.',
    fullDescription: 'GOLDEN EXPRO\'s Training programmes equip exploration and mining professionals with the knowledge and practical skills needed to excel in the field. Whether it\'s mapping, geological modelling, structural geology analysis, grade control, reconciliation or mining fundamentals, we work closely with clients to turn geological data into actionable intelligence, ensuring sustainable and efficient mining practices. At GOLDEN EXPRO, we believe in more than just extracting minerals; we help you drive NPV growth for your project.'
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
    }, 300)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },  // ADDED ABOUT US LINK
    { name: 'Services', href: '#', hasDropdown: true },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="GOLDEN EXPRO" 
              className="h-12 md:h-14 w-auto object-contain"
            />
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
                  className="text-gray-700 hover:text-[#D4AF37] transition-colors duration-300 font-medium flex items-center gap-1"
                >
                  {item.name}
                  {item.hasDropdown && <FaChevronDown className="text-xs" />}
                </Link>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/contact" className="btn-primary py-2 px-5">
              Partner With Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700 text-2xl">
            {isOpen ? <IoClose /> : <GiHamburgerMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 max-h-[80vh] overflow-y-auto bg-white">
            <Link href="/" onClick={() => setIsOpen(false)} className="block py-3 text-gray-700 hover:text-[#D4AF37]">
              Home
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="block py-3 text-gray-700 hover:text-[#D4AF37]">
              About
            </Link>
            <div>
              <button onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)} className="w-full flex justify-between items-center py-3 text-gray-700 hover:text-[#D4AF37]">
                <span>Services</span>
                <FaChevronDown className={`text-xs transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMobileServicesOpen && (
                <div className="pl-4 pb-2 space-y-3">
                  {services.map((service) => (
                    <Link 
                      key={service.id} 
                      href={`/services/${service.slug}`} 
                      onClick={() => setIsOpen(false)} 
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-2xl"><service.icon /></div>
                        <div>
                          <div className="text-gray-800 font-medium">{service.name}</div>
                          <div className="text-gray-500 text-xs mt-1 line-clamp-2">
                            {service.description.substring(0, 80)}...
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                  <Link href="/services" onClick={() => setIsOpen(false)} className="block mt-2 text-[#D4AF37] text-sm text-center py-2 hover:underline">
                    View All Services →
                  </Link>
                </div>
              )}
            </div>
            <Link href="/projects" onClick={() => setIsOpen(false)} className="block py-3 text-gray-700 hover:text-[#D4AF37]">
              Projects
            </Link>
            <Link href="/blog" onClick={() => setIsOpen(false)} className="block py-3 text-gray-700 hover:text-[#D4AF37]">
              Blog
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block py-3 text-gray-700 hover:text-[#D4AF37]">
              Contact
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block mt-4 btn-primary text-center">
              Partner With Us
            </Link>
          </div>
        )}
      </div>

      {/* FULL WIDTH MEGA DROPDOWN - Like Minrom */}
      {isServicesOpen && (
        <div 
          className="hidden md:block fixed left-0 right-0 top-20 bg-white shadow-xl border-t border-gray-100 z-40"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ minHeight: 'auto', maxHeight: '80vh', overflowY: 'auto' }}
        >
          <div className="container-custom py-8">
            {/* Header */}
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800">
                Our <span className="text-[#D4AF37]">Services</span>
              </h2>
              <Link
                href="/services"
                className="text-gray-500 hover:text-[#D4AF37] transition-colors text-sm"
                onClick={() => setIsServicesOpen(false)}
              >
                View All Services →
              </Link>
            </div>
            
            {/* Services Grid - 3 columns with FULL DETAILS */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => {
                const IconComponent = service.icon
                return (
                  <Link
                    key={service.id}
                    href={`/services/${service.slug}`}
                    className="group block p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover:transform hover:scale-[1.02] shadow-sm"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                          <IconComponent className={`text-2xl ${service.iconColor}`} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#D4AF37] transition-colors mb-2">
                          {service.name}
                        </h3>
                        {/* 4+ lines of description */}
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                          {service.fullDescription}
                        </p>
                        <div className="mt-3 inline-flex items-center text-[#D4AF37] text-sm font-medium group-hover:underline">
                          Learn More
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>

            {/* Bottom CTA Section */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <p className="text-gray-700">
                  <span className="text-[#D4AF37] font-semibold text-lg">Ready to discuss your next project?</span>
                  <br />
                  <span className="text-gray-500">Our team of experts is ready to help you achieve your mining goals.</span>
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