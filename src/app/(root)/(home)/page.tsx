import Feed from '@/components/Feed';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const getScreenValue = () =>
{
  const screenSizeWarning = () => toast("This app isn't  designed for mobile devices yet, await for more  features in the future!");
  if ( window.innerWidth > 768 )
  {
    return screenSizeWarning;
  }
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <Feed />
      <Footer />
    </main>
  );
}
