import Feed from '@/components/Feed';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Feed />
      <Footer />
    </main>
  );
}
