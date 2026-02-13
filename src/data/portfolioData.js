export const FORMSPREE_ID = 'xkovjvdq'

export const personalInfo = {
  name: 'Ashley Cabanban',
  title: 'Developer',
  tagline: 'Web Developer',
  about: `I'm a Computer Science student at CIIT College of Arts and Technology, specializing in full-stack web and mobile application development. I build responsive, scalable applications using modern frameworks and technologies. I'm currently seeking internship opportunities where I can contribute to real-world projects, collaborate with talented teams, and continue growing as a developer.`,
  location: 'Quezon City, Philippines',
  email: 'ashleyjaye.cabanban@gmail.com',
  resumeUrl: './resume.pdf',
  github: 'https://github.com/AJaye-C',
  linkedin: 'https://linkedin.com/in/AJaye-C',
  techStack: ['HTML/CSS', 'JavaScript', 'TypeScript', 'Python', 'C#', 'Laravel', 'React', 'Flutter', 'MySQL', 'Firebase', 'Git'],
  education: [
    {
      title: 'Bachelor of Science in Computer Science',
      degree: null,
      startDate: '2022',
      endDate: 'Present',
      gpa: null,
      institution: 'CIIT College of Arts and Technology',
    },
    {
      title: 'High school',
      degree: 'STEM Track - with high honors',
      startDate: '2019',
      endDate: '2021',
      gpa: '97.5',
      institution: 'New Era University',
    },
  ],
}

export const projects = [
  {
    id: 1,
    title: 'DonAid',
    subtitle: 'Web Application — Thesis Project',
    isWorkInProgress: true,
    description: 'A blockchain-based donation management system that records every donation as an immutable Ethereum transaction, giving donors cryptographic receipts and real-time dashboards to track how their money flows from donation to beneficiary.',
    image: './projects/donaid.png',
    tags: ['TypeScript', 'Next.js', 'Solidity', 'Prisma'],
    liveUrl: null,
    githubUrl: null,
  },
  {
    id: 2,
    title: 'GCoins',
    subtitle: 'Mobile Application — Academic Project',
    description: 'A mobile e-wallet application that allows users to send and receive money, top up their balance, and view their transaction history.',
    image: './projects/gcoins.png',
    tags: ['Flutter', 'MongoDB'],
    liveUrl: 'https://youtu.be/cPAj61zXino',
    githubUrl: 'https://github.com/kirkbesa/flutter_finals',
  },
  {
    id: 3,
    title: 'Customer Feedback Website',
    subtitle: 'Web Application — Academic Project',
    description: 'A customer feedback website that allows users to submit feedback, view and comment on feedback from other users.',
    image: './projects/8cuts.png',
    tags: ['React', 'Ruby on Rails', 'Firebase'],
    liveUrl: 'https://youtu.be/LBZGzRwxxCs',
    githubUrl: 'https://github.com/syvoll-ciit/Final-Output',
  },
]
