import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Demo Chat App',
  description: 'A responsive chat application demo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}