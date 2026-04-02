import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "À Propos | Jean du Jardinage — Notre Histoire",
  description:
    "Découvrez notre passion pour le jardinage, nos valeurs d'éco-responsabilité, de qualité artisanale et d'écoute client.",
};

export default function AProposPage() {
  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative px-8 py-20 lg:py-32 max-w-screen-2xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <AnimateOnScroll variant="fade-right" className="lg:col-span-7 z-10">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-primary mb-8">
              L&apos;Art de Cultiver <br />
              <span className="italic text-secondary">la Sérénité.</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed mb-10">
              Chaque jardin est une toile vivante. À la confluence de
              l&apos;artisanat traditionnel et de la vision architecturale, nous
              sculptons des paysages qui respirent et évoluent avec le temps.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="inline-flex items-center gap-2 bg-primary-fixed-dim text-on-primary-fixed-variant px-4 py-2 rounded-full text-sm font-semibold">
                <span className="material-symbols-outlined text-sm">
                  nature_people
                </span>
                Artisanat Local
              </span>
              <span className="inline-flex items-center gap-2 bg-secondary-fixed text-on-secondary-fixed px-4 py-2 rounded-full text-sm font-semibold">
                <span className="material-symbols-outlined text-sm">eco</span>
                Biodiversité
              </span>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-left" delay={200} className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Artisan landscape architect at work"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdNtFkpIFKanJWsbVB3e2CH_0CBr2EN_BCqlGupVi2Hc3lq8YOuS08TzqiTJ7sawa4cb8qKdjzTdoTyYJz1eLoHuJIMCUrzgd7uhmY7VBuzrKuo6Pf7QPRd2nfv79PU4H9v707_W8nIlZAmURrA351Rzg8c_jkMX6vUs3ARUGoosndHBsoKR7tT0p6WZJAt8EpihhVNizi1LxgTyTqxnHvmH4wECoZDMQX_9RIxxhjMQxcPrT6vXHs-qapT7P50_ayBaZ6GK3nikEh"
              />
            </div>
            {/* Absolute element for texture */}
            <div className="absolute -bottom-6 -left-6 bg-surface-container-highest p-6 rounded-xl hidden md:block">
              <p className="font-headline text-2xl italic text-primary">
                &ldquo;La main façonne, la terre répond.&rdquo;
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="bg-surface-container-low py-24 rounded-t-[3rem]">
        <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <AnimateOnScroll variant="scale-in" className="order-2 md:order-1">
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Detail of plants"
                className="rounded-full aspect-square object-cover w-3/4 mx-auto border-[12px] border-surface-container-lowest"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfWSrXhNJM6qI-ycFEMFBm55bUkGRXz8a7nxDzcTOnWLycMXqvCJuCdiGvNyUyf8Nu8viyJD3i_PUZMGD12YHkPaHeBKGu6332QcEk18FM-bg_TNSxP8nVC6gMt0Z425jl_1mw7xEE4CiepvUrZ09Kz-p0HsUtigipoO8PQFkeYgbtzN2l2NU8B-xNbk_XnCg0XwhELj1UcQl2FJvNbnTpYPB0yu9JN6m-yrSahczAAn2bXFrIazTWBo3DKrDRMEv8aRfa0BQwj2hZ"
              />
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-left" delay={150} className="order-1 md:order-2">
            <h2 className="text-4xl font-bold mb-8 text-primary font-headline">
              Une Passion Enracinée
            </h2>
            <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed font-body">
              <p>
                Depuis plus de quinze ans, Lumière Sylvestre s&apos;attache à
                redéfinir le lien entre l&apos;habitat humain et la nature
                sauvage. Notre approche ne se limite pas à la plantation ; elle
                est un acte de préservation et de dialogue.
              </p>
              <p>
                Nous croyons que chaque pierre, chaque essence végétale et
                chaque courbe du terrain a une histoire à raconter. Notre rôle
                est d&apos;écouter cette narration pour créer des espaces qui
                favorisent la biodiversité tout en offrant un refuge à
                l&apos;esprit.
              </p>
              <p>
                L&apos;engagement pour une gestion durable de l&apos;eau et le
                choix de matériaux nobles et locaux sont les piliers de notre
                signature architecturale.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-8 max-w-screen-2xl mx-auto">
        <AnimateOnScroll variant="fade-up" className="text-center mb-20">
          <h2 className="text-5xl font-headline mb-4">Nos Valeurs</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Eco-responsabilité */}
          <AnimateOnScroll variant="fade-up" delay={0}>
            <div className="bg-surface-container-lowest p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow group h-full">
              <div className="w-16 h-16 bg-primary-fixed-dim rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">
                  filter_vintage
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary font-headline">
                Eco-responsabilité
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Intégration de cycles vertueux : compostage, récupération des eaux
                de pluie et respect des cycles naturels pour un jardin résilient
                et autonome.
              </p>
            </div>
          </AnimateOnScroll>
          {/* Qualité */}
          <AnimateOnScroll variant="fade-up" delay={150}>
            <div className="bg-primary p-10 rounded-xl shadow-sm group h-full">
              <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-primary-fixed-dim text-3xl">
                  diamond
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-on-primary font-headline">
                Qualité
              </h3>
              <p className="text-primary-fixed-dim leading-relaxed">
                Sélection rigoureuse des pépiniéristes et matériaux. Chaque projet
                est une pièce unique, finie avec une précision d&apos;orfèvre
                paysager.
              </p>
            </div>
          </AnimateOnScroll>
          {/* Écoute */}
          <AnimateOnScroll variant="fade-up" delay={300}>
            <div className="bg-surface-container-lowest p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow group h-full">
              <div className="w-16 h-16 bg-secondary-container rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-secondary text-3xl">
                  psychology
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary font-headline">
                Écoute
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Votre vision est notre point de départ. Nous traduisons vos
                émotions en volumes et en textures pour créer le jardin qui vous
                ressemble.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA Quote */}
      <AnimateOnScroll variant="blur-in" as="section" className="mb-20 px-8">
        <div className="max-w-4xl mx-auto hero-gradient p-16 rounded-[2.5rem] text-center text-white relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full animate-float"></div>
          <h2 className="text-3xl md:text-4xl font-headline italic mb-10 leading-relaxed">
            &ldquo;Créer un jardin, c&apos;est croire en demain.&rdquo;
          </h2>
          <Link
            href="/contact"
            className="animate-press bg-secondary hover:bg-secondary-container text-white hover:text-on-secondary-container px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 inline-block"
          >
            Commencer votre projet
          </Link>
        </div>
      </AnimateOnScroll>
    </div>
  );
}
