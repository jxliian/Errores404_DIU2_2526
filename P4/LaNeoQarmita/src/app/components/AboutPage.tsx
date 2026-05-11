import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--cream)]">
      <div className="relative h-[600px] w-full">
        <img
          src="https://images.unsplash.com/photo-1759732639771-812fe192a9a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsaWJyYXJ5JTIwYm9va3MlMjByZWFkaW5nJTIwY3VsdHVyYWwlMjBzcGFjZXxlbnwxfHx8fDE3NzY3MDE0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Interior de La Qarmita"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--espresso)]/70 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-16">
          <div className="container mx-auto">
            <h1 className="text-6xl text-white mb-4">Sobre Nosotros</h1>
            <p className="text-2xl text-white/90 max-w-2xl">
              Donde el café de especialidad se encuentra con la cultura granadina
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-5xl mb-8 text-[var(--espresso)]">Nuestra Historia</h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-[var(--espresso)]/80 leading-relaxed mb-6">
              La Qarmita nació en 2019 de un sueño: crear un espacio donde{' '}
              <span className="text-[var(--terracotta)] italic">
                el aroma del café recién tostado se mezcla con el susurro de las páginas
              </span>
              {' '}y el silencio contemplativo frente al arte local.
            </p>

            <p className="text-xl text-[var(--espresso)]/80 leading-relaxed mb-6">
              En el corazón de Granada, decidimos que nuestra cafetería sería más que un lugar
              para tomar café. Queríamos construir un refugio cultural, un punto de encuentro
              para universitarios, artistas, escritores y amantes del buen café. Un espacio donde
              cada taza cuenta una historia y cada libro abre un mundo.
            </p>

            <blockquote className="border-l-4 border-[var(--terracotta)] pl-6 my-8 py-2">
              <p className="text-2xl text-[var(--terracotta)] italic">
                "Más que servir café, cultivamos comunidad. Más que vender libros,
                compartimos historias. Más que exponer arte, celebramos la creatividad local."
              </p>
            </blockquote>

            <p className="text-xl text-[var(--espresso)]/80 leading-relaxed mb-6">
              Nuestro café de especialidad proviene de{' '}
              <span className="text-[var(--terracotta)]">
                pequeños productores de Etiopía, Colombia, Kenia y Brasil
              </span>
              , tostado artesanalmente aquí en Granada. Cada grano es seleccionado con el mismo
              cuidado con el que curamos nuestra biblioteca o elegimos las obras que adornan
              nuestras paredes.
            </p>

            <p className="text-xl text-[var(--espresso)]/80 leading-relaxed">
              La Qarmita es, ante todo, un proyecto de amor por Granada y su gente. Un compromiso
              con la calidad, la cultura y la comunidad que nos ha acogido y que cada día nos
              inspira a ser mejores.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-5xl mb-12 text-[var(--espresso)] text-center">El Espacio</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="relative group overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1760062744828-64801c56a039?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxsaWJyYXJ5JTIwYm9va3MlMjByZWFkaW5nJTIwY3VsdHVyYWwlMjBzcGFjZXxlbnwxfHx8fDE3NzY3MDE0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Zona de lectura"
                className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--espresso)]/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl text-white mb-3">Biblioteca & Lectura</h3>
                <p className="text-white/90 text-lg">
                  Más de 2.000 volúmenes cuidadosamente seleccionados, desde clásicos
                  de la literatura universal hasta las últimas novedades editoriales.
                  Un espacio tranquilo con luz natural perfecta para perderse en un libro.
                </p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1723721393021-01bed3ec5681?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxhcnQlMjBnYWxsZXJ5JTIwZXhoaWJpdGlvbiUyMGNvbnRlbXBvcmFyeSUyMGFydHxlbnwxfHx8fDE3NzY3MDE0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Galería de arte"
                className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--espresso)]/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl text-white mb-3">Galería de Arte Local</h3>
                <p className="text-white/90 text-lg">
                  Exposiciones rotativas de artistas emergentes y consagrados de Granada.
                  Fotografía, pintura, escultura y arte urbano conviven en nuestras paredes,
                  creando un diálogo constante entre el espacio y la creatividad.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-12 shadow-sm max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl text-[var(--terracotta)] mb-2">500m²</div>
                <p className="text-[var(--espresso)]/70">de espacio cultural</p>
              </div>
              <div>
                <div className="text-5xl text-[var(--terracotta)] mb-2">2.000+</div>
                <p className="text-[var(--espresso)]/70">libros en nuestra biblioteca</p>
              </div>
              <div>
                <div className="text-5xl text-[var(--terracotta)] mb-2">12</div>
                <p className="text-[var(--espresso)]/70">exposiciones al año</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3179.3333333333335!2d-3.5999999999999996!3d37.177777777777774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDEwJzQwLjAiTiAzwrAzNicwMC4wIlc!5e0!3m2!1sen!2ses!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de La Qarmita"
                className="grayscale"
              />
            </div>

            <div className="p-12 bg-[var(--espresso)] text-white">
              <h2 className="text-4xl mb-8">Visítanos</h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[var(--terracotta)] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl mb-2">Dirección</h3>
                    <p className="text-white/80">
                      Calle Gran Vía de Colón, 28<br />
                      18001 Granada, España
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-[var(--terracotta)] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl mb-2">Horario</h3>
                    <div className="text-white/80 space-y-1">
                      <p>Lunes a Viernes: 8:00 - 21:00</p>
                      <p>Sábados y Domingos: 9:00 - 22:00</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-[var(--terracotta)] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl mb-2">Teléfono</h3>
                    <p className="text-white/80">+34 958 123 456</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-[var(--terracotta)] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl mb-2">Email</h3>
                    <p className="text-white/80">hola@laqarmita.es</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/20">
                <p className="text-white/60 text-sm mb-4">
                  ¿Cómo llegar?
                </p>
                <p className="text-white/80">
                  Estamos en pleno centro de Granada, a 5 minutos a pie de la Catedral
                  y muy cerca de la parada de autobús de Gran Vía. Accesible por las
                  líneas 4, 8, 11 y 21.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
