'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  FaChartLine, 
  FaHardHat, 
  FaMap, 
  FaMountain, 
  FaWater, 
  FaGraduationCap
} from 'react-icons/fa'

const services = [
  {
    id: 1,
    name: 'Mining Strategy',
    slug: 'mining-strategy',
    icon: FaChartLine,
    iconColor: 'text-[#D4AF37]',
    bgColor: 'bg-[#D4AF37]/10',
    borderColor: 'border-[#D4AF37]',
    description: 'GOLDEN EXPRO\'s mining strategy services provide mining companies with the insights and direction needed to make informed, long-term decisions that maximize project value.',
    fullDescription: 'We combine geological and geometallurgical expertise with strategic planning to optimise resource utilisation, improve operational efficiency, and enhance project viability. From feasibility studies to life-of-mine planning, we help clients navigate complex geological, technical, and economic challenges. Our tailored strategies ensure that mining projects are not only profitable but also sustainable, aligning with industry best practices and regulatory requirements. With GOLDEN EXPRO, you gain a roadmap to success—built on data, driven by strategy.',
    features: ['Feasibility Studies', 'Life-of-Mine Planning', 'Risk Assessment', 'Economic Analysis']
  },
  {
    id: 2,
    name: 'Mineral Exploration',
    slug: 'mineral-exploration',
    icon: FaHardHat,
    iconColor: 'text-[#D4AF37]',
    bgColor: 'bg-[#D4AF37]/10',
    borderColor: 'border-[#D4AF37]',
    description: 'GOLDEN EXPRO\'s mineral exploration services help junior explorers and mining companies discover and define valuable mineral resources across Tanzania and beyond.',
    fullDescription: 'We provide junior explorers and mining companies with the expertise and tools needed to discover and define valuable mineral resources. Whether it\'s mineral target generation, structural geology analysis, geometallurgical characterisation, or prospecting work programme development, we work closely with our clients to turn geological data into actionable intelligence, ensuring sustainable and efficient mining practices. With GOLDEN EXPRO, you don\'t just extract minerals; you extract value.',
    features: ['Target Generation', 'Structural Analysis', 'Geochemical Surveys', 'Drilling Programs']
  },
  {
    id: 3,
    name: '3D Modelling & GIS',
    slug: 'modelling-gis',
    icon: FaMap,
    iconColor: 'text-[#D4AF37]',
    bgColor: 'bg-[#D4AF37]/10',
    borderColor: 'border-[#D4AF37]',
    description: 'GOLDEN EXPRO\'s modelling and GIS services transform complex geological data into actionable insights, enabling precise Mineral Resource estimation.',
    fullDescription: 'Our Modelling and GIS services transform complex geological data into actionable insights, enabling precise Mineral Resource estimation and strategic decision-making. Using advanced geological modelling and Geographic Information Systems (GIS), we create highly detailed 3D resource models that accurately represent subsurface conditions. This integrated approach ensures that your mining operations are based on the most accurate and comprehensive data available, driving significant increases in project NPV.',
    features: ['3D Geological Models', 'Resource Estimation', 'Spatial Analysis', 'Data Visualization']
  },
  {
    id: 4,
    name: 'Mining Geology',
    slug: 'mining-geology',
    icon: FaMountain,
    iconColor: 'text-[#D4AF37]',
    bgColor: 'bg-[#D4AF37]/10',
    borderColor: 'border-[#D4AF37]',
    description: 'GOLDEN EXPRO\'s mining geology services bridge the gap between exploration and operational success for efficient ore extraction.',
    fullDescription: 'At GOLDEN EXPRO, our Mining Geology services are designed to bridge the gap between exploration and operational success. Whether it\'s grade control, structural geology analysis, geometallurgical modelling or reconciliation, we work closely with clients to turn geological data into actionable intelligence, ensuring sustainable and efficient mining practices. With GOLDEN EXPRO, you don\'t just extract minerals; you extract maximum value from your resource.',
    features: ['Grade Control', 'Resource Reconciliation', 'Production Geology', 'Quality Assurance']
  },
  {
    id: 5,
    name: 'Hydrogeology',
    slug: 'hydrogeology',
    icon: FaWater,
    iconColor: 'text-[#D4AF37]',
    bgColor: 'bg-[#D4AF37]/10',
    borderColor: 'border-[#D4AF37]',
    description: 'GOLDEN EXPRO\'s hydrogeology services specialise in groundwater detection, management, and sustainability solutions for mining operations.',
    fullDescription: 'GOLDEN EXPRO Hydrogeology specialises in the detection, quantification, and management of valuable groundwater and surface water resources, ensuring sustainable and efficient water solutions for mining, industrial operations, and the community. Our hydrogeology services provide critical insights into groundwater availability, movement, and quality, helping clients mitigate risks, optimise resource use, and comply with environmental regulations.',
    features: ['Groundwater Assessment', 'Water Management', 'Environmental Compliance', 'Sustainable Solutions']
  },
  {
    id: 6,
    name: 'Geology Training',
    slug: 'geology-training',
    icon: FaGraduationCap,
    iconColor: 'text-[#D4AF37]',
    bgColor: 'bg-[#D4AF37]/10',
    borderColor: 'border-[#D4AF37]',
    description: 'GOLDEN EXPRO\'s training programmes equip professionals with practical skills in exploration, resource estimation, and mine planning.',
    fullDescription: 'GOLDEN EXPRO\'s Training programmes equip exploration and mining professionals with the knowledge and practical skills needed to excel in the field. Whether it\'s mapping, geological modelling, structural geology analysis, grade control, reconciliation or mining fundamentals, we work closely with clients to turn geological data into actionable intelligence, ensuring sustainable and efficient mining practices. At GOLDEN EXPRO, we believe in more than just extracting minerals; we help you drive NPV growth for your project.',
    features: ['Field Training', 'Software Training', 'Technical Workshops', 'Professional Development']
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen py-20" style={{ backgroundColor: '#F8F9FA' }}>
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-800"
          >
            Our <span style={{ color: '#D4AF37' }}>Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Comprehensive mining solutions from exploration to development, delivered with technical excellence in Tanzania and across Africa
          </motion.p>
        </div>

        {/* Services Cards Grid */}
        <div className="space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-xl overflow-hidden border-l-8 ${service.borderColor} bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:transform hover:scale-[1.01]`}
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon Section */}
                  <div className="flex-shrink-0">
                    <div className={`w-20 h-20 rounded-2xl ${service.bgColor} flex items-center justify-center`}>
                      <service.icon className={`text-4xl ${service.iconColor}`} />
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                      {service.name}
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                      {service.fullDescription}
                    </p>
                    
                    {/* Features Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700 border border-gray-200"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    {/* Learn More Link */}
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center text-[#D4AF37] hover:text-[#C49C2E] transition-colors font-semibold group"
                    >
                      Learn More About {service.name}
                      <svg 
                        className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="rounded-2xl p-8 border" style={{ 
            background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.08), rgba(212, 175, 55, 0.03))',
            borderColor: 'rgba(212, 175, 55, 0.15)'
          }}>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Ready to discuss your next project?</h3>
            <p className="text-gray-600 mb-6">
              Our team of mining experts is ready to help you achieve your exploration and development goals in Tanzania.
            </p>
            <Link href="/contact" className="btn-primary">
              Partner With Us
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}