import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Banknote,
  ClipboardList,
  Coins,
  Factory,
  Globe,
  Package,
  ShoppingCart,
  PieChart,
  ShieldCheck,
  Smartphone,
  Store,
  Workflow,
  Receipt,
  Truck,
  Warehouse,
} from "lucide-react";

export default function BejermanErpPage() {
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
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Bejerman ERP
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10">
                  La solución para pymes que da sustento a la rentabilidad y el crecimiento.
                  Integración y control para una gestión comercial y administrativa ordenada,
                  con soporte profesional y cumplimiento normativo.
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
                Escalabilidad y configuración modular
              </h2>
              <p className="text-muted-foreground text-lg">
                Permite incorporar funcionalidades adicionales de acuerdo con las necesidades del negocio.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group relative rounded-2xl border border-lavanda/40 bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-lavanda/30 hover:ring-1 hover:ring-lavanda/20 cursor-pointer">
                <div
                  className="motion-safe:animate-fade-up motion-safe:opacity-0"
                  style={{ animationDelay: "0.05s" }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center transition-shadow duration-300 group-hover:shadow-sm">
                      <Receipt className="w-5 h-5 text-lavanda" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-lavanda">
                      Ventas y Cuentas a Cobrar
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Gestiona ventas locales y de comercio exterior con una herramienta que se adaptará a todas tus necesidades. Genera factura de crédito electrónica, facturas, remitos y cobranzas electrónicas. Cuentas Corrientes en múltiples monedas.
                  </p>
                </div>
              </div>
              <div className="group relative rounded-2xl border border-lavanda/40 bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-lavanda/30 hover:ring-1 hover:ring-lavanda/20 cursor-pointer">
                <div
                  className="motion-safe:animate-fade-up motion-safe:opacity-0"
                  style={{ animationDelay: "0.1s" }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center transition-shadow duration-300 group-hover:shadow-sm">
                      <ClipboardList className="w-5 h-5 text-lavanda" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-lavanda">
                      Compras y Cuentas a Pagar
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Administra eficientemente tus compras en un entorno integrado. Accede fácilmente a la información para hacer seguimiento y verificar que las operaciones se concreten tal como se habían acordado.
                  </p>
                </div>
              </div>
              <div className="group relative rounded-2xl border border-lavanda/40 bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-lavanda/30 hover:ring-1 hover:ring-lavanda/20 cursor-pointer">
                <div
                  className="motion-safe:animate-fade-up motion-safe:opacity-0"
                  style={{ animationDelay: "0.15s" }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center transition-shadow duration-300 group-hover:shadow-sm">
                      <Coins className="w-5 h-5 text-lavanda" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-lavanda">
                      Impuestos
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Genera la información respaldo para la liquidación de la Declaración Jurada de IVA. Regímenes de información y cálculo automático de todo tipo de impuestos, internos o no gravados. Libro IVA Digital. Padrones IIBB. COT CABA.
                  </p>
                </div>
              </div>
              <div className="group relative rounded-2xl border border-lavanda/40 bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-lavanda/30 hover:ring-1 hover:ring-lavanda/20 cursor-pointer">
                <div
                  className="motion-safe:animate-fade-up motion-safe:opacity-0"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center transition-shadow duration-300 group-hover:shadow-sm">
                      <Warehouse className="w-5 h-5 text-lavanda" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-lavanda">
                      Inventario y logística de depósitos
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Análisis y control del stock de tu empresa, movimientos y rotación de stock, variables que pueden permitir una eficiente utilización del stock de bienes de cambio y materias primas. Integración con Ventas y Compras. Trazabilidad de punta a punta Cliente/Proveedor y viceversa.
                  </p>
                </div>
              </div>
              <div className="group relative rounded-2xl border border-lavanda/40 bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-lavanda/30 hover:ring-1 hover:ring-lavanda/20 cursor-pointer">
                <div
                  className="motion-safe:animate-fade-up motion-safe:opacity-0"
                  style={{ animationDelay: "0.25s" }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center transition-shadow duration-300 group-hover:shadow-sm">
                      <Banknote className="w-5 h-5 text-lavanda" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-lavanda">Finanzas</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Concentra toda la información financiera, analiza los saldos actuales, los resultados a futuro, los movimientos contables y la información bancaria. Todo en un solo lugar. Conciliación automática.
                  </p>
                </div>
              </div>
              <div className="group relative rounded-2xl border border-lavanda/40 bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-lavanda/30 hover:ring-1 hover:ring-lavanda/20 cursor-pointer">
                <div
                  className="motion-safe:animate-fade-up motion-safe:opacity-0"
                  style={{ animationDelay: "0.3s" }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center transition-shadow duration-300 group-hover:shadow-sm">
                      <PieChart className="w-5 h-5 text-lavanda" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-0 transition-colors group-hover:text-lavanda">Queries</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Generación de reportes definidos por el Usuario a partir de consultas fijas predefinidas en el sistema, los cuales podrá visualizar por medio de una grilla o un cubo.
                  </p>
                </div>
              </div>
              <div className="group relative rounded-2xl border border-lavanda/40 bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-lavanda/30 hover:ring-1 hover:ring-lavanda/20 cursor-pointer">
                <div
                  className="motion-safe:animate-fade-up motion-safe:opacity-0"
                  style={{ animationDelay: "0.35s" }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center transition-shadow duration-300 group-hover:shadow-sm">
                      <Package className="w-5 h-5 text-lavanda" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-0 transition-colors group-hover:text-lavanda">Activo Fijo</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Abarca todo el ciclo de vida de los bienes, administra los bienes de uso, intangibles e inversiones permanentes de tu empresa.
                  </p>
                </div>
              </div>
              <div className="group relative rounded-2xl border border-lavanda/40 bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-lavanda/30 hover:ring-1 hover:ring-lavanda/20 cursor-pointer">
                <div
                  className="motion-safe:animate-fade-up motion-safe:opacity-0"
                  style={{ animationDelay: "0.4s" }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center transition-shadow duration-300 group-hover:shadow-sm">
                      <PieChart className="w-5 h-5 text-lavanda" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-0 transition-colors group-hover:text-lavanda">Contabilidad</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Cumple todos los requerimientos tanto de la contabilidad formal como de tus necesidades gerenciales y de seguimiento de costos. Gestión contable multimoneda. Ajuste por inflación. Confección de Balances.
                  </p>
                </div>
              </div>
              <div className="group relative rounded-2xl border border-lavanda/40 bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-lavanda/30 hover:ring-1 hover:ring-lavanda/20 cursor-pointer">
                <div
                  className="motion-safe:animate-fade-up motion-safe:opacity-0"
                  style={{ animationDelay: "0.45s" }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center transition-shadow duration-300 group-hover:shadow-sm">
                      <Globe className="w-5 h-5 text-lavanda" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-lavanda">
                      Comercio Exterior
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Gestiona las operaciones de importación y exportación integrando todos los aspectos relacionados y evitando duplicar tareas y esfuerzos. Asignación de moneda. Cálculo automático de diferencias de cambio. Recupero de IVA por exportaciones.
                  </p>
                </div>
              </div>
              <div className="group relative rounded-2xl border border-lavanda/40 bg-card p-6 shadow-card lg:col-span-3 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-lavanda/30 hover:ring-1 hover:ring-lavanda/20 cursor-pointer">
                <div
                  className="motion-safe:animate-fade-up motion-safe:opacity-0"
                  style={{ animationDelay: "0.5s" }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center transition-shadow duration-300 group-hover:shadow-sm">
                      <Factory className="w-5 h-5 text-lavanda" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-0 transition-colors group-hover:text-lavanda">Producción</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Gestiona la producción desde sus cuatro aspectos principales: Planificación, Programación y Control, Abastecimiento e Ingeniería. Trazabilidad de toda la cadena productiva y soporte para Normas ISO.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-14">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Integraciones con Bejerman ERP
              </h2>
              <p className="text-muted-foreground text-lg">
                Conectividad y automatización para potenciar tu operación y centralizar la gestión.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-lavanda/40 bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-lavanda/30 hover:ring-1 hover:ring-lavanda/20 cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                    <Warehouse className="w-5 h-5 text-lavanda" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Gestión de Bodegas
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Integración con Bacosoft - Solución específica para la planificación, control y gestión de las empresas vitivinícolas.
                </p>
              </div>
              <div className="rounded-2xl border border-lavanda/40 bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-lavanda/30 hover:ring-1 hover:ring-lavanda/20 cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                    <Globe className="w-5 h-5 text-lavanda" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Omnicanalidad digital
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Integración con Facturante – Automatizá el proceso de ventas online y su registro en el software de gestión de forma segura y transparente, permitiendo generar la información necesaria para la toma de decisiones en tiempo real.
                </p>
              </div>
              <div className="rounded-2xl border border-lavanda/40 bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-lavanda/30 hover:ring-1 hover:ring-lavanda/20 cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-lavanda" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Gestión de venta móvil
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Integración con Mobiliza – Tus vendedores pueden gestionar las ventas desde el teléfono celular, disponiendo de la información necesaria y en tiempo real.
                </p>
              </div>
              <div className="rounded-2xl border border-lavanda/40 bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-lavanda/30 hover:ring-1 hover:ring-lavanda/20 cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                    <Truck className="w-5 h-5 text-lavanda" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Gestión de Pago a Proveedores
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Integración con Checkpagos – Lográ una comunicación ágil y en tiempo real con tus proveedores, con un portal de atención disponible 24/7, donde podrán verificar el estado de sus pagos, facturas y demás documentos relacionados.
                </p>
              </div>
              <div className="rounded-2xl border border-lavanda/40 bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-lavanda/30 hover:ring-1 hover:ring-lavanda/20 cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-lavanda" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Riesgo crediticio
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Integración con Veraz - Este nuevo módulo te brinda las herramientas de inteligencia para evaluar el comportamiento de pagos de cada uno de tus clientes.
                </p>
              </div>
              <div className="rounded-2xl border border-lavanda/40 bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-lavanda/30 hover:ring-1 hover:ring-lavanda/20 cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                    <Store className="w-5 h-5 text-lavanda" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Punto de Venta integrado
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Herramienta PosONE – Desarrollada por CASE Sistemas Integrados, Agente Autorizado de Thomson Reuters. Mediante Bejerman ERP permite integrar los Puntos de Venta a la Casa Central, administrando de forma conjunta sus ventas, flujos de fondos, pedidos y existencias.
                </p>
              </div>
              <div className="rounded-2xl border border-lavanda/40 bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-lavanda/30 hover:ring-1 hover:ring-lavanda/20 cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                    <ShoppingCart className="w-5 h-5 text-lavanda" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    E-commerce
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Integración con Tienda Quick - Plataforma de e-commerce que se integra al software para lograr una gestión unificada de los canales de ventas.
                </p>
              </div>
              <div className="rounded-2xl border border-lavanda/40 bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-lavanda/30 hover:ring-1 hover:ring-lavanda/20 cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                    <Workflow className="w-5 h-5 text-lavanda" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Interfaz con Planexware
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Integración con Planexware. Automatizá la incorporación de las notas de pedido de los clientes gestionadas desde el portal y el envío posterior de las facturas, notas de crédito y débito emitidas desde Bejerman ERP vinculadas con dichas operaciones.
                </p>
              </div>
              <div className="rounded-2xl border border-lavanda/40 bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-lavanda/30 hover:ring-1 hover:ring-lavanda/20 cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                    <Package className="w-5 h-5 text-lavanda" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Carga de comprobantes inteligente
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Integración con The Eye - Automatiza la registración de comprobantes de compras a través de un email Bot que procesa los PDFs enviados por los proveedores, captura los datos y los registra en el software ERP.
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
