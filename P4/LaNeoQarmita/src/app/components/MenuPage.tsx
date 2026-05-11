const coffeeMenu = [
  {
    name: 'Espresso',
    description: 'Shot doble de café de origen único, rotación semanal',
    price: '2.50',
    tags: []
  },
  {
    name: 'Americano',
    description: 'Espresso alargado con agua caliente filtrada',
    price: '2.80',
    tags: []
  },
  {
    name: 'Cortado',
    description: 'Espresso con una nube de leche texturizada',
    price: '2.90',
    tags: []
  },
  {
    name: 'Café con Leche',
    description: 'Nuestra mezcla especial con leche entera o vegetal',
    price: '3.20',
    tags: ['Vegan']
  },
  {
    name: 'Cappuccino',
    description: 'Espresso, leche vaporizada y espuma sedosa',
    price: '3.50',
    tags: []
  },
  {
    name: 'Flat White',
    description: 'Microespuma aterciopelada sobre doble ristretto',
    price: '3.80',
    tags: []
  },
  {
    name: 'V60 Pour Over',
    description: 'Café filtrado preparado manualmente, origen a elección',
    price: '4.50',
    tags: ['Vegan']
  },
  {
    name: 'Cold Brew',
    description: 'Extracción en frío durante 18 horas, suave y dulce',
    price: '4.20',
    tags: ['Vegan']
  },
  {
    name: 'Affogato',
    description: 'Helado artesanal de vainilla con espresso caliente',
    price: '4.80',
    tags: []
  }
];

const foodMenu = [
  {
    category: 'Repostería',
    items: [
      {
        name: 'Croissant de Mantequilla',
        description: 'Hojaldre francés tradicional, horneado cada mañana',
        price: '2.50',
        tags: []
      },
      {
        name: 'Pain au Chocolat',
        description: 'Croissant relleno de chocolate belga 70% cacao',
        price: '2.90',
        tags: []
      },
      {
        name: 'Tarta de Zanahoria',
        description: 'Con frosting de queso crema y nueces caramelizadas',
        price: '4.20',
        tags: []
      },
      {
        name: 'Brownie de Chocolate',
        description: 'Húmedo y denso, con nueces pecanas',
        price: '3.80',
        tags: ['Gluten-Free']
      },
      {
        name: 'Galletas Artesanales',
        description: 'Selección diaria de tres variedades',
        price: '2.80',
        tags: ['Vegan']
      },
      {
        name: 'Bizcocho de Limón',
        description: 'Con glaseado de limón y semillas de amapola',
        price: '3.50',
        tags: []
      }
    ]
  },
  {
    category: 'Salado',
    items: [
      {
        name: 'Tostada de Aguacate',
        description: 'Pan de masa madre, aguacate, tomate cherry y semillas',
        price: '6.50',
        tags: ['Vegan']
      },
      {
        name: 'Croissant de Jamón Ibérico',
        description: 'Hojaldre relleno de jamón ibérico y queso manchego',
        price: '4.80',
        tags: []
      },
      {
        name: 'Quiche del Día',
        description: 'Receta rotativa con ingredientes de temporada',
        price: '5.50',
        tags: []
      },
      {
        name: 'Bowl de Hummus',
        description: 'Hummus casero, crudités y pan pita tostado',
        price: '7.20',
        tags: ['Vegan', 'Gluten-Free']
      },
      {
        name: 'Sandwich de Pollo',
        description: 'Pollo asado, rúcula, tomate seco y alioli de ajo',
        price: '6.80',
        tags: []
      }
    ]
  }
];

export function MenuPage() {
  return (
    <div className="min-h-screen bg-[var(--cream)]">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl mb-4 text-[var(--espresso)]">Nuestro Menú</h1>
          <p className="text-xl text-[var(--espresso)]/70 max-w-2xl mx-auto">
            Café de especialidad y productos artesanales elaborados con dedicación
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl p-12 shadow-sm">
            <div className="mb-10 pb-6 border-b-2 border-[var(--espresso)]">
              <h2 className="text-4xl text-[var(--espresso)]">Café de Especialidad</h2>
              <p className="text-sm text-[var(--espresso)]/60 mt-2">
                Tostado artesanalmente en Granada
              </p>
            </div>

            <div className="space-y-8">
              {coffeeMenu.map((item, index) => (
                <div key={index} className="pb-6 border-b border-[var(--espresso)]/10 last:border-0">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl text-[var(--espresso)]">
                      {item.name}
                    </h3>
                    <span className="text-xl text-[var(--toast)] ml-4">
                      {item.price}€
                    </span>
                  </div>
                  <p className="text-[var(--espresso)]/70 mb-2 leading-relaxed">
                    {item.description}
                  </p>
                  {item.tags.length > 0 && (
                    <div className="flex gap-2 mt-3">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-[var(--olive)]/10 text-[var(--olive)] rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-[var(--espresso)]/20">
              <p className="text-sm text-[var(--espresso)]/60 italic">
                Ofrecemos leche entera, semidesnatada, avena, soja y almendra sin cargo adicional
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-12 shadow-sm">
            <div className="mb-10 pb-6 border-b-2 border-[var(--espresso)]">
              <h2 className="text-4xl text-[var(--espresso)]">Repostería y Salado</h2>
              <p className="text-sm text-[var(--espresso)]/60 mt-2">
                Elaboración diaria con ingredientes locales
              </p>
            </div>

            {foodMenu.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-10 last:mb-0">
                <h3 className="text-2xl text-[var(--toast)] mb-6">
                  {section.category}
                </h3>
                <div className="space-y-8">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="pb-6 border-b border-[var(--espresso)]/10 last:border-0">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-2xl text-[var(--espresso)]">
                          {item.name}
                        </h4>
                        <span className="text-xl text-[var(--toast)] ml-4">
                          {item.price}€
                        </span>
                      </div>
                      <p className="text-[var(--espresso)]/70 mb-2 leading-relaxed">
                        {item.description}
                      </p>
                      {item.tags.length > 0 && (
                        <div className="flex gap-2 mt-3">
                          {item.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 bg-[var(--olive)]/10 text-[var(--olive)] rounded text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="mt-10 pt-6 border-t border-[var(--espresso)]/20">
              <p className="text-sm text-[var(--espresso)]/60 italic">
                Avisanos de cualquier alergia o restricción alimentaria
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center bg-white rounded-xl p-8 max-w-4xl mx-auto shadow-sm">
          <h3 className="text-2xl mb-3 text-[var(--espresso)]">Horario</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[var(--espresso)]/70">
            <div>
              <p className="mb-1">Lunes a Viernes</p>
              <p className="text-[var(--toast)]">8:00 - 21:00</p>
            </div>
            <div>
              <p className="mb-1">Sábados y Domingos</p>
              <p className="text-[var(--toast)]">9:00 - 22:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
