type Experience = {
  period: string;
  title: string;
  place?: string;
  type: "Pro" | "Asso" | "Académique";
  description: string;
  highlights: string[];
};

const experiences: Experience[] = [
  {
    period: "2025 – 2026",
    title: "Employé polyvalent – ALDI",
    place: "Nice, France",
    type: "Pro",
    description:
      "Expérience terrain en retail : rythme soutenu, organisation, rigueur et travail d’équipe au quotidien.",
    highlights: [
      "Gestion des priorités et exécution rapide dans un environnement dynamique",
      "Travail en équipe, communication et fiabilité sur les tâches opérationnelles",
      "Sens du service, autonomie et respect des standards",
    ],
  },
  {
    period: "2023 – 2024",
    title: "Président – Ingeniums Club (club scientifique)",
    place: "ESI Sidi Bel Abbès",
    type: "Asso",
    description:
      "Pilotage du club : vision, organisation interne, coordination des équipes et suivi des activités (événements, projets, communication).",
    highlights: [
      "Coordination d’équipes (tech, design, com, orga) et répartition des responsabilités",
      "Planification d’événements et suivi de l’exécution jusqu’au livrable",
      "Amélioration des process internes et structuration des activités du club",
    ],
  },
  {
    period: "2022 – 2023",
    title: "Responsable RH – Ingeniums Club",
    place: "ESI Sidi Bel Abbès",
    type: "Asso",
    description:
      "Gestion des membres : recrutement, intégration, organisation interne et suivi de l’engagement dans les équipes.",
    highlights: [
      "Participation au recrutement et à l’onboarding des membres",
      "Suivi de la dynamique d’équipe et amélioration de la collaboration",
      "Organisation interne : rôles, communication, coordination",
    ],
  },
  {
    period: "2022 – 2023",
    title: "Responsable Finance – GDSC (Google Developer Student Clubs)",
    place: "ESI Sidi Bel Abbès",
    type: "Asso",
    description:
      "Contribution à la gestion financière des activités : organisation, suivi des besoins et soutien aux événements.",
    highlights: [
      "Gestion et suivi des besoins logistiques liés aux événements",
      "Organisation et structuration d’une approche ‘budget/ressources’",
      "Collaboration avec les équipes événementielles et partenaires",
    ],
  },
  {
    period: "2022 – Aujourd’hui",
    title: "Prise de parole & animation (workshops / mini-conférences)",
    type: "Académique",
    description:
      "Interventions et partages autour de sujets techniques/organisationnels : vulgarisation, pédagogie et aisance à l’oral.",
    highlights: [
      "Vulgarisation de notions techniques pour différents niveaux",
      "Animation de sessions courtes : structure, clarté et interaction",
      "Confiance à l’oral et capacité à captiver un public",
    ],
  },
  {
    period: "2023 – Aujourd’hui",
    title: "Participation à des hackathons (48h / formats type startup weekend)",
    type: "Académique",
    description:
      "Expériences intensives orientées produit : idéation, prototypage et livraison en équipe dans un temps limité.",
    highlights: [
      "Travail sous contrainte de temps (priorisation, exécution, itérations)",
      "Collaboration multidisciplinaire (produit, design, dev, pitch)",
      "Approche solution : transformer une idée en prototype présentable",
    ],
  },
  {
    period: "2024 – Aujourd’hui",
    title: "Content creation (design / vidéos courtes / réseaux sociaux)",
    type: "Académique",
    description:
      "Création de contenu orienté impact : visuels, formats courts et cohérence d’identité pour communiquer efficacement.",
    highlights: [
      "Création de visuels et contenus adaptés aux plateformes (IG / TikTok)",
      "Sens du message, storytelling et cohérence visuelle",
      "Veille tendances et optimisation de l’engagement",
    ],
  },
];

export default function ExperiencesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="max-w-5xl mx-auto px-4 py-24">
        <h1 className="text-3xl md:text-4xl font-semibold">Expériences</h1>
        <p className="mt-3 text-sm md:text-base opacity-75">
          Un aperçu de mes expériences professionnelles, associatives et
          académiques, avec ce que ces contextes m&apos;ont appris sur le terrain.
        </p>

        {/* Timeline */}
        <div className="mt-10 relative">
          {/* Ligne verticale */}
          <div className="absolute left-2 md:left-4 top-0 bottom-0 w-px bg-foreground/20" />

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={exp.title + index} className="relative pl-8 md:pl-12">
                {/* Point sur la timeline */}
                <div className="absolute left-1 md:left-3 top-2 w-3 h-3 rounded-full bg-foreground" />

                <div className="rounded-2xl border border-foreground/15 bg-background/60 p-4 md:p-5 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-[11px] uppercase tracking-[0.2em] opacity-60">
                      {exp.period}
                    </p>
                    <span className="text-[11px] px-2 py-1 rounded-full border border-foreground/20">
                      {exp.type}
                    </span>
                  </div>

                  <h2 className="mt-1 text-sm md:text-base font-semibold">
                    {exp.title}
                  </h2>

                  {exp.place && (
                    <p className="text-xs opacity-65 mt-0.5">{exp.place}</p>
                  )}

                  <p className="mt-2 text-xs md:text-sm opacity-80">
                    {exp.description}
                  </p>

                  <ul className="mt-3 text-xs md:text-sm opacity-80 space-y-1.5">
                    {exp.highlights.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
