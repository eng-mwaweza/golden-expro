import Link from 'next/link'
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-miningGray border-t border-miningGold/20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-display font-bold mb-4">
              GOLDEN <span className="text-miningGold">EXPRO</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Premium mining exploration and consulting services in Tanzania and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-miningGold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-400 hover:text-miningGold transition-colors">Services</Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-miningGold transition-colors">Projects</Link></li>
              <li><Link href="/media" className="text-gray-400 hover:text-miningGold transition-colors">Media</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-miningGold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-miningGold">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Dar es Salaam, Tanzania</li>
              <li>info@goldenexpro.com</li>
              <li>+255 123 456 789</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4 text-miningGold">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-miningGold transition-colors text-2xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-miningGold transition-colors text-2xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-miningGold transition-colors text-2xl">
                <FaLinkedin />
              </a>
              <a href="#" className="text-gray-400 hover:text-miningGold transition-colors text-2xl">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-miningGold/20 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} GOLDEN EXPRO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer