import { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

interface SearchPageProps {
  onEventClick: () => void;
}

const allEvents = [
  {
    id: 1,
    title: 'Concierto Acústico: Flamenco Fusión',
    date: '28 Abr',
    type: 'Music',
    image: 'https://images.unsplash.com/photo-1723721393021-01bed3ec5681?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxhcnQlMjBnYWxsZXJ5JTIwZXhoaWJpdGlvbiUyMGNvbnRlbXBvcmFyeSUyMGFydHxlbnwxfHx8fDE3NzY3MDE0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 2,
    title: 'Presentación: Poesía Contemporánea',
    date: '29 Abr',
    type: 'Books',
    image: 'https://images.unsplash.com/photo-1760062744828-64801c56a039?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxsaWJyYXJ5JTIwYm9va3MlMjByZWFkaW5nJTIwY3VsdHVyYWwlMjBzcGFjZXxlbnwxfHx8fDE3NzY3MDE0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 3,
    title: 'Cata de Café: Origen Etiopía',
    date: '30 Abr',
    type: 'Coffee Tasting',
    image: 'https://images.unsplash.com/photo-1762924351870-45981369d87b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVjaWFsdHklMjBjb2ZmZWUlMjBlc3ByZXNzbyUyMGNhZmUlMjBjdWx0dXJlfGVufDF8fHx8MTc3NjcwMTQxM3ww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 4,
    title: 'Jazz en Vivo: Noche de Improvisación',
    date: '02 May',
    type: 'Music',
    image: 'https://images.unsplash.com/photo-1723721229325-b286656e768a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBnYWxsZXJ5JTIwZXhoaWJpdGlvbiUyMGNvbnRlbXBvcmFyeSUyMGFydHxlbnwxfHx8fDE3NzY3MDE0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 5,
    title: 'Club de Lectura: García Lorca',
    date: '03 May',
    type: 'Books',
    image: 'https://images.unsplash.com/photo-1759732419233-5b84c4cb5a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsaWJyYXJ5JTIwYm9va3MlMjByZWFkaW5nJTIwY3VsdHVyYWwlMjBzcGFjZXxlbnwxfHx8fDE3NzY3MDE0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 6,
    title: 'Taller: Métodos de Extracción',
    date: '05 May',
    type: 'Coffee Tasting',
    image: 'https://images.unsplash.com/photo-1766250343186-847200b11032?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxzcGVjaWFsdHklMjBjb2ZmZWUlMjBlc3ByZXNzbyUyMGNhZmUlMjBjdWx0dXJlfGVufDF8fHx8MTc3NjcwMTQxM3ww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 7,
    title: 'Música Clásica: Cuarteto de Cuerda',
    date: '07 May',
    type: 'Music',
    image: 'https://images.unsplash.com/photo-1723721462556-c80e37d0456b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxhcnQlMjBnYWxsZXJ5JTIwZXhoaWJpdGlvbiUyMGNvbnRlbXBvcmFyeSUyMGFydHxlbnwxfHx8fDE3NzY3MDE0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 8,
    title: 'Firma de Libros: Autor Local',
    date: '08 May',
    type: 'Books',
    image: 'https://images.unsplash.com/photo-1762913475977-6a865fde924d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwYm9va3MlMjByZWFkaW5nJTIwY3VsdHVyYWwlMjBzcGFjZXxlbnwxfHx8fDE3NzY3MDE0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 9,
    title: 'Cata Especial: Cafés de Colombia',
    date: '10 May',
    type: 'Coffee Tasting',
    image: 'https://images.unsplash.com/photo-1775050703666-42d104cf375c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxzcGVjaWFsdHklMjBjb2ZmZWUlMjBlc3ByZXNzbyUyMGNhZmUlMjBjdWx0dXJlfGVufDF8fHx8MTc3NjcwMTQxM3ww&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export function SearchPage({ onEventClick }: SearchPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('');
  const [showFilters, setShowFilters] = useState(true);

  const filteredEvents = allEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = !selectedType || event.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-[var(--cream)] py-8">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Buscar eventos, talleres, presentaciones..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pr-12 rounded-lg border border-[var(--espresso)]/20 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--toast)] transition-all"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--espresso)]/50" />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-6 py-4 border border-[var(--espresso)]/20 rounded-lg hover:bg-[var(--cream)] transition-colors flex items-center gap-2"
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span>Filtros</span>
            </button>
          </div>
        </div>

        <div className="flex gap-8">
          {showFilters && (
            <aside className="w-64 flex-shrink-0">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
                <h3 className="text-xl mb-6 text-[var(--espresso)]">Filtros</h3>

                <div className="mb-6">
                  <h4 className="mb-3 text-[var(--espresso)]">Fecha</h4>
                  <select className="w-full px-4 py-2 border border-[var(--espresso)]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--toast)]">
                    <option>Todos</option>
                    <option>Esta semana</option>
                    <option>Este mes</option>
                    <option>Próximo mes</option>
                  </select>
                </div>

                <div>
                  <h4 className="mb-3 text-[var(--espresso)]">Tipo de Evento</h4>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="eventType"
                        checked={selectedType === ''}
                        onChange={() => setSelectedType('')}
                        className="w-4 h-4 text-[var(--toast)] focus:ring-[var(--toast)]"
                      />
                      <span className="text-[var(--espresso)]">Todos</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="eventType"
                        checked={selectedType === 'Music'}
                        onChange={() => setSelectedType('Music')}
                        className="w-4 h-4 text-[var(--toast)] focus:ring-[var(--toast)]"
                      />
                      <span className="text-[var(--espresso)]">Música</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="eventType"
                        checked={selectedType === 'Books'}
                        onChange={() => setSelectedType('Books')}
                        className="w-4 h-4 text-[var(--toast)] focus:ring-[var(--toast)]"
                      />
                      <span className="text-[var(--espresso)]">Libros</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="eventType"
                        checked={selectedType === 'Coffee Tasting'}
                        onChange={() => setSelectedType('Coffee Tasting')}
                        className="w-4 h-4 text-[var(--toast)] focus:ring-[var(--toast)]"
                      />
                      <span className="text-[var(--espresso)]">Cata de Café</span>
                    </label>
                  </div>
                </div>

                {selectedType && (
                  <button
                    onClick={() => setSelectedType('')}
                    className="mt-6 w-full px-4 py-2 border border-[var(--espresso)]/20 text-[var(--espresso)] hover:bg-[var(--cream)] rounded-lg transition-colors"
                  >
                    Limpiar filtros
                  </button>
                )}
              </div>
            </aside>
          )}

          <main className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-[var(--espresso)]/70">
                {filteredEvents.length} {filteredEvents.length === 1 ? 'evento encontrado' : 'eventos encontrados'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <div key={event.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer" onClick={onEventClick}>
                  <div className="relative h-48">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 px-3 py-1 bg-[var(--terracotta)] text-white rounded-full text-sm">
                      {event.date}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="mb-2">
                      <span className="text-xs px-2 py-1 bg-[var(--cream)] text-[var(--espresso)] rounded">
                        {event.type === 'Music' ? 'Música' : event.type === 'Books' ? 'Libros' : 'Cata de Café'}
                      </span>
                    </div>
                    <h3 className="text-lg mb-4 text-[var(--espresso)]">{event.title}</h3>
                    <button className="w-full px-4 py-2 bg-[var(--toast)] text-white hover:bg-[var(--terracotta)] rounded-lg transition-colors">
                      Reservar
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredEvents.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-[var(--espresso)]/60">No se encontraron eventos con estos criterios</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedType('');
                  }}
                  className="mt-4 px-6 py-2 bg-[var(--toast)] text-white hover:bg-[var(--terracotta)] rounded-lg transition-colors"
                >
                  Limpiar búsqueda
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
