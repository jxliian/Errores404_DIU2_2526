import { GraduationCap, Users, Coffee } from 'lucide-react';

const audiences = [
  {
    id: 1,
    title: 'Universitarios',
    icon: GraduationCap,
    description: 'Un espacio perfecto para estudiar con wifi de alta velocidad, enchufes en cada mesa y el mejor café para mantener la concentración.',
    quote: '"Mi segunda biblioteca, pero con mejor café"',
    color: 'toast'
  },
  {
    id: 2,
    title: 'Gestores de la Cultura',
    icon: Users,
    description: 'Conecta con otros creadores, presenta tu trabajo en nuestro espacio y forma parte de una comunidad cultural vibrante.',
    quote: '"Aquí encontré mi público y mi inspiración"',
    color: 'toast'
  },
  {
    id: 3,
    title: 'Coffee Lovers',
    icon: Coffee,
    description: 'Café de especialidad tostado artesanalmente, métodos de extracción variados y talleres para convertirte en un experto.',
    quote: '"El mejor espresso de Granada, sin duda"',
    color: 'terracotta'
  }
];

export function AudienceSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl text-center mb-4 text-[var(--espresso)]">¿Quién Encuentra su Lugar en La Qarmita?</h2>
        <p className="text-center text-xl text-[var(--olive)] mb-16">
          Tres comunidades, un mismo espacio cultural
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((audience) => {
            const Icon = audience.icon;
            return (
              <div
                key={audience.id}
                className="bg-[var(--cream)] rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className={`w-16 h-16 bg-[var(--${audience.color})] rounded-full flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl mb-4 text-[var(--espresso)]">{audience.title}</h3>
                <p className="text-[var(--espresso)]/80 mb-6">
                  {audience.description}
                </p>
                <blockquote className="border-l-4 border-[var(--toast)] pl-4 italic text-[var(--espresso)]/70">
                  {audience.quote}
                </blockquote>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
