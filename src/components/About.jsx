import { useEffect } from 'react'
import { personalInfo } from '../data/portfolioData'

function GraduationCapIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
  )
}

export default function About({ setActiveSection }) {
  useEffect(() => {
    const aboutSectionElement = document.getElementById('about')
    const intersectionObserver = new IntersectionObserver(
      ([intersectionEntry]) => {
        if (intersectionEntry.isIntersecting) setActiveSection('about')
      },
      { threshold: 0.5 }
    )
    if (aboutSectionElement) intersectionObserver.observe(aboutSectionElement)
    return () => aboutSectionElement && intersectionObserver.unobserve(aboutSectionElement)
  }, [setActiveSection])

  return (
    <section id="about" className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-neon font-mono text-sm mb-4">Hi, my name is</p>
        <h1 className="text-4xl md:text-5xl font-bold text-neon mb-4">
          {personalInfo.name}.
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-12">
          {personalInfo.tagline}
        </h2>

        <div className="prose prose-lg max-w-none text-lightgray leading-relaxed space-y-6">
          <p>{personalInfo.about}</p>

          <div>
            <h3 className="text-white font-semibold mb-3">Technologies I work with</h3>
            <ul className="flex flex-wrap gap-2">
              {personalInfo.techStack.map((technology) => (
                <li key={technology}>
                  <span className="inline-block px-3 py-1 rounded-full text-sm bg-darkgray text-neon border border-neon">
                    {technology}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
              <GraduationCapIcon className="w-6 h-6 text-neon" />
              Education
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {personalInfo.education.map((educationEntry) => (
                <div
                  key={educationEntry.title}
                  className="group p-6 rounded-xl border border-[#3a3a4a] bg-[#1a1a24] hover:bg-[rgba(0,255,128,0.18)] hover:border-neon transition-all duration-300"
                >
                  <h4 className="font-bold text-white text-lg mb-1">{educationEntry.title}</h4>
                  {educationEntry.degree && (
                    <p className="text-white/90 text-sm mb-2">{educationEntry.degree}</p>
                  )}
                  <p className="text-white/80 text-sm mb-4">
                    {educationEntry.startDate} - {educationEntry.endDate}
                  </p>
                  <div className="flex justify-between items-end">
                    <p className="text-white/80 text-sm">{educationEntry.institution}</p>
                    <div className="flex items-center gap-1.5 text-neon">
                      <GraduationCapIcon className="w-5 h-5" />
                      <span className="font-semibold">{educationEntry.gpa}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn inline-block px-6 py-3 border-2 border-neon text-neon font-medium rounded hover:bg-neon transition-colors"
            >
              View Résumé
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
