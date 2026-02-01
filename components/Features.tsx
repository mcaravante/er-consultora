import { CheckCircle, FolderOpen, Users, MessageCircle } from "lucide-react";

const features = [
  {
    icon: CheckCircle,
    title: "Gestión clara y sin fricciones",
    description: "Solo necesitás informarnos las novedades del período —licencias, ausencias, altas o bajas—. Nuestro equipo se encarga del cálculo, control y emisión de los recibos, respetando cada normativa vigente.",
  },
  {
    icon: FolderOpen,
    title: "Información centralizada",
    description: "Accedé a recibos, reportes y documentación desde un único entorno digital, con trazabilidad completa y fácil consulta cuando lo necesites.",
  },
  {
    icon: Users,
    title: "Cobertura integral de convenios",
    description: "Trabajamos con todos los convenios colectivos y sindicatos, gestionando las liquidaciones y presentaciones correspondientes de forma correcta y en tiempo.",
  },
  {
    icon: MessageCircle,
    title: "Atención profesional 100% online",
    description: "Ante cualquier consulta, contás con contacto directo por WhatsApp con nuestro equipo contable, para resolver dudas y acompañarte en cada etapa del proceso.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-lavanda/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 motion-safe:animate-fade-up">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Simplificá tu gestión salarial con un equipo experto
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Delegar la liquidación de sueldos no solo ahorra tiempo: reduce errores y te da tranquilidad. En Calim combinamos conocimiento técnico, experiencia en convenios argentinos y una plataforma digital propia para brindarte un servicio confiable, ágil y ordenado. Nos ocupamos de todo el proceso para que tu empresa pueda enfocarse en crecer.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-card rounded-2xl p-8 border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 hover:border-lavanda/30 hover:ring-1 hover:ring-lavanda/20 cursor-pointer"
            >
              <div className="relative">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm transition-shadow duration-300 group-hover:shadow-md">
                    <feature.icon className="w-7 h-7 text-lavanda" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-3 text-xl group-hover:text-lavanda transition-colors">
                      {feature.title}
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
