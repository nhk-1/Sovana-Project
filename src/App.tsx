import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { PricingPage } from './pages/PricingPage';
import { AreaPage } from './pages/AreaPage';
import { ContactPage } from './pages/ContactPage';
import { StructuredData } from './seo/StructuredData';

function App() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <StructuredData />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/tarifs" element={<PricingPage />} />
        <Route path="/zone-intervention" element={<AreaPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
