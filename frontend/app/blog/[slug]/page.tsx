'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import axios from 'axios'
import { motion } from 'framer-motion'
import { FaCalendarAlt, FaUser, FaArrowLeft, FaShare, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa'

interface BlogPost {
  id: number
  title: string
  slug: string
  category: string
  content: string
  excerpt: string
  image: string
  author: string
  published_date: string
  is_featured: boolean
}

export default function BlogPostPage() {
  const params = useParams()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    fetchPost()
  }, [params.slug])

  const fetchPost = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/media-posts/`)
      const posts = response.data.results || response.data
      const foundPost = posts.find((p: BlogPost) => p.slug === params.slug)
      setPost(foundPost || null)
      
      // Get related posts (same category, different post)
      if (foundPost) {
        const related = posts.filter((p: BlogPost) => p.category === foundPost.category && p.slug !== params.slug).slice(0, 3)
        setRelatedPosts(related)
      }
    } catch (error) {
      console.error('Error fetching blog post:', error)
    } finally {
      setLoading(false)
    }
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-[#D4AF37] text-xl">Loading post...</div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-[#D4AF37] hover:underline">Back to Blog</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-24" style={{ backgroundColor: '#F8F9FA' }}>
      <div className="container-custom max-w-5xl mx-auto">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center text-gray-600 hover:text-[#D4AF37] transition-colors mb-8 group"
        >
          <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>

        {/* Header Image */}
        {post.image && (
          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-96 object-cover"
            />
          </div>
        )}

        {/* Post Content */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
        >
          {/* Category */}
          <div className="mb-4">
            <span className="px-3 py-1 bg-[#D4AF37]/10 text-[#D4AF37] text-sm rounded-full">
              {post.category.toUpperCase()}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8 pb-4 border-b border-gray-100">
            <span className="flex items-center gap-2">
              <FaCalendarAlt className="text-[#D4AF37]" />
              {new Date(post.published_date).toLocaleDateString()}
            </span>
            <span className="flex items-center gap-2">
              <FaUser className="text-[#D4AF37]" />
              {post.author}
            </span>
          </div>

          {/* Content */}
          <div 
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }}
          />
        </motion.article>

        {/* Share Section */}
        <div className="mt-8 text-center">
          <h3 className="text-lg font-semibold mb-4">Share this post</h3>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => window.open(`https://twitter.com/intent/tweet?text=${post.title}&url=${shareUrl}`, '_blank')}
              className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#1DA1F2] hover:text-white transition-all"
            >
              <FaTwitter />
            </button>
            <button
              onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, '_blank')}
              className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#0077B5] hover:text-white transition-all"
            >
              <FaLinkedin />
            </button>
            <button
              onClick={() => window.location.href = `mailto:?subject=${post.title}&body=${shareUrl}`}
              className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#D4AF37] hover:text-white transition-all"
            >
              <FaEnvelope />
            </button>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Related Posts</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all group">
                    <div className="h-40 overflow-hidden">
                      <img 
                        src={relatedPost.image || '/images/blog-placeholder.jpg'} 
                        alt={relatedPost.title}
                        className="w-full h-full object-cover transition-transform group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-800 group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h4>
                      <p className="text-gray-500 text-xs mt-2">
                        {new Date(relatedPost.published_date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}