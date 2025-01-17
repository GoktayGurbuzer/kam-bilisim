import { useNavigate } from 'react-router-dom';
import { Server, Shield, Users, Monitor, Package } from 'lucide-react';
import { HeroSection } from '../components/HeroSection';
import { StatsSection } from '../components/StatsSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { BrandCard } from '../components/BrandCard';
import { CTASection } from '../components/CTASection';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { AboutSection } from '../components/AboutSection';

export function HomePage() {
  const navigate = useNavigate();

  const stats = [
    {
      value: '4+',
      label: 'Yıllık Tecrübe',
      description: "2021'den beri yenilikçi BT çözümleri sunuyoruz",
    },
    {
      value: '16+',
      label: 'Kurumsal Müşteriler',
      description: "Büyüyen KOBİ'ler tarafından güvenilir",
    },
    {
      value: '24/7',
      label: 'Uzman Desteği',
      description: 'Günün her saati teknik destek',
    },
  ];

  const features = [
    {
      icon: <Server className="w-6 h-6" />,
      title: 'BT Altyapısı',
      description: 'İş ihtiyaçlarınız için kurumsal düzeyde çözümler',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Güvenlik Çözümleri',
      description: 'Dijital varlıklarınız için kapsamlı koruma',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Uzman Desteği',
      description: 'Sertifikalı ekibimizden 7/24 teknik destek',
    },
  ];

  const brands = [
    {
      id: 'asus',
      name: 'ASUS',
      icon: <Monitor className="w-16 h-16" />,
      path: '/brands/asus',
      gradient: 'from-blue-500 to-blue-600',
      description:
        'Yüksek performanslı bilgi işlem çözümlerinin lider sağlayıcısı',
    },
    {
      id: 'microsoft',
      name: 'Microsoft',
      icon: <Package className="w-16 h-16" />,
      path: '/brands/microsoft',
      gradient: 'from-blue-600 to-blue-700',
      description: 'Kurumsal yazılım çözümleri ve üretkenlik araçları',
    },
    {
      id: 'eset',
      name: 'ESET',
      icon: <Shield className="w-16 h-16" />,
      path: '/brands/eset',
      gradient: 'from-blue-700 to-blue-800',
      description: 'Gelişmiş siber güvenlik ve antivirüs çözümleri',
    },
  ];

  const counters = [
    {
      end: 16,
      prefix: '',
      suffix: '+',
      decimals: 0,
      label: 'Aktif Müşteri',
      description: 'Güvenen ve büyüyen işletmeler'
    },
    {
      end: 99.9,
      prefix: '',
      suffix: '%',
      decimals: 1,
      label: 'Hizmet Sürekliliği',
      description: 'Kesintisiz sistem uptime'
    },
    {
      end: 100,
      prefix: '',
      suffix: '%',
      decimals: 0,
      label: 'Mutlu Müşteri',
      description: 'Sorunsuz hizmet garantisi'
    }
  ];

  return (
    <>
      <HeroSection
        title="Modern BT Çözümleri ile İşinizi Dönüştürün"
        description="BT altyapısı, güvenliği ve desteğinde en son teknoloji ve benzersiz uzmanlıkla işletmenizi güçlendiriyoruz."
        primaryButtonText="Hemen Başlayalım"
        secondaryButtonText="Tüm Hizmetlerimiz"
        primaryButtonLink="/contact"
        secondaryButtonLink="/services"
        image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
      />

      <StatsSection stats={stats} />

      <div className="py-20">
        <FeaturesSection
          title="Temel Hizmetlerimiz"
          subtitle="BT ihtiyaçlarınız için kapsamlı çözümler"
          features={features}
        />
      </div>

      <AboutSection 
        title="Teknoloji Çözümleri Ortağınız"
        subtitle="Hakkımızda"
        description="2021'den beri işletmelere özel teknoloji çözümleri sunuyoruz. Modern altyapımız, uzman kadromuz ve müşteri odaklı yaklaşımımızla işletmenizin dijital dönüşümüne öncülük ediyoruz."
        imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
        ctaText="Daha Fazla Bilgi"
        ctaLink="/about"
      />

      <div className="relative bg-gradient-to-b from-white to-blue-50 py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full opacity-20 animate-ping-slow"></div>
          <div className="absolute top-20 right-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-float"></div>
          <div
            className="absolute bottom-10 left-1/4 w-32 h-32 bg-blue-100 rounded-full opacity-20 animate-ping-slow"
            style={{ animationDelay: '1s' }}
          ></div>
        </div>

        {/* Animated Counters Section */}
        <div className="relative max-w-7xl mx-auto px-4 mb-20">
          <div className="grid md:grid-cols-3 gap-12">
            {counters.map((counter, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <AnimatedCounter
                  {...counter}
                  className="text-5xl"
                  duration={2500}
                  easing="easeOut"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Sektör Liderlerinin Güvendiği
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dünyanın önde gelen teknoloji markalarıyla ortaklık kurarak
              i̇şletmeni̇z i̇çi̇n olağanüstü çözümler sunun
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {brands.map((brand) => (
              <BrandCard
                key={brand.id}
                {...brand}
                onClick={(path) => navigate(path)}
              />
            ))}
          </div>
        </div>
      </div>

      <CTASection
        title="İşinizi Dönüştürmeye Hazır mısınız?"
        description="Uzman danışmanlığı ve ihtiyaçlarınıza uygun çözümler için bizimle iletişime geçin."
        buttonText="Bugün Başlayın"
        buttonLink="/contact"
      />
    </>
  );
}