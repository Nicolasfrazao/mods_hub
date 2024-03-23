import type { Metadata } from 'next';
import './styles/globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { ThemeProvider } from '@/components/theme-provider';
import { useState, useEffect,  } from 'react';

export const metadata: Metadata = {
  title: 'MODS HUB',
}

const getUserSettings = async () => ( {
});

const askUserData = () => {}
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
        <body
          className=''
        >
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
