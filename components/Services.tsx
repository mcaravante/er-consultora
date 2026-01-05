import { Calculator, FileText, PiggyBank, Scale, ClipboardCheck, Building2 } from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Contabilidad General",
    description: "Llevamos los libros contables de tu empresa con precisión y en cumplimiento con las normativas vigentes.",
  },
  {
    icon: FileText,
    title: "Liquidación de Impuestos",
    description: "Ganancias, IVA, Ingresos Brutos, Bienes Personales. Optimizamos tu carga fiscal de forma legal.",
  },
  {
    icon: PiggyBank,
    title: "Monotributo",
    description: "Inscripción, recategorización y asesoramiento integral para monotributistas en todas las categorías.",
  },
  {
    icon: Scale,
    title: "Asesoría Tributaria",
    description: "Planificación fiscal estratégica para minimizar costos impositivos y evitar contingencias con AFIP.",
  },
  {
    icon: ClipboardCheck,
    title: "Auditoría Contable",
    description: "Revisión y certificación de estados contables. Informes de auditoría para terceros y entidades.",
  },
  {
    icon: Building2,
    title: "Constitución de Sociedades",
    description: "SAS, SRL, SA. Te acompañamos en todo el proceso de constitución y trámites societarios.",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold font-medium text-sm mb-4">
            Nuestros Servicios
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Soluciones Integrales para tu Negocio
          </h2>
          <p className="text-muted-foreground text-lg">
            Ofrecemos un servicio completo de asesoramiento contable, impositivo y societario adaptado a tus necesidades.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                <service.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

