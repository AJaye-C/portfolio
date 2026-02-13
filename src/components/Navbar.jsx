import { useEffect, useState } from 'react'

const navigationItems = [
  { sectionId: 'about', label: 'About' },
  { sectionId: 'portfolio', label: 'Portfolio' },
  { sectionId: 'contact', label: 'Contact' },
]

export default function Navbar({ activeSection, setActiveSection }) {
  const [hasScrolled, setHasScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const updateScrollState = () => setHasScrolled(window.scrollY > 50)
    window.addEventListener('scroll', updateScrollState)
    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

  const navigateToSection = (sectionId) => {
    setActiveSection(sectionId)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hasScrolled ? 'bg-dark/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#about" onClick={() => navigateToSection('about')} className="text-white font-semibold text-lg hover:text-neon transition-colors">
          Portfolio
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navigationItems.map(({ sectionId, label }) => (
            <li key={sectionId}>
              <button
                onClick={() => navigateToSection(sectionId)}
                className={`text-sm font-medium transition-colors relative ${
                  activeSection === sectionId ? 'text-neon' : 'text-lightgray hover:text-neon'
                }`}
              >
                {label}
                {activeSection === sectionId && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-neon" />
                )}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-white hover:text-neon"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-dark border-t border-charcoal">
          <ul className="px-6 py-4 flex flex-col gap-4">
            {navigationItems.map(({ sectionId, label }) => (
              <li key={sectionId}>
                <button
                  onClick={() => navigateToSection(sectionId)}
                  className={`block w-full text-left py-2 font-medium ${
                    activeSection === sectionId ? 'text-neon' : 'text-lightgray'
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
