import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-hero py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-12 items-start">
          {/* Logo & Description */}
          <div>
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

          {/* Center Logo */}
          <div className="flex flex-col items-center justify-start gap-2">
            <span className="text-primary-foreground/70 text-sm font-medium tracking-wide">
              Agente Autorizado
            </span>
            <Image
              src="/assets/tr_pri_logo_rgb_white.png"
              alt="Thomson Reuters"
              width={420}
              height={90}
              className="h-20 w-auto"
            />
          </div>

          {/* Links + Services */}
          <div className="grid grid-cols-2 gap-6">
            <ul className="space-y-3">
              <li>
                <a href="/#servicios" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="/#nosotros" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="/#contacto-formulario" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
            <ul className="space-y-3">
              <li>
                <a href="/servicios/bejerman-erp" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Bejerman ERP
                </a>
              </li>
              <li>
                <a href="/servicios/bejerman-sueldos" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Bejerman Sueldos
                </a>
              </li>
              <li>
                <a href="/servicios/bejerman-web" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Bejerman Web
                </a>
              </li>
              <li>
                <a href="/servicios/onvio" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Thomson Reuters ONVIO
                </a>
              </li>
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
          <div className="mt-4 text-center">
            <a
              href="https://www.lixar.com.ar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/60 hover:text-primary-foreground text-xs transition-colors"
            >
              Desarrollado por Lixar
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

