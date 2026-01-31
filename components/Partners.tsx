import Image from "next/image";
import { Briefcase, Users, Globe, LayoutGrid } from "lucide-react";

const partnerCards = [
  {
    icon: Briefcase,
    title: "Bejerman ERP",
    description:
      "La solución para pymes que da sustento a la rentabilidad y el crecimiento.",
  },
  {
    icon: Users,
    title: "Bejerman RRHH",
    description:
      "La solución para planificar, desarrollar y controlar la gestión de talentos en las empresas.",
  },
  {
    icon: Globe,
    title: "Bejerman Web",
    description:
      "La solución online que las pequeñas empresas necesitan para su gestión comercial de manera simple y práctica.",
  },
  {
    icon: LayoutGrid,
    title: "Thomson Reuters ONVIO",
    description:
      "Plataforma integral de gestión web para estudios contables.",
  },
];

const Partners = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/assets/tr_hrz_logo_rgb_color.png"
              alt="Thomson Reuters"
              width={360}
              height={70}
              className="h-14 w-auto"
              priority
            />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Soluciones Thomson Reuters y Bejerman
            </h2>
          </div>
          <p className="text-muted-foreground text-lg mt-4">
            Herramientas especializadas para potenciar la gestión contable,
            laboral y comercial de tu empresa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {partnerCards.map((card) => (
            <div
              key={card.title}
              className="group bg-card rounded-2xl p-8 border border-border shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-lavanda/40"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <card.icon className="w-6 h-6 text-lavanda" />
                </div>
                <h3 className="text-xl font-semibold text-foreground transition-colors group-hover:text-lavanda">
                  {card.title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
