import logoImage from '../../imports/Captura_desde_2026-05-04_17-50-35.png';

interface HeaderProps {
  onNavigate: (page: 'home' | 'search' | 'event-detail' | 'shop' | 'signup' | 'novedades' | 'menu' | 'about') => void;
}

export function Header({ onNavigate }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="border-b border-[var(--espresso)]/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => onNavigate('home')} className="h-20 flex-shrink-0">
              <img src={logoImage} alt="La Qarmita" className="h-full object-contain" />
            </button>

            <nav className="flex items-center gap-8">
              <button onClick={() => onNavigate('about')} className="text-[var(--espresso)] hover:text-[var(--toast)] transition-colors">
                Sobre Nosotros
              </button>
              <button onClick={() => onNavigate('menu')} className="text-[var(--espresso)] hover:text-[var(--toast)] transition-colors">
                Menú
              </button>
              <button onClick={() => onNavigate('search')} className="text-[var(--espresso)] hover:text-[var(--toast)] transition-colors">
                Agenda
              </button>
              <button onClick={() => onNavigate('shop')} className="text-[var(--espresso)] hover:text-[var(--toast)] transition-colors">
                Tienda
              </button>
              <button onClick={() => onNavigate('signup')} className="text-[var(--espresso)] hover:text-[var(--toast)] transition-colors">
                Club Qarm.
              </button>
              <button onClick={() => onNavigate('novedades')} className="text-[var(--espresso)] hover:text-[var(--toast)] transition-colors">
                Novedades
              </button>
            </nav>

            <div>
              <button onClick={() => onNavigate('signup')} className="px-8 py-3 bg-[var(--toast)] text-white hover:bg-[var(--terracotta)] rounded-lg transition-all hover:scale-105">
                Regístrate Ahora
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
