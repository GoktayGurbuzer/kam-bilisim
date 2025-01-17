import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { BrandsPage } from './pages/BrandsPage';
import { ServicesPage } from './pages/ServicesPage';
import { BrandPage } from './pages/BrandPage';
import { EmailServicePage } from './pages/services/EmailServicePage';
import { VirtualServerPage } from './pages/services/VirtualServerPage';
import { DedicatedServerPage } from './pages/services/DedicatedServerPage';
import { HostingPage } from './pages/services/HostingPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrderSuccessPage } from './pages/OrderSuccessPage';
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/brands" element={<BrandsPage />} />
            <Route path="/brands/:brandSlug" element={<BrandPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/email" element={<EmailServicePage />} />
            <Route path="/services/virtual-server" element={<VirtualServerPage />} />
            <Route path="/services/dedicated-server" element={<DedicatedServerPage />} />
            <Route path="/services/hosting" element={<HostingPage />} />
            <Route path="/brands/:brandSlug/products/:productSlug" element={<ProductDetailPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/checkout/success/:orderId" element={<OrderSuccessPage />} />
          </Routes>
        </Layout>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;