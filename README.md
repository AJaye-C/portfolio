# Portfolio

A single-page portfolio site with dark theme, neon green accents, and smooth navigation.

## Features

- **About** — Bio, tech stack, education tiles, resume button
- **Portfolio** — Project cards with images, descriptions, and tech tags
- **Contact** — Social links and contact form (Formspree-ready)

## Setup

```bash
npm install
npm run dev
```

Edit `src/data/portfolioData.js` with your personal information and projects.

Add your resume PDF to the `public` folder and ensure `resumeUrl` points to it.

For the contact form to send real emails, add your Formspree form ID in `portfolioData.js`.
