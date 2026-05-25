'use client'

import Link from 'next/link'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'
import { FaChevronDown } from 'react-icons/fa'

// Static services data (hardcoded - not from database)
const services = [
  {
    id: 1,
    name: 'Strategy',
    slug: 'strategy',
    description: 'Minrom\'s strategy service aims to unlock the value of a project by integrating geological and metallurgical ore characteristics, mine planning and environmental drivers of ore deposits.',
    icon: '📊'
  },
  {
    id: 2,
    name: 'Exploration',
    slug: 'exploration',
    description: 'Minrom\'s Exploration services identify and evaluate mineral deposits using advanced geological exploration techniques to maximise discovery potential and investment returns.',
    icon: '⛏️'
  },
  {
    id: 3,
    name: 'Resource Modelling & GIS',
    slug: 'modelling-gis',
    description: 'Minrom\'s Modelling and GIS services integrate complex geological data, structural data and geometallurgical data into well-informed optimised mine plans, driving the increase in NPV.',
    icon: '🗺️'
  },
  {
    id: 4,
    name: 'Mining Geology',
    slug: 'mining-geology',
    description: 'Minrom\'s Mining Geology services deliver expert integration of mine planning and grade control practices and delivers efficient ore extraction, grade control and reserve reconciliation to maximise mining efficiency.',
    icon: '⛰️'
  },
  {
    id: 5,
    name: 'Hydrogeology',
    slug: 'hydrogeology',
    description: 'Minrom\'s Hydrology services specialise in groundwater detection, quantification, management, and sustainability solutions to support mining operations and environmental compliance.',
    icon: '💧'
  },
  {
    id: 6,
    name: 'Training',
    slug: 'training',
    description: 'Minrom\'s Training programmes equip professionals with hands-on skills in mineral exploration, resource estimation, geological mapping, mine planning, and mining 101 for real-world mining applications.',
    icon: '🎓'
  },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services', hasDropdown: true },
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

                {/* Services Dropdown */}
                {item.hasDropdown && isServicesOpen && (
                  <div className="absolute left-0 mt-2 w-[500px] bg-miningGray rounded-lg shadow-xl border border-miningGold/20 overflow-hidden z-50">
                    <div className="p-4">
                      <h3 className="text-miningGold font-semibold mb-3 px-2">Our Services</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {services.map((service) => (
                          <Link
                            key={service.id}
                            href={`/services/${service.slug}`}
                            className="block p-3 rounded-lg hover:bg-miningDark transition-all duration-200 group"
                          >
                            <div className="flex items-start gap-2">
                              <span className="text-xl">{service.icon}</span>
                              <div>
                                <h4 className="text-white font-medium group-hover:text-miningGold transition">
                                  {service.name}
                                </h4>
                                <p className="text-gray-400 text-xs mt-1 line-clamp-2">
                                  {service.description.substring(0, 80)}...
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-3 pt-3 border-t border-miningGold/20">
                        <Link
                          href="/services"
                          className="block text-center text-miningGold hover:underline text-sm"
                        >
                          View All Services →
                        </Link>
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

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-miningGold/20">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-gray-300 hover:text-miningGold transition-colors"
                >
                  {item.name}
                </Link>
                {/* Mobile Services Submenu */}
                {item.hasDropdown && (
                  <div className="pl-4 pb-2 space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.id}
                        href={`/services/${service.slug}`}
                        onClick={() => setIsOpen(false)}
                        className="block py-2 text-sm text-gray-400 hover:text-miningGold transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
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