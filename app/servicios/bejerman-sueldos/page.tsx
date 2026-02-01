import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  Clock,
  FileSignature,
  FileText,
  Receipt,
  RefreshCw,
  ShieldCheck,
  Users,
} from "lucide-react";

export default function BejermanRrhhPage() {
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
                  Bejerman Sueldos
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10">
                  La solución para planificar, desarrollar y controlar la gestión de talentos
                  en las empresas. Centralizá procesos y documentación para una gestión
                  laboral más eficiente y ordenada.
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
              <p className="text-muted-foreground text-lg">
                Herramientas clave para una liquidación de sueldos precisa, ágil y con control total.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-lavanda/40 bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-lavanda/30 hover:ring-1 hover:ring-lavanda/20 cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                    <Receipt className="w-5 h-5 text-lavanda" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Liquidación de Sueldos
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Obtiene conceptos preconfigurados y actualizados de los principales convenios colectivos y personalizables con la intuitiva y flexible. Fácil control de liquidación y trazabilidad de variables con nuestro programa para liquidar haberes.
                </p>
              </div>
              <div className="rounded-2xl border border-lavanda/40 bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-lavanda/30 hover:ring-1 hover:ring-lavanda/20 cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-lavanda" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Integración con Organismos
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Exporta archivos para acreditación bancaria y otros organismos gubernamentales (AFIP, sindicatos, Libro Sueldo Digital, etc.), utilizando nuestro programa de liquidación de sueldos. Genera los asientos de sueldos.
                </p>
              </div>
              <div className="rounded-2xl border border-lavanda/40 bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-lavanda/30 hover:ring-1 hover:ring-lavanda/20 cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                    <FileText className="w-5 h-5 text-lavanda" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Generación de Recibos de sueldos
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Emití recibos de sueldo en formato físico con código de barra de seguimiento, o digital con posibilidad de envío por correo electrónico o por medio de nuestra plataforma de e-recibos.
                </p>
              </div>
              <div className="rounded-2xl border border-lavanda/40 bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-lavanda/30 hover:ring-1 hover:ring-lavanda/20 cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                    <RefreshCw className="w-5 h-5 text-lavanda" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Actualización de conceptos
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Automatiza el proceso de liquidación de sueldos con conceptos actualizados para el cálculo de Ganancias de 4ta categoría, bases imponibles, básicos de convenio e importación masiva de deducciones del Siradig.
                </p>
              </div>
              <div className="rounded-2xl border border-lavanda/40 bg-card p-6 shadow-card lg:col-span-2 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-lavanda/30 hover:ring-1 hover:ring-lavanda/20 cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-lavanda" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Informes de control, gestión y cumplimiento
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Obtené reportes para el control de las liquidaciones, informes por centros de costo, sector y lugar de trabajo. Accedé a informes dinámicos y parametrizables gracias a nuestro sistema de liquidación de sueldos.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-14">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Escalabilidad y configuración modular
              </h2>
              <p className="text-muted-foreground text-lg">
                Módulos complementarios para potenciar la gestión de RRHH y la operatoria diaria.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group rounded-2xl border border-lavanda/40 bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-lavanda/30 hover:ring-1 hover:ring-lavanda/20 cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center transition-shadow duration-300 group-hover:shadow-sm">
                    <Users className="w-5 h-5 text-lavanda" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-lavanda">
                    Gestión y desarrollo del personal
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Dispone de un legajo electrónico por empleado con información histórica del personal y de familiares, con todos los antecedentes (licencias, ausencias, sanciones, etc.) y la información propia de cada uno (capacitación, cursos, etc.), con recordatorios de tareas críticas y herramientas de evaluación de desempeño utilizando nuestro sistema de liquidación de sueldos.
                </p>
              </div>
              <div className="group rounded-2xl border border-lavanda/40 bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-lavanda/30 hover:ring-1 hover:ring-lavanda/20 cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center transition-shadow duration-300 group-hover:shadow-sm">
                    <FileSignature className="w-5 h-5 text-lavanda" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-lavanda">e-Recibo</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Crea recibos de sueldo electrónicos, centralizando todo el flujo de distribución, aprobación, firma digital y recepción, de forma digitalizada. Más práctico, seguro y confidencial para todos.
                </p>
              </div>
              <div className="group rounded-2xl border border-lavanda/40 bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-lavanda/30 hover:ring-1 hover:ring-lavanda/20 cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center transition-shadow duration-300 group-hover:shadow-sm">
                    <FileText className="w-5 h-5 text-lavanda" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-lavanda">
                    Portal de autogestión del empleado
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Descentraliza y optimiza la gestión de los recursos humanos con funcionalidades en la nube para los empleados: pedido de licencias (vacaciones, maternidad, exámenes), distribución de recibos de sueldos digitales. Consolida la documentación en un único sitio digital.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-14">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ecosistema de soluciones integradas
              </h2>
              <p className="text-muted-foreground text-lg">
                Integraciones para digitalizar procesos y asegurar trazabilidad en toda la gestión laboral.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-lavanda/40 bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-lavanda/30 hover:ring-1 hover:ring-lavanda/20 cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                    <FileText className="w-5 h-5 text-lavanda" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Intercambio de documentación
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Integración con NAALOO. Optimizá los procesos administrativos, la comunicación y el intercambio de documentos con los colaboradores de una forma simple, ágil y online. Gestión del envío y firma de recibos de sueldo digitales y autorizaciones de licencias utilizando nuestro programa para liquidar sueldos.
                </p>
              </div>
              <div className="rounded-2xl border border-lavanda/40 bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-lavanda/30 hover:ring-1 hover:ring-lavanda/20 cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                    <Clock className="w-5 h-5 text-lavanda" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Control horario</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Integración con Time Management. Integrá de manera automática los datos provenientes de los relojes de control horario en Bejerman Sueldos. Mantené el control incluso si trabajan de manera híbrida a través de un navegador web.
                </p>
              </div>
              <div className="rounded-2xl border border-lavanda/40 bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-lavanda/30 hover:ring-1 hover:ring-lavanda/20 cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                    <FileSignature className="w-5 h-5 text-lavanda" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Firma digital</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Integración con Encode. Posibilita firmar digitalmente documentos en PDF de manera remota y descentralizada, desde cualquier dispositivo con acceso a Internet, alcanzando una operatividad eficiente desde un repositorio único, controlado, seguro y legal.
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
