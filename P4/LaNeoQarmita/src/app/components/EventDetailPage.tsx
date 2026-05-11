import { Calendar, Clock, MapPin, Users, ArrowLeft } from 'lucide-react';

interface EventDetailPageProps {
  onBackToSearch: () => void;
}

const relatedEvents = [
  {
    id: 1,
    title: 'Jazz en Vivo: Noche de Improvisación',
    date: '02 May',
    image: 'https://images.unsplash.com/photo-1723721229325-b286656e768a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBnYWxsZXJ5JTIwZXhoaWJpdGlvbiUyMGNvbnRlbXBvcmFyeSUyMGFydHxlbnwxfHx8fDE3NzY3MDE0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 2,
    title: 'Club de Lectura: García Lorca',
    date: '03 May',
    image: 'https://images.unsplash.com/photo-1759732419233-5b84c4cb5a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsaWJyYXJ5JTIwYm9va3MlMjByZWFkaW5nJTIwY3VsdHVyYWwlMjBzcGFjZXxlbnwxfHx8fDE3NzY3MDE0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 3,
    title: 'Taller: Métodos de Extracción',
    date: '05 May',
    image: 'https://images.unsplash.com/photo-1766250343186-847200b11032?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxzcGVjaWFsdHklMjBjb2ZmZWUlMjBlc3ByZXNzbyUyMGNhZmUlMjBjdWx0dXJlfGVufDF8fHx8MTc3NjcwMTQxM3ww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 4,
    title: 'Música Clásica: Cuarteto de Cuerda',
    date: '07 May',
    image: 'https://images.unsplash.com/photo-1723721462556-c80e37d0456b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxhcnQlMjBnYWxsZXJ5JTIwZXhoaWJpdGlvbiUyMGNvbnRlbXBvcmFyeSUyMGFydHxlbnwxfHx8fDE3NzY3MDE0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export function EventDetailPage({ onBackToSearch }: EventDetailPageProps) {
  return (
    <div className="min-h-screen bg-[var(--cream)]">
      <div className="container mx-auto px-6 py-12">
        <button
          onClick={onBackToSearch}
          className="flex items-center gap-2 text-[var(--espresso)] hover:text-[var(--toast)] transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Volver a resultados</span>
        </button>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <div className="sticky top-28">
              <img
                src="https://images.unsplash.com/photo-1766250343186-847200b11032?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxzcGVjaWFsdHklMjBjb2ZmZWUlMjBlc3ByZXNzbyUyMGNhZmUlMjBjdWx0dXJlfGVufDF8fHx8MTc3NjcwMTQxM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Cata de Café: Origen Etiopía"
                className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-[var(--terracotta)] text-white rounded-full">
                Cata de Café
              </span>
            </div>

            <h1 className="text-5xl mb-6 text-[var(--espresso)]">
              Cata de Café: Origen Etiopía
            </h1>

            <p className="text-xl text-[var(--espresso)]/80 mb-8 leading-relaxed">
              Descubre los secretos del café etíope en esta experiencia sensorial única.
              Aprenderás a identificar las notas florales, cítricas y dulces características
              de los granos de Yirgacheffe, guiado por nuestro experto barista certificado.
            </p>

            <div className="space-y-4 mb-8 bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-4 text-[var(--espresso)]">
                <Calendar className="w-6 h-6 text-[var(--toast)]" />
                <div>
                  <p className="text-sm text-[var(--espresso)]/60">Fecha</p>
                  <p className="text-lg">Sábado, 30 de Abril de 2026</p>
                </div>
              </div>

              <div className="border-t border-[var(--espresso)]/10 pt-4 flex items-center gap-4 text-[var(--espresso)]">
                <Clock className="w-6 h-6 text-[var(--toast)]" />
                <div>
                  <p className="text-sm text-[var(--espresso)]/60">Hora</p>
                  <p className="text-lg">17:00 - 19:00</p>
                </div>
              </div>

              <div className="border-t border-[var(--espresso)]/10 pt-4 flex items-center gap-4 text-[var(--espresso)]">
                <MapPin className="w-6 h-6 text-[var(--toast)]" />
                <div>
                  <p className="text-sm text-[var(--espresso)]/60">Ubicación</p>
                  <p className="text-lg">Barra de Café - Planta Principal</p>
                </div>
              </div>

              <div className="border-t border-[var(--espresso)]/10 pt-4 flex items-center gap-4 text-[var(--espresso)]">
                <Users className="w-6 h-6 text-[var(--toast)]" />
                <div>
                  <p className="text-sm text-[var(--espresso)]/60">Capacidad</p>
                  <p className="text-lg">12 personas máximo</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <button className="w-full px-12 py-5 bg-[var(--toast)] text-white hover:bg-[var(--terracotta)] rounded-xl transition-all hover:scale-105 text-2xl shadow-lg">
                ¡RESERVA YA!
              </button>
              <p className="text-center text-sm text-[var(--espresso)]/60">
                Precio: 15€ por persona (incluye degustación de 5 variedades)
              </p>
            </div>

            <div className="mt-8 p-6 bg-[var(--olive)]/10 rounded-xl border border-[var(--olive)]/20">
              <h3 className="text-xl mb-3 text-[var(--espresso)]">¿Qué incluye?</h3>
              <ul className="space-y-2 text-[var(--espresso)]/80">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--toast)]">✓</span>
                  <span>Degustación de 5 cafés etíopes de origen único</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--toast)]">✓</span>
                  <span>Guía de cata profesional con fichas técnicas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--toast)]">✓</span>
                  <span>Introducción a los métodos de preparación</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--toast)]">✓</span>
                  <span>Descuento del 10% en compra de café del día</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <section className="border-t border-[var(--espresso)]/10 pt-12">
          <h2 className="text-3xl mb-8 text-[var(--espresso)]">Eventos Relacionados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
                <div className="relative h-40">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 bg-[var(--terracotta)] text-white rounded-full text-sm">
                    {event.date}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-base text-[var(--espresso)] mb-3">{event.title}</h3>
                  <button className="w-full px-3 py-2 border border-[var(--toast)] text-[var(--toast)] hover:bg-[var(--toast)] hover:text-white rounded-lg transition-colors text-sm">
                    Ver detalles
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
