import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PrayerTimes from "@/components/PrayerTimes";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import VideoSection from "@/components/VideoSection";
import BooksSection from "@/components/BooksSection";
import YouTubeSection from "@/components/YouTubeSection";
import DonationSection from "@/components/DonationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PrayerTimes />
      <AboutSection />
      <GallerySection />
      <VideoSection />
      <BooksSection />
      <YouTubeSection />
      <DonationSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
