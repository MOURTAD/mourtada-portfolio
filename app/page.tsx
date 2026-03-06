export default function Home() {
  return (
    <main className="bg-background text-foreground">
    <section
  id="home"
  className="max-w-6xl mx-auto px-4 pt-10 pb-16 md:pt-14 md:pb-24"
>
  <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
    {/* LEFT */}
    <div className="order-1 max-w-2xl">
      <p className="text-[10px] sm:text-xs uppercase tracking-[0.28em] opacity-70 mb-3">
        Welcome to my world 👋
      </p>

      <h1 className="text-4xl leading-tight font-semibold sm:text-5xl lg:text-6xl">
        Je m&apos;appelle{" "}
        <span className="underline underline-offset-4 lg:underline-offset-8">
          Mourtada
        </span>
        ,
      </h1>

      <p className="mt-4 text-lg sm:text-xl lg:text-2xl opacity-85 leading-snug">
        Étudiant en M1 Informatique à l&apos;Université Côte d&apos;Azur.
      </p>

      <p className="mt-3 text-sm sm:text-base opacity-70 leading-relaxed max-w-xl">
        Je construis des expériences digitales modernes et utiles en combinant
        UI/UX Design, Web Development, AI et Réseaux.
      </p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <a
          href="/CV-MOURTADA-ESSADIK-ENNOUNI.pdf"
          download
          className="inline-flex items-center justify-center px-5 py-3 rounded-full text-sm font-medium border border-foreground/20 bg-foreground text-background hover:opacity-90 transition"
        >
          Télécharger mon CV
        </a>

        <a
          href="#contact"
          className="inline-flex items-center justify-center px-5 py-3 rounded-full text-sm font-medium border border-foreground/20 bg-background hover:bg-foreground/5 transition"
        >
          Me contacter
        </a>
      </div>

      <p className="mt-3 text-xs sm:text-sm opacity-60">
        Disponible pour une alternance : Nice · Sophia · Remote-friendly
      </p>
    </div>

    {/* RIGHT */}
    <div className="order-2 flex flex-col items-center gap-5 lg:items-end">
      {/* PHOTO */}
      <div className="rounded-3xl border border-foreground/15 bg-background/60 p-3 w-fit shadow-sm">
        <div className="w-[180px] sm:w-[220px] lg:w-[250px] overflow-hidden rounded-2xl">
          <img
            src="/ada.jpeg"
            alt="Photo de Mourtada"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* ALTERNANCE */}
      <div className="w-full max-w-[420px] rounded-3xl border border-foreground/15 bg-background/80 p-4 sm:p-5 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] opacity-70">
            Alternance
          </p>

          <span className="text-[10px] sm:text-xs px-3 py-1 rounded-full border border-foreground/15 bg-foreground/5 opacity-80 whitespace-nowrap">
            Disponible
          </span>
        </div>

        <h2 className="mt-2 text-lg sm:text-xl font-semibold leading-snug">
          À la recherche d&apos;une alternance
        </h2>

        <p className="mt-2 text-sm opacity-75 leading-relaxed">
          Je souhaite rejoindre une équipe pour travailler sur des projets liés
          au design, au développement web, à l’IA ou aux réseaux, et contribuer
          de manière concrète à un produit.
        </p>

        <div className="mt-4 space-y-3 text-sm">
          <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-4">
            <span className="opacity-60">Domaines</span>
            <span className="font-medium break-words sm:text-right sm:max-w-[70%]">
              Conception · UI/UX · Web Development · AI · Réseaux
            </span>
          </div>

          <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-4">
            <span className="opacity-60">Durée</span>
            <span className="font-medium sm:text-right">1 an</span>
          </div>

          <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-4">
            <span className="opacity-60">Rythme</span>
            <span className="font-medium sm:text-right">
              3J univ / 2J entreprise
            </span>
          </div>

          <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-4">
            <span className="opacity-60">Localisation</span>
            <span className="font-medium break-words sm:text-right sm:max-w-[70%]">
              Nice · Sophia Antipolis · Remote-friendly
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


       {/* HARD SKILLS */}
<section
  id="hard-skills"
  className="max-w-5xl mx-auto px-4 py-24 border-b border-foreground/10"
>
  <div className="flex items-center justify-between gap-4">
    <div>
      <h2 className="text-2xl md:text-3xl font-semibold">
        Hard Skills
      </h2>
      <p className="mt-2 text-sm md:text-base opacity-75">
        Compétences techniques développées à travers mes projets
        personnels, académiques et professionnels.
      </p>
    </div>

    <a
      href="/projects"
      className="hidden md:inline-flex px-4 py-2 rounded-full text-xs font-medium border border-foreground/20 hover:bg-foreground/10 transition"
    >
      Voir tous les projets →
    </a>
  </div>

  {/* Cartes des catégories */}
  <div className="mt-8 grid gap-6 md:grid-cols-3">

    {/* Web Dev */}
    <div className="rounded-2xl border border-foreground/15 bg-background/60 p-4 md:p-5 shadow-sm hover:-translate-y-1 hover:shadow-md transition-transform">
      <h3 className="text-sm font-semibold mb-2">Web Development</h3>
      <p className="text-xs opacity-75 mb-3">
        Création d&apos;applications web modernes et performantes.
      </p>
      <ul className="text-xs space-y-1 opacity-80">
        <li>• HTML, CSS, JavaScript</li>
        <li>• React, Next.js</li>
        <li>• TailwindCSS</li>
        <li>• Intégration API & CMS</li>
      </ul>
    </div>

       {/* UI/UX Design */}
<div className="rounded-2xl border border-foreground/15 bg-background/60 p-4 md:p-5 shadow-sm hover:-translate-y-1 hover:shadow-md transition-transform">
  <h3 className="text-sm font-semibold mb-2">UI / UX Design</h3>
  <p className="text-xs opacity-75 mb-3">
    Conception d’interfaces claires, cohérentes et centrées utilisateur.
  </p>
  <ul className="text-xs space-y-1 opacity-80">
    <li>• User flows & wireframes</li>
    <li>• Maquettes & prototypage (Figma)</li>
    <li>• Design systems & cohérence visuelle</li>
    <li>• UX thinking & accessibilité</li>
  </ul>
</div>

    

      {/* Project & Documentation */}
      <div className="rounded-2xl border border-foreground/15 bg-background/60 p-4 md:p-5 shadow-sm hover:-translate-y-1 hover:shadow-md transition-transform">
      <h3 className="text-sm font-semibold mb-2">
        Project & Technical Documentation
      </h3>
      <p className="text-xs opacity-75 mb-3">
        Structuration et gestion de projets techniques.
      </p>
      <ul className="text-xs space-y-1 opacity-80">
        <li>• Cahier des charges</li>
        <li>• Diagrammes techniques</li>
        <li>• Méthodes Agile / Scrum (bases)</li>
      </ul>
    </div>

  

    {/* Compilation & Automata */}
    <div className="rounded-2xl border border-foreground/15 bg-background/60 p-4 md:p-5 shadow-sm hover:-translate-y-1 hover:shadow-md transition-transform">
      <h3 className="text-sm font-semibold mb-2">
        Compilation & Automata
      </h3>
      <p className="text-xs opacity-75 mb-3">
        Concepts fondamentaux des langages formels.
      </p>
      <ul className="text-xs space-y-1 opacity-80">
        <li>• Automates finis</li>
        <li>• Grammaires & langages</li>
        <li>• Analyse lexicale & syntaxique</li>
      </ul>
    </div>

    {/* Cryptography */}
    <div className="rounded-2xl border border-foreground/15 bg-background/60 p-4 md:p-5 shadow-sm hover:-translate-y-1 hover:shadow-md transition-transform">
      <h3 className="text-sm font-semibold mb-2">Cryptography</h3>
      <p className="text-xs opacity-75 mb-3">
        Bases de la sécurité et des mécanismes cryptographiques.
      </p>
      <ul className="text-xs space-y-1 opacity-80">
        <li>• Chiffrement symétrique & asymétrique</li>
        <li>• Fonctions de hachage</li>
        <li>• Notions de sécurité informatique</li>
      </ul>
    </div>

    {/* Networks & Systems */}
    <div className="rounded-2xl border border-foreground/15 bg-background/60 p-4 md:p-5 shadow-sm hover:-translate-y-1 hover:shadow-md transition-transform">
      <h3 className="text-sm font-semibold mb-2">
        Networks & Systems
      </h3>
      <p className="text-xs opacity-75 mb-3">
        Administration et analyse des systèmes et réseaux.
      </p>
      <ul className="text-xs space-y-1 opacity-80">
        <li>• Linux (Ubuntu, Kali)</li>
        <li>• Wireshark, Packet Tracer, GNS3</li>
        <li>• Routage, VLAN, TCP/IP</li>
      </ul>
    </div>


</div>
    


  

  {/* Bouton voir plus (mobile) */}
  <div className="mt-6 md:hidden">
    <a
      href="/projects"
      className="inline-flex px-4 py-2 rounded-full text-xs font-medium border border-foreground/20 hover:bg-foreground/10 transition"
    >
      Voir tous les projets →
    </a>
  </div>
</section>


   {/* SOFT SKILLS */}
<section
  id="soft-skills"
  className="max-w-5xl mx-auto px-4 py-24 border-b border-foreground/10"
>
  <div className="flex items-center justify-between gap-4">
    <div>
      <h2 className="text-2xl md:text-3xl font-semibold">
        Soft Skills
      </h2>
      <p className="mt-2 text-sm md:text-base opacity-75">
        Compétences humaines développées à travers mes expériences
        associatives, techniques et professionnelles.
      </p>
    </div>

    <a
      href="/experiences"
      className="hidden md:inline-flex px-4 py-2 rounded-full text-xs font-medium border border-foreground/20 hover:bg-foreground/10 transition"
    >
      Voir toutes les expériences →
    </a>
  </div>

  {/* Cartes soft skills */}
  <div className="mt-8 grid gap-6 md:grid-cols-2">

    {/* Communication */}
    <div className="rounded-2xl border border-foreground/15 bg-background/60 p-4 md:p-5 shadow-sm hover:-translate-y-1 hover:shadow-md transition-transform">
      <h3 className="text-sm font-semibold mb-1">
        Communication & travail en équipe
      </h3>
      <p className="text-xs opacity-75">
        Communication claire et efficace avec des profils variés
        (développeurs, designers, marketing), même dans des contextes
        dynamiques ou sous pression.
      </p>
    </div>

    {/* Problem Solving */}
    <div className="rounded-2xl border border-foreground/15 bg-background/60 p-4 md:p-5 shadow-sm hover:-translate-y-1 hover:shadow-md transition-transform">
      <h3 className="text-sm font-semibold mb-1">
        Esprit analytique & résolution de problèmes
      </h3>
      <p className="text-xs opacity-75">
        Capacité à comprendre rapidement une situation, identifier les priorités
        et proposer des solutions concrètes, même sous contrainte de temps ou de ressources.
      </p>
    </div>

    {/* Créativité */}
    <div className="rounded-2xl border border-foreground/15 bg-background/60 p-4 md:p-5 shadow-sm hover:-translate-y-1 hover:shadow-md transition-transform">
      <h3 className="text-sm font-semibold mb-1">
        Créativité & vision produit
      </h3>
      <p className="text-xs opacity-75">
        Approche créative orientée utilisateur : proposer des idées pertinentes,
        améliorer l’expérience globale et transformer un besoin en solution exploitable.
      </p>
    </div>

    {/* Organisation */}
    <div className="rounded-2xl border border-foreground/15 bg-background/60 p-4 md:p-5 shadow-sm hover:-translate-y-1 hover:shadow-md transition-transform">
      <h3 className="text-sm font-semibold mb-1">
        Organisation & gestion du temps
      </h3>
      <p className="text-xs opacity-75">
        Gestion efficace de plusieurs responsabilités en parallèle
        (études, projets, travail), avec une bonne priorisation et le respect des délais.
      </p>
    </div>

    {/* Leadership */}
    <div className="rounded-2xl border border-foreground/15 bg-background/60 p-4 md:p-5 shadow-sm hover:-translate-y-1 hover:shadow-md transition-transform">
      <h3 className="text-sm font-semibold mb-1">
        Leadership & prise d’initiative
      </h3>
      <p className="text-xs opacity-75">
        Prise d’initiative, coordination d’équipes et implication active
        pour faire avancer les projets jusqu’à leur aboutissement.
      </p>
    </div>

    {/* Adaptabilité */}
    <div className="rounded-2xl border border-foreground/15 bg-background/60 p-4 md:p-5 shadow-sm hover:-translate-y-1 hover:shadow-md transition-transform">
      <h3 className="text-sm font-semibold mb-1">
        Apprentissage rapide & adaptabilité
      </h3>
      <p className="text-xs opacity-75">
        Capacité à apprendre rapidement de nouveaux outils, méthodes ou environnements
        de travail, avec un fort niveau d’autonomie.
      </p>
    </div>

  </div>

  {/* Bouton voir plus (mobile) */}
  <div className="mt-6 md:hidden">
    <a
      href="/experiences"
      className="inline-flex px-4 py-2 rounded-full text-xs font-medium border border-foreground/20 hover:bg-foreground/10 transition"
    >
      Voir toutes les expériences →
    </a>
  </div>
</section>




{/* EDUCATION */}
<section
  id="education"
  className="max-w-5xl mx-auto px-4 py-24 border-b border-foreground/10"
>
  <div className="flex items-center justify-between gap-4">
    <div>
      <h2 className="text-2xl md:text-3xl font-semibold">
        Éducation
      </h2>
      <p className="mt-2 text-sm md:text-base opacity-75">
        Parcours académique en informatique, combinant formation
        préparatoire exigeante et cursus universitaire orienté ingénierie.
      </p>
    </div>

    <a
      href="/education"
      className="hidden md:inline-flex px-4 py-2 rounded-full text-xs font-medium border border-foreground/20 hover:bg-foreground/10 transition"
    >
      Voir mon parcours complet →
    </a>
  </div>

  {/* Mini timeline */}
  <div className="mt-8 space-y-4">

    {/* Master */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] opacity-60">
          2025 – Aujourd&apos;hui
        </p>
        <p className="text-sm md:text-base font-medium">
          Master Informatique – Université Côte d&apos;Azur
        </p>
      </div>
      <p className="text-xs md:text-sm opacity-70">
        Nice, France · Approfondissement en informatique, systèmes,
        ingénierie logicielle et spécialisation progressive.
      </p>
    </div>

    {/* Licence */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] opacity-60">
          2024 – 2025
        </p>
        <p className="text-sm md:text-base font-medium">
          Licence Informatique (L3) – Université Côte d&apos;Azur
        </p>
      </div>
      <p className="text-xs md:text-sm opacity-70">
        Nice, France · Algorithmique, POO, réseaux, compilation,
        paradigmes de programmation et projets académiques.
      </p>
    </div>

    {/* ESI – Cycle supérieur */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] opacity-60">
          2023 – 2024
        </p>
        <p className="text-sm md:text-base font-medium">
          Cycle supérieur – École Supérieure d&apos;Informatique (ESI)
        </p>
      </div>
      <p className="text-xs md:text-sm opacity-70">
        Sidi Bel Abbès, Algérie · Approfondissement en programmation,
        algorithmique avancée, systèmes et réseaux.
      </p>
    </div>

    {/* ESI – Prépa */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] opacity-60">
          2021 – 2023
        </p>
        <p className="text-sm md:text-base font-medium">
          Cycle préparatoire (2 ans) – École Supérieure d&apos;Informatique (ESI)
        </p>
      </div>
      <p className="text-xs md:text-sm opacity-70">
        Sidi Bel Abbès, Algérie · Formation intensive en mathématiques,
        algorithmique et bases de l’informatique.
      </p>
    </div>

    {/* Bac */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] opacity-60">
          2021
        </p>
        <p className="text-sm md:text-base font-medium">
          Baccalauréat – Série Mathématique
        </p>
      </div>
      <p className="text-xs md:text-sm opacity-70">
        Algérie · Moyenne : 16,76 / 20.
      </p>
    </div>

  </div>

  {/* Bouton mobile */}
  <div className="mt-6 md:hidden">
    <a
      href="/education"
      className="inline-flex px-4 py-2 rounded-full text-xs font-medium border border-foreground/20 hover:bg-foreground/10 transition"
    >
      Voir mon parcours complet →
    </a>
  </div>
</section>



      {/* PROJECTS PREVIEW */}
<section
  id="projects"
  className="max-w-5xl mx-auto px-4 py-24 border-b border-foreground/10"
>
  <div className="flex items-center justify-between gap-4">
    <div>
      <h2 className="text-2xl md:text-3xl font-semibold">
        Projets
      </h2>
      <p className="mt-2 text-sm md:text-base opacity-75">
        Un aperçu de projets mêlant design, développement logiciel
        et ingénierie informatique. Pour plus de détails, consultez
        la page dédiée.
      </p>
    </div>

    <a
      href="/projects"
      className="hidden md:inline-flex px-4 py-2 rounded-full text-xs font-medium border border-foreground/20 hover:bg-foreground/10 transition"
    >
      Voir tous les projets →
    </a>
  </div>

  {/* Cartes de projets en aperçu */}
  <div className="mt-8 grid gap-6 md:grid-cols-3 text-xs md:text-sm">

    {/* Multidisciplinary */}
    <div className="rounded-2xl border border-foreground/15 bg-background/60 p-4 shadow-sm">
      <p className="text-[11px] uppercase tracking-[0.2em] opacity-60 mb-1">
        UI/UX · Frontend
      </p>
      <p className="font-semibold">
        Plateforme de promotion du tourisme en Algérie
      </p>
      <p className="mt-2 opacity-75">
        Projet multidisciplinaire combinant conception UI/UX et
        développement frontend pour valoriser le patrimoine
        touristique algérien.
      </p>
    </div>

    {/* Software / Backend */}
    <div className="rounded-2xl border border-foreground/15 bg-background/60 p-4 shadow-sm">
      <p className="text-[11px] uppercase tracking-[0.2em] opacity-60 mb-1">
        Software · Backend
      </p>
      <p className="font-semibold">
        Mini langage de programmation
      </p>
      <p className="mt-2 opacity-75">
        Projet académique de compilation : analyse lexicale et
        syntaxique, application des concepts d’automates et de
        langages formels.
      </p>
    </div>

    {/* Networks */}
    <div className="rounded-2xl border border-foreground/15 bg-background/60 p-4 shadow-sm">
      <p className="text-[11px] uppercase tracking-[0.2em] opacity-60 mb-1">
        Réseaux & Systèmes
      </p>
      <p className="font-semibold">
        Topologies & simulations réseaux
      </p>
      <p className="mt-2 opacity-75">
        Conception de réseaux avec différentes topologies et
        stratégies de sous-réseautage à l’aide de Packet Tracer,
        GNS3 et Wireshark.
      </p>
    </div>

  </div>

  {/* Bouton mobile */}
  <div className="mt-6 md:hidden">
    <a
      href="/projects"
      className="inline-flex px-4 py-2 rounded-full text-xs font-medium border border-foreground/20 hover:bg-foreground/10 transition"
    >
      Voir tous les projets →
    </a>
  </div>
</section>



           {/* EXPERIENCES PREVIEW */}
<section
  id="experiences"
  className="max-w-5xl mx-auto px-4 py-24 border-b border-foreground/10"
>
  <div className="flex items-center justify-between gap-4">
    <div>
      <h2 className="text-2xl md:text-3xl font-semibold">
        Expériences
      </h2>
      <p className="mt-2 text-sm md:text-base opacity-75">
        Un aperçu de mes expériences professionnelles, associatives et
        académiques. La timeline complète est disponible sur la page dédiée.
      </p>
    </div>

    <a
      href="/experiences"
      className="hidden md:inline-flex px-4 py-2 rounded-full text-xs font-medium border border-foreground/20 hover:bg-foreground/10 transition"
    >
      Voir toutes les expériences →
    </a>
  </div>

  <div className="mt-8 grid gap-6 md:grid-cols-3 text-xs md:text-sm">

    {/* ALDI */}
    <div className="rounded-2xl border border-foreground/15 bg-background/60 p-4 shadow-sm">
      <p className="text-[11px] uppercase tracking-[0.2em] opacity-60 mb-1">
        Pro
      </p>
      <p className="font-semibold">
        Employé polyvalent – ALDI
      </p>
      <p className="mt-2 opacity-75">
        Expérience terrain en retail : rythme soutenu, organisation,
        travail en équipe et gestion des priorités dans un environnement exigeant.
      </p>
    </div>

    {/* Ingeniums */}
    <div className="rounded-2xl border border-foreground/15 bg-background/60 p-4 shadow-sm">
      <p className="text-[11px] uppercase tracking-[0.2em] opacity-60 mb-1">
        Associatif
      </p>
      <p className="font-semibold">
        Président – Ingeniums Club
      </p>
      <p className="mt-2 opacity-75">
        Pilotage du club : coordination des équipes, organisation des activités,
        prise de décisions et structuration des projets.
      </p>
    </div>

    {/* Public speaking */}
    <div className="rounded-2xl border border-foreground/15 bg-background/60 p-4 shadow-sm">
      <p className="text-[11px] uppercase tracking-[0.2em] opacity-60 mb-1">
        Académique
      </p>
      <p className="font-semibold">
        Public speaking & animation
      </p>
      <p className="mt-2 opacity-75">
        Prise de parole lors de workshops et mini-conférences :
        vulgarisation, pédagogie et aisance à l’oral face à différents publics.
      </p>
    </div>

  </div>

  {/* Bouton mobile */}
  <div className="mt-6 md:hidden">
    <a
      href="/experiences"
      className="inline-flex px-4 py-2 rounded-full text-xs font-medium border border-foreground/20 hover:bg-foreground/10 transition"
    >
      Voir toutes les expériences →
    </a>
  </div>
</section>



         {/* TESTIMONIALS / AVIS */}
<section className="max-w-5xl mx-auto px-4 py-16 border-t border-foreground/10">
<div className="flex items-center justify-between gap-4">
  <div>
    <h2 className="text-2xl md:text-3xl font-semibold">Témoignages</h2>
    
  </div>

  <a
    href="/avis"
    className="hidden md:inline-flex px-4 py-2 rounded-full text-xs font-medium border border-foreground/20 hover:bg-foreground/10 transition"
  >
    Voir tous les avis →
  </a>
</div>
  <p className="mt-2 text-sm md:text-base opacity-75">
    Des personnes avec qui j&apos;ai travaillé décrivent mon profil comme
    sérieux, impliqué et fiable.
  </p>

  <div className="mt-8 grid gap-6 md:grid-cols-3 text-sm">
  <div className="mt-6 md:hidden">
  <a
    href="/avis"
    className="inline-flex px-4 py-2 rounded-full text-xs font-medium border border-foreground/20 hover:bg-foreground/10 transition"
  >
    Voir tous les avis →
  </a>
</div>
    {/* Testimonial 1 */}
    <div className="rounded-2xl border border-foreground/15 bg-background/60 p-5">
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/20 bg-foreground/5 text-xs font-semibold">
          A
        </div>

        {/* Name + role */}
        <div>
          <p className="text-sm font-medium">Tassenime</p>
          <p className="text-[11px] opacity-60">
            Membre – Club étudiant
          </p>
        </div>
      </div>

      {/* Quote */}
      <p className="mt-4 text-sm opacity-80 leading-relaxed">
      "He is a serious and active member. I had the chance to work with him in clubs and hackathons, where he demonstrated responsibility, leadership, and strong teamwork skills."
   
      </p>
    </div>

    {/* Testimonial 2 */}
    <div className="rounded-2xl border border-foreground/15 bg-background/60 p-5">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/20 bg-foreground/5 text-xs font-semibold">
          S
        </div>

        <div>
          <p className="text-sm font-medium">Amine</p>
          <p className="text-[11px] opacity-60">
            Leader – Club
          </p>
        </div>
      </div>

      <p className="mt-4 text-sm opacity-80 leading-relaxed">
        “Président impliqué et structuré, il savait fédérer l’équipe, prendre des décisions claires et maintenir une bonne communication entre les pôles. La collaboration était fluide et efficace.”
      </p>
    </div>

    {/* Testimonial 3 */}
    <div className="rounded-2xl border border-foreground/15 bg-background/60 p-5">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/20 bg-foreground/5 text-xs font-semibold">
          Y
        </div>

        <div>
          <p className="text-sm font-medium">Zineb</p>
          <p className="text-[11px] opacity-60">
            Projet académique
          </p>
        </div>
      </div>

      <p className="mt-4 text-sm opacity-80 leading-relaxed">
      Collaborateur fiable et engagé, il a su s’intégrer parfaitement au travail d’équipe et apporter une réelle valeur au projet."
      </p>
    </div>

  </div>
</section>


      {/* CONTACT */}
      <section
        id="contact"
        className="max-w-5xl mx-auto px-4 py-20 border-t border-foreground/10"
      >
        
        <div className="grid gap-10 md:grid-cols-2">
          {/* Texte / infos */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Me contacter
            </h2>
            <p className="mt-2 text-sm md:text-base opacity-75">
              Intéressé par mon profil pour une alternance en design, frontend
              ou réseaux ? N&apos;hésitez pas à m&apos;écrire, je réponds dès
              que possible.
            </p>

            <div className="mt-5 space-y-2 text-sm">
              <p className="opacity-80">
                <span className="opacity-60">Email :</span>{" "}
                <a
                  href="mailto:me.ennouni@esi-sba.dz"
                  className="underline underline-offset-2 hover:opacity-80"
                >
                  ennounimourtadaessadik@gmail.com
                </a>
              </p>
              <p className="opacity-80">
                <span className="opacity-60">Téléphone :</span>{" "}
                <span>+33 758 37 80 00</span>
              </p>
              <p className="opacity-80">
                <span className="opacity-60">Basé à :</span> Nice, France
              </p>
            </div>

            <p className="mt-4 text-xs opacity-60">
              Ouvert aux opportunités à Nice, Sophia Antipolis et en
              remote-friendly.
            </p>
            <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=ennounimourtadaessadik@gmail.com&su=Contact%20Portfolio"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-4 inline-flex items-center px-6 py-3 rounded-full text-sm font-medium border border-foreground/20 bg-foreground text-background hover:opacity-90 transition"
>
  ✉ M'envoyer un email
</a>
          </div>
        </div>
      </section>

    </main>
  );
}
