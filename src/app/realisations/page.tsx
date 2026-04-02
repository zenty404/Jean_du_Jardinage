import type { Metadata } from "next";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Réalisations | Jean du Jardinage",
  description:
    "Une anthologie de paysages sculptés, où l'architecture rencontre le vivant pour créer des sanctuaires de sérénité.",
};

const projects = [
  {
    title: "Jardin Zen",
    category: "Jardins Contemporains",
    location: "Bordeaux",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBR7Jz-P7-Q0FM8ClaoGo3d4k7a1Rsx_j7s-_qvsLfEgGrPr1-MpheZ5YgoxS-RdemvQ0rNBjABYArMv_GbVXFx1p6R0S_8br5Bq5FUQ4xdc6W5toTqwgilIMQr68fMl8UlpNXviDjrLvKWZxUvW6gcxHozhyCg9UQQbJjdTZIQGPSp5CMJzX8sH1xCKcfZhCOKHIhqRXqpKqaPYEDX6A_vL8_Tg_2KlQH7GCZGVmcbAY9G_ntP4KFcYcjmCemGOK4UrqPcxWIxrAOX",
  },
  {
    title: "Terrasse d'Azur",
    category: "Terrasses",
    location: "Nice",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCCUWNwOE9rEpdVdxv00TaQ5w_5LBrZ-_N3_MP5bhia4sj2otFfb_z72NdgH1OvM3QzZg-J2L4A9I8NOC0XC6GNEPKNRs8C64aVJ5Ko37tI7uHjRnOYrIEMrPwfnv0oJkzntUDSzcNlDcfa6DjxytLAS6MZL3oWM7UmVa1bj8otUM1CUsq6F0PfV6CrG_hKFPHVEL9lHmXufwnZCkL6pJUQ8306siT03Yq07w40OsRqS6FMZ4jPH7HtENXikC0suKLO-yQF93tG-ZEG",
  },
  {
    title: "Domaine des Chênes",
    category: "Entretien",
    location: "Dordogne",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB525XcOgC8njrTnMTO1YTxAxJA3b5et8bcS1D5OILj-f6d7n9tAZQig2CGtXNUEzOD9hZMDYFUrPUPTqYKz6B_lIUU2U2Sej9tJ9Yf-QPvBNXbFTh5vEo8SM2U2IQ0_MXDYlJxjwnG0WxVr8Yhd15d8YrRpUAEk5Cw-WJNLgfTQ20enqBHoJ721Pjk1yqu3Cw07zLp3hfiO0QNc-lPxoYpOS6ZOK64uu6g3OBgbV0cby3yf-4ve22w6thHRlFAfdpkU6xL0Mz5ogUX",
  },
  {
    title: "L'Évasion Sauvage",
    category: "Jardins Contemporains",
    location: "Provence",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAih4M-vTjcnuVA6geEBX6ZKsCVoFCCvfnbsW3cebU0t-yBGPuIg0peKIW-r7arch2VvkaXu8fmhwJgF8DR8NKEeh3HArl0PI339ZvEorJAq7OUcQJTCgikJDNAObfWWh91y6OlT8Zbi5--X8KMf1p8Ln7zmF2HEz_X5CI15yH1Kh90wpJ6Jr1-7JiyDTx6uelsUSwkhBMflqAgDFb6iYJUmuza5V0kghQ0CeYK5rbsCaUFsgRNIFSId4ZjoYGcqCyVPVv77RXp_xbf",
  },
  {
    title: "Sky Garden",
    category: "Terrasses",
    location: "Paris",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBLvgx-9mD_D1IXaSSEWIaFdbCn7TJzC6PNxn55tfA5e4ZUfWH4vshGrL28BQ2A12KMMpDGvFQ6M-URrenGmpSvfLVXKZSpJjPHbe9_nUIdAhaZY2alTh54nGpspmz0E2As5aXixD-_ruLw4RGzu5TPGfHHoY8Eej0eexY7Wo1-aczGEWb4JM7UDR1EJIznPdKtEsAJS3GlZCQ7LJf5JWPhhCf1tFWK7NSTnlPJ7L-x82enPxleVqXuDs8Hpzmjofnmfm6JO8qZuneB",
  },
  {
    title: "Le Vallon Suspendu",
    category: "Jardins Contemporains",
    location: "Annecy",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBX1FHdVL7C9IJXxUw4ZU6sK3LN4gpi-tW8c3lGXOMEE5mD-O9RmeaFdPGhowJYf8Iw67KdtkXEq2KNGz_Mfu_Vc8iuaX8armDfb9S0fs6RSRusLUHkoHbwRcUOU9WASlh4Ert1M7BhcqaUlCBVu719ifNsyjTCDaF3JFQwLNYoDkzGmcccDQFgoTBm0xeJy7JJvaZKR3oLiFNtZdYjnsGLVFFWty2YWcduR0mQykh536Vh8Qv2EHJ-wjejd1JB4X24VgFMr_KjORRt",
  },
];

