import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ padding: '10px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>
      <Link href="/" style={{ margin: '0 10px' }}>
        Home
      </Link>
      <Link href="/about" style={{ margin: '0 10px'}}>
        About
      </Link>
    </nav>
  );
}
