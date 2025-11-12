import './globals.css'
import Link from 'next/link'
import Clock from "@/components/Clock";
import ThemeToggle from "@/components/ThemeToggle";


export const metadata = {
  title: 'Your Name Portfolio',
  description: 'Minimalistic portfolio built with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={headerStyle}>
        <nav style={navStyle}>
  <Link href="/" style={linkStyle}>Home</Link>
  <Link href="/about" style={linkStyle}>About</Link>
  <Link href="/resume" style={linkStyle}>Resume</Link>
  <Link href="/blog" style={linkStyle}>Blog</Link>
  <Link href="/projects" style={linkStyle}>Projects</Link>
  <Clock />
</nav>

        </header>

        <main style={mainStyle}>{children}</main>

        <footer style={footerStyle}>
          
          <p>© {new Date().getFullYear()} Shruti Senthilram</p>
          <div className="mt-2 flex gap-8">
    <a style={footerStyle}
      href="https://github.com/yourusername"
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm font-medium hover:text-orange-500 transition-colors duration-200"
    >
     GitHub
    </a >
    <a style={footerStyle}
      href="https://linkedin.com/in/yourprofile"
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm font-medium hover:text-orange-500 transition-colors duration-200"
    >
      LinkedIn 
    </a>
    <a style={footerStyle}
      href="mailto:youremail@example.com"
      className="text-sm font-medium hover:text-orange-500 transition-colors duration-200"
    >
      Email
    </a>
  </div>
        </footer>
      </body>
    </html>
  )
}

const headerStyle = {
  padding: '8rem 0',
  textAlign: 'center',
}

const navStyle = {
  display: 'inline-flex',
  gap: '4rem',
  fontSize: '0.9rem',
  fontWeight: '500',
}

const linkStyle = {
  color: '#000000',           // muted gray
  textDecoration: 'none',
  transition: 'color 0.3s ease',
  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
}

linkStyle[':hover'] = {   // inline styles don't support pseudo-classes,
  color: '#222',          // so handle this in CSS instead (see globals.css)
}

const mainStyle = {
  maxWidth: '640px',
  margin: '0rem auto',
  padding: '0 1rem',
  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  fontWeight: '400',
  lineHeight: 1.6,
  color: '#222',
}

const footerStyle = {
  marginTop: '5rem',
  padding: '2rem 0',
  textAlign: 'center',
  color: '#aaa',
  fontSize: '0.8rem',
}
