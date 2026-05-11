import { useState } from 'react';
import { BookOpen, Palette, Coffee, Mail, Lock, User, ArrowLeft } from 'lucide-react';

interface SignUpPageProps {
  onBackToHome: () => void;
}

export function SignUpPage({ onBackToHome }: SignUpPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    interests: {
      literature: false,
      art: false,
      coffee: false
    }
  });

  const handleInterestChange = (interest: 'literature' | 'art' | 'coffee') => {
    setFormData(prev => ({
      ...prev,
      interests: {
        ...prev.interests,
        [interest]: !prev.interests[interest]
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen flex pt-24">
      <div className="hidden lg:block lg:w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1759732419233-5b84c4cb5a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsaWJyYXJ5JTIwYm9va3MlMjByZWFkaW5nJTIwY3VsdHVyYWwlMjBzcGFjZXxlbnwxfHx8fDE3NzY3MDE0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Biblioteca cafe"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--cream)]/20" />
        <div className="absolute bottom-12 left-12 right-12 text-white">
          <div className="bg-[var(--espresso)]/80 backdrop-blur-sm p-8 rounded-xl">
            <h3 className="text-2xl mb-3">Beneficios del Club Qarmita</h3>
            <ul className="space-y-2 text-white/90">
              <li className="flex items-start gap-2">
                <span className="text-[var(--terracotta)]">✓</span>
                <span>10% de descuento en todos los productos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--terracotta)]">✓</span>
                <span>Acceso prioritario a eventos y presentaciones</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--terracotta)]">✓</span>
                <span>Reserva anticipada de talleres de cata</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--terracotta)]">✓</span>
                <span>Newsletter mensual con novedades culturales</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 bg-[var(--cream)] flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-2 text-[var(--espresso)] hover:text-[var(--toast)] transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver al inicio</span>
          </button>

          <div className="mb-12 text-center">
            <h1 className="text-5xl mb-4 text-[var(--espresso)]">
              Únete a nuestra comunidad cultural
            </h1>
            <p className="text-lg text-[var(--espresso)]/70">
              Forma parte del Club Qarmita y disfruta de beneficios exclusivos
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2 text-[var(--espresso)]">
                Nombre completo
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--espresso)]/40" />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Tu nombre"
                  required
                  className="w-full pl-12 pr-4 py-4 bg-white border border-[var(--espresso)]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--toast)] transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-[var(--espresso)]">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--espresso)]/40" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="tu@email.com"
                  required
                  className="w-full pl-12 pr-4 py-4 bg-white border border-[var(--espresso)]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--toast)] transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-[var(--espresso)]">
                Contraseña
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--espresso)]/40" />
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="Mínimo 8 caracteres"
                  required
                  className="w-full pl-12 pr-4 py-4 bg-white border border-[var(--espresso)]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--toast)] transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block mb-4 text-[var(--espresso)]">
                Intereses
              </label>
              <div className="space-y-3">
                <label className="flex items-center gap-4 p-4 bg-white border border-[var(--espresso)]/20 rounded-lg cursor-pointer hover:border-[var(--toast)] transition-colors">
                  <input
                    type="checkbox"
                    checked={formData.interests.literature}
                    onChange={() => handleInterestChange('literature')}
                    className="w-5 h-5 text-[var(--toast)] focus:ring-[var(--toast)] rounded"
                  />
                  <BookOpen className="w-5 h-5 text-[var(--toast)]" />
                  <span className="text-[var(--espresso)]">Literatura</span>
                </label>

                <label className="flex items-center gap-4 p-4 bg-white border border-[var(--espresso)]/20 rounded-lg cursor-pointer hover:border-[var(--toast)] transition-colors">
                  <input
                    type="checkbox"
                    checked={formData.interests.art}
                    onChange={() => handleInterestChange('art')}
                    className="w-5 h-5 text-[var(--toast)] focus:ring-[var(--toast)] rounded"
                  />
                  <Palette className="w-5 h-5 text-[var(--terracotta)]" />
                  <span className="text-[var(--espresso)]">Arte</span>
                </label>

                <label className="flex items-center gap-4 p-4 bg-white border border-[var(--espresso)]/20 rounded-lg cursor-pointer hover:border-[var(--toast)] transition-colors">
                  <input
                    type="checkbox"
                    checked={formData.interests.coffee}
                    onChange={() => handleInterestChange('coffee')}
                    className="w-5 h-5 text-[var(--toast)] focus:ring-[var(--toast)] rounded"
                  />
                  <Coffee className="w-5 h-5 text-[var(--olive)]" />
                  <span className="text-[var(--espresso)]">Café</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-5 bg-[var(--espresso)] text-white hover:bg-[var(--toast)] rounded-xl text-2xl transition-all hover:scale-105 shadow-lg"
            >
              UNIRSE AL CLUB
            </button>

            <p className="text-center text-sm text-[var(--espresso)]/60 mt-4">
              ¿Ya eres miembro?{' '}
              <button type="button" className="text-[var(--toast)] hover:underline">
                Inicia sesión aquí
              </button>
            </p>
          </form>

          <div className="mt-8 pt-6 border-t border-[var(--espresso)]/10 text-center text-sm text-[var(--espresso)]/60">
            Al registrarte, aceptas nuestros{' '}
            <button className="text-[var(--toast)] hover:underline">Términos y Condiciones</button>
            {' '}y{' '}
            <button className="text-[var(--toast)] hover:underline">Política de Privacidad</button>
          </div>
        </div>
      </div>
    </div>
  );
}
