"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-navy-light/30 via-transparent to-transparent" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-lavanda/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-lavanda/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Content */}
          <div className="text-center">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-6 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              <Shield className="w-4 h-4 text-lavanda" />
              <span className="text-primary-foreground/90 text-sm font-medium">Partner Bejerman - Thomson Reuters</span>
            </div>
            
            <h1 
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up opacity-0"
              style={{ animationDelay: "0.2s" }}
            >
              Especialistas en{" "}
              <span className="text-gradient">Liquidación de Sueldos</span>{" "}
              y Gestión Laboral
            </h1>
            
            <p 
              className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-3xl mx-auto animate-fade-up opacity-0"
              style={{ animationDelay: "0.3s" }}
            >
              Liquidación de sueldos para todos los convenios colectivos. Servicio profesional, preciso y alineado a normativa vigente. Orientado a PyMEs y empresas que buscan externalizar payroll con confianza.
            </p>

            <div 
              className="flex flex-col items-center gap-6 animate-fade-up opacity-0"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex flex-col items-center justify-center gap-3">
                <span className="text-primary-foreground/80 text-lg font-semibold tracking-wide">
                  Agente Autorizado
                </span>
                <div className="bg-white/95 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-sm border border-white/40">
                  <Image
                    src="/assets/tr_hrz_logo_rgb_color.png"
                    alt="Thomson Reuters - Partner Bejerman"
                    width={520}
                    height={100}
                    className="h-20 w-auto"
                    priority
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" asChild>
                  <a href="#contacto">
                    Solicitar Asesoramiento
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <a href="#servicios">Conocer Servicios</a>
                </Button>
              </div>
            </div>
          </div>

          {/* Stats Cards removed per request */}
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 -mb-px">
        <svg
          className="block"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M0 120L48 110C96 100 192 80 288 75C384 70 480 80 576 85C672 90 768 90 864 85C960 80 1056 70 1152 70C1248 70 1344 80 1392 85L1440 90V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z" 
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;

