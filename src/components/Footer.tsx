import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function Footer() {
  return (
    <AnimateOnScroll variant="fade-up" as="footer" className="w-full rounded-t-[2rem] mt-20 bg-emerald-900">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-16 max-w-screen-2xl mx-auto">
        {/* Brand */}
        <div className="col-span-1">
          <div className="font-serif text-xl text-stone-100 mb-6">
            Jean du Jardinage
          </div>
          <p className="text-stone-300/80 font-sans text-sm tracking-wide leading-relaxed">
            Créateurs d&apos;espaces vivants, architectes de votre bien-être
            extérieur.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h5 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">
            Navigation
          </h5>
          <ul className="space-y-4">
            <li>
              <Link
                href="/"
                className="text-stone-300/80 hover:text-white transition-colors font-sans text-sm tracking-wide"
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-stone-300/80 hover:text-white transition-colors font-sans text-sm tracking-wide"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/realisations"
                className="text-stone-300/80 hover:text-white transition-colors font-sans text-sm tracking-wide"
              >
                Réalisations
              </Link>
            </li>
            <li>
              <Link
                href="/a-propos"
                className="text-stone-300/80 hover:text-white transition-colors font-sans text-sm tracking-wide"
              >
                À Propos
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h5 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">
            Informations
          </h5>
          <ul className="space-y-4">
            <li>
              <a
                href="#"
                className="text-stone-300/80 hover:text-white transition-colors font-sans text-sm tracking-wide"
              >
                Politique de confidentialité
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-stone-300/80 hover:text-white transition-colors font-sans text-sm tracking-wide"
              >
                Conditions d&apos;utilisation
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-stone-300/80 hover:text-white transition-colors font-sans text-sm tracking-wide"
              >
                Rapport durabilité
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h5 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">
            Contact
          </h5>
          <p className="text-stone-300/80 font-sans text-sm mb-4 tracking-wide">
            12 Rue des Jardins, Paris, France
          </p>
          <p className="text-stone-300/80 font-sans text-sm tracking-wide">
            contact@email.com
          </p>
          <div className="flex gap-4 mt-4">
            <span className="material-symbols-outlined text-stone-300 hover:text-white cursor-pointer transition-colors">
              camera_alt
            </span>
            <span className="material-symbols-outlined text-stone-300 hover:text-white cursor-pointer transition-colors">
              mail
            </span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-12 py-8 max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-stone-300/80 font-sans text-sm tracking-wide">
          © 2024 Jean du Jardinage. Cultivons la sérénité.
        </p>
        <div className="flex gap-6">
          <a
            href="#"
            className="text-stone-300/80 hover:text-white transition-all text-sm"
          >
            Instagram
          </a>
          <a
            href="#"
            className="text-stone-300/80 hover:text-white transition-all text-sm"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="text-stone-300/80 hover:text-white transition-all text-sm"
          >
            Pinterest
          </a>
        </div>
      </div>
    </AnimateOnScroll>
  );
}
