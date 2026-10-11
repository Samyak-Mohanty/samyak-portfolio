import './globals.css'
import type { Metadata } from 'next'
import "@fontsource-variable/inter";
import ThemeProvider from '@/components/ThemeProvider'
import { siteConfig } from '@/config/content'

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  icons: { icon: '/assets/images/favicon.png' },
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