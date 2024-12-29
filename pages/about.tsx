import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', padding: '20px' }}>
      <Head>
        <title>About Us</title>
      </Head>
      <main style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>About Us</h1>
        <p>This is the About page of our website.</p>
        <Link href="/" style={{ margin: '0 10px' }}>
        Home
      </Link>
      </main>
    </div>
  );
}

