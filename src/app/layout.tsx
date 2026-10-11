import './globals.css'
import type { Metadata } from 'next'
import "@fontsource-variable/inter";
import ThemeProvider from '@/components/ThemeProvider'
import { siteConfig } from '@/config/content'

// Address used to build the full link for the share-preview image.
// On Vercel it is picked up automatically. Elsewhere, set NEXT_PUBLIC_SITE_URL
// (for example https://your-name.vercel.app) before building.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000');

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteConfig.name,
  description: siteConfig.description,
  icons: { icon: '/assets/images/favicon.png' },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: 'website',
    images: [{ url: '/assets/images/og.png', width: 1200, height: 630, alt: 'Samyak Mohanty - Portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: ['/assets/images/og.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
} 