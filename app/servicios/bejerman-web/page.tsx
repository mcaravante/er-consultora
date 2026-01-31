import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Banknote,
  ClipboardList,
  FileText,
  PieChart,
  Receipt,
  Wallet,
} from "lucide-react";

export default function BejermanWebPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/40 via-background to-background" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-lavanda/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card/80 backdrop-blur-sm border border-border rounded-3xl p-8 md:p-12 shadow-lg text-center">
                <span className="inline-block px-4 py-1.5 rounded-full bg-lavanda/10 text-lavanda font-medium text-sm mb-4">
                  Servicios
                </span>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
                  Bejerman Web
                </h1>
                <p className="text-muted-foreground text-lg font-medium mb-6">
                  Bejerman Web es el software en la nube para pequeñas empresas
                </p>
                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10">
                  BEJERMAN WEB es la plataforma que te brinda todas las herramientas que necesitás para administrar cada una de las operaciones de tu pequeña empresa. Y todo de acuerdo con los requerimientos más actuales, para asegurar tu crecimiento y desarrollo.
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
            <div className="max-w-4xl mx-auto text-center mb-14">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Funcionalidad
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-lavanda/40 bg-card p-6 shadow-card">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                    <Receipt className="w-5 h-5 text-lavanda" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Ventas</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Emití facturas electrónicas y facturas de crédito electrónicas en moneda nacional y extranjera. Gestioná cobranzas y emisión de recibos. Calculá automáticamente la percepción de IIBB, IVA y Seguridad Social. Integración con Mercado Pago y Mercado Libre.
                </p>
              </div>
              <div className="rounded-2xl border border-lavanda/40 bg-card p-6 shadow-card">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                    <ClipboardList className="w-5 h-5 text-lavanda" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Compras</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Registrá comprobantes y llevá el conteo de tus compras e importaciones fácilmente. Emití órdenes de pago y certificados de retención. Importá comprobantes desde una planilla de cálculo o Mis Comprobantes (AFIP). Calculá automáticamente las retenciones.
                </p>
              </div>
              <div className="rounded-2xl border border-lavanda/40 bg-card p-6 shadow-card">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                    <Wallet className="w-5 h-5 text-lavanda" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Cuentas Corrientes</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Administrá clientes y proveedores con reportes completos y precisos. Aplicá y compensá comprobantes. Obtené resúmenes de cuentas en diversos formatos. Exportá información a Microsoft® Excel.
                </p>
              </div>
              <div className="rounded-2xl border border-lavanda/40 bg-card p-6 shadow-card">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                    <Banknote className="w-5 h-5 text-lavanda" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Finanzas</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Tené tus cajas y cuentas bancarias en orden. Realizá el seguimiento de cheques propios y de terceros. Controlá los pagos, cobros, depósitos, cheques rechazados y más. Realizá las conciliaciones bancarias de forma simple y ágil.
                </p>
              </div>
              <div className="rounded-2xl border border-lavanda/40 bg-card p-6 shadow-card">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                    <PieChart className="w-5 h-5 text-lavanda" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Informes Impositivos</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Emití los Libros de IVA Digital y generá la DDJJ. Exportá fácilmente toda la información de tu negocio a los aplicativos (SICORE, RG 3685, SIRE, e-ARCIBA). Descargá automáticamente padrones de Ingresos Brutos (ARBA/AGIP) actualizados.
                </p>
              </div>
              <div className="rounded-2xl border border-lavanda/40 bg-card p-6 shadow-card">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                    <FileText className="w-5 h-5 text-lavanda" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Contabilidad</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Automatizá la registración de asientos. Llevá libros diarios y obtené libros mayores fácilmente. Obtené balances de Sumas y Saldos y de Presentación.
                </p>
              </div>
              <div className="rounded-2xl border border-lavanda/40 bg-card p-6 shadow-card lg:col-span-3">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                    <FileText className="w-5 h-5 text-lavanda" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Seguimiento de Comprobantes
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Podrás tener la trazabilidad de comprobantes de ventas y de compras, para gestionar debidamente la facturación y controlar entregas.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Beneficios
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-card rounded-2xl p-6 border border-border shadow-card">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Integración
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Todos los procesos administrativos centralizados en un mismo software de gestión, e integración con terceros a través de APIs.
                </p>
              </div>
              <div className="bg-card rounded-2xl p-6 border border-border shadow-card">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Acceso online
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Un servicio en la nube disponible 24/7 que no necesita instalación, sólo requiere una conexión a internet.
                </p>
              </div>
              <div className="bg-card rounded-2xl p-6 border border-border shadow-card">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Bajo costo
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Accedé a tu sistema de gestión con una baja inversión inicial, sin necesidad de equipos o servidores y con implementación inmediata.
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
