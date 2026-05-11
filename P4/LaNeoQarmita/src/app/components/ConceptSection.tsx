export function ConceptSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl text-center mb-4 text-[var(--espresso)]">La Neo-Qarmita</h2>
        <p className="text-center text-xl text-[var(--olive)] mb-16 max-w-3xl mx-auto">
          Un espacio único donde el café de especialidad se encuentra con la cultura y el arte local de Granada
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1759732639771-812fe192a9a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsaWJyYXJ5JTIwYm9va3MlMjByZWFkaW5nJTIwY3VsdHVyYWwlMjBzcGFjZXxlbnwxfHx8fDE3NzY3MDE0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Biblioteca cafe"
              className="w-full h-[400px] object-cover rounded-xl shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-3xl mb-4 text-[var(--espresso)]">Café & Biblioteca</h3>
            <p className="text-lg text-[var(--espresso)]/80 mb-4">
              Más que una cafetería, La Qarmita es un refugio cultural en el corazón de Granada.
              Nuestra biblioteca cuidadosamente curada ofrece desde clásicos de la literatura hasta
              las últimas novedades editoriales.
            </p>
            <p className="text-lg text-[var(--espresso)]/80">
              Disfruta de un espresso perfectamente extraído mientras te sumerges en las páginas
              de tu libro favorito, rodeado del aroma del café recién tostado.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-3xl mb-4 text-[var(--espresso)]">Galería de Arte Local</h3>
            <p className="text-lg text-[var(--espresso)]/80 mb-4">
              Nuestro espacio se transforma constantemente con exposiciones rotativas de
              artistas locales emergentes y consagrados.
            </p>
            <p className="text-lg text-[var(--espresso)]/80">
              Cada visita es una nueva experiencia visual. Conectamos a la comunidad creativa
              de Granada con amantes del arte y el buen café.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1720107724543-deba14f71a12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxhcnQlMjBnYWxsZXJ5JTIwZXhoaWJpdGlvbiUyMGNvbnRlbXBvcmFyeSUyMGFydHxlbnwxfHx8fDE3NzY3MDE0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Galeria de arte"
              className="w-full h-[400px] object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
