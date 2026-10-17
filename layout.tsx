import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Astro World of Darshan', description: 'Birth chart workspace, astrology insights and kundli matching by Astro World of Darshan.' };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }
