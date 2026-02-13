import { useEffect, useState } from 'react'
import { personalInfo, FORMSPREE_ID } from '../data/portfolioData'

export default function Contact({ setActiveSection }) {
  const [formData, setFormData] = useState({ name: '', email: '', content: '' })
  const [statusMessage, setStatusMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const contactSectionElement = document.getElementById('contact')
    const intersectionObserver = new IntersectionObserver(
      ([intersectionEntry]) => {
        if (intersectionEntry.isIntersecting) setActiveSection('contact')
      },
      { threshold: 0.3 }
    )
    if (contactSectionElement) intersectionObserver.observe(contactSectionElement)
    return () => contactSectionElement && intersectionObserver.unobserve(contactSectionElement)
  }, [setActiveSection])

  const submitContactForm = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setStatusMessage('')

    try {
      if (FORMSPREE_ID) {
        const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        })
        if (response.ok) {
          setStatusMessage('Thank you! I\'ll get back to you soon.')
          setFormData({ name: '', email: '', content: '' })
        } else {
          setStatusMessage('Something went wrong. Please try again or email me directly.')
        }
      } else {
        setStatusMessage('Thank you! I\'ll get back to you soon.')
        setFormData({ name: '', email: '', content: '' })
      }
    } catch {
      setStatusMessage('Something went wrong. Please try again or email me directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const updateFormField = (event) => {
    setFormData((previousFormData) => ({
      ...previousFormData,
      [event.target.name]: event.target.value,
    }))
  }

  return (
    <section id="contact" className="min-h-screen pt-24 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
          <span className="text-neon font-mono text-lg">03.</span>
          Contact
        </h2>
        <div className="h-px w-32 bg-neon/50 mb-12" />

        <p className="text-lightgray text-lg mb-12">
          I'm open to new opportunities and would love to hear from you. Reach out via the links
          below or send me a message!
        </p>

        <div className="flex flex-wrap gap-6 mb-12">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-neon transition-colors"
          >
            <GitHubIcon className="w-6 h-6" />
            <span>GitHub</span>
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-neon transition-colors"
          >
            <LinkedInIcon className="w-6 h-6" />
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2 text-white hover:text-neon transition-colors"
          >
            <EmailIcon className="w-6 h-6" />
            <span>{personalInfo.email}</span>
          </a>
          <span className="flex items-center gap-2 text-lightgray">
            <LocationIcon className="w-6 h-6" />
            <span>{personalInfo.location}</span>
          </span>
        </div>

        <form onSubmit={submitContactForm} className="space-y-6 font-mono">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={updateFormField}
              required
              className="contact-input w-full px-4 py-3 rounded-xl bg-[#1a1a24] text-white placeholder:text-white/40 focus:outline-none focus:border-[var(--neon)] focus:shadow-[0_0_12px_rgba(0,255,128,0.25)] transition-all duration-300"
              placeholder="Your secret identity"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={updateFormField}
              required
              className="contact-input w-full px-4 py-3 rounded-xl bg-[#1a1a24] text-white placeholder:text-white/40 focus:outline-none focus:border-[var(--neon)] focus:shadow-[0_0_12px_rgba(0,255,128,0.25)] transition-all duration-300"
              placeholder="I promise I won't spam you"
            />
          </div>
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-white mb-2">
              Content
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={updateFormField}
              required
              rows={5}
              className="contact-input w-full px-4 py-3 rounded-xl bg-[#1a1a24] text-white placeholder:text-white/40 focus:outline-none focus:border-[var(--neon)] focus:shadow-[0_0_12px_rgba(0,255,128,0.25)] transition-all duration-300 resize-none"
              placeholder="Your message goes here. Ask me anything!"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="contact-input w-full px-6 py-4 rounded-xl bg-[#1a1a24] text-white font-medium border border-[#3a3a4a] hover:bg-[rgba(0,255,128,0.18)] hover:border-neon transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-[#1a1a24] disabled:hover:border-[#3a3a4a]"
          >
            {isSubmitting ? 'Sending...' : 'Send Email →'}
          </button>
          {statusMessage && <p className="text-neon font-medium">{statusMessage}</p>}
        </form>
      </div>
    </section>
  )
}

function GitHubIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function LinkedInIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function EmailIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

function LocationIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}
