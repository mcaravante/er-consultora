const About = () => {
  return (
    <section id="nosotros" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-lavanda/10 text-lavanda font-medium text-sm mb-4">
              Nosotros
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Especialistas en liquidación de sueldos y gestión laboral
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Trabajamos con empresas que necesitan precisión, cumplimiento normativo y
              procesos claros. Nuestro enfoque es 100% profesional, con experiencia en
              convenios colectivos y una operación orientada a la trazabilidad y el control.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Somos Partner Bejerman - Thomson Reuters, lo que garantiza respaldo
              tecnológico, seguridad en la información y actualización permanente frente a
              cambios normativos.
            </p>
          </div>
          <div className="bg-card rounded-3xl p-8 border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 hover:border-lavanda/30 hover:ring-1 hover:ring-lavanda/20">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-2xl font-bold text-foreground mb-2">10+</p>
                <p className="text-muted-foreground">Años de experiencia</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground mb-2">500+</p>
                <p className="text-muted-foreground">Empresas atendidas</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground mb-2">100%</p>
                <p className="text-muted-foreground">Cumplimiento normativo</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground mb-2">24h</p>
                <p className="text-muted-foreground">Tiempo de respuesta</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
