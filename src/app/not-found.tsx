'use client';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100vm',
        height: '100vh',
      }}
    >
      <h1>Not Found :(</h1>
      <br />
      <Link href="/">
        <h2>back to home</h2>
      </Link>
    </div>
  );
}
