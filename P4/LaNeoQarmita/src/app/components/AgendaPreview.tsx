import { Calendar, Clock, MapPin } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'Presentación: Nueva Antología Poética',
    date: '25 Abril 2026',
    time: '19:00',
    location: 'Sala Principal',
    type: 'Literatura',
    image: 'https://images.unsplash.com/photo-1760062744828-64801c56a039?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxsaWJyYXJ5JTIwYm9va3MlMjByZWFkaW5nJTIwY3VsdHVyYWwlMjBzcGFjZXxlbnwxfHx8fDE3NzY3MDE0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 2,
    title: 'Inauguración: Exposición "Miradas Urbanas"',
    date: '27 Abril 2026',
    time: '18:30',
    location: 'Galería',
    type: 'Arte',
    image: 'https://images.unsplash.com/photo-1723721229325-b286656e768a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBnYWxsZXJ5JTIwZXhoaWJpdGlvbiUyMGNvbnRlbXBvcmFyeSUyMGFydHxlbnwxfHx8fDE3NzY3MDE0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 3,
    title: 'Taller: Cata de Café y Métodos de Extracción',
    date: '30 Abril 2026',
    time: '17:00',
    location: 'Barra de Café',
    type: 'Café',
    image: 'https://images.unsplash.com/photo-1762924351870-45981369d87b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVjaWFsdHklMjBjb2ZmZWUlMjBlc3ByZXNzbyUyMGNhZmUlMjBjdWx0dXJlfGVufDF8fHx8MTc3NjcwMTQxM3ww&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export function AgendaPreview() {
  return (
    <section className="py-20 bg-[var(--cream)]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl text-center mb-4 text-[var(--espresso)]">Próximos Eventos</h2>
        <p className="text-center text-xl text-[var(--olive)] mb-12">
          Descubre nuestra programación cultural
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-[var(--toast)] text-white rounded-full">
                  {event.type}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-4 text-[var(--espresso)]">{event.title}</h3>
                <div className="space-y-2 text-[var(--espresso)]/70">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <button className="mt-4 w-full px-4 py-2 border border-[var(--toast)] text-[var(--toast)] hover:bg-[var(--toast)] hover:text-white rounded-lg transition-colors">
                  Reservar Plaza
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="px-8 py-3 bg-[var(--espresso)] text-white hover:bg-[var(--toast)] rounded-lg transition-colors">
            Ver Agenda Completa
          </button>
        </div>
      </div>
    </section>
  );
}
