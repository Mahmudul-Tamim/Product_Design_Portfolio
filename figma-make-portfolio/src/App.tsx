import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { Link, RouterProvider, createBrowserRouter } from 'react-router'

const asset = '/assets'
const profileImage = `${asset}/about-portrait-reference.png`

const projects = [
  {
    kind: 'northstar',
    eyebrow: 'PRODUCT DESIGN • Fintech • 2026',
    title: 'NorthStar - Making remitance transparent and trustworthy',
    href: 'https://www.figma.com/proto/ax8mBskpAYCoFFPSy4mega/My-File?node-id=35-973&t=KeIbnzqT8fJCV1fN-1&scaling=min-zoom&content-scaling=fixed&page-id=2%3A2',
  },
  {
    kind: 'health',
    eyebrow: 'PRODUCT DESIGN • Health care • 2026',
    title: 'From AI Support to the Right Therapist — Without Starting Over',
    href: 'https://www.figma.com/proto/ax8mBskpAYCoFFPSy4mega/My-File?node-id=80-356&t=aOGyb2P5GASepN15-1&scaling=min-zoom&content-scaling=fixed&page-id=2%3A2',
  },
  {
    kind: 'othoba',
    eyebrow: 'PRODUCT DESIGN • e-cOMMERCE • 2026',
    title: 'Reducing Othoba app order friction and speeding up purchases by 50%',
  },
]

const steps = [
  ['Research', 'Understanding the problem & the product space, researching the market, learning the customer and considering potential solutions.'],
  ['Design Strategy', 'Crafting design principles to help guide the project and set the direction for the team and client.'],
  ['User Journey', 'Diving deep into the user journey and exploring user stories, personas and user decision-making process. Crafting “golden path” of the user.'],
  ['Design Exploration', 'Exploring and brainstorming wide range of possible solutions. Testing, iterating, receiving feedback from the team and working through the problem.'],
  ['Rapid Prototyping', 'I use AI-powered tools to quickly turn ideas into interactive prototypes and test concepts early'],
  ['Final Polished UI', 'I create polished interfaces and scalable design systems for consistent, flexible products.'],
  ['Handoff & Testing', 'I test the design, refine key issues, and provide clear handoff for smooth development'],
]

function ProjectVisual({ kind }: { kind: string }) {
  if (kind === 'northstar') return <div className="northstar"><img className="northstar-pattern" src={`${asset}/21462.png`} alt="" /><img className="northstar-screen" src={`${asset}/43673.png`} alt="NorthStar remittance application" /></div>
  if (kind === 'health') return <div className="health-visual"><img src={`${asset}/healthcare-case-study.png`} alt="Therapy support mobile chat experience" /></div>
  return <div className="othoba"><div className="othoba-stack"><img src={`${asset}/f26b9.png`} alt="Othoba commerce app screen" /><img src={`${asset}/e2fb6.png`} alt="Othoba commerce app details" /></div></div>
}

