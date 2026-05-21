'use client'

import { useState } from 'react'
import axios from 'axios'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    company_name: '',
    country: '',
    service_interest: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/contact-messages/`, formData)
      setSubmitted(true)
      setFormData({
        full_name: '',
        email: '',
        company_name: '',
        country: '',
        service_interest: '',
        message: ''
      })
    } catch (err) {
      setError('Failed to send message. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center py-20">
        <div className="text-center">
          <div className="text-miningGold text-6xl mb-4">✓</div>
          <h2 className="text-2xl font-bold mb-2">Message Sent Successfully!</h2>
          <p className="text-gray-400 mb-6">Thank you for contacting GOLDEN EXPRO. We'll get back to you within 24-48 hours.</p>
          <button onClick={() => setSubmitted(false)} className="btn-primary">
            Send Another Message
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20" style={{ backgroundColor: '#0D0E11' }}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Partner With <span style={{ color: '#D4AF37' }}>Us</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Let's discuss how GOLDEN EXPRO can help with your mining and exploration needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="rounded-lg p-6" style={{ backgroundColor: '#1F222A' }}>
              <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="text-miningGold mt-1" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-gray-400">Dar es Salaam, Tanzania</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <FaEnvelope className="text-miningGold mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-400">info@goldenexpro.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <FaPhone className="text-miningGold mt-1" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-400">+255 123 456 789</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="rounded-lg p-6" style={{ backgroundColor: '#1F222A' }}>
              {error && (
                <div className="bg-red-500/20 border border-red-500 text-red-500 px-4 py-2 rounded mb-4">
                  {error}
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="full_name"
                    required
                    value={formData.full_name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded bg-miningDark border border-gray-700 focus:outline-none focus:border-miningGold text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded bg-miningDark border border-gray-700 focus:outline-none focus:border-miningGold text-white"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Company Name</label>
                  <input
                    type="text"
                    name="company_name"
                    value={formData.company_name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded bg-miningDark border border-gray-700 focus:outline-none focus:border-miningGold text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Country *</label>
                  <input
                    type="text"
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded bg-miningDark border border-gray-700 focus:outline-none focus:border-miningGold text-white"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Service Interest</label>
                <select
                  name="service_interest"
                  value={formData.service_interest}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded bg-miningDark border border-gray-700 focus:outline-none focus:border-miningGold text-white"
                >
                  <option value="">Select a service</option>
                  <option value="exploration">Mineral Exploration</option>
                  <option value="strategy">Mining Strategy</option>
                  <option value="modelling">3D Modelling & GIS</option>
                  <option value="hydrogeology">Hydrogeology</option>
                  <option value="training">Geology Training</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Message *</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded bg-miningDark border border-gray-700 focus:outline-none focus:border-miningGold text-white"
                ></textarea>
              </div>
              
              <button type="submit" disabled={loading} className="btn-primary w-full">
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
