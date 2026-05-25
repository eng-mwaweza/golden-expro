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
    name: 'Strategy',
    slug: 'strategy',
    icon: FaChartLine,
    iconColor: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500',
    description: 'Minrom\'s strategy service aims to unlock the value of a project by integrating geological and metallurgical ore characteristics, mine planning and environmental drivers of ore deposits.',
    fullDescription: 'We combine geological and geometallurgical expertise with strategic planning to optimise resource utilisation, improve operational efficiency, and enhance project viability. From feasibility studies to life-of-mine planning, we help clients navigate complex geological, technical, and economic challenges. Our tailored strategies ensure that mining projects are not only profitable but also sustainable, aligning with industry best practices and regulatory requirements. With Minrom, you gain a roadmap to success—built on data, driven by strategy.',
    features: ['Resource Optimisation', 'Feasibility Studies', 'Life-of-Mine Planning', 'Risk Mitigation']
  },
  {
    id: 2,
    name: 'Exploration',
    slug: 'exploration',
    icon: FaHardHat,
    iconColor: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500',
    description: 'Minrom\'s Exploration services identify and evaluate mineral deposits using advanced geological exploration techniques to maximise discovery potential and investment returns.',
    fullDescription: 'We provide junior explorers or prospecting companies with the expertise and tools needed to discover and define valuable mineral resources. Whether it\'s mineral target generation, structural geology analysis, geometallurgical characterisation, or prospecting work programme development, we work closely with our clients to turn geological data into actionable intelligence, ensuring sustainable and efficient mining practices. With Minrom, you don\'t just extract minerals; you extract value.',
    features: ['Mineral Target Generation', 'Structural Geology Analysis', 'Geometallurgical Characterisation', 'Work Programme Development']
  },
  {
    id: 3,
    name: 'Resource Modelling & GIS',
    slug: 'modelling-gis',
    icon: FaMap,
    iconColor: 'text-green-500',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500',
    description: 'Minrom\'s Modelling and GIS services integrate complex geological data, structural data and geometallurgical data into well-informed optimised mine plans, driving the increase in NPV.',
    fullDescription: 'Our Modelling and GIS services transform complex geological data into actionable insights, enabling precise Mineral Resource estimation and strategic decision-making. Using advanced geological modelling and Geographic Information Systems (GIS), we create highly detailed 3D resource models that accurately represent subsurface conditions. This integrated approach ensures that your mining operations are based on the most accurate and comprehensive data available.',
    features: ['3D Geological Modelling', 'GIS Spatial Analysis', 'Resource Estimation', 'Data Integration']
  },
  {
    id: 4,
    name: 'Mining Geology',
    slug: 'mining-geology',
    icon: FaMountain,
    iconColor: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500',
    description: 'Minrom\'s Mining Geology services deliver expert integration of mine planning and grade control practices and delivers efficient ore extraction, grade control and reserve reconciliation to maximise mining efficiency.',
    fullDescription: 'At Minrom, our Mining Geology services are designed to bridge the gap between exploration and operational success. Whether it\'s grade control, structural geology analysis, geometallurgical modelling or reconciliation, we work closely with clients to turn geological data into actionable intelligence, ensuring sustainable and efficient mining practices. With Minrom, you don\'t just extract minerals; you extract value.',
    features: ['Grade Control', 'Structural Geology', 'Geometallurgical Modelling', 'Reserve Reconciliation']
  },
  {
    id: 5,
    name: 'Hydrogeology',
    slug: 'hydrogeology',
    icon: FaWater,
    iconColor: 'text-cyan-500',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500',
    description: 'Minrom\'s Hydrology services specialise in groundwater detection, quantification, management, and sustainability solutions to support mining operations and environmental compliance.',
    fullDescription: 'Minrom Hydrogeology specialises in the detection, quantification, and management of valuable groundwater and surface water resources, ensuring sustainable and efficient water solutions for mining, industrial operations, and the community. Our hydrogeology services provide critical insights into groundwater availability, movement, and quality, helping clients mitigate risks, optimise resource use, and comply with environmental regulations.',
    features: ['Groundwater Detection', 'Water Management', 'Environmental Compliance', 'Sustainability Solutions']
  },
  {
    id: 6,
    name: 'Training',
    slug: 'training',
    icon: FaGraduationCap,
    iconColor: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500',
    description: 'Minrom\'s Training programmes equip professionals with hands-on skills in mineral exploration, resource estimation, geological mapping, mine planning, and mining 101 for real-world mining applications.',
    fullDescription: 'Minrom\'s Training programmes equip exploration and mining professionals with the knowledge and practical skills needed to excel in the field. Whether it\'s mapping, geological modelling, structural geology analysis, grade control, reconciliation or mining 101, we work closely with clients to turn geological data into actionable intelligence, ensuring sustainable and efficient mining practices. At Minrom, we believe in more than just extracting minerals or value; we help you drive NPV growth for your project.',
    features: ['Hands-on Training', 'Geological Mapping', 'Mine Planning', 'Professional Development']
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen py-20" style={{ backgroundColor: '#0D0E11' }}>
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our <span style={{ color: '#D4AF37' }}>Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Comprehensive mining solutions from exploration to development, delivered with technical excellence
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
              className={`rounded-xl overflow-hidden border-l-8 ${service.borderColor} bg-miningGray/50 hover:bg-miningGray transition-all duration-300 hover:shadow-2xl hover:transform hover:scale-[1.01]`}
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                      {service.name}
                    </h2>
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {service.fullDescription}
                    </p>
                    
                    {/* Features Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs rounded-full bg-miningDark text-gray-300 border border-miningGold/30"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    {/* Learn More Link */}
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center text-miningGold hover:text-miningGoldHover transition-colors font-semibold group"
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
          <div className="bg-gradient-to-r from-miningGold/10 to-miningGold/5 rounded-2xl p-8 border border-miningGold/20">
            <h3 className="text-2xl font-bold mb-3">Ready to discuss your next project?</h3>
            <p className="text-gray-400 mb-6">
              Our team of experts is ready to help you achieve your mining goals.
            </p>
            <Link href="/contact" className="btn-primary">
              Request a Consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}