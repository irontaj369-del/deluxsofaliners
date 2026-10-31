import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import MobileToolbar from '@/components/MobileToolbar';
import HomePage from '@/pages/HomePage';
import CustomSofasPage from '@/pages/CustomSofasPage';
import SofaRepairPage from '@/pages/SofaRepairPage';
import WallBedPanelsPage from '@/pages/WallBedPanelsPage';
import ContactPage from '@/pages/ContactPage';
import GalleryPage from '@/pages/GalleryPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-cream-50 text-charcoal-600 flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/new-sofas" element={<CustomSofasPage />} />
            <Route path="/sofa-repair" element={<SofaRepairPage />} />
            <Route path="/wall-bed-panels" element={<WallBedPanelsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <MobileToolbar />
      </div>
    </BrowserRouter>
  );
}
