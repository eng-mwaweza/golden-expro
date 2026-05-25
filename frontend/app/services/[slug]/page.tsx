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
    name: 'Strategy',
    slug: 'strategy',
    icon: FaChartLine,
    iconColor: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    description: 'Minrom\'s strategy service aims to unlock the value of a project by integrating geological and metallurgical ore characteristics, mine planning and environmental drivers of ore deposits.',
    fullDescription: 'We combine geological and geometallurgical expertise with strategic planning to optimise resource utilisation, improve operational efficiency, and enhance project viability. From feasibility studies to life-of-mine planning, we help clients navigate complex geological, technical, and economic challenges. Our tailored strategies ensure that mining projects are not only profitable but also sustainable, aligning with industry best practices and regulatory requirements. With Minrom, you gain a roadmap to success—built on data, driven by strategy.',
    features: ['Resource Optimisation', 'Feasibility Studies', 'Life-of-Mine Planning', 'Risk Mitigation'],
    benefits: [
      'Increase in NPV and IRR returns',
      'Optimized resource utilization',
      'Improved operational efficiency',
      'Enhanced project viability'
    ]
  },
  {
    id: 2,
    name: 'Exploration',
    slug: 'exploration',
    icon: FaHardHat,
    iconColor: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10',
    description: 'Minrom\'s Exploration services identify and evaluate mineral deposits using advanced geological exploration techniques to maximise discovery potential and investment returns.',
    fullDescription: 'We provide junior explorers or prospecting companies with the expertise and tools needed to discover and define valuable mineral resources. Whether it\'s mineral target generation, structural geology analysis, geometallurgical characterisation, or prospecting work programme development, we work closely with our clients to turn geological data into actionable intelligence, ensuring sustainable and efficient mining practices.',
    features: ['Mineral Target Generation', 'Structural Geology Analysis', 'Geometallurgical Characterisation', 'Work Programme Development'],
    benefits: [
      'Maximized discovery potential',
      'Increased investment returns',
      'Data-driven decision making',
      'Reduced exploration risk'
    ]
  },
  {
    id: 3,
    name: 'Resource Modelling & GIS',
    slug: 'modelling-gis',
    icon: FaMap,
    iconColor: 'text-green-500',
    bgColor: 'bg-green-500/10',
    description: 'Minrom\'s Modelling and GIS services integrate complex geological data, structural data and geometallurgical data into well-informed optimised mine plans, driving the increase in NPV.',
    fullDescription: 'Our Modelling and GIS services transform complex geological data into actionable insights, enabling precise Mineral Resource estimation and strategic decision-making. Using advanced geological modelling and Geographic Information Systems (GIS), we create highly detailed 3D resource models that accurately represent subsurface conditions.',
    features: ['3D Geological Modelling', 'GIS Spatial Analysis', 'Resource Estimation', 'Data Integration'],
    benefits: [
      'Accurate resource estimation',
      'Optimized mine planning',
      'Increased NPV',
      'Better decision making'
    ]
  },
  {
    id: 4,
    name: 'Mining Geology',
    slug: 'mining-geology',
    icon: FaMountain,
    iconColor: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    description: 'Minrom\'s Mining Geology services deliver expert integration of mine planning and grade control practices and delivers efficient ore extraction, grade control and reserve reconciliation to maximise mining efficiency.',
    fullDescription: 'At Minrom, our Mining Geology services are designed to bridge the gap between exploration and operational success. Whether it\'s grade control, structural geology analysis, geometallurgical modelling or reconciliation, we work closely with clients to turn geological data into actionable intelligence, ensuring sustainable and efficient mining practices.',
    features: ['Grade Control', 'Structural Geology', 'Geometallurgical Modelling', 'Reserve Reconciliation'],
    benefits: [
      'Maximized mining efficiency',
      'Improved grade control',
      'Better reserve reconciliation',
      'Reduced operational costs'
    ]
  },
  {
    id: 5,
    name: 'Hydrogeology',
    slug: 'hydrogeology',
    icon: FaWater,
    iconColor: 'text-cyan-500',
    bgColor: 'bg-cyan-500/10',
    description: 'Minrom\'s Hydrology services specialise in groundwater detection, quantification, management, and sustainability solutions to support mining operations and environmental compliance.',
    fullDescription: 'Minrom Hydrogeology specialises in the detection, quantification, and management of valuable groundwater and surface water resources, ensuring sustainable and efficient water solutions for mining, industrial operations, and the community.',
    features: ['Groundwater Detection', 'Water Management', 'Environmental Compliance', 'Sustainability Solutions'],
    benefits: [
      'Reduced water-related risks',
      'Environmental compliance',
      'Sustainable water management',
      'Cost optimization'
    ]
  },
  {
    id: 6,
    name: 'Training',
    slug: 'training',
    icon: FaGraduationCap,
    iconColor: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    description: 'Minrom\'s Training programmes equip professionals with hands-on skills in mineral exploration, resource estimation, geological mapping, mine planning, and mining 101 for real-world mining applications.',
    fullDescription: 'Minrom\'s Training programmes equip exploration and mining professionals with the knowledge and practical skills needed to excel in the field. Whether it\'s mapping, geological modelling, structural geology analysis, grade control, reconciliation or mining 101, we help you drive NPV growth for your project.',
    features: ['Hands-on Training', 'Geological Mapping', 'Mine Planning', 'Professional Development'],
    benefits: [
      'Enhanced team skills',
      'Increased operational efficiency',
      'Reduced training costs',
      'Better project outcomes'
    ]
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
    <div className="min-h-screen py-20" style={{ backgroundColor: '#0D0E11' }}>
      <div className="container-custom">
        {/* Back Button */}
        <Link
          href="/services"
          className="inline-flex items-center text-gray-400 hover:text-miningGold transition-colors mb-8"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span style={{ color: '#D4AF37' }}>{service.name}</span>
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
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
              className="rounded-xl p-8"
              style={{ backgroundColor: '#1F222A' }}
            >
              <h2 className="text-2xl font-semibold mb-4 text-miningGold">Overview</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                {service.fullDescription}
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 text-miningGold mt-8">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-300">
                    <FaCheckCircle className="text-miningGold text-sm" />
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
            <div className="rounded-xl p-8 sticky top-24" style={{ backgroundColor: '#1F222A' }}>
              <h3 className="text-xl font-semibold mb-4 text-miningGold">Key Benefits</h3>
              <ul className="space-y-3 mb-8">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-miningGold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="pt-6 border-t border-gray-700">
                <Link
                  href="/contact"
                  className="block w-full text-center btn-primary"
                >
                  Request a Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}