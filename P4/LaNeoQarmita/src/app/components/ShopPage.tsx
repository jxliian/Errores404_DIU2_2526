import { useState } from 'react';
import { ShoppingCart, SlidersHorizontal, Search } from 'lucide-react';

const allProducts = [
  {
    id: 1,
    name: 'Café Etiopía Yirgacheffe',
    category: 'Café de Especialidad',
    price: 14.50,
    image: 'https://images.unsplash.com/photo-1762924351870-45981369d87b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVjaWFsdHklMjBjb2ZmZWUlMjBlc3ByZXNzbyUyMGNhZmUlMjBjdWx0dXJlfGVufDF8fHx8MTc3NjcwMTQxM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: '250g - Notas florales y cítricas'
  },
  {
    id: 2,
    name: 'Poeta en Nueva York - García Lorca',
    category: 'Libros',
    price: 18.90,
    image: 'https://images.unsplash.com/photo-1762913475977-6a865fde924d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwYm9va3MlMjByZWFkaW5nJTIwY3VsdHVyYWwlMjBzcGFjZXxlbnwxfHx8fDE3NzY3MDE0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Edición especial ilustrada'
  },
  {
    id: 3,
    name: 'Lámina Original - Alhambra Abstracta',
    category: 'Artículos de Galería',
    price: 45.00,
    image: 'https://images.unsplash.com/photo-1723721393021-01bed3ec5681?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxhcnQlMjBnYWxsZXJ5JTIwZXhoaWJpdGlvbiUyMGNvbnRlbXBvcmFyeSUyMGFydHxlbnwxfHx8fDE3NzY3MDE0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Arte local firmado - 30x40cm'
  },
  {
    id: 4,
    name: 'Café Colombia Supremo',
    category: 'Café de Especialidad',
    price: 13.90,
    image: 'https://images.unsplash.com/photo-1766250343186-847200b11032?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxzcGVjaWFsdHklMjBjb2ZmZWUlMjBlc3ByZXNzbyUyMGNhZmUlMjBjdWx0dXJlfGVufDF8fHx8MTc3NjcwMTQxM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: '250g - Cuerpo equilibrado y dulce'
  },
  {
    id: 5,
    name: 'Antología Poética Andaluza',
    category: 'Libros',
    price: 22.50,
    image: 'https://images.unsplash.com/photo-1759732419233-5b84c4cb5a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsaWJyYXJ5JTIwYm9va3MlMjByZWFkaW5nJTIwY3VsdHVyYWwlMjBzcGFjZXxlbnwxfHx8fDE3NzY3MDE0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Colección completa contemporánea'
  },
  {
    id: 6,
    name: 'Cerámica Artesanal - Taza Café',
    category: 'Artículos de Galería',
    price: 28.00,
    image: 'https://images.unsplash.com/photo-1775050703666-42d104cf375c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxzcGVjaWFsdHklMjBjb2ZmZWUlMjBlc3ByZXNzbyUyMGNhZmUlMjBjdWx0dXJlfGVufDF8fHx8MTc3NjcwMTQxM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Hecha a mano por artista local'
  },
  {
    id: 7,
    name: 'Café Brasil Santos',
    category: 'Café de Especialidad',
    price: 12.90,
    image: 'https://images.unsplash.com/photo-1767297927781-a5ccb22169be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxzcGVjaWFsdHklMjBjb2ZmZWUlMjBlc3ByZXNzbyUyMGNhZmUlMjBjdWx0dXJlfGVufDF8fHx8MTc3NjcwMTQxM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: '250g - Suave y achocolatado'
  },
  {
    id: 8,
    name: 'Historia del Café en Granada',
    category: 'Libros',
    price: 24.90,
    image: 'https://images.unsplash.com/photo-1760062744828-64801c56a039?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxsaWJyYXJ5JTIwYm9va3MlMjByZWFkaW5nJTIwY3VsdHVyYWwlMjBzcGFjZXxlbnwxfHx8fDE3NzY3MDE0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Edición limitada con fotografías'
  },
  {
    id: 9,
    name: 'Serigrafía Original - Serie Café',
    category: 'Artículos de Galería',
    price: 65.00,
    image: 'https://images.unsplash.com/photo-1723721462556-c80e37d0456b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxhcnQlMjBnYWxsZXJ5JTIwZXhoaWJpdGlvbiUyMGNvbnRlbXBvcmFyeSUyMGFydHxlbnwxfHx8fDE3NzY3MDE0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Numerada y firmada - 50x70cm'
  },
  {
    id: 10,
    name: 'Café Kenya AA',
    category: 'Café de Especialidad',
    price: 15.90,
    image: 'https://images.unsplash.com/photo-1766166793102-a06d1ed35a44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzcGVjaWFsdHklMjBjb2ZmZWUlMjBlc3ByZXNzbyUyMGNhZmUlMjBjdWx0dXJlfGVufDF8fHx8MTc3NjcwMTQxM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: '250g - Acidez vibrante y afrutado'
  },
  {
    id: 11,
    name: 'Narrativa Contemporánea Española',
    category: 'Libros',
    price: 19.90,
    image: 'https://images.unsplash.com/photo-1767862717810-59653eb1f42b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxsaWJyYXJ5JTIwYm9va3MlMjByZWFkaW5nJTIwY3VsdHVyYWwlMjBzcGFjZXxlbnwxfHx8fDE3NzY3MDE0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Recopilación de autores emergentes'
  },
  {
    id: 12,
    name: 'Escultura Miniatura - Taza con Vapor',
    category: 'Artículos de Galería',
    price: 85.00,
    image: 'https://images.unsplash.com/photo-1723721229325-b286656e768a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBnYWxsZXJ5JTIwZXhoaWJpdGlvbiUyMGNvbnRlbXBvcmFyeSUyMGFydHxlbnwxfHx8fDE3NzY3MDE0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Bronce patinado - Pieza única'
  }
];

