"use client"
import Link from 'next/link';
import React from 'react'
import { Button } from './ui/button';

const Footer = () => {

  const socialMedia: any[] = [
    {
      name: "GitHub",
      url: "https://github.com",
    },
  ]

  return (
    <footer
      className='flex fixed bottom-0 '
    >
      <ul>
        <div>
          <p>©2024 ModsHub</p>
        </div>
        <div>
          <ul>
            { socialMedia.map( ( link: any ) => (
              <Link
                href={ link.url }
                key={ link.name }
              >
                {link.name}
              </Link>
            ))}
          </ul>
          <ul></ul>
        </div>
      </ul>
    </footer>
  )
}

export default Footer;
