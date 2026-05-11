interface HeroSectionProps {
  onReserveClick: () => void;
}

export function HeroSection({ onReserveClick }: HeroSectionProps) {
  return (
    <section className="container mx-auto px-6 pt-28 pb-16">
      <div className="relative h-[700px] rounded-xl overflow-hidden shadow-2xl">
        <img
          src="https://images.unsplash.com/photo-1766250343186-847200b11032?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxzcGVjaWFsdHklMjBjb2ZmZWUlMjBlc3ByZXNzbyUyMGNhZmUlMjBjdWx0dXJlfGVufDF8fHx8MTc3NjcwMTQxM3ww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Nueva Cosecha: Etiopía Yirgacheffe"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--espresso)]/90 via-[var(--espresso)]/50 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-16 text-white">
          <span className="inline-block px-5 py-2 bg-[var(--terracotta)] rounded-full mb-6 text-lg">
            Café
          </span>
          <h1 className="text-6xl mb-6">Nueva Cosecha: Etiopía Yirgacheffe</h1>
          <p className="text-2xl mb-8 max-w-3xl opacity-90">Descubre nuestro último café de especialidad con notas florales y cítricas. Recién llegado de las montañas de Etiopía.</p>
          <button
            onClick={onReserveClick}
            className="px-12 py-4 bg-[var(--toast)] hover:bg-[var(--terracotta)] rounded-lg transition-all hover:scale-105 text-xl"
          >
            ¡RESERVA YA!
          </button>
        </div>
      </div>
    </section>
  );
}
