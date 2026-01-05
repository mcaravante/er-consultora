import { CheckCircle, Clock, HeadphonesIcon, Award } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Profesionales Matriculados",
    description: "Contadores públicos con matrícula vigente y actualización permanente en normativas.",
  },
  {
    icon: Clock,
    title: "Respuesta Rápida",
    description: "Atención ágil a tus consultas. Sabemos que el tiempo es dinero para tu negocio.",
  },
  {
    icon: HeadphonesIcon,
    title: "Atención Personalizada",
    description: "Cada cliente es único. Diseñamos soluciones a medida según tu situación.",
  },
  {
    icon: CheckCircle,
    title: "Tecnología al Día",
    description: "Utilizamos las últimas herramientas digitales para optimizar procesos y costos.",
  },
];

const WhyUs = () => {
  return (
    <section id="nosotros" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold font-medium text-sm mb-4">
              ¿Por qué elegirnos?
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Tu Éxito es Nuestra Prioridad
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Con más de 15 años de experiencia en el mercado argentino, entendemos los desafíos que enfrentan empresarios y emprendedores. Nuestro compromiso es brindarte tranquilidad fiscal para que puedas enfocarte en hacer crecer tu negocio.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
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
            <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 to-primary/20 rounded-3xl blur-2xl" />
            <div className="relative bg-card rounded-3xl p-8 md:p-12 shadow-lg border border-border">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 rounded-2xl bg-muted/50">
                  <p className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">500+</p>
                  <p className="text-muted-foreground font-medium">Clientes Activos</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-muted/50">
                  <p className="font-display text-4xl md:text-5xl font-bold text-gold mb-2">15+</p>
                  <p className="text-muted-foreground font-medium">Años de Experiencia</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-muted/50">
                  <p className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">98%</p>
                  <p className="text-muted-foreground font-medium">Clientes Satisfechos</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-muted/50">
                  <p className="font-display text-4xl md:text-5xl font-bold text-gold mb-2">24h</p>
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

