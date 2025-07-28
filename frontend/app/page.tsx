import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, Play, Calendar, Clock, Eye, Film, Star, TrendingUp } from 'lucide-react'

// Datos de ejemplo para el blog
const featuredPosts = [
  {
    id: 1,
    title: "El Renacimiento del Cine Independiente en Colombia",
    excerpt: "Descubre cómo los nuevos cineastas están transformando la industria cinematográfica nacional con historias auténticas y narrativas innovadoras.",
    image: "/images/blog/cine-independiente.jpg",
    category: "Análisis",
    readTime: "8 min",
    views: "2.4k",
    date: "2024-01-15",
    featured: true
  },
  {
    id: 2,
    title: "Behind the Scenes: El Proceso de Creación de 'La Última Escena'",
    excerpt: "Un vistazo íntimo al proceso de filmación de mi último cortometraje, desde la concepción hasta la post-producción.",
    image: "/images/blog/behind-scenes.jpg",
    category: "Making Of",
    readTime: "12 min",
    views: "1.8k",
    date: "2024-01-10"
  },
  {
    id: 3,
    title: "Técnicas de Iluminación para Cineastas Independientes",
    excerpt: "Guía práctica sobre cómo lograr iluminación cinematográfica profesional con equipos limitados y presupuesto ajustado.",
    image: "/images/blog/iluminacion.jpg",
    category: "Tutorial",
    readTime: "15 min",
    views: "3.2k",
    date: "2024-01-08"
  }
]

const recentPosts = [
  {
    id: 4,
    title: "Los 10 Mejores Cortometrajes Colombianos de 2023",
    excerpt: "Una selección personal de los cortometrajes más impactantes y creativos del año pasado.",
    image: "/images/blog/cortos-2023.jpg",
    category: "Lista",
    readTime: "6 min",
    views: "4.1k",
    date: "2024-01-05"
  },
  {
    id: 5,
    title: "Entrevista: La Nueva Generación de Directores",
    excerpt: "Conversamos con jóvenes directores que están cambiando el panorama del cine nacional.",
    image: "/images/blog/entrevista.jpg",
    category: "Entrevista",
    readTime: "10 min",
    views: "2.9k",
    date: "2024-01-03"
  },
  {
    id: 6,
    title: "Cómo Escribir un Guión que Conecte con la Audiencia",
    excerpt: "Técnicas y consejos para crear historias que resuenen con el público y generen impacto emocional.",
    image: "/images/blog/guion.jpg",
    category: "Tutorial",
    readTime: "18 min",
    views: "5.7k",
    date: "2024-01-01"
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-secondary-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with cinematic effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-cinematic-black via-cinematic-dark to-cinematic-gray">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h2 className="text-lg text-cinematic-yellow font-medium tracking-widest uppercase mb-4">
              CLEMENTINEFILMS PRESENTA
            </h2>
          </div>
          
          <h1 className="movie-title mb-8">
            EL MEJOR CINE NACIONAL
          </h1>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-xl text-white/90 mb-6 leading-relaxed">
              "UNA AVENTURA CINEMATOGRÁFICA " 
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/blog" className="btn-primary text-lg px-10 py-4">
              EXPLORAR BLOG
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link href="/streaming" className="btn-secondary text-lg px-10 py-4">
              <Play className="w-5 h-5 mr-2" />
              VER PELÍCULAS
            </Link>
          </div>
        </div>
        
        {/* Cinematic glow effects */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-cinematic-black to-transparent"></div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-cinematic-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-display font-bold text-cinematic-yellow mb-4 tracking-wider">
              ARTÍCULO DESTACADO
            </h2>
            <div className="w-32 h-1 bg-cinematic-yellow"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="aspect-video bg-gradient-to-br from-cinematic-blue/20 to-cinematic-teal/20 border border-cinematic-light flex items-center justify-center overflow-hidden">
                <Film className="w-32 h-32 text-cinematic-blue group-hover:text-cinematic-yellow transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-cinematic-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="absolute top-6 left-6 bg-cinematic-yellow text-cinematic-black px-4 py-2 text-sm font-bold uppercase tracking-wider">
                {featuredPosts[0].category}
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-display font-bold text-white mb-6 leading-tight">
                {featuredPosts[0].title}
              </h3>
              <p className="text-white/80 mb-8 text-lg leading-relaxed">
                {featuredPosts[0].excerpt}
              </p>
              <div className="flex items-center space-x-6 text-sm text-white/60 mb-8">
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {featuredPosts[0].date}
                </span>
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {featuredPosts[0].readTime}
                </span>
                <span className="flex items-center">
                  <Eye className="w-4 h-4 mr-2" />
                  {featuredPosts[0].views}
                </span>
              </div>
              <Link href={`/blog/${featuredPosts[0].id}`} className="btn-primary">
                LEER ARTÍCULO
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20 bg-cinematic-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-display font-bold text-cinematic-yellow mb-4 tracking-wider">
              ARTÍCULOS RECIENTES
            </h2>
            <div className="w-32 h-1 bg-cinematic-yellow"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <article key={post.id} className="card group">
                <div className="relative mb-6">
                  <div className="aspect-video bg-gradient-to-br from-cinematic-blue/20 to-cinematic-teal/20 border border-cinematic-light flex items-center justify-center overflow-hidden">
                    <Film className="w-20 h-20 text-cinematic-blue group-hover:text-cinematic-yellow transition-colors duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-cinematic-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="absolute top-4 left-4 bg-cinematic-yellow text-cinematic-black px-3 py-1 text-xs font-bold uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-4 group-hover:text-cinematic-yellow transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-white/70 mb-6 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-white/50 mb-6">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {post.readTime}
                  </span>
                </div>
                <Link href={`/blog/${post.id}`} className="text-cinematic-yellow hover:text-yellow-400 font-bold flex items-center group uppercase tracking-wider">
                  Leer más
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link href="/blog" className="btn-primary">
              VER TODOS LOS ARTÍCULOS
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cinematic-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)]"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold text-cinematic-yellow mb-8 tracking-wider">
            ¿LISTO PARA VER MIS PELÍCULAS?
          </h2>
          <p className="text-xl text-white/80 mb-12 leading-relaxed">
            Accede a mi catálogo completo de películas, cortos y contenido exclusivo 
            en la plataforma de streaming.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/streaming" className="btn-primary text-lg px-10 py-4">
              <Play className="w-5 h-5 mr-2" />
              COMENZAR STREAMING
            </Link>
            <Link href="/about" className="btn-secondary text-lg px-10 py-4">
              CONOCE MI HISTORIA
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 