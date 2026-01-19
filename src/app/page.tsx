import PageWrapper from '@/components/PageWrapper';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Stats from '@/components/Stats';
import Menu from '@/components/Menu';
import InstagramGallery from '@/components/InstagramGallery';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export default function Home() {
  return (
    <PageWrapper>
      <a href="#about" className="skip-link">
        İçeriğe Atla
      </a>
      <main id="main-content" className="min-h-screen">
        <Navbar />
        <Hero />
        <Marquee />
        <About />
        <Stats />
        <Menu />
        <InstagramGallery />
        <Testimonials />
        <Contact />
        <Footer />
        <FloatingButtons />
      </main>
    </PageWrapper>
  );
}
