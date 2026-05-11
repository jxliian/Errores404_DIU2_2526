import { Youtube, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[var(--espresso)] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div>
            <h4 className="text-xl mb-4">Redes Sociales</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 bg-white/10 hover:bg-[var(--toast)] rounded flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white/10 hover:bg-[var(--toast)] rounded flex items-center justify-center transition-colors"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white/10 hover:bg-[var(--toast)] rounded flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white/10 hover:bg-[var(--toast)] rounded flex items-center justify-center transition-colors text-sm"
                aria-label="TikTok"
              >
                TT
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl mb-4">La Qarmita</h4>
            <ul className="space-y-2">
              <li>
                <a href="#sobre-nosotros" className="hover:text-[var(--terracotta)] transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[var(--terracotta)] transition-colors">
                  Nuestro Menú
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-[var(--terracotta)] transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl mb-4">Información Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#legal" className="hover:text-[var(--terracotta)] transition-colors">
                  Legal
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[var(--terracotta)] transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#copyright" className="hover:text-[var(--terracotta)] transition-colors">
                  Copyright
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/60">
          <p>&copy; 2026 La Qarmita Cafe Cultural. Granada, España. Todos los derechos reservados.</p>
          <p className="mt-2">café · libros · arte local</p>
        </div>
      </div>
    </footer>
  );
}
