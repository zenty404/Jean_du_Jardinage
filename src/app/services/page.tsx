import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Services | Jean du Jardinage",
  description:
    "Découvrez nos services de conception paysagère, création de terrasses, entretien de jardins et aménagement de bassins.",
};

export default function ServicesPage() {
  return (
    <div className="pt-40 pb-20 overflow-x-hidden">
      {/* Header Section */}
      <header className="max-w-screen-2xl mx-auto px-8 mb-24">
        <AnimateOnScroll variant="fade-up" className="max-w-3xl">
          <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary tracking-tight mb-8">
            L&apos;Art de Cultiver <br />
            <span className="italic font-normal text-secondary">
              la Sérénité.
            </span>
          </h1>
          <p className="font-body text-xl text-on-surface-variant leading-relaxed">
            Nous concevons des paysages qui transcendent la simple esthétique
            pour devenir des sanctuaires de vie. Chaque projet est une
            collaboration entre la nature et votre vision.
          </p>
        </AnimateOnScroll>
      </header>

      {/* Service 1: Conception Paysagère */}
      <section className="mb-32">
        <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <AnimateOnScroll variant="fade-right" className="md:col-span-7">
            <div className="aspect-[4/5] md:aspect-[16/10] overflow-hidden rounded-xl bg-surface-container shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Landscape Design Sketch"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRdLPdvqEKUMJPSzFGwtQ2IXURQqdgMelCrpLAy00gQlyGLDOSJt7s8CYMgViAkenGra-C0lpVGca3sKJAbX-21yQP25dPxUyboaEx6omIeWFIX1wUOIJFAWt06ndG0F4yIbK5svtwXaQwIsPtYwnA7i5x1v1y68ydElHo5cDjByX-p-BVIRUnHk6w_j9cYLKcCNt_Qyi95fVTIYyKkTLXZ35eKAvxJbpjS7wcgOvFACGrU4wEh7q7bO2fwvl4nVe2eI7wXc74ylX5"
              />
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-left" delay={200} className="md:col-span-5 md:pl-12">
            <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">
              Architecture &amp; Plan
            </span>
            <h2 className="font-headline text-4xl font-bold text-primary mb-6">
              Conception Paysagère
            </h2>
            <p className="font-body text-lg text-on-surface-variant mb-8 leading-relaxed">
              L&apos;étape primordiale de tout projet d&apos;exception. Nous
              traduisons vos aspirations en plans détaillés, intégrant les
              cycles saisonniers, la topographie et l&apos;écosystème local pour
              une harmonie durable.
            </p>
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3">
                <span
                  className="material-symbols-outlined text-primary-fixed-dim"
                  style={{
                    fontVariationSettings: "'FILL' 1",
                  }}
                >
                  architecture
                </span>
                <span className="font-body font-semibold">
                  Études préliminaires &amp; Esquisses
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className="material-symbols-outlined text-primary-fixed-dim"
                  style={{
                    fontVariationSettings: "'FILL' 1",
                  }}
                >
                  eco
                </span>
                <span className="font-body font-semibold">
                  Sélection botanique experte
                </span>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Service 2: Création de Terrasses */}
      <section className="bg-surface-container-low py-24 mb-32">
        <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <AnimateOnScroll variant="fade-right" delay={200} className="md:col-span-5 order-2 md:order-1 md:pr-12">
            <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">
              Espaces de Vie
            </span>
            <h2 className="font-headline text-4xl font-bold text-primary mb-6">
              Création de Terrasses
            </h2>
            <p className="font-body text-lg text-on-surface-variant mb-8 leading-relaxed">
              Prolongez votre intérieur vers l&apos;extérieur. Nous utilisons des
              matériaux nobles — bois exotiques certifiés, pierre de taille,
              grès cérame — pour créer des espaces de réception chaleureux et
              sophistiqués.
            </p>
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3">
                <span
                  className="material-symbols-outlined text-primary-fixed-dim"
                  style={{
                    fontVariationSettings: "'FILL' 1",
                  }}
                >
                  deck
                </span>
                <span className="font-body font-semibold">
                  Menuiserie extérieure de précision
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className="material-symbols-outlined text-primary-fixed-dim"
                  style={{
                    fontVariationSettings: "'FILL' 1",
                  }}
                >
                  foundation
                </span>
                <span className="font-body font-semibold">
                  Dallage en pierre naturelle
                </span>
              </div>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-left" className="md:col-span-7 order-1 md:order-2">
            <div className="aspect-[4/5] md:aspect-[16/10] overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Modern Wooden Terrace"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOL9sOP-Xy1REkoB7w3wlsuznK61EDybxGHsJr6S28nGJXzAIQHCph_6ZsIxzCDYIlpyc4ysMQoVTDM4WWNwNFvxL7pvSokf6JgDg05ZS0Jvjiq_VdZx1qFlxtvpyUdpfEkdborxh9Nuzo6V68h6njoTsB6yKUtpxBYnLfw5TnN6kQQBG3WZVvQt_4RRk0g0HHAJjlQt3bs1t22o57pSIQCjS-ZShKHvIKcxxhEHBrmG8JLdc7-GSMenscgcEnQfqMMAPrjxuG2YuM"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Service 3: Entretien de Jardins */}
      <section className="mb-32">
        <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <AnimateOnScroll variant="fade-right" className="md:col-span-7">
            <div className="aspect-[4/5] md:aspect-[16/10] overflow-hidden rounded-xl bg-surface-container shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Garden Maintenance"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPDBkIb1BvjnCFf6lDlm2nxA9VjsqchOmVYkAt93j2By57F3_gkihfq0ngZXs3Xww66-KWslK5ej-ELR32cotWNnatqzAH4VAmosqGcYzVlzCiihrfnIiPaAAo4LIcys8UgIr2sk-Ubja2l_rSyOe-z8FYH3dGR7YNvxqDOf9aJ9Efv71YrWnLZI6-zU76mVaTKd6QZYgMEZ9Ri-Yq3TCMeWi-Eb4ZQIFybF27Geo2S5rRGksBpImx6F8VjTY52m3IMXgla32BxpGB"
              />
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-left" delay={200} className="md:col-span-5 md:pl-12">
            <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">
              Pérennité &amp; Soin
            </span>
            <h2 className="font-headline text-4xl font-bold text-primary mb-6">
              Entretien de Jardins
            </h2>
            <p className="font-body text-lg text-on-surface-variant mb-8 leading-relaxed">
              Un jardin est un organisme vivant en constante évolution. Nos
              contrats d&apos;entretien sur-mesure garantissent la vitalité de
              votre patrimoine végétal tout au long des saisons.
            </p>
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3">
                <span
                  className="material-symbols-outlined text-primary-fixed-dim"
                  style={{
                    fontVariationSettings: "'FILL' 1",
                  }}
                >
                  content_cut
                </span>
                <span className="font-body font-semibold">
                  Taille raisonnée &amp; Élagage
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className="material-symbols-outlined text-primary-fixed-dim"
                  style={{
                    fontVariationSettings: "'FILL' 1",
                  }}
                >
                  water_drop
                </span>
                <span className="font-body font-semibold">
                  Gestion de l&apos;arrosage automatique
                </span>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Service 4: Aménagement de Bassins */}
      <section className="bg-surface-container-high py-24 mb-32 rounded-[3rem] mx-4">
        <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <AnimateOnScroll variant="fade-right" delay={200} className="md:col-span-5 order-2 md:order-1 md:pr-12">
            <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">
              Éléments Aquatiques
            </span>
            <h2 className="font-headline text-4xl font-bold text-primary mb-6">
              Aménagement de Bassins
            </h2>
            <p className="font-body text-lg text-on-surface-variant mb-8 leading-relaxed">
              Apportez une dimension sensorielle à votre jardin. Du murmure
              d&apos;une fontaine contemporaine à la quiétude d&apos;un bassin
              de baignade biologique, nous maîtrisons l&apos;art de l&apos;eau.
            </p>
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3">
                <span
                  className="material-symbols-outlined text-primary-fixed-dim"
                  style={{
                    fontVariationSettings: "'FILL' 1",
                  }}
                >
                  pool
                </span>
                <span className="font-body font-semibold">
                  Piscines naturelles &amp; Bassins
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className="material-symbols-outlined text-primary-fixed-dim"
                  style={{
                    fontVariationSettings: "'FILL' 1",
                  }}
                >
                  waves
                </span>
                <span className="font-body font-semibold">
                  Filtration écologique &amp; UV
                </span>
              </div>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-left" className="md:col-span-7 order-1 md:order-2">
            <div className="aspect-[4/5] md:aspect-[16/10] overflow-hidden rounded-xl bg-surface-container-lowest shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Natural Swimming Pond"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnXHxWbob6WOEiIiCk0DY9XbctXfU4ToxR-kNpoug2YFREWeZQpn2r_EteC6OxuTRPw8EXmtqVhVVoWfcY7wz6SRSNw63vI7S7d4q2VfgA-rbUPQP9hu40Sul-e-peBnXOkleJjkLe8g5umuQrDkdRHYJGsRWmrP_Fb1Ym_K9Q8q5dttlfUugwnnqIY2_urxUjB87Vs2N47yGeW3yWPqcG2g08A7wwGp_jE65yEg6wbGdd-Gqz2-hUen1MIM0fvvjWi8PiULMBlVOm"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Final CTA Section */}
      <AnimateOnScroll variant="scale-in" className="max-w-screen-xl mx-auto px-8 py-20 text-center">
        <div className="bg-primary p-16 rounded-[4rem] text-on-primary shadow-xl">
          <h2 className="font-headline text-4xl md:text-6xl font-bold mb-8">
            Prêt à transformer <br />
            votre paysage ?
          </h2>
          <p className="font-body text-xl text-on-primary-container max-w-2xl mx-auto mb-12 opacity-90">
            Chaque projet commence par une conversation. Contactez-nous pour une
            première expertise gratuite de votre terrain.
          </p>
          <Link
            href="/contact"
            className="animate-press bg-secondary text-white px-12 py-5 rounded-full text-lg font-bold hover:scale-105 transition-transform duration-300 inline-block"
          >
            Demander un devis
          </Link>
        </div>
      </AnimateOnScroll>
    </div>
  );
}
