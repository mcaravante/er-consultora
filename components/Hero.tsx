"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-navy-light/30 via-transparent to-transparent" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-6 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              <Shield className="w-4 h-4 text-gold" />
              <span className="text-primary-foreground/90 text-sm font-medium">+15 años de experiencia</span>
            </div>
            
            <h1 
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up opacity-0"
              style={{ animationDelay: "0.2s" }}
            >
              Soluciones Contables{" "}
              <span className="text-gradient">Profesionales</span>{" "}
              para tu Empresa
            </h1>
            
            <p 
              className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up opacity-0"
              style={{ animationDelay: "0.3s" }}
            >
              Optimizamos tu gestión fiscal y contable en Argentina. Asesoramiento personalizado para PyMEs, monotributistas y empresas.
            </p>

            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up opacity-0"
              style={{ animationDelay: "0.4s" }}
            >
              <Button variant="hero" size="xl" asChild>
                <a href="#contacto">
                  Agendar Consulta
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#servicios">Ver Servicios</a>
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div 
              className="col-span-2 p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 animate-fade-up opacity-0"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gold/20 flex items-center justify-center">
                  <TrendingUp className="w-7 h-7 text-gold" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary-foreground">+500</p>
                  <p className="text-primary-foreground/70">Clientes Satisfechos</p>
                </div>
              </div>
            </div>
            
            <div 
              className="p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 animate-fade-up opacity-0"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary-foreground">15+</p>
                  <p className="text-sm text-primary-foreground/70">Años</p>
                </div>
              </div>
            </div>
            
            <div 
              className="p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 animate-fade-up opacity-0"
              style={{ animationDelay: "0.7s" }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary-foreground">100%</p>
                  <p className="text-sm text-primary-foreground/70">Confianza</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
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

