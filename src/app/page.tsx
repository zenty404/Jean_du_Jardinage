import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[921px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Garden Design"
            className="w-full h-full object-cover"
            src="/hero.png"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/40 to-transparent backdrop-brightness-[0.6]"></div>
        </div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-8 w-full">
          <div className="max-w-3xl bg-primary/30 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-14 shadow-2xl">
            <h1
              className="animate-hero font-headline text-5xl md:text-7xl text-white leading-tight tracking-tight mb-6 drop-shadow-lg"
              style={{ "--hero-delay": "200ms" } as React.CSSProperties}
            >
              L&apos;art de sculpter <br />
              <span className="italic">le vivant.</span>
            </h1>
            <p
              className="animate-hero text-white/95 text-lg md:text-xl max-w-xl mb-10 font-light leading-relaxed drop-shadow-sm"
              style={{ "--hero-delay": "500ms" } as React.CSSProperties}
            >
              Architecte paysagiste passionné par l&apos;harmonie entre
              structure minérale et élégance végétale. Nous créons des
              sanctuaires extérieurs pérennes.
            </p>
            <div
              className="animate-hero flex flex-wrap gap-4"
              style={{ "--hero-delay": "800ms" } as React.CSSProperties}
            >
              <Link
                href="/contact"
                className="animate-press hero-gradient text-white px-8 py-4 rounded-xl text-lg font-medium shadow-xl hover:scale-[1.02] transition-transform"
              >
                Réserver une consultation
              </Link>
              <Link
                href="/realisations"
                className="animate-press bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl text-lg font-medium hover:bg-white/30 transition-all shadow-lg"
              >
                Découvrir nos projets
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div data-animate="fade-up" className="mb-20">
            <span className="text-secondary font-bold tracking-widest uppercase text-xs">
              Expertises
            </span>
            <h2 className="font-headline text-4xl md:text-5xl text-primary mt-4">
              Nos Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div data-animate="fade-up">
              <div className="group p-10 bg-surface-container-low rounded-xl transition-all duration-500 hover:bg-surface-container-highest h-full">
                <div className="w-14 h-14 bg-primary text-on-primary rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">
                    architecture
                  </span>
                </div>
                <h3 className="font-headline text-2xl mb-4 text-primary">
                  Conception
                </h3>
                <p className="text-on-surface-variant leading-relaxed mb-8">
                  Ébauches, plans techniques et modélisation 3D pour visualiser
                  votre futur jardin avant sa réalisation. Une approche
                  architecturale précise.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center text-primary font-bold group-hover:gap-4 transition-all gap-2"
                >
                  En savoir plus{" "}
                  <span className="material-symbols-outlined">
                    arrow_right_alt
                  </span>
                </Link>
              </div>
            </div>
            {/* Service Card 2 */}
            <div data-animate="fade-up" style={{ "--animate-delay": "150ms" } as React.CSSProperties}>
              <div className="group p-10 bg-surface-container-low rounded-xl transition-all duration-500 hover:bg-surface-container-highest h-full">
                <div className="w-14 h-14 bg-primary text-on-primary rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">
                    handyman
                  </span>
                </div>
                <h3 className="font-headline text-2xl mb-4 text-primary">
                  Aménagement
                </h3>
                <p className="text-on-surface-variant leading-relaxed mb-8">
                  Maçonnerie paysagère, terrasses, bassins et plantations. Nous
                  donnons vie aux plans avec une rigueur artisanale
                  d&apos;exception.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center text-primary font-bold group-hover:gap-4 transition-all gap-2"
                >
                  En savoir plus{" "}
                  <span className="material-symbols-outlined">
                    arrow_right_alt
                  </span>
                </Link>
              </div>
            </div>
            {/* Service Card 3 */}
            <div data-animate="fade-up" style={{ "--animate-delay": "300ms" } as React.CSSProperties}>
              <div className="group p-10 bg-surface-container-low rounded-xl transition-all duration-500 hover:bg-surface-container-highest h-full">
                <div className="w-14 h-14 bg-primary text-on-primary rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">
                    park
                  </span>
                </div>
                <h3 className="font-headline text-2xl mb-4 text-primary">
                  Entretien
                </h3>
                <p className="text-on-surface-variant leading-relaxed mb-8">
                  Taille raisonnée, soin des sols et suivi saisonnier. Nous
                  préservons la beauté et la santé de votre paysage au fil des
                  années.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center text-primary font-bold group-hover:gap-4 transition-all gap-2"
                >
                  En savoir plus{" "}
                  <span className="material-symbols-outlined">
                    arrow_right_alt
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-32 bg-surface-container">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div data-animate="fade-up">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <span className="text-secondary font-bold tracking-widest uppercase text-xs">
                  Portfolio
                </span>
                <h2 className="font-headline text-4xl md:text-5xl text-primary mt-4 leading-tight">
                  Réalisations récentes
                </h2>
                <p className="text-on-surface-variant mt-6 text-lg">
                  Découvrez comment nous transformons les espaces extérieurs en
                  havres de paix sur mesure.
                </p>
              </div>
              <Link
                href="/realisations"
                className="animate-press bg-primary text-on-primary px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                Voir tout le portfolio
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            <div data-animate="scale-in" className="md:col-span-8">
              <div className="relative group overflow-hidden rounded-xl h-[500px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Villa Garden"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDID1Q_NzIif6OOd_59JehaQB0glok_oPo9j_VivnoI2OXhGoO4b-mFlXFGS1Jj-trdibiWTVfYu6mvOy8oedjzEqTtUEBG7yprLBKno87z3SFNIlBF_JRZHD4Vm7qpE-3vaD8nqx0aBU5h4nTq81DgG9aeGRqLRi4udim6rlzJEUB2DNBXcZMymlLkGzYKuzkVcUVpGF_OwxvOjkDw9UpLbTIp6DDY_vtoBnTHW0HzpNL3r4QCQRezy8bDOrTXbyMjo2Abg0KlEvtf"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-secondary-fixed text-sm font-bold uppercase tracking-widest mb-2">
                    Conception &amp; Aménagement
                  </span>
                  <h4 className="text-white font-headline text-3xl">
                    Le Domaine d&apos;Émeraude
                  </h4>
                </div>
              </div>
            </div>
            <div data-animate="scale-in" style={{ "--animate-delay": "150ms" } as React.CSSProperties} className="md:col-span-4">
              <div className="relative group overflow-hidden rounded-xl h-[500px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Patio Design"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgp-EghR8wcdM6WJdq4kdVMnxoi4CMSVIFqhPIK7PrHK-_poXyrl3t1fdhOxn0mB1UdnGgq5Vv_DHlQ3MU2E3rPdv9wP8aK7YW_y_RevGE_58ocPEcUhNDTWR54WD3covmZSUXnlsIu_nkZ9RKnqx6SzlWQdZ8r-8VUyt_SNoGhlRJdQGaNVRUTHw1OU4_6IcIwrCedeYM8HeBYLASMN77qnwUWiXTECcJTgUi2PQh4Eqo68DCbDuUi0eo6CoFZcytmghv-UceNZk0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-secondary-fixed text-sm font-bold uppercase tracking-widest mb-2">
                    Terrasse Privative
                  </span>
                  <h4 className="text-white font-headline text-2xl">
                    L&apos;Oasis Urbaine
                  </h4>
                </div>
              </div>
            </div>
            <div data-animate="scale-in" style={{ "--animate-delay": "100ms" } as React.CSSProperties} className="md:col-span-4">
              <div className="relative group overflow-hidden rounded-xl h-[400px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Botanical Garden"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCfhcuNqLUHak8rQLpsVkqLLjUgUsnUVozYngSPbNjbZUGQ8vekY7PUAx5ypiwGYnttLovun71y3ihYfar1MXuRtyjD6qn923f8QwZv0_OXUVT7SW8mGELM6NW1LK9fvFopTM2tcs_ztEn2lUKNISHZKGhl4olqMCA2afRB48qaHEcirEquGL8mE4R3D7wt0Vg-Xm3xe_clDtZyVJZctEudkw8a3j9Bfsj23BxRb1QTpEqL3AwR06yF7T78FoaqBkvKxlIVbbNry7v"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-secondary-fixed text-sm font-bold uppercase tracking-widest mb-2">
                    Jardin Anglais
                  </span>
                  <h4 className="text-white font-headline text-2xl">
                    Le Clos Fleuri
                  </h4>
                </div>
              </div>
            </div>
            <div data-animate="scale-in" style={{ "--animate-delay": "250ms" } as React.CSSProperties} className="md:col-span-8">
              <div className="relative group overflow-hidden rounded-xl h-[400px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Water Feature"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHSKtU8mJ8yQ-ZbkrteVGmaEmF7ku_oiA7PhBs02UhQQwNfu3vSGGMu0YcHAJWYTwBkE1El8oNMANxWId5ymGXkSkX6S1YjSgTZlmM5dViLXY0zJ4tucaAZrOYksRJ9DMeilNlV8J0Q3puZ8MhPTGloLdzoX26bohN_Ze75fE8VVaE05CGW0Yx1XqJiDZC3HBSzJW0IoZFp5vsLFayOMh3xDUcLA_tbuDlTvhs4AFOKutIB3WIt4yWYZL0YdhGFVZ1QZHrA2HkFLpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-secondary-fixed text-sm font-bold uppercase tracking-widest mb-2">
                    Piscine Naturelle
                  </span>
                  <h4 className="text-white font-headline text-3xl">
                    La Source d&apos;Or
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-32 bg-surface overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div data-animate="fade-right">
              <div className="relative">
                <div className="absolute -top-12 -left-12 w-64 h-64 bg-secondary-container rounded-full opacity-20 blur-3xl z-0 animate-glow"></div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Landscaper at work"
                  className="relative z-10 w-full rounded-xl shadow-2xl"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-97yq9iZd05sZ6s_ITw895LlGSOndcYZ__sKaOm2SpwzIfX8kblCZQreTtwnqyb28sA82erotQHfP1VSPAXPrW3fH9dNf29zcU4mWWdIDgSA84Ln2AvLpPBkS81-s2DfVXGerHHEKwx6LrdhtfYoGiAOu0uUHzvY3plHQF2LEUjgESZLjJV4Au90yOswu9Q4y9RxK7eMbIdG0cBhV8NLe1WzH_XwU_guhHwqwlk8Sdh50-8CXbffOL0G_u_QYdL2htYmsBugET_1j"
                />
                <div className="absolute -bottom-8 -right-8 bg-primary p-8 rounded-xl shadow-xl z-20 hidden md:block max-w-[240px]">
                  <p className="text-on-primary font-headline text-lg italic">
                    &ldquo;Le paysage n&apos;est pas un décor, c&apos;est une
                    relation.&rdquo;
                  </p>
                </div>
              </div>
            </div>
            <div data-animate="fade-left" style={{ "--animate-delay": "200ms" } as React.CSSProperties}>
              <div className="space-y-8">
                <span className="text-secondary font-bold tracking-widest uppercase text-xs">
                  Philosophie
                </span>
                <h2 className="font-headline text-4xl md:text-5xl text-primary leading-tight">
                  Notre Approche Durable
                </h2>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  Nous croyons que chaque jardin doit être un écosystème
                  résilient. Notre démarche privilégie les essences locales, la
                  gestion raisonnée de l&apos;eau et des matériaux nobles issus de
                  filières éco-responsables.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary">
                      energy_savings_leaf
                    </span>
                    <div>
                      <h4 className="font-bold text-primary">Biodiversité</h4>
                      <p className="text-on-surface-variant text-sm">
                        Sélection végétale favorisant la faune locale et les
                        pollinisateurs.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary">
                      water_drop
                    </span>
                    <div>
                      <h4 className="font-bold text-primary">Gestion Hydrique</h4>
                      <p className="text-on-surface-variant text-sm">
                        Systèmes d&apos;arrosage intelligents et jardins de pluie.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary">
                      diamond
                    </span>
                    <div>
                      <h4 className="font-bold text-primary">
                        Qualité Artisanale
                      </h4>
                      <p className="text-on-surface-variant text-sm">
                        Mise en œuvre soignée par des compagnons paysagistes
                        qualifiés.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-8">
                  <Link
                    href="/a-propos"
                    className="animate-press bg-primary text-on-primary px-10 py-4 rounded-xl font-medium flex items-center gap-3 w-fit"
                  >
                    En savoir plus sur nos engagements{" "}
                    <span className="material-symbols-outlined">north_east</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
