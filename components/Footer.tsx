const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-hero py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">C</span>
              </div>
              <div>
                <span className="font-display font-semibold text-xl text-primary-foreground">Contadores</span>
                <span className="text-foreground font-display font-semibold text-xl">AR</span>
              </div>
            </a>
            <p className="text-primary-foreground/70 max-w-md leading-relaxed">
              Especialistas en liquidación de sueldos y gestión laboral integral para empresas en Argentina. Partner Bejerman - Thomson Reuters. Servicio profesional, preciso y alineado a normativa vigente.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Enlaces</h4>
            <ul className="space-y-3">
              <li>
                <a href="#servicios" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Servicios</h4>
            <ul className="space-y-3">
              <li className="text-primary-foreground/70">Liquidación de Sueldos</li>
              <li className="text-primary-foreground/70">Gestión Laboral</li>
              <li className="text-primary-foreground/70">Formulario 931</li>
              <li className="text-primary-foreground/70">Ganancias 4ta Categoría</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} ContadoresAR. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

