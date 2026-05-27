'use client'

import { notFound, useParams } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  FaChartLine, 
  FaHardHat, 
  FaMap, 
  FaMountain, 
  FaWater, 
  FaGraduationCap,
  FaCheckCircle
} from 'react-icons/fa'

const services = [
  {
    id: 1,
    name: 'Mining Strategy',
    slug: 'mining-strategy',
    icon: FaChartLine,
    iconColor: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    description: 'GOLDEN EXPRO\'s mining strategy services provide mining companies with the insights and direction needed to make informed, long-term decisions that maximize project value.',
    fullDescription: 'We combine geological and geometallurgical expertise with strategic planning to optimise resource utilisation, improve operational efficiency, and enhance project viability. From feasibility studies to life-of-mine planning, we help clients navigate complex geological, technical, and economic challenges.',
    features: ['Feasibility Studies', 'Life-of-Mine Planning', 'Risk Assessment', 'Economic Analysis'],
    benefits: ['Increased NPV and ROI', 'Optimized resource utilization', 'Reduced operational risks', 'Improved decision-making']
  },
  {
    id: 2,
    name: 'Mineral Exploration',
    slug: 'mineral-exploration',
    icon: FaHardHat,
    iconColor: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10',
    description: 'GOLDEN EXPRO\'s mineral exploration services help junior explorers and mining companies discover and define valuable mineral resources across Tanzania and beyond.',
    fullDescription: 'We provide junior explorers and mining companies with the expertise and tools needed to discover and define valuable mineral resources. Whether it\'s mineral target generation, structural geology analysis, geometallurgical characterisation, or prospecting work programme development, we work closely with our clients to turn geological data into actionable intelligence.',
    features: ['Target Generation', 'Structural Analysis', 'Geochemical Surveys', 'Drilling Programs'],
    benefits: ['Maximized discovery potential', 'Cost-effective exploration', 'Data-driven targeting', 'Reduced exploration risk']
  },
  {
    id: 3,
    name: '3D Modelling & GIS',
    slug: 'modelling-gis',
    icon: FaMap,
    iconColor: 'text-green-500',
    bgColor: 'bg-green-500/10',
    description: 'GOLDEN EXPRO\'s modelling and GIS services transform complex geological data into actionable insights, enabling precise Mineral Resource estimation.',
    fullDescription: 'Using advanced geological modelling and Geographic Information Systems (GIS), we create highly detailed 3D resource models that accurately represent subsurface conditions. This integrated approach ensures that your mining operations are based on the most accurate and comprehensive data available, driving significant increases in project NPV.',
    features: ['3D Geological Models', 'Resource Estimation', 'Spatial Analysis', 'Data Visualization'],
    benefits: ['Accurate resource models', 'Better investment decisions', 'Improved mine planning', 'Increased project value']
  },
  {
    id: 4,
    name: 'Mining Geology',
    slug: 'mining-geology',
    icon: FaMountain,
    iconColor: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    description: 'GOLDEN EXPRO\'s mining geology services bridge the gap between exploration and operational success for efficient ore extraction.',
    fullDescription: 'At GOLDEN EXPRO, our Mining Geology services are designed to bridge the gap between exploration and operational success. Whether it\'s grade control, structural geology analysis, geometallurgical modelling or reconciliation, we work closely with clients to turn geological data into actionable intelligence, ensuring sustainable and efficient mining practices.',
    features: ['Grade Control', 'Resource Reconciliation', 'Production Geology', 'Quality Assurance'],
    benefits: ['Improved grade control', 'Higher recovery rates', 'Reduced dilution', 'Better reconciliation']
  },
  {
    id: 5,
    name: 'Hydrogeology',
    slug: 'hydrogeology',
    icon: FaWater,
    iconColor: 'text-cyan-500',
    bgColor: 'bg-cyan-500/10',
    description: 'GOLDEN EXPRO\'s hydrogeology services specialise in groundwater detection, management, and sustainability solutions for mining operations.',
    fullDescription: 'GOLDEN EXPRO Hydrogeology specialises in the detection, quantification, and management of valuable groundwater and surface water resources, ensuring sustainable and efficient water solutions for mining, industrial operations, and the community. Our hydrogeology services provide critical insights into groundwater availability, movement, and quality, helping clients mitigate risks, optimise resource use, and comply with environmental regulations.',
    features: ['Groundwater Assessment', 'Water Management', 'Environmental Compliance', 'Sustainable Solutions'],
    benefits: ['Reduced water-related risks', 'Environmental compliance', 'Sustainable water use', 'Lower operational costs']
  },
  {
    id: 6,
    name: 'Geology Training',
    slug: 'geology-training',
    icon: FaGraduationCap,
    iconColor: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    description: 'GOLDEN EXPRO\'s training programmes equip professionals with practical skills in exploration, resource estimation, and mine planning.',
    fullDescription: 'GOLDEN EXPRO\'s Training programmes equip exploration and mining professionals with the knowledge and practical skills needed to excel in the field. Whether it\'s mapping, geological modelling, structural geology analysis, grade control, reconciliation or mining fundamentals, we work closely with clients to turn geological data into actionable intelligence, ensuring sustainable and efficient mining practices.',
    features: ['Field Training', 'Software Training', 'Technical Workshops', 'Professional Development'],
    benefits: ['Enhanced team skills', 'Better exploration results', 'Improved efficiency', 'Higher project returns']
  },
]

export default function ServiceDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  
  const service = services.find(s => s.slug === slug)
  
  if (!service) {
    notFound()
  }

  const IconComponent = service.icon

  return (
    <div className="min-h-screen py-20" style={{ backgroundColor: '#F8F9FA' }}>
      <div className="container-custom max-w-6xl mx-auto">
        {/* Back Button */}
        <Link
          href="/services"
          className="inline-flex items-center text-gray-600 hover:text-[#D4AF37] transition-colors mb-8 group"
        >
          <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to All Services
        </Link>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className={`inline-flex p-4 rounded-2xl ${service.bgColor} mb-6`}>
            <IconComponent className={`text-5xl ${service.iconColor}`} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            <span style={{ color: '#D4AF37' }}>{service.name}</span>
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            {service.description}
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-xl p-8 bg-white shadow-md"
            >
              <h2 className="text-2xl font-semibold mb-4 text-[#D4AF37]">Overview</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.fullDescription}
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8 text-[#D4AF37]">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-700">
                    <FaCheckCircle className="text-[#D4AF37] text-sm" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="rounded-xl p-8 sticky top-24 bg-white shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-[#D4AF37]">Key Benefits</h3>
              <ul className="space-y-3 mb-8">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-gray-100">
                <Link
                  href="/contact"
                  className="block w-full text-center btn-primary"
                >
                  Partner With Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}