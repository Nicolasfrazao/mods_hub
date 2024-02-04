import type { Metadata } from 'next';
import './styles/globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';

export const metadata: Metadata = {
  title: 'MODS HUB',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      appearance={ {
        baseTheme: dark,

      }}
    >
      <html lang="en">
        <body>
          { children }
        </body>
      </html>
    </ClerkProvider>
  )
}
