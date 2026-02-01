import { Calculator, FileText, Users, Scale, ClipboardCheck, Building2 } from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Liquidación de Sueldos",
    description: "Liquidación de sueldos para todos los convenios colectivos de trabajo. Confección y emisión de recibos de sueldo con precisión y cumplimiento normativo.",
  },
  {
    icon: Users,
    title: "Gestión de Personal",
    description: "Altas y bajas del personal en ARCA. Gestión integral de la relación laboral con control y seguimiento continuo.",
  },
  {
    icon: FileText,
    title: "Impuesto a las Ganancias",
    description: "Liquidación y cálculos de Impuesto a las Ganancias – 4ta categoría. Configuración y parametrización de retenciones según normativa vigente.",
  },
  {
    icon: Scale,
    title: "Cargas Sociales y Formulario 931",
    description: "Configuración y parametrización de LSD. Confección y presentación del Formulario 931 en ARCA con cumplimiento normativo.",
  },
  {
    icon: ClipboardCheck,
    title: "Boletas Sindicales",
    description: "Gestión y control de boletas sindicales. Procesamiento y seguimiento de aportes según convenios colectivos aplicables.",
  },
  {
    icon: Building2,
    title: "Procesamiento de Payroll",
    description: "Procesamiento de información para pago de sueldos a través de bancos. Integración con sistemas bancarios y generación de archivos de transferencia.",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-lavanda/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 motion-safe:animate-fade-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-lavanda/10 text-lavanda font-medium text-sm mb-4">
            Servicios Especializados
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Gestión Laboral Integral para tu Empresa
          </h2>
          <p className="text-muted-foreground text-lg">
            Servicios profesionales de liquidación de sueldos y gestión laboral. Precisión, cumplimiento normativo y tranquilidad para PyMEs y empresas que externalizan su payroll.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 rounded-2xl bg-card/90 border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 hover:border-lavanda/30 hover:ring-1 hover:ring-lavanda/20 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-lavanda/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative w-14 h-14 rounded-xl bg-white flex items-center justify-center mb-6 transition-shadow duration-300 group-hover:shadow-sm">
                <service.icon className="w-7 h-7 text-lavanda" />
              </div>
              <h3 className="relative font-display text-xl font-semibold text-foreground mb-3 group-hover:text-lavanda transition-colors">
                {service.title}
              </h3>
              <p className="relative text-muted-foreground leading-relaxed">
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