export function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [showFilters, setShowFilters] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[var(--cream)] py-8">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-4xl mb-2 text-[var(--espresso)]">Tienda La Qarmita</h1>
          <p className="text-lg text-[var(--espresso)]/70">Café de especialidad, libros cuidadosamente seleccionados y arte local</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Buscar productos..."
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
              <span>{showFilters ? 'Ocultar' : 'Mostrar'} Filtros</span>
            </button>
          </div>
        </div>

        <div className="flex gap-8">
          {showFilters && (
            <aside className="w-64 flex-shrink-0">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
                <h3 className="text-xl mb-6 text-[var(--espresso)]">Categorías</h3>

                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === ''}
                      onChange={() => setSelectedCategory('')}
                      className="w-4 h-4 text-[var(--toast)] focus:ring-[var(--toast)]"
                    />
                    <span className="text-[var(--espresso)] group-hover:text-[var(--toast)] transition-colors">
                      Todos los Productos
                    </span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === 'Café de Especialidad'}
                      onChange={() => setSelectedCategory('Café de Especialidad')}
                      className="w-4 h-4 text-[var(--toast)] focus:ring-[var(--toast)]"
                    />
                    <span className="text-[var(--espresso)] group-hover:text-[var(--toast)] transition-colors">
                      Café de Especialidad
                    </span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === 'Libros'}
                      onChange={() => setSelectedCategory('Libros')}
                      className="w-4 h-4 text-[var(--toast)] focus:ring-[var(--toast)]"
                    />
                    <span className="text-[var(--espresso)] group-hover:text-[var(--toast)] transition-colors">
                      Libros
                    </span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === 'Artículos de Galería'}
                      onChange={() => setSelectedCategory('Artículos de Galería')}
                      className="w-4 h-4 text-[var(--toast)] focus:ring-[var(--toast)]"
                    />
                    <span className="text-[var(--espresso)] group-hover:text-[var(--toast)] transition-colors">
                      Artículos de Galería
                    </span>
                  </label>
                </div>

                {selectedCategory && (
                  <button
                    onClick={() => setSelectedCategory('')}
                    className="mt-6 w-full px-4 py-2 border border-[var(--espresso)]/20 text-[var(--espresso)] hover:bg-[var(--cream)] rounded-lg transition-colors"
                  >
                    Limpiar filtros
                  </button>
                )}

                <div className="mt-8 pt-6 border-t border-[var(--espresso)]/10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-[var(--espresso)]/70">Artículos en carrito</span>
                    <ShoppingCart className="w-5 h-5 text-[var(--toast)]" />
                  </div>
                  <p className="text-2xl text-[var(--espresso)]">0</p>
                </div>
              </div>
            </aside>
          )}

          <main className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-[var(--espresso)]/70">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'producto' : 'productos'}
              </p>
              <select className="px-4 py-2 border border-[var(--espresso)]/20 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--toast)]">
                <option>Ordenar por</option>
                <option>Precio: menor a mayor</option>
                <option>Precio: mayor a menor</option>
                <option>Nombre: A-Z</option>
                <option>Nombre: Z-A</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="relative h-64">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-[var(--espresso)] rounded-full text-xs">
                      {product.category}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg mb-2 text-[var(--espresso)]">{product.name}</h3>
                    <p className="text-sm text-[var(--espresso)]/60 mb-4">{product.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl text-[var(--toast)]">{product.price.toFixed(2)}€</span>
                    </div>
                    <button className="w-full px-4 py-3 bg-[var(--toast)] text-white hover:bg-[var(--terracotta)] rounded-lg transition-colors flex items-center justify-center gap-2">
                      <ShoppingCart className="w-4 h-4" />
                      Añadir al carrito
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