export function Home() {
  const [activeSection, setActiveSection] = useState('work')

  useEffect(() => {
    const sections = ['work', 'process', 'about', 'contact']
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))
    const updateActiveSection = () => {
      const scrollMarker = window.innerHeight * 0.38
      const current = [...sections].reverse().find((section) => section.getBoundingClientRect().top <= scrollMarker) ?? sections[0]
      if (current) setActiveSection(current.id)
    }
    updateActiveSection()
    document.addEventListener('scroll', updateActiveSection, { passive: true, capture: true })
    window.addEventListener('resize', updateActiveSection)
    return () => {
      document.removeEventListener('scroll', updateActiveSection, true)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  return <main className="site-shell">
    <aside className="rail" aria-label="Primary navigation">
      <img className="avatar" src={profileImage} alt="Mahmudul Hasan Tamim" />
      <nav>{['work', 'process', 'about', 'contact'].map((section) => <a className={activeSection === section ? 'active' : ''} href={`#${section}`} key={section}>{section[0].toUpperCase() + section.slice(1)}</a>)}</nav>
    </aside>

    <div className="content">
      <section id="work" className="intro">
        <div className="identity"><span>Mahmudul Hasan Tamim</span><span className="role"><img src={`${asset}/1627c.svg`} alt="" />a product designer.</span></div>
        <div className="intro-copy">
          <p>An independent UI/UX designer with 1.5 years of experience shipping high-stakes mobile experiences across <strong>Fintech,Healthcare, and E-commerce.</strong></p>
          <div className="underlines" aria-hidden="true"><img src={`${asset}/3dc5e.svg`} alt="" /><img src={`${asset}/828ca.svg`} alt="" /><img src={`${asset}/929da.svg`} alt="" /></div>
          <p>Create mobile-first products that prioritize user intent, enhance clarity, and actively reduce friction through measurable strategies.</p>
        </div>
      </section>

      <section className="projects" aria-label="Selected work">
        {projects.map((project) => project.href ? <a className="project project-link" href={project.href} target="_blank" rel="noreferrer" key={project.kind} aria-label={`Open ${project.title} prototype`}><ProjectVisual kind={project.kind} /><div><p className="eyebrow">{project.eyebrow}</p><h2>{project.title}</h2></div></a> : <article className="project" key={project.kind}><ProjectVisual kind={project.kind} /><div><p className="eyebrow">{project.eyebrow}</p><h2>{project.title}</h2></div></article>)}
      </section>

      <section id="process" className="process-section">
        <div className="section-heading"><div><p className="mono">How I think / how I work</p><h2>A point of view<br />for the real world.</h2></div><p>Good interface work is not decoration after strategy. It is strategy, made visible and testable.</p></div>
        <div className="process-canvas"><div className="step-grid">{steps.map(([title, copy], i) => <article className="step" key={title}><p>STEP {i + 1}</p><img src={`${asset}/${i === 0 ? 'a1946.svg' : '2d51a.svg'}`} alt="" /><h3>{title}</h3><span>{copy}</span></article>)}</div></div>
      </section>

      <section id="about" className="about-section">
        <img className="avatar" src={profileImage} alt="Mahmudul Hasan Tamim" />
        <p className="about-label">About</p>
        <h2>Purposeful Products , Close to the ground</h2>
        <div className="about-copy"><p>I am a freelance Product designer based in Dhaka, focused on building purposeful mobile applications.</p><p>With a background spanning cross-functional agency work and independent client contracts, I bridge the gap between business objectives, user psychology, and technical feasibility. When I’m not refining design systems or testing mobile prototypes, I am dissecting mobile app onboarding funnels and exploring AI-assisted workflows to accelerate production turnaround.</p><p>I’m obsessed with improving—constantly learning, refining, and pushing my craft forward. I collaborate closely with developers, understand constraints, and design with implementation in mind</p><Link to="/about">More About Me</Link></div>
        <div className="facts"><Fact label="Tools" value="Figma, Auto Layout, Variables & Tokens, Prototyping, Component Architecture." /><Fact label="Specialties" value="Mobile App UX/UI (iOS/Android), Interaction Design, Wireframing, Usability Auditing, Developer Handoff." /><Fact label="Currently exploring" value="AI-assisted workflows, onboarding funnels, and the small decisions that make products feel calm." /><Fact label="Based in" value="Dhaka, Bangladesh — working independently across time zones." /></div>
      </section>
      <section id="contact" className="contact"><div className="contact-orbit" /><div><p>Have an upcoming project or product challenge?</p><h2>Let’s make the next screen count.</h2><span>Let’s talk about how clean, thoughtful product design can move your metrics.</span><EmailCopy className="contact-copy">Start a conversation <img src={`${asset}/5160d.svg`} alt="" /></EmailCopy></div></section>
    </div>
    <footer><div><h2>Mahmudul Hasan Tamim</h2><p>Junior Product Designer creating seamless and engaging digital journeys.</p></div><div className="footer-links"><div><span>Connect</span><a href="https://www.linkedin.com/in/tamimuxui/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://www.behance.net/md_tamim" target="_blank" rel="noreferrer">Behance</a><a href="https://dribbble.com/" target="_blank" rel="noreferrer">Dribble</a></div><div><span>Get in touch</span><EmailCopy>Email Me</EmailCopy></div></div><small>© 2026 Tamim. All rights reserved.<em>Designed & built with care</em></small></footer>
  </main>
}

function Fact({ label, value }: { label: string; value: string }) { return <article className="fact"><p>{label}</p><span>{value}</span></article> }

function SiteFooter() {
  return <footer className="about-footer"><div><h2>Mahmudul Hasan Tamim</h2><p>Junior Product Designer creating seamless and engaging digital journeys.</p></div><div className="footer-links"><div><span>Connect</span><a href="https://www.linkedin.com/in/tamimuxui/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://www.behance.net/md_tamim" target="_blank" rel="noreferrer">Behance</a><a href="https://dribbble.com/" target="_blank" rel="noreferrer">Dribble</a></div><div><span>Get in touch</span><EmailCopy>Email Me</EmailCopy></div></div><small>© 2026 Tamim. All rights reserved.<em>Designed &amp; built with care</em></small></footer>
}

function EmailCopy({ children, className = '' }: { children: ReactNode; className?: string }) {
  const [copied, setCopied] = useState(false)
  const copyEmail = async () => {
    await navigator.clipboard?.writeText('tamim.uxui@gmail.com')
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }
  return <button type="button" className={`email-copy ${className}`} onClick={copyEmail}>{copied ? 'Email copied' : children}<span className="copy-confirmation" role="status">{copied ? 'Email copied to clipboard' : ''}</span></button>
}

function AboutPage() {
  return <main className="about-page">
    <Link className="back-home" to="/"><img src={`${asset}/52b79.svg`} alt="" />Back Home</Link>
    <section className="about-hero">
      <div className="about-portrait"><img src={profileImage} alt="Mahmudul Hasan Tamim" /></div>
      <div className="about-introduction"><p className="about-label">About</p><h1>Purposeful Products , Close to the ground</h1><div><p>I am a freelance Product designer based in Dhaka, focused on building purposeful mobile applications.</p><p>With a background spanning cross-functional agency work and independent client contracts, I bridge the gap between business objectives, user psychology, and technical feasibility. When I’m not refining design systems or testing mobile prototypes, I am dissecting mobile app onboarding funnels and exploring AI-assisted workflows to accelerate production turnaround.</p><p>I’m obsessed with improving—constantly learning, refining, and pushing my craft forward. I collaborate closely with developers, understand constraints, and design with implementation in mind</p></div></div>
    </section>
    <section className="credentials">
      <div className="credential-block"><div className="credential-title"><h2>Experience</h2><a className="resume" href="https://drive.google.com/file/d/1b5h2KnCclBa-ano15sOPV5M6tVuqYJP4/view?usp=sharing" target="_blank" rel="noreferrer">Resume <img src={`${asset}/ee33c.svg`} alt="" /></a></div><div className="timeline"><img className="timeline-spine" src={`${asset}/21819.svg`} alt="" /><div className="roles"><Role name="Freelance" role="Product Designer" dates="May 26-present"><strong>stxresearch — Freelance / Peptide Selling E-Commerce website</strong><br />Users had difficulty comparing peptides and understanding product details. Simplified product categories, information hierarchy, and key product details. Made peptide discovery and comparison faster and easier<br />Live Link :https://www.stxresearch.com/</Role><img className="role-rule" src={`${asset}/95738.svg`} alt="" /><Role name="Softweb" role="Product Designer intern" dates="May 25- Oct 25">Designing complete product experiences for mobile and web, collaborating with managers, marketers, and developers to deliver user-focused solutions across industries</Role></div></div></div>
      <img className="full-rule" src={`${asset}/ea3e6.svg`} alt="" />
      <div className="credential-block education"><h2>Education</h2><div className="timeline"><img className="timeline-spine short" src={`${asset}/0a6aa.svg`} alt="" /><div className="roles"><Role name="Dhaka College" role="2021 – 2027" dates="Honor’s in Statistics - Major User Research" /></div></div></div>
      <img className="full-rule" src={`${asset}/ea3e6.svg`} alt="" />
    </section>
    <section className="gallery"><h2>Gallery</h2><div><div className="gallery-photo"><img className="gallery-image-rotated" src={`${asset}/ca671.png`} alt="Portfolio gallery image one" /></div><div className="gallery-photo"><img src={`${asset}/04c91.png`} alt="Portfolio gallery image two" /></div><div className="gallery-photo"><img src={`${asset}/f422b.png`} alt="Portfolio gallery image three" /></div></div></section>
    <SiteFooter />
  </main>
}

function Role({ name, role, dates, children }: { name: string; role: string; dates: string; children?: ReactNode }) { return <article className="role-entry"><div><h3>{name}</h3><p>{role}</p><p>{dates}</p></div>{children && <p className="role-description">{children}</p>}</article> }

const router = createBrowserRouter([{ path: '/', Component: Home }, { path: '/about', Component: AboutPage }])

export default function App() { return <RouterProvider router={router} /> }
