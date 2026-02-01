import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  CalendarCheck,
  ClipboardCheck,
  FileText,
  Gauge,
  Newspaper,
  Receipt,
  Settings,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

export default function OnvioPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/40 via-background to-background" />
          <div
            className="absolute inset-0 bg-center bg-cover opacity-80"
            style={{ backgroundImage: "url('/assets/hero-bg.png')" }}
          />
          <div className="absolute top-0 right-0 w-96 h-96 bg-lavanda/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/90 backdrop-blur-sm border border-border rounded-3xl p-8 md:p-12 shadow-lg text-center">
                <span className="inline-block px-4 py-1.5 rounded-full bg-lavanda/10 text-lavanda font-medium text-sm mb-4">
                  Servicios
                </span>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
                  ONVIO
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10">
                  ONVIO es el software contable online que potencia la gestión, automatiza tareas y optimiza la colaboración con los clientes. Te asegura:
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero" size="lg" asChild>
                    <a href="/#contacto">Solicitar Asesoramiento</a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary/30 text-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href="/#servicios">Volver a Servicios</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="rounded-2xl border border-lavanda/40 bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-lavanda/30 hover:ring-1 hover:ring-lavanda/20 cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                    <Gauge className="w-5 h-5 text-lavanda" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Gestión integral
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Un software de gestión contable 100% online, con actualizaciones normativas permanentes y mejoras constantes para optimizar tu trabajo diario.
                </p>
              </div>
              <div className="rounded-2xl border border-lavanda/40 bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-lavanda/30 hover:ring-1 hover:ring-lavanda/20 cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-lavanda" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Información confiable
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  ONVIO cuenta con la base de información contable, tributaria y fiscal más completa y confiable, y envía newsletters con novedades diarias para que estés siempre al día.
                </p>
              </div>
              <div className="rounded-2xl border border-lavanda/40 bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-lavanda/30 hover:ring-1 hover:ring-lavanda/20 cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                    <UserCheck className="w-5 h-5 text-lavanda" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Soporte y formación
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Obtendrás un acompañamiento personalizado para el uso de la solución, y capacitaciones periódicas para el ejercicio de tu profesión.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-14">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Características
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-lavanda/40 bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-lavanda/30 hover:ring-1 hover:ring-lavanda/20 cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                    <Receipt className="w-5 h-5 text-lavanda" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Liquidación de Impuestos
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Ingresos Brutos, IVA, Impuesto a las Ganancias y Bienes Personales.
                </p>
              </div>
              <div className="rounded-2xl border border-lavanda/40 bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-lavanda/30 hover:ring-1 hover:ring-lavanda/20 cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                    <ClipboardCheck className="w-5 h-5 text-lavanda" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Liquidación de Sueldos
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Libro de Sueldos Digital, Ganancias 4ta categoría, Recibo electrónico.
                </p>
              </div>
              <div className="rounded-2xl border border-lavanda/40 bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-lavanda/30 hover:ring-1 hover:ring-lavanda/20 cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                    <Settings className="w-5 h-5 text-lavanda" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Gestión del estudio
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Centralizá la administración de tu estudio contable y la comunicación con tus clientes dentro del mismo software de gestión, con información segura y accesible.
                </p>
              </div>
              <div className="rounded-2xl border border-lavanda/40 bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-lavanda/30 hover:ring-1 hover:ring-lavanda/20 cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                    <CalendarCheck className="w-5 h-5 text-lavanda" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Seguimiento de Vencimientos
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Vencimientos AFIP, Inteligencia Fiscal, e-ventanilla.
                </p>
              </div>
              <div className="rounded-2xl border border-lavanda/40 bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-lavanda/30 hover:ring-1 hover:ring-lavanda/20 cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                    <Settings className="w-5 h-5 text-lavanda" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Automatización de tareas
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Importador de comprobantes, cálculo de percepciones, facturador.
                </p>
              </div>
              <div className="rounded-2xl border border-lavanda/40 bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-lavanda/30 hover:ring-1 hover:ring-lavanda/20 cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                    <Newspaper className="w-5 h-5 text-lavanda" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Información
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Normativa AFIP, impuestos nacionales, impuestos provinciales, alícuotas IIBB.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