export default function RealisationsPage() {
  return (
    <div className="pt-40 pb-20 px-8 max-w-screen-2xl mx-auto">
      {/* Hero Header */}
      <AnimateOnScroll variant="fade-up" as="header" className="mb-16 max-w-3xl">
        <h1 className="font-headline text-5xl md:text-7xl text-primary mb-6 leading-tight tracking-tight">
          Nos Réalisations
        </h1>
        <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed">
          Une anthologie de paysages sculptés, où l&apos;architecture rencontre
          le vivant pour créer des sanctuaires de sérénité.
        </p>
      </AnimateOnScroll>

      {/* Filters */}
      <AnimateOnScroll variant="fade-up" delay={200}>
        <div className="flex flex-wrap gap-4 mb-12">
          <button className="animate-press px-8 py-3 rounded-full bg-primary text-on-primary font-medium tracking-wide">
            Toutes les œuvres
          </button>
          <button className="animate-press px-8 py-3 rounded-full bg-surface-container-high text-on-surface-variant hover:bg-surface-variant transition-colors font-medium">
            Jardins Contemporains
          </button>
          <button className="animate-press px-8 py-3 rounded-full bg-surface-container-high text-on-surface-variant hover:bg-surface-variant transition-colors font-medium">
            Entretien
          </button>
          <button className="animate-press px-8 py-3 rounded-full bg-surface-container-high text-on-surface-variant hover:bg-surface-variant transition-colors font-medium">
            Terrasses
          </button>
        </div>
      </AnimateOnScroll>

      {/* Portfolio Grid */}
      <div className="masonry-grid">
        {projects.map((project, index) => (
          <AnimateOnScroll
            key={project.title}
            variant="fade-up"
            delay={index * 100}
            className="masonry-item"
          >
            <div className="group relative overflow-hidden rounded-xl bg-surface-container-low cursor-pointer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={project.title}
                className="w-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                src={project.image}
              />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 backdrop-blur-[2px]">
                <p className="text-secondary-fixed text-sm uppercase tracking-widest mb-1 font-bold">
                  {project.category}
                </p>
                <h3 className="text-white font-headline text-3xl">
                  {project.title}
                </h3>
                <div className="flex items-center text-white/90 mt-2">
                  <span className="material-symbols-outlined text-sm mr-1">
                    location_on
                  </span>
                  <span className="text-sm font-medium">{project.location}</span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>

      {/* Load More */}
      <AnimateOnScroll variant="fade-up" delay={400}>
        <div className="mt-16 flex justify-center">
          <button className="animate-press flex items-center space-x-2 text-primary border-b-2 border-primary/20 hover:border-primary transition-all pb-1 font-semibold group">
            <span>Découvrir plus de projets</span>
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </button>
        </div>
      </AnimateOnScroll>
    </div>
  );
}
