'use client'

import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect, useCallback } from 'react'
import { 
  FaChartLine, 
  FaHardHat, 
  FaMap, 
  FaMountain, 
  FaWater, 
  FaGraduationCap,
  FaArrowRight,
  FaEye,
  FaBullseye,
  FaHandshake,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa'

// Service slides for carousel
const serviceSlides = [
  {
    id: 1,
    name: 'Mining Strategy',
    slug: 'mining-strategy',
    icon: FaChartLine,
    iconColor: 'text-[#D4AF37]',
    bgImage: '/images/strategy-bg.jpg',
    shortDescription: 'Strategic planning for optimal resource utilisation and project viability.',
    description: 'GOLDEN EXPRO\'s mining strategy services provide mining companies with the insights and direction needed to make informed, long-term decisions that maximize project value.'
  },
  {
    id: 2,
    name: 'Mineral Exploration',
    slug: 'mineral-exploration',
    icon: FaHardHat,
    iconColor: 'text-[#D4AF37]',
    bgImage: '/images/exploration-bg.jpg',
    shortDescription: 'Advanced geological exploration to maximise discovery potential.',
    description: 'GOLDEN EXPRO\'s mineral exploration services help junior explorers and mining companies discover and define valuable mineral resources across Tanzania and beyond.'
  },
  {
    id: 3,
    name: '3D Modelling & GIS',
    slug: 'modelling-gis',
    icon: FaMap,
    iconColor: 'text-[#D4AF37]',
    bgImage: '/images/modelling-bg.jpg',
    shortDescription: 'Transform geological data into actionable insights.',
    description: 'GOLDEN EXPRO\'s modelling and GIS services transform complex geological data into actionable insights, enabling precise Mineral Resource estimation.'
  },
  {
    id: 4,
    name: 'Mining Geology',
    slug: 'mining-geology',
    icon: FaMountain,
    iconColor: 'text-[#D4AF37]',
    bgImage: '/images/mining-geology-bg.jpg',
    shortDescription: 'Bridge the gap between exploration and operational success.',
    description: 'GOLDEN EXPRO\'s mining geology services bridge the gap between exploration and operational success for efficient ore extraction.'
  },
  {
    id: 5,
    name: 'Hydrogeology',
    slug: 'hydrogeology',
    icon: FaWater,
    iconColor: 'text-[#D4AF37]',
    bgImage: '/images/hydrogeology-bg.jpg',
    shortDescription: 'Groundwater detection and management solutions.',
    description: 'GOLDEN EXPRO\'s hydrogeology services specialise in groundwater detection, management, and sustainability solutions for mining operations.'
  },
  {
    id: 6,
    name: 'Geology Training',
    slug: 'geology-training',
    icon: FaGraduationCap,
    iconColor: 'text-[#D4AF37]',
    bgImage: '/images/training-bg.jpg',
    shortDescription: 'Equip professionals with practical mining skills.',
    description: 'GOLDEN EXPRO\'s training programmes equip professionals with practical skills in exploration, resource estimation, and mine planning.'
  },
]

// Partners data
const partners = [
  { id: 1, name: 'Surpuc', logo: '/images/partners/surpuc.png', url: '#' },
  { id: 2, name: 'ArcGIS Pro', logo: '/images/partners/arcgis-pro.png', url: 'https://www.esri.com/en-us/arcgis/products/arcgis-pro/overview' },
  { id: 3, name: 'Leapfrog Geo', logo: '/images/partners/leapfrog-geo.png', url: 'https://www.seequent.com/products-solutions/leapfrog-geo/' },
  { id: 4, name: 'Datamine', logo: '/images/partners/datamine.png', url: 'https://www.dataminesoftware.com/' },
  { id: 5, name: 'Small and Medium Scale Mining', logo: '/images/partners/small-medium-mining.png', url: '#' },
  { id: 6, name: 'Geological Survey of Tanzania (GST)', logo: '/images/partners/gst.png', url: '#' },
  { id: 7, name: 'Tanzania Geological Society (TGS)', logo: '/images/partners/tgs.png', url: '#' },
]

// Mining cycle stages
const miningStages = [
  { name: 'Concept', number: 1, description: 'Initial project conception', color: '#9CA3AF' },
  { name: 'Pre-Discovery', number: 2, description: 'Preliminary exploration', color: '#6B7280' },
  { name: 'Discovery', number: 3, description: 'Resource identification', color: '#D4AF37' },
  { name: 'Feasibility', number: 4, description: 'Project viability study', color: '#4B5563' },
  { name: 'Development', number: 5, description: 'Mine construction', color: '#374151' },
  { name: 'Start-Up', number: 6, description: 'Production commencement', color: '#1F2937' },
  { name: 'Depletion', number: 7, description: 'Resource exhaustion', color: '#111827' },
]

export default function Home() {
  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const cycleRef = useRef(null)
  const overviewRef = useRef(null)
  const partnersRef = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  
  const isHeroInView = useInView(heroRef, { once: true })
  const isServicesInView = useInView(servicesRef, { once: true })
  const isCycleInView = useInView(cycleRef, { once: true })
  const isOverviewInView = useInView(overviewRef, { once: true })
  const isPartnersInView = useInView(partnersRef, { once: true })

  const totalSlides = serviceSlides.length
  const slidesPerView = 3
  const maxSlide = Math.max(0, totalSlides - slidesPerView)

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide(Math.min(index, maxSlide))
    setTimeout(() => setIsTransitioning(false), 500)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }, [isTransitioning, maxSlide])

  const nextSlide = useCallback(() => {
    if (currentSlide < maxSlide) {
      goToSlide(currentSlide + 1)
    }
  }, [currentSlide, goToSlide, maxSlide])

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1)
    }
  }, [currentSlide, goToSlide])

  // Auto-play slides
  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      if (currentSlide < maxSlide) {
        nextSlide()
      } else {
        goToSlide(0)
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, currentSlide, maxSlide, nextSlide, goToSlide])

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      
      {/* PHASE 1A: MAIN COMPANY HERO SECTION */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: "url('/images/hero-bg.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-20 container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span style={{ color: '#D4AF37' }}>Your Partner in Mining.</span>
              <br />
              <span className="text-white">From Strategy to Success.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-6 leading-relaxed">
              GOLDEN EXPRO is a premier mining exploration and consulting company based in Tanzania, 
              specializing in exploration project management, 3D geological modelling, geometallurgical 
              modelling, and mining studies for international investors.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Partner With Us
              </Link>
              <Link href="/services" className="btn-secondary bg-white/10 backdrop-blur-sm">
                Explore Services
              </Link>
            </div>
          </motion.div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
            <div className="flex flex-col items-center gap-2">
              <span className="text-white text-xs">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                <div className="w-1 h-2 rounded-full animate-bounce mt-2" style={{ backgroundColor: '#D4AF37' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHASE 1B: SERVICES SECTION - HORIZONTAL CAROUSEL (No Learn More) */}
      <section ref={servicesRef} className="py-24 overflow-hidden" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span style={{ color: '#D4AF37' }}>Services</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive mining solutions from exploration to development
            </p>
          </motion.div>

          {/* Horizontal Carousel */}
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-all duration-500 ease-in-out gap-6"
                style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
              >
                {serviceSlides.map((service) => {
                  const Icon = service.icon
                  return (
                    <div
                      key={service.id}
                      className="w-full md:w-[calc(33.333%-1rem)] flex-shrink-0"
                    >
                      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col group cursor-pointer">
                        {/* Image */}
                        <div className="h-56 relative overflow-hidden">
                          <div 
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                            style={{ 
                              backgroundImage: `url(${service.bgImage})`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center'
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <div className="absolute bottom-4 left-4">
                            <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 backdrop-blur-sm flex items-center justify-center">
                              <Icon className={`text-2xl ${service.iconColor}`} />
                            </div>
                          </div>
                        </div>
                        
                        {/* Content - No Learn More button */}
                        <div className="p-6 flex-1">
                          <h3 className="text-xl font-bold text-gray-800 mb-2">{service.name}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {service.shortDescription}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`absolute left-0 top-1/2 -translate-y-1/2 -ml-4 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center transition-all duration-300 hover:bg-[#D4AF37] hover:text-white hover:border-[#D4AF37] disabled:opacity-50 disabled:cursor-not-allowed z-20`}
            >
              <FaChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide >= maxSlide}
              className={`absolute right-0 top-1/2 -translate-y-1/2 -mr-4 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center transition-all duration-300 hover:bg-[#D4AF37] hover:text-white hover:border-[#D4AF37] disabled:opacity-50 disabled:cursor-not-allowed z-20`}
            >
              <FaChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(serviceSlides.length / 3) }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  const newSlide = idx * 3
                  goToSlide(newSlide)
                }}
                className={`transition-all duration-300 rounded-full ${
                  Math.floor(currentSlide / 3) === idx
                    ? 'w-8 h-2 bg-[#D4AF37]'
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PHASE 2: MINING LIFECYCLE VISUALIZATION */}
      <section ref={cycleRef} className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCycleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Partner in Mining. <span style={{ color: '#D4AF37' }}>From Strategy to Success.</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach covers every stage of the mining lifecycle, from initial concept through to depletion
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isCycleInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative py-12"
          >
            <div className="relative">
              <div className="absolute left-0 right-0 top-24 h-1 bg-gradient-to-r from-gray-300 via-[#D4AF37] to-gray-300 hidden md:block" />
              
              <div className="grid grid-cols-1 md:grid-cols-7 gap-4 relative">
                {miningStages.map((stage, index) => (
                  <motion.div
                    key={stage.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isCycleInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="relative z-10">
                      <div 
                        className="w-16 h-16 mx-auto rounded-full flex items-center justify-center text-white font-bold text-xl mb-3 shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer"
                        style={{ backgroundColor: stage.color }}
                      >
                        {stage.number}
                      </div>
                      <h3 className="font-semibold text-gray-800 text-sm md:text-base">{stage.name}</h3>
                      <p className="text-gray-500 text-xs mt-1 hidden lg:block">{stage.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <div className="text-center p-6 rounded-xl bg-gray-50 border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-[#D4AF37] text-xl">📊</span>
                </div>
                <h4 className="font-semibold text-gray-800">Data-Driven Decisions</h4>
                <p className="text-gray-500 text-sm mt-1">Advanced analytics for better outcomes</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gray-50 border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-[#D4AF37] text-xl">🌍</span>
                </div>
                <h4 className="font-semibold text-gray-800">Sustainable Practices</h4>
                <p className="text-gray-500 text-sm mt-1">Environmentally responsible mining</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gray-50 border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-[#D4AF37] text-xl">💎</span>
                </div>
                <h4 className="font-semibold text-gray-800">Maximum Value</h4>
                <p className="text-gray-500 text-sm mt-1">Optimizing resource extraction</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 max-w-2xl mx-auto">
                From grassroots exploration to full-scale production, GOLDEN EXPRO provides expert guidance 
                at every stage of your mining project's lifecycle.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PHASE 3: OVERVIEW, VISION & MISSION */}
      <section ref={overviewRef} className="py-20" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isOverviewInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="rounded-2xl p-8 bg-white shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#D4AF37]/10">
                  <FaEye className="text-xl text-[#D4AF37]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Overview</h3>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Mineral Resource Specialists</h4>
              <p className="text-gray-600 leading-relaxed">
                GOLDEN EXPRO specialises in providing services in exploration project management, 
                3D geological modelling, geometallurgical modelling, mining and groundwater. 
                All mineral projects require a strong technical backing and GOLDEN EXPRO adds the 
                technical support that ensures your project is delivered successfully.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isOverviewInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl p-8 bg-white shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#D4AF37]/10">
                  <FaBullseye className="text-xl text-[#D4AF37]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To maintain our status as a global leader in mineral resource consulting, recognised for 
                our excellence, quality, customer satisfaction, as well as our ability to create value 
                by identifying and unlocking potential in every mining project we undertake.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isOverviewInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl p-8 bg-white shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#D4AF37]/10">
                  <FaHandshake className="text-xl text-[#D4AF37]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To create value by helping our clients achieve their strategic objectives through the 
                delivery of innovative, reliable, and cost-effective solutions for mineral exploration, 
                3D resource estimation, mine design, valuation and strategy, whilst adhering to the 
                highest standards of professionalism, ethics, and competence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PHASE 4: PARTNERING FOR SUCCESS */}
      <section ref={partnersRef} className="py-20 overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isPartnersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Partnering for <span style={{ color: '#D4AF37' }}>Success</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We collaborate with leading industry partners to deliver exceptional results
            </p>
          </motion.div>

          <div className="scroll-container relative overflow-hidden py-8">
            <div className="flex animate-scroll-left">
              <div className="flex gap-8 md:gap-12 flex-shrink-0 items-center">
                {partners.map((partner) => (
                  <div key={`first-${partner.id}`} className="group flex-shrink-0">
                    <a href={partner.url} target="_blank" rel="noopener noreferrer" className="block">
                      <div className="bg-white rounded-xl p-4 w-36 md:w-44 h-24 md:h-28 flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                        <img 
                          src={partner.logo} 
                          alt={partner.name}
                          className="max-w-full max-h-14 object-contain"
                          loading="lazy"
                        />
                      </div>
                      <p className="text-gray-700 text-xs text-center mt-2 font-medium">
                        {partner.name}
                      </p>
                    </a>
                  </div>
                ))}
              </div>
              <div className="flex gap-8 md:gap-12 flex-shrink-0 items-center">
                {partners.map((partner) => (
                  <div key={`second-${partner.id}`} className="group flex-shrink-0">
                    <a href={partner.url} target="_blank" rel="noopener noreferrer" className="block">
                      <div className="bg-white rounded-xl p-4 w-36 md:w-44 h-24 md:h-28 flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                        <img 
                          src={partner.logo} 
                          alt={partner.name}
                          className="max-w-full max-h-14 object-contain"
                          loading="lazy"
                        />
                      </div>
                      <p className="text-gray-700 text-xs text-center mt-2 font-medium">
                        {partner.name}
                      </p>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isPartnersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <div className="rounded-2xl p-8 border" style={{ 
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.05), rgba(212, 175, 55, 0.02))',
              borderColor: 'rgba(212, 175, 55, 0.15)'
            }}>
              <p className="text-gray-700 max-w-3xl mx-auto mb-6 leading-relaxed">
                GOLDEN EXPRO's innovative approach ensures efficient resource utilisation, risk mitigation, 
                and enhanced project value through expert geological and mining services. We work closely 
                with international investors, mining firms, and strategic partners to deliver exceptional 
                results.
              </p>
              <Link href="/contact" className="btn-primary">
                Become Our Partner
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}