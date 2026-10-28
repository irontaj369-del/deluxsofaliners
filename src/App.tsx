import { BrowserRouter, Route, Routes } from 'react-router-dom';
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

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-cream-50 text-charcoal-600">
        <Header />
        <main>
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
