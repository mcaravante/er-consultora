import { CheckCircle, Clock, HeadphonesIcon, Award } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Partner Bejerman - Thomson Reuters",
    description: "Respaldo tecnológico y normativo de primer nivel. Garantía de seguridad, cumplimiento y actualización permanente en normativas laborales.",
  },
  {
    icon: Clock,
    title: "Precisión y Puntualidad",
    description: "Liquidaciones precisas y entregas en tiempo y forma. Cumplimiento estricto de plazos para que tu empresa opere con tranquilidad.",
  },
  {
    icon: HeadphonesIcon,
    title: "Atención Especializada",
    description: "Equipo especializado en todos los convenios colectivos. Asesoramiento personalizado según la actividad y normativa aplicable.",
  },
  {
    icon: CheckCircle,
    title: "Cumplimiento Normativo",
    description: "Todas nuestras liquidaciones están alineadas a normativa vigente. Control y validación exhaustiva antes de cada entrega.",
  },
];

const WhyUs = () => {
  return (
    <section id="compromiso" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-lavanda/10 text-lavanda font-medium text-sm mb-4">
              Nuestro Compromiso
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Especialistas en Liquidación de Sueldos
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Con más de 10 años de experiencia en gestión laboral y liquidación de sueldos en Argentina, nos especializamos en brindar servicios precisos y confiables para empresas que buscan externalizar su payroll. Nuestro compromiso es garantizar cumplimiento normativo y tranquilidad operativa para que puedas enfocarte en hacer crecer tu negocio.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-lavanda" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-lavanda/20 to-primary/20 rounded-3xl blur-2xl" />
            <div className="relative bg-card rounded-3xl p-8 md:p-12 shadow-lg border border-border">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 rounded-2xl bg-muted/50">
                  <p className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">500+</p>
                  <p className="text-muted-foreground font-medium">Empresas Activas</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-muted/50">
                  <p className="font-display text-4xl md:text-5xl font-bold text-lavanda mb-2">10+</p>
                  <p className="text-muted-foreground font-medium">Años de Experiencia</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-muted/50">
                  <p className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">98%</p>
                  <p className="text-muted-foreground font-medium">Clientes Satisfechos</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-muted/50">
                  <p className="font-display text-4xl md:text-5xl font-bold text-lavanda mb-2">24h</p>
                  <p className="text-muted-foreground font-medium">Tiempo de Respuesta</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

