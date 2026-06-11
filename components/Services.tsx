const services = [
  {
    title: 'Sourcing',
    description:
      'Finding and evaluating green coffee from origin. Building supply chain relationships that deliver quality and consistency.',
  },
  {
    title: 'Roasting',
    description:
      'Roast profile development and quality control. From sample roasting to production-scale consistency.',
  },
  {
    title: 'Private Label',
    description:
      'End-to-end private label product development — from concept and formulation to packaging and launch.',
  },
  {
    title: 'Liquid Concentrates',
    description:
      'Formulation and production guidance for coffee concentrates. Shelf stability, flavor profiles, and scaling to production.',
  },
  {
    title: 'Ready-to-Drink (RTD)',
    description:
      'Consulting on RTD coffee product development and go-to-market. Formulation, co-packing, and distribution strategy.',
  },
  {
    title: 'Equipment',
    description:
      'From Roast & Ground bulk batch brewing to single-serve solutions, we provide scalable dispensing options tailored to your business needs. Our innovative espresso and cold brew solutions help boost speed of service so you can serve more customers, more efficiently.',
  },
]

export default function Services() {
  return (
    <section className="bg-espresso-dark py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold text-sm tracking-[0.25em] uppercase mb-3">What Tom Offers</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-white">Services</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-espresso-card border border-gold/10 p-8"
            >
              <h3 className="font-serif text-gold text-xl mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
