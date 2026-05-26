'use client'

import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
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

// Service slides with FREE Unsplash Images
const serviceSlides = [
  {
    id: 1,
    name: 'Mining Strategy',
    slug: 'strategy',
    icon: FaChartLine,
    iconColor: 'text-blue-500',
    bgImage: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=1200&h=800&fit=crop',
    shortDescription: 'Strategic planning for optimal resource utilisation and project viability.',
    description: 'GOLDEN EXPRO\'s mining strategy services provide mining companies with the insights and direction needed to make informed, long-term decisions that maximize project value.'
  },
  {
    id: 2,
    name: 'Mineral Exploration',
    slug: 'exploration',
    icon: FaHardHat,
    iconColor: 'text-yellow-500',
    bgImage: 'https://images.unsplash.com/photo-1541252260730-0412e8e2f6b3?w=1200&h=800&fit=crop',
    shortDescription: 'Advanced geological exploration to maximise discovery potential.',
    description: 'GOLDEN EXPRO\'s mineral exploration services help junior explorers and mining companies discover and define valuable mineral resources across Tanzania and beyond.'
  },
  {
    id: 3,
    name: '3D Modelling & GIS',
    slug: 'modelling-gis',
    icon: FaMap,
    iconColor: 'text-green-500',
    bgImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
    shortDescription: 'Transform geological data into actionable insights.',
    description: 'GOLDEN EXPRO\'s modelling and GIS services transform complex geological data into actionable insights, enabling precise Mineral Resource estimation.'
  },
  {
    id: 4,
    name: 'Mining Geology',
    slug: 'mining-geology',
    icon: FaMountain,
    iconColor: 'text-purple-500',
    bgImage: 'https://images.unsplash.com/photo-1581093458791-9f8c8a8c3e8b?w=1200&h=800&fit=crop',
    shortDescription: 'Bridge the gap between exploration and operational success.',
    description: 'GOLDEN EXPRO\'s mining geology services bridge the gap between exploration and operational success for efficient ore extraction.'
  },
  {
    id: 5,
    name: 'Hydrogeology',
    slug: 'hydrogeology',
    icon: FaWater,
    iconColor: 'text-cyan-500',
    bgImage: 'https://images.unsplash.com/photo-1544413660-299165566b1d?w=1200&h=800&fit=crop',
    shortDescription: 'Groundwater detection and management solutions.',
    description: 'GOLDEN EXPRO\'s hydrogeology services specialise in groundwater detection, management, and sustainability solutions for mining operations.'
  },
  {
    id: 6,
    name: 'Geology Training',
    slug: 'training',
    icon: FaGraduationCap,
    iconColor: 'text-orange-500',
    bgImage: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=800&fit=crop',
    shortDescription: 'Equip professionals with practical mining skills.',
    description: 'GOLDEN EXPRO\'s training programmes equip professionals with practical skills in exploration, resource estimation, and mine planning.'
  },
]

// Partners data
const partners = [
  { id: 1, name: 'Seequent', logo: '/images/partners/seequent.png', url: 'https://www.seequent.com' },
  { id: 2, name: 'AMiS', logo: '/images/partners/amis.png', url: '#' },
  { id: 3, name: 'Micromine Beyond', logo: '/images/partners/micromine.png', url: 'https://www.micromine.com' },
  { id: 4, name: 'ALS', logo: '/images/partners/als.png', url: 'https://www.alsglobal.com' },
  { id: 5, name: 'SGS', logo: '/images/partners/sgs.png', url: 'https://www.sgs.com' },
  { id: 6, name: 'SRK Consulting', logo: '/images/partners/srk.png', url: 'https://www.srk.com' },
  { id: 7, name: 'ERM', logo: '/images/partners/erm.png', url: 'https://www.erm.com' },
  { id: 8, name: 'Worley', logo: '/images/partners/worley.png', url: 'https://www.worley.com' },
]

// Mining cycle stages
const miningStages = [
  { name: 'Concept', number: 1, description: 'Initial project conception' },
  { name: 'Pre-Discovery', number: 2, description: 'Preliminary exploration' },
  { name: 'Discovery', number: 3, description: 'Resource identification' },
  { name: 'Feasibility', number: 4, description: 'Project viability study' },
  { name: 'Development', number: 5, description: 'Mine construction' },
  { name: 'Start-Up', number: 6, description: 'Production commencement' },
  { name: 'Depletion', number: 7, description: 'Resource exhaustion' },
]

// Hero background image
const heroBgImage = 'https://images.unsplash.com/photo-1581092335871-4c4b0a7c7b3a?w=1920&h=1080&fit=crop'

