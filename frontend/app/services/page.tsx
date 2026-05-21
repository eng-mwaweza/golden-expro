'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { FaHardHat, FaChartLine, FaMap, FaWater, FaGraduationCap, FaCogs } from 'react-icons/fa'

interface Service {
  id: number
  name: string
  slug: string
  short_description: string
  full_description: string
  icon_class: string
  order: number
  is_active: boolean
}

interface ApiResponse {
  count: number
  next: string | null
  previous: string | null
  results: Service[]
}

const iconMap: { [key: string]: any } = {
  'FaHardHat': FaHardHat,
  'FaChartLine': FaChartLine,
  'FaMap': FaMap,
  'FaWater': FaWater,
  'FaGraduationCap': FaGraduationCap,
  'FaCogs': FaCogs,
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchServices()
  }, [])

  const fetchServices = async () => {
    try {
      const response = await axios.get<ApiResponse>(`${process.env.NEXT_PUBLIC_API_URL}/services/`)
      // The API returns paginated response with 'results' array
      setServices(response.data.results || response.data)
      setError(null)
    } catch (err) {
      console.error('Error fetching services:', err)
      setError('Failed to load services. Please make sure the backend is running.')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-miningGold text-xl">Loading services...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-xl text-center">
          <p>{error}</p>
          <p className="text-sm mt-2">Make sure Django backend is running at http://localhost:8000</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20" style={{ backgroundColor: '#0D0E11' }}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span style={{ color: '#D4AF37' }}>Services</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive mining solutions from exploration to development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon_class] || FaCogs
            return (
              <div
                key={service.id}
                className="rounded-lg p-6 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: '#1F222A' }}
              >
                <IconComponent style={{ color: '#D4AF37', fontSize: '2.5rem', marginBottom: '1rem' }} />
                <h3 className="text-xl font-semibold mb-2 text-white">{service.name}</h3>
                <p className="text-gray-400 mb-4">{service.short_description}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-block text-miningGold hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            )
          })}
        </div>

        {services.length === 0 && (
          <div className="text-center text-gray-400 py-10">
            No services available yet. Please add services in the admin panel.
          </div>
        )}
      </div>
    </div>
  )
}