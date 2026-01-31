"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#nosotros", label: "Nosotros" },
    { href: "#contacto", label: "Contacto" },
  ];

  const serviceOptions = [
    { href: "/servicios/bejerman-erp", label: "Bejerman ERP" },
    { href: "/servicios/bejerman-rrhh", label: "Bejerman Sueldos" },
    { href: "/servicios/bejerman-web", label: "Bejerman Web" },
    { href: "/servicios/onvio", label: "Thomson Reuters ONVIO" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-hero flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-xl">C</span>
            </div>
            <div>
              <span className="font-display font-semibold text-xl text-foreground">Contadores</span>
              <span className="text-foreground font-display font-semibold text-xl">AR</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="relative group">
              <button className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                Servicios
              </button>
              <div className="absolute left-0 top-full mt-2 w-56 rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
                {serviceOptions.map((option) => (
                  <a
                    key={option.label}
                    href={option.href}
                    className="block rounded-sm px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    {option.label}
                  </a>
                ))}
              </div>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+5491112345678" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+54 9 11 1234-5678</span>
            </a>
            <Button variant="hero" size="lg" asChild>
              <a href="#contacto">Solicitar Asesoramiento</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-wide text-muted-foreground">
                  Servicios
                </span>
                <div className="flex flex-col gap-2">
                  {serviceOptions.map((option) => (
                    <a
                      key={option.label}
                      href={option.href}
                      className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {option.label}
                    </a>
                  ))}
                </div>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="hero" className="mt-2" asChild>
                <a href="#contacto">Solicitar Asesoramiento</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

