const featuredPost = {
  id: 1,
  title: 'Nuevo Tueste de Kenia: Explorando Sabores Vibrantes',
  category: 'Café',
  date: '28 de Abril, 2026',
  author: 'María Torres',
  image: 'https://images.unsplash.com/photo-1766250343186-847200b11032?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxzcGVjaWFsdHklMjBjb2ZmZWUlMjBlc3ByZXNzbyUyMGNhZmUlMjBjdWx0dXJlfGVufDF8fHx8MTc3NjcwMTQxM3ww&ixlib=rb-4.1.0&q=80&w=1080',
  excerpt: 'Descubre nuestro último tueste de Kenia AA, un café excepcional con notas de frutas rojas, cítricos brillantes y una acidez vibrante que despierta los sentidos. Este lote de origen único proviene de las tierras altas de Nyeri.',
  content: 'Este café excepcional representa lo mejor de la tradición cafetera keniana...'
};

const newsArticles = [
  {
    id: 2,
    title: 'Entrevista: La Nueva Generación de Artistas Granadinos',
    category: 'Arte',
    date: '26 de Abril, 2026',
    author: 'Carlos Ruiz',
    image: 'https://images.unsplash.com/photo-1723721393021-01bed3ec5681?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxhcnQlMjBnYWxsZXJ5JTIwZXhoaWJpdGlvbiUyMGNvbnRlbXBvcmFyeSUyMGFydHxlbnwxfHx8fDE3NzY3MDE0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    excerpt: 'Conversamos con tres artistas emergentes sobre su visión contemporánea de Granada y cómo la ciudad inspira su obra.'
  },
  {
    id: 3,
    title: 'Reseña: "Poeta en Nueva York" Edición Ilustrada',
    category: 'Libros',
    date: '24 de Abril, 2026',
    author: 'Ana Martínez',
    image: 'https://images.unsplash.com/photo-1759732419233-5b84c4cb5a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsaWJyYXJ5JTIwYm9va3MlMjByZWFkaW5nJTIwY3VsdHVyYWwlMjBzcGFjZXxlbnwxfHx8fDE3NzY3MDE0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    excerpt: 'Una nueva edición ilustrada de la obra maestra de García Lorca que combina poesía y arte visual de manera excepcional.'
  },
  {
    id: 4,
    title: 'El Ritual del Café: Métodos de Extracción Tradicionales',
    category: 'Café',
    date: '22 de Abril, 2026',
    author: 'Diego Fernández',
    image: 'https://images.unsplash.com/photo-1762924351870-45981369d87b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVjaWFsdHklMjBjb2ZmZWUlMjBlc3ByZXNzbyUyMGNhZmUlMjBjdWx0dXJlfGVufDF8fHx8MTc3NjcwMTQxM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    excerpt: 'Exploramos los métodos tradicionales de preparación de café y cómo cada uno resalta diferentes características del grano.'
  },
  {
    id: 5,
    title: 'Exposición: "Miradas Urbanas" en La Qarmita',
    category: 'Arte',
    date: '20 de Abril, 2026',
    author: 'Laura Gómez',
    image: 'https://images.unsplash.com/photo-1723721229325-b286656e768a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBnYWxsZXJ5JTIwZXhoaWJpdGlvbiUyMGNvbnRlbXBvcmFyeSUyMGFydHxlbnwxfHx8fDE3NzY3MDE0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    excerpt: 'Inauguramos nuestra nueva exposición fotográfica que captura la esencia de Granada desde perspectivas únicas.'
  },
  {
    id: 6,
    title: 'Club de Lectura: Descubriendo Autores Andaluces',
    category: 'Libros',
    date: '18 de Abril, 2026',
    author: 'Patricia Sánchez',
    image: 'https://images.unsplash.com/photo-1760062744828-64801c56a039?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxsaWJyYXJ5JTIwYm9va3MlMjByZWFkaW5nJTIwY3VsdHVyYWwlMjBzcGFjZXxlbnwxfHx8fDE3NzY3MDE0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    excerpt: 'Nuestro club de lectura explora la rica tradición literaria andaluza con autores contemporáneos que redefinen el género.'
  },
  {
    id: 7,
    title: 'Café de Especialidad: ¿Qué lo Hace Diferente?',
    category: 'Café',
    date: '16 de Abril, 2026',
    author: 'Roberto Silva',
    image: 'https://images.unsplash.com/photo-1775050703666-42d104cf375c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxzcGVjaWFsdHklMjBjb2ZmZWUlMjBlc3ByZXNzbyUyMGNhZmUlMjBjdWx0dXJlfGVufDF8fHx8MTc3NjcwMTQxM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    excerpt: 'Una guía completa sobre qué define al café de especialidad y por qué merece la pena la experiencia de degustación.'
  },
  {
    id: 8,
    title: 'Perfil de Artista: Carmen Delgado y su Visión Cerámica',
    category: 'Arte',
    date: '14 de Abril, 2026',
    author: 'Elena Vargas',
    image: 'https://images.unsplash.com/photo-1723721462556-c80e37d0456b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxhcnQlMjBnYWxsZXJ5JTIwZXhoaWJpdGlvbiUyMGNvbnRlbXBvcmFyeSUyMGFydHxlbnwxfHx8fDE3NzY3MDE0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    excerpt: 'Conoce a la ceramista local cuyas piezas únicas fusionan tradición andaluza con diseño contemporáneo.'
  }
];

export function NovedadesPage() {
  return (
    <div className="min-h-screen bg-[var(--cream)] py-8">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-5xl mb-3 text-[var(--espresso)]">Novedades</h1>
          <p className="text-xl text-[var(--espresso)]/70">
            Lo último en café, cultura y arte desde La Qarmita
          </p>
        </div>

        <article className="bg-white rounded-2xl overflow-hidden shadow-xl mb-12 hover:shadow-2xl transition-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="h-[500px]">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-4 py-1 bg-[var(--terracotta)] text-white rounded-full text-sm">
                  {featuredPost.category}
                </span>
                <span className="text-[var(--espresso)]/60">
                  {featuredPost.date}
                </span>
              </div>
              <h2 className="text-4xl mb-6 text-[var(--espresso)]">
                {featuredPost.title}
              </h2>
              <p className="text-lg text-[var(--espresso)]/80 mb-6 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-[var(--espresso)]/70">
                  Por {featuredPost.author}
                </span>
                <button className="px-8 py-3 bg-[var(--toast)] text-white hover:bg-[var(--terracotta)] rounded-lg transition-colors">
                  Leer más
                </button>
              </div>
            </div>
          </div>
        </article>

        <div className="mb-8">
          <h2 className="text-3xl text-[var(--espresso)]">Artículos Recientes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer"
            >
              <div className="h-64">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-[var(--cream)] text-[var(--espresso)] rounded-full text-xs">
                    {article.category}
                  </span>
                  <span className="text-sm text-[var(--espresso)]/60">
                    {article.date}
                  </span>
                </div>
                <h3 className="text-2xl mb-4 text-[var(--espresso)]">
                  {article.title}
                </h3>
                <p className="text-[var(--espresso)]/70 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-[var(--espresso)]/10">
                  <span className="text-sm text-[var(--espresso)]/70">
                    Por {article.author}
                  </span>
                  <button className="text-[var(--toast)] hover:text-[var(--terracotta)] transition-colors">
                    Leer más →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-10 py-4 border-2 border-[var(--toast)] text-[var(--toast)] hover:bg-[var(--toast)] hover:text-white rounded-lg transition-colors">
            Cargar más artículos
          </button>
        </div>
      </div>
    </div>
  );
}
