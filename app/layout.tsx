import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Virendra Parmar | Cinematographer & Video Editor',
  description: 'Award-winning videographer and editor based in Jabalpur. Specializing in cinematic wedding films, commercial videos, and motion graphics with After Effects & Premiere Pro.',
  keywords: ['videographer', 'video editor', 'cinematographer', 'Jabalpur', 'wedding films', 'After Effects', 'Premiere Pro', 'Virendra Parmar'],
  authors: [{ name: 'Virendra Parmar' }],
  openGraph: {
    title: 'Virendra Parmar | Cinematographer & Video Editor',
    description: 'Cinematic storytelling through the lens of a passionate videographer.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Cinzel:wght@400;500;600;700;800;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="film-grain">
        {children}
      </body>
    </html>
  )
}
