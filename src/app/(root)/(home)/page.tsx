import Feed from '@/components/Feed';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Feed />
      <Footer />
      <Button ></Button>
    </main>
  );
}
