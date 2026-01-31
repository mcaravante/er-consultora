import { Button } from "@/components/ui/button";

const ContactIntro = () => {
  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-lavanda/10 text-lavanda font-medium text-sm mb-4">
            Contacto
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¿Listo para externalizar tu payroll con confianza?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Coordiná una consulta y contanos sobre tu empresa, convenios colectivos y
            cantidad de empleados. Te ayudamos a definir el mejor esquema de liquidación
            y gestión laboral para tu operación.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <a href="#contacto-formulario">Solicitar Asesoramiento</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary/30 text-primary hover:bg-primary/10"
              asChild
            >
              <a href="tel:+5491112345678">Llamar ahora</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactIntro;
