import type { Metadata } from 'next';
import './styles/globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { ThemeProvider } from '@/components/theme-provider';

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
      <html lang="en"
        suppressHydrationWarning
      >
        <body>
          <ThemeProvider
            enableSystem={true}
            defaultTheme="system"
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
