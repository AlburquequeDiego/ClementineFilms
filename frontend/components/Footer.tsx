import Link from 'next/link'
import { Film, Play, Instagram, Youtube, Twitter, Mail, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-secondary-900 border-t border-secondary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <Film className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-display font-bold gradient-text">
                ClementineFilms
              </span>
            </Link>
            <p className="text-secondary-400 mb-6 max-w-md">
              Descubre las mejores películas, cortos e historias del cine nacional. 
              Un espacio dedicado al cine independiente y las nuevas voces del séptimo arte.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="mailto:hola@clementinefilms.com" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-secondary-400 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-secondary-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/peliculas" className="text-secondary-400 hover:text-white transition-colors">
                  Películas
                </Link>
              </li>
              <li>
                <Link href="/cortos" className="text-secondary-400 hover:text-white transition-colors">
                  Cortos
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-secondary-400 hover:text-white transition-colors">
                  Sobre Mí
                </Link>
              </li>
            </ul>
          </div>

          {/* Streaming */}
          <div>
            <h3 className="text-white font-semibold mb-4">Streaming</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/streaming" className="text-secondary-400 hover:text-white transition-colors flex items-center">
                  <Play className="w-4 h-4 mr-2" />
                  Ver Películas
                </Link>
              </li>
              <li>
                <Link href="/premium" className="text-secondary-400 hover:text-white transition-colors">
                  Plan Premium
                </Link>
              </li>
              <li>
                <Link href="/familiar" className="text-secondary-400 hover:text-white transition-colors">
                  Plan Familiar
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-secondary-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-400 text-sm">
            © 2024 ClementineFilms. Todos los derechos reservados.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-secondary-400 hover:text-white text-sm transition-colors">
              Privacidad
            </Link>
            <Link href="/terms" className="text-secondary-400 hover:text-white text-sm transition-colors">
              Términos
            </Link>
            <span className="text-secondary-400 text-sm flex items-center">
              Hecho con <Heart className="w-4 h-4 mx-1 text-red-500" /> en Colombia
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
} 