export default function Home() {
  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const cycleRef = useRef(null)
  const overviewRef = useRef(null)
  const partnersRef = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  
  const isHeroInView = useInView(heroRef, { once: true })
  const isServicesInView = useInView(servicesRef, { once: true })
  const isCycleInView = useInView(cycleRef, { once: true })
  const isOverviewInView = useInView(overviewRef, { once: true })
  const isPartnersInView = useInView(partnersRef, { once: true })

  // Auto-play slides
  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % serviceSlides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % serviceSlides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + serviceSlides.length) % serviceSlides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const currentService = serviceSlides[currentSlide]
  const IconComponent = currentService.icon

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-miningDark)' }}>
      
      {/* PHASE 1A: MAIN COMPANY HERO SECTION */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image from CDN */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url(${heroBgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-miningDark/90 via-miningDark/85 to-miningDark/95" />
          <div className="absolute inset-0 opacity-10" style={{ 
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundRepeat: 'repeat'
          }} />
        </div>

        {/* Content */}
        <div className="relative z-20 container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span style={{ color: 'var(--color-miningGold)' }}>Your Partner in Mining.</span>
              <br />
              <span className="text-white">From Strategy to Success.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6 leading-relaxed">
              GOLDEN EXPRO is a premier mining exploration and consulting company based in Tanzania, 
              specializing in exploration project management, 3D geological modelling, geometallurgical 
              modelling, and mining studies for international investors.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Partner With Us
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore Services
              </Link>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
            <div className="flex flex-col items-center gap-2">
              <span className="text-gray-400 text-xs">Scroll to explore our services</span>
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                <div className="w-1 h-2 rounded-full animate-bounce mt-2" style={{ backgroundColor: 'var(--color-miningGold)' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHASE 1B: SERVICES CAROUSEL SECTION */}
      <section ref={servicesRef} className="relative py-24 overflow-hidden" style={{ backgroundColor: 'var(--color-miningDark)' }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span style={{ color: 'var(--color-miningGold)' }}>Services</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive mining solutions from exploration to development
            </p>
          </motion.div>

          {/* Carousel */}
          <div className="relative">
            {/* Current Service Card */}
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden"
              style={{ backgroundColor: 'var(--color-miningGray)' }}
            >
              <div className="flex flex-col md:flex-row">
                {/* Image Side with CDN Image */}
                <div className="md:w-1/2 h-80 md:h-auto relative">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ 
                      backgroundImage: `url(${currentService.bgImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-miningGray via-transparent to-transparent" />
                </div>
                
                {/* Content Side */}
                <div className="md:w-1/2 p-8 md:p-12">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(212,175,55,0.15)' }}>
                      <IconComponent className={`text-3xl ${currentService.iconColor}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{currentService.name}</h3>
                  </div>
                  
                  <p className="text-lg text-gray-300 mb-4">
                    {currentService.shortDescription}
                  </p>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {currentService.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <Link href={`/services/${currentService.slug}`} className="btn-primary">
                      Learn More
                    </Link>
                    <Link href="/contact" className="btn-secondary">
                      Partner With Us
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-4 md:-ml-6 w-10 h-10 rounded-full bg-miningDark hover:bg-miningGold/20 border border-miningGold/50 flex items-center justify-center transition-all duration-300 z-20"
            >
              <FaChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4 md:-mr-6 w-10 h-10 rounded-full bg-miningDark hover:bg-miningGold/20 border border-miningGold/50 flex items-center justify-center transition-all duration-300 z-20"
            >
              <FaChevronRight className="w-5 h-5 text-white" />
            </button>

            {/* Service Indicators */}
            <div className="flex justify-center gap-2 mt-8 flex-wrap">
              {serviceSlides.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => goToSlide(index)}
                  className={`px-3 py-1 rounded-full text-xs transition-all duration-300 ${
                    currentSlide === index
                      ? 'bg-miningGold text-miningDark'
                      : 'bg-miningGray text-gray-400 hover:bg-miningGold/20'
                  }`}
                >
                  {service.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PHASE 2: Your Partner in Mining - From Strategy to Success */}
      <section ref={cycleRef} className="py-24" style={{ backgroundColor: 'var(--color-miningGray)' }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCycleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Partner in Mining. <span style={{ color: 'var(--color-miningGold)' }}>From Strategy to Success.</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Our comprehensive approach covers every stage of the mining lifecycle, from initial concept through to depletion
            </p>
          </motion.div>

          {/* Mining Cycle Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isCycleInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative py-12"
          >
            <div className="relative mb-16">
              <svg className="w-full h-40" viewBox="0 0 1000 120" preserveAspectRatio="none">
                <path
                  d="M 50 60 Q 250 10 500 60 T 950 60"
                  fill="none"
                  stroke="var(--color-miningGold)"
                  strokeWidth="3"
                  strokeDasharray="8,8"
                  className="opacity-60"
                />
              </svg>
              
              <div className="flex justify-between items-start mt-4 flex-wrap gap-4">
                {miningStages.map((stage, index) => (
                  <motion.div
                    key={stage.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isCycleInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="text-center flex-1 min-w-[80px]"
                  >
                    <div className="relative">
                      <div className="w-14 h-14 rounded-full border-2 flex items-center justify-center mx-auto mb-2"
                        style={{ backgroundColor: 'var(--color-miningDark)', borderColor: 'var(--color-miningGold)' }}>
                        <span className="font-bold text-lg" style={{ color: 'var(--color-miningGold)' }}>{stage.number}</span>
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-white">{stage.name}</p>
                    <p className="text-xs text-gray-500 mt-1 hidden md:block">{stage.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-400 max-w-2xl mx-auto">
                From grassroots exploration to full-scale production, GOLDEN EXPRO provides expert guidance 
                at every stage of your mining project's lifecycle.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PHASE 3: Overview, Vision & Mission */}
      <section ref={overviewRef} className="py-24" style={{ backgroundColor: 'var(--color-miningDark)' }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isOverviewInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="rounded-2xl p-8"
              style={{ backgroundColor: 'var(--color-miningGray)' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}>
                  <FaEye className="text-xl" style={{ color: 'var(--color-miningGold)' }} />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: 'var(--color-miningGold)' }}>Overview</h3>
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Mineral Resource Specialists</h4>
              <p className="text-gray-400 leading-relaxed">
                GOLDEN EXPRO specialises in providing services in exploration project management, 
                3D geological modelling, geometallurgical modelling, mining and groundwater. 
                All mineral projects require a strong technical backing and GOLDEN EXPRO adds the 
                technical support that ensures your project is delivered successfully.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isOverviewInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl p-8"
              style={{ backgroundColor: 'var(--color-miningGray)' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}>
                  <FaBullseye className="text-xl" style={{ color: 'var(--color-miningGold)' }} />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: 'var(--color-miningGold)' }}>Vision</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                To maintain our status as a global leader in mineral resource consulting, recognised for 
                our excellence, quality, customer satisfaction, as well as our ability to create value 
                by identifying and unlocking potential in every mining project we undertake.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isOverviewInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl p-8"
              style={{ backgroundColor: 'var(--color-miningGray)' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}>
                  <FaHandshake className="text-xl" style={{ color: 'var(--color-miningGold)' }} />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: 'var(--color-miningGold)' }}>Mission</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                To create value by helping our clients achieve their strategic objectives through the 
                delivery of innovative, reliable, and cost-effective solutions for mineral exploration, 
                3D resource estimation, mine design, valuation and strategy, whilst adhering to the 
                highest standards of professionalism, ethics, and competence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PHASE 4: Partnering for Success */}
      <section ref={partnersRef} className="py-24" style={{ backgroundColor: 'var(--color-miningGray)' }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isPartnersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Partnering for <span style={{ color: 'var(--color-miningGold)' }}>Success</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We collaborate with leading industry partners to deliver exceptional results
            </p>
          </motion.div>

          {/* Partners Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isPartnersInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center"
          >
            {partners.map((partner, index) => (
              <motion.a
                key={partner.id}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isPartnersInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group block"
              >
                <div className="bg-miningDark rounded-lg p-4 flex items-center justify-center h-24 transition-all duration-300 group-hover:transform group-hover:scale-105 group-hover:shadow-lg" style={{ boxShadow: '0 0 15px rgba(212, 175, 55, 0.1)' }}>
                  <div className="text-center">
                    <div className="w-16 h-12 rounded flex items-center justify-center mx-auto mb-2" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}>
                      <span className="text-miningGold text-xs font-bold text-center">{partner.name.charAt(0)}{partner.name.charAt(1)}</span>
                    </div>
                    <p className="text-gray-400 text-xs group-hover:text-miningGold transition-colors">
                      {partner.name}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Partner Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isPartnersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <div className="rounded-2xl p-8 border" style={{ 
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.08), rgba(212, 175, 55, 0.03))',
              borderColor: 'rgba(212, 175, 55, 0.15)'
            }}>
              <p className="text-gray-400 max-w-3xl mx-auto mb-6">
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