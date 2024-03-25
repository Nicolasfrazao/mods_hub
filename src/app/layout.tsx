import type { Metadata } from 'next';
import './styles/globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { ThemeProvider } from '@/components/theme-provider';
import { useState, useEffect,  } from 'react';
import { toast } from 'react-toastify';

export const metadata: Metadata = {
  title: 'MODS HUB',
  description: "The best place to share and find the best mods for your favorite game",
  icons: "",
}

const getUserSettings = async () => ( {
});

const askUserData = () =>
{
  toast("Do you agree to share data for AI training algorithm ?")
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
