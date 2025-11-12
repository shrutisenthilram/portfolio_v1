import './globals.css'
import Link from 'next/link'

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
</nav>

        </header>

        <main style={mainStyle}>{children}</main>

        <footer style={footerStyle}>
          <p>© {new Date().getFullYear()} Shruti Senthilram</p>
        </footer>
      </body>
    </html>
  )
}

const headerStyle = {
  padding: '7rem 0',
  textAlign: 'center',
}

const navStyle = {
  display: 'inline-flex',
  gap: '3rem',
  fontSize: '0.9rem',
  fontWeight: '500',
}

const linkStyle = {
  color: '#777',           // muted gray
  textDecoration: 'none',
  transition: 'color 0.3s ease',
  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
}

linkStyle[':hover'] = {   // inline styles don't support pseudo-classes,
  color: '#222',          // so handle this in CSS instead (see globals.css)
}

const mainStyle = {
  maxWidth: '640px',
  margin: '1rem auto',
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
