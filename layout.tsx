import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'SOMOSSAYA — Marketing & Contenido',
  description: 'Estudio creativo de marketing digital, contenido y branding para médicos, restaurantes y emprendedores.',
  keywords: 'marketing digital, contenido, branding, Colombia, médicos, restaurantes, emprendedores',
  openGraph: {
    title: 'SOMOSSAYA — Sabemos lo que hacemos.',
    description: 'Marketing digital, creación de contenido y branding para negocios que quieren crecer.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
