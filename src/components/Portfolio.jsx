import { useEffect } from 'react'
import { projects } from '../data/portfolioData'

export default function Portfolio({ setActiveSection }) {
  useEffect(() => {
    const portfolioSectionElement = document.getElementById('portfolio')
    const intersectionObserver = new IntersectionObserver(
      ([intersectionEntry]) => {
        if (intersectionEntry.isIntersecting) setActiveSection('portfolio')
      },
      { threshold: 0.3 }
    )
    if (portfolioSectionElement) intersectionObserver.observe(portfolioSectionElement)
    return () => portfolioSectionElement && intersectionObserver.unobserve(portfolioSectionElement)
  }, [setActiveSection])

  return (
    <section id="portfolio" className="min-h-screen pt-24 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
          <span className="text-neon font-mono text-lg">02.</span>
          Portfolio
        </h2>
        <div className="h-px w-32 bg-neon/50 mb-16" />

        <div className="space-y-24">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`grid md:grid-cols-12 gap-8 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={`md:col-span-7 ${index % 2 === 1 ? 'md:col-start-6' : ''}`}>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group relative overflow-hidden rounded-lg bg-darkgray aspect-video border border-charcoal"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-neon/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
              <div
                className={`md:col-span-5 ${
                  index % 2 === 1 ? 'md:col-start-1 md:row-start-1 md:text-right' : ''
                }`}
              >
                <div className={`flex flex-wrap items-center gap-2 mb-2 ${
                  index % 2 === 1 ? 'md:justify-end' : ''
                }`}>
                  <p className="text-neon font-mono text-sm">Featured Project</p>
                  {project.isWorkInProgress && (
                    <span className="px-2 py-0.5 text-xs font-mono rounded border border-neon/60 text-neon/90 bg-neon/5">
                      Work in progress
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-neon transition-colors"
                  >
                    {project.title}
                  </a>
                </h3>
                <p className="text-lg text-lightgray mb-4 font-medium">{project.subtitle}</p>
                <p className="text-lightgray mb-6 leading-relaxed">{project.description}</p>
                <ul
                  className={`flex flex-wrap gap-2 mb-4 font-mono text-sm ${
                    index % 2 === 1 ? 'md:justify-end' : ''
                  }`}
                >
                  {project.tags.map((tag) => (
                    <li key={tag} className="text-lightgray">
                      {tag}
                      {tag !== project.tags[project.tags.length - 1] && (
                        <span className="mx-2 text-neon">·</span>
                      )}
                    </li>
                  ))}
                </ul>
                <div className={`flex gap-4 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-neon transition-colors"
                    aria-label="GitHub"
                  >
                    <GitHubIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-neon transition-colors"
                    aria-label="External link"
                  >
                    <ExternalIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
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

function ExternalIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}
