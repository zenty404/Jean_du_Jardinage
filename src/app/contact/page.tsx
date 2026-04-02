import type { Metadata } from "next";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Contact | Jean du Jardinage",
  description:
    "Contactez Jean du Jardinage pour démarrer votre projet de jardinage paysager. Formulaire de contact, adresse et informations.",
};

export default function ContactPage() {
  return (
    <div className="pt-44 min-h-screen flex flex-col items-center">
      <div className="max-w-screen-2xl w-full px-8 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-24">
        {/* Left Side: Editorial Contact Info */}
        <div className="space-y-12">
          <AnimateOnScroll variant="fade-right" as="header">
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-primary leading-tight font-headline">
              Commencez votre <br />
              <span className="italic font-normal">Transformation</span>
            </h1>
            <p className="mt-6 text-lg text-on-surface-variant max-w-md">
              Chaque chef-d&apos;œuvre commence par une conversation.
              Laissez-nous vous aider à façonner le paysage de vos rêves.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-up" delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-outline font-bold">
                  E-mail
                </span>
                <p className="text-xl font-medium">
                  contact@email.com
                </p>
              </div>
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-outline font-bold">
                  Téléphone
                </span>
                <p className="text-xl font-medium">+33 1 23 45 67 89</p>
              </div>
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-outline font-bold">
                  Atelier
                </span>
                <p className="text-xl font-medium leading-relaxed">
                  12 Rue des Jardins,
                  <br />
                  75001 Paris, France
                </p>
              </div>
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-outline font-bold">
                  Suivez-nous
                </span>
                <div className="flex gap-4 pt-1">
                  <a
                    className="hover:text-secondary transition-colors"
                    href="#"
                  >
                    <span className="material-symbols-outlined">camera</span>
                  </a>
                  <a
                    className="hover:text-secondary transition-colors"
                    href="#"
                  >
                    <span className="material-symbols-outlined">park</span>
                  </a>
                  <a
                    className="hover:text-secondary transition-colors"
                    href="#"
                  >
                    <span className="material-symbols-outlined">
                      architecture
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Map Container */}
          <AnimateOnScroll variant="fade-up" delay={350}>
            <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-full object-cover grayscale opacity-80 contrast-75"
                alt="Carte de localisation de l'atelier à Paris"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuABFM9Nz0U5G8NFyqc9HEnUe-EOJnOxKZjxrg1H-k3gwkPTgD-xQkMkMeIQUDGN03GGlD1SX_5ZpisCqY-h1eMZLwTNWfvKGgMxSBHjxaoEk1_omuM2I_JAdtVLdQEjBuNQVanxsWwEGhI5Gh-La6tXCzarXFpzG8npCE7bH26VFqUWrroei7l04CCQlCeAchzjKQcnFThD3SDRs2PBDkmSVOZLtApMUPNzMpBOe3xn9Sro45qce2rLG8OqjMxCxnUjZ3Yy9a12QB9y"
              />
              <div className="absolute inset-0 bg-primary/5"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-on-secondary shadow-lg animate-float">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Right Side: Contact Form */}
        <AnimateOnScroll variant="fade-left" delay={300}>
          <div className="bg-surface-container-low p-8 md:p-12 rounded-[2rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-fixed-dim/20 rounded-full blur-3xl -mr-16 -mt-16 animate-glow"></div>
            <h2 className="text-3xl font-bold text-primary mb-8 font-headline">
              Formulaire de contact
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold ml-4 text-on-surface-variant">
                    Nom complet
                  </label>
                  <input
                    className="w-full bg-surface-container-high border-none rounded-full px-6 py-4 focus:ring-2 focus:ring-primary/20 placeholder:text-outline-variant text-on-surface transition-shadow duration-300 focus:shadow-lg focus:shadow-primary/5"
                    placeholder="Jean Dupont"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold ml-4 text-on-surface-variant">
                    Adresse e-mail
                  </label>
                  <input
                    className="w-full bg-surface-container-high border-none rounded-full px-6 py-4 focus:ring-2 focus:ring-primary/20 placeholder:text-outline-variant text-on-surface transition-shadow duration-300 focus:shadow-lg focus:shadow-primary/5"
                    placeholder="jean@exemple.com"
                    type="email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold ml-4 text-on-surface-variant">
                  Service souhaité
                </label>
                <select className="w-full bg-surface-container-high border-none rounded-full px-6 py-4 focus:ring-2 focus:ring-primary/20 text-on-surface appearance-none transition-shadow duration-300 focus:shadow-lg focus:shadow-primary/5">
                  <option>Conception paysagère</option>
                  <option>Création de terrasses</option>
                  <option>Entretien de jardins</option>
                  <option>Aménagement de bassins</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold ml-4 text-on-surface-variant">
                  Votre projet
                </label>
                <textarea
                  className="w-full bg-surface-container-high border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary/20 placeholder:text-outline-variant text-on-surface transition-shadow duration-300 focus:shadow-lg focus:shadow-primary/5"
                  placeholder="Décrivez votre espace et l'ambiance souhaitée..."
                  rows={5}
                ></textarea>
              </div>
              <div className="pt-4">
                <button
                  className="animate-press w-full bg-primary text-on-primary py-5 rounded-full font-bold text-lg hover:bg-primary-container transition-all flex items-center justify-center gap-2 group shadow-xl shadow-primary/10"
                  type="submit"
                >
                  Envoyer la demande
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
                <p className="text-center text-xs text-outline mt-6 font-medium">
                  Nous répondons généralement sous 24 à 48 heures ouvrées.
                </p>
              </div>
            </form>
          </div>
        </AnimateOnScroll>
      </div>

      {/* Secondary Section: Values */}
      <AnimateOnScroll variant="fade-up" as="section" className="w-full bg-surface-container py-24 px-8 md:px-12">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="max-w-xl">
            <h3 className="text-4xl font-bold text-primary mb-6 font-headline">
              Un engagement au rythme de la nature.
            </h3>
            <p className="text-lg text-on-surface-variant">
              Nous croyons qu&apos;un jardin bien conçu est un héritage vivant.
              Notre pratique privilégie les essences locales, la beauté résistante
              à la sécheresse et l&apos;intégration harmonieuse de l&apos;habitat
              humain et de la flore sauvage.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="bg-secondary-fixed text-on-secondary-fixed px-8 py-4 rounded-full font-bold flex items-center gap-2">
              <span className="material-symbols-outlined">eco</span>{" "}
              Durabilité avant tout
            </div>
            <div className="bg-primary-fixed-dim text-on-primary-fixed-variant px-8 py-4 rounded-full font-bold flex items-center gap-2">
              <span className="material-symbols-outlined">architecture</span>{" "}
              Artisanat local
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
}
