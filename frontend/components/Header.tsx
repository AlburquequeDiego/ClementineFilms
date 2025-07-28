'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Search, Play, Film, Users, BookOpen } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-cinematic-black/95 backdrop-blur-sm border-b border-cinematic-light sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-cinematic-yellow rounded-none flex items-center justify-center cinematic-glow">
              <Film className="w-7 h-7 text-cinematic-black" />
            </div>
            <span className="text-2xl font-display font-black text-cinematic-yellow tracking-wider">
              CLEMENTINEFILMS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link href="/" className="text-white hover:text-cinematic-yellow transition-colors font-medium tracking-wide">
              HOME
            </Link>
            <Link href="/blog" className="text-white hover:text-cinematic-yellow transition-colors font-medium tracking-wide">
              BLOG
            </Link>
            <Link href="/peliculas" className="text-white hover:text-cinematic-yellow transition-colors font-medium tracking-wide">
              PELÍCULAS
            </Link>
            <Link href="/cortos" className="text-white hover:text-cinematic-yellow transition-colors font-medium tracking-wide">
              CORTOS
            </Link>
            <Link href="/about" className="text-white hover:text-cinematic-yellow transition-colors font-medium tracking-wide">
              SOBRE MÍ
            </Link>
          </nav>

          {/* Search and Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="p-2 text-white hover:text-cinematic-yellow transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link href="/streaming" className="btn-primary">
              <Play className="w-4 h-4 mr-2" />
              VER STREAMING
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-secondary-400 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-secondary-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-secondary-300 hover:text-white hover:bg-secondary-800 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="/blog"
                className="block px-3 py-2 text-secondary-300 hover:text-white hover:bg-secondary-800 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/peliculas"
                className="block px-3 py-2 text-secondary-300 hover:text-white hover:bg-secondary-800 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Películas
              </Link>
              <Link
                href="/cortos"
                className="block px-3 py-2 text-secondary-300 hover:text-white hover:bg-secondary-800 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Cortos
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-secondary-300 hover:text-white hover:bg-secondary-800 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Mí
              </Link>
              <div className="pt-4 border-t border-secondary-800">
                <Link
                  href="/streaming"
                  className="btn-primary w-full flex items-center justify-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Play className="w-4 h-4 mr-2" />
                  Ver Streaming
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
} 