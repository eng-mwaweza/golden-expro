'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'

interface Project {
  id: number
  title: string
  location: string
  stage: string
  commodity: string
  description: string
  image: string
  featured: boolean
}

interface ApiResponse {
  count: number
  next: string | null
  previous: string | null
  results: Project[]
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      const response = await axios.get<ApiResponse>(`${process.env.NEXT_PUBLIC_API_URL}/projects/`)
      setProjects(response.data.results || response.data)
      setError(null)
    } catch (err) {
      console.error('Error fetching projects:', err)
      setError('Failed to load projects. Please make sure the backend is running.')
    } finally {
      setLoading(false)
    }
  }

  const getStageColor = (stage: string) => {
    switch(stage) {
      case 'grassroots': return 'bg-blue-500'
      case 'advanced': return 'bg-yellow-500'
      case 'feasibility': return 'bg-orange-500'
      case 'production': return 'bg-green-500'
      default: return 'bg-gray-500'
    }
  }

  const getStageLabel = (stage: string) => {
    switch(stage) {
      case 'grassroots': return 'Grassroots'
      case 'advanced': return 'Advanced'
      case 'feasibility': return 'Feasibility'
      case 'production': return 'Production'
      default: return stage
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-miningGold text-xl">Loading projects...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-xl text-center">
          <p>{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20" style={{ backgroundColor: '#0D0E11' }}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span style={{ color: '#D4AF37' }}>Projects</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover our mining and exploration projects across Tanzania
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: '#1F222A' }}
            >
              <div className="h-48 bg-gray-700 flex items-center justify-center">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-gray-400">No image available</div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className={`px-2 py-1 rounded text-xs text-white ${getStageColor(project.stage)}`}>
                    {getStageLabel(project.stage)}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-2">{project.location}</p>
                <p className="text-miningGold text-sm mb-3">{project.commodity}</p>
                <p className="text-gray-400 text-sm">{project.description.substring(0, 100)}...</p>
              </div>
            </div>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center text-gray-400 py-10">
            No projects available yet. Please add projects in the admin panel.
          </div>
        )}
      </div>
    </div>
  )
}