import Link from 'next/link';

export default function Nav() {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc', marginBottom: '2rem' }}>
      <Link href="/"><a style={{ marginRight: '1rem' }}>Home</a></Link>
      <Link href="/about"><a style={{ marginRight: '1rem' }}>About Me</a></Link>
      <Link href="/resume"><a style={{ marginRight: '1rem' }}>Resume</a></Link>
      <Link href="/blog"><a style={{ marginRight: '1rem' }}>Blog</a></Link>
      <Link href="/projects"><a>Projects</a></Link>
    </nav>
  )
}
