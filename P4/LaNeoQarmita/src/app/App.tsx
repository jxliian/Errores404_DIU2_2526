import { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ConceptSection } from './components/ConceptSection';
import { AudienceSection } from './components/AudienceSection';
import { Footer } from './components/Footer';
import { SearchPage } from './components/SearchPage';
import { EventDetailPage } from './components/EventDetailPage';
import { ShopPage } from './components/ShopPage';
import { SignUpPage } from './components/SignUpPage';
import { NovedadesPage } from './components/NovedadesPage';
import { MenuPage } from './components/MenuPage';
import { AboutPage } from './components/AboutPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'search' | 'event-detail' | 'shop' | 'signup' | 'novedades' | 'menu' | 'about'>('home');

  return (
    <div className="min-h-screen">
      <Header onNavigate={setCurrentPage} />
      {currentPage === 'home' ? (
        <main>
          <HeroSection onReserveClick={() => setCurrentPage('event-detail')} />
          <ConceptSection />
          <AudienceSection />
        </main>
      ) : currentPage === 'search' ? (
        <main className="pt-24">
          <SearchPage onEventClick={() => setCurrentPage('event-detail')} />
        </main>
      ) : currentPage === 'event-detail' ? (
        <main className="pt-24">
          <EventDetailPage onBackToSearch={() => setCurrentPage('search')} />
        </main>
      ) : currentPage === 'shop' ? (
        <main className="pt-24">
          <ShopPage />
        </main>
      ) : currentPage === 'novedades' ? (
        <main className="pt-24">
          <NovedadesPage />
        </main>
      ) : currentPage === 'menu' ? (
        <main className="pt-24">
          <MenuPage />
        </main>
      ) : currentPage === 'about' ? (
        <main className="pt-24">
          <AboutPage />
        </main>
      ) : (
        <main>
          <SignUpPage onBackToHome={() => setCurrentPage('home')} />
        </main>
      )}
      <Footer />
    </div>
  );
}