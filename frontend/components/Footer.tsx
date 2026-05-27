import Link from 'next/link'
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info - Logo without filters */}
          <div>
            <div className="mb-4">
              <img 
                src="/logo.png" 
                alt="GOLDEN EXPRO" 
                className="h-12 w-auto"
                // Removed brightness-0 invert - let logo keep its original colors
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium mining exploration and consulting services in Tanzania and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-[#D4AF37]">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm">Services</Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm">Projects</Link></li>
              <li><Link href="/media" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm">Media</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-[#D4AF37]">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <FaMapMarkerAlt className="text-[#D4AF37] mt-0.5" />
                <span>Dar es Salaam, Tanzania</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <FaEnvelope className="text-[#D4AF37]" />
                <a href="mailto:info@goldenexpro.com" className="hover:text-[#D4AF37] transition-colors">info@goldenexpro.com</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <FaPhone className="text-[#D4AF37]" />
                <a href="tel:+255763516723" className="hover:text-[#D4AF37] transition-colors">+255 763516723</a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4 text-[#D4AF37]">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#D4AF37] hover:text-gray-900 transition-all duration-300">
                <FaFacebook />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#D4AF37] hover:text-gray-900 transition-all duration-300">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#D4AF37] hover:text-gray-900 transition-all duration-300">
                <FaLinkedin />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#D4AF37] hover:text-gray-900 transition-all duration-300">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} GOLDEN EXPRO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer