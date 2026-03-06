"use client";

import { useMemo, useState } from "react";

type Review = {
  name: string;
  role: string;
  text: string;
  category: "Club" | "Restauration" | "Projet" | "hackathon";
};

const reviews: Review[] = [
  {
    name: "Tassenime",
    role: "Membre du club étudiant",
    text: "He is a serious and active member. I had the chance to work with him in clubs and hackathons, where he demonstrated responsibility, leadership, and strong teamwork skills. ",
    category: "Club",
  },
  {
    name: "Amina",
    role: "Membre d’une équipe de hackathon",
    text: "He is a serious and active member. I had the chance to work with him in clubs and hackathons, where he demonstrated responsibility, leadership, and strong teamwork skills.",
    category: "hackathon",
  },
  {
    name: "Zineb",
    role: "Collaborateur projet académique",
    text: "Collaborateur fiable et engagé, il a su s’intégrer parfaitement au travail d’équipe et apporter une réelle valeur au projet.",
    category: "Projet",
  },

  // Ajoute autant d'avis que tu veux ici ↓
  {
    name: "Amine",
    role: "Leader du club",
    text: "Président impliqué et structuré, il savait fédérer l’équipe, prendre des décisions claires et maintenir une bonne communication entre les pôles. La collaboration était fluide et efficace.",
    category: "Club",
  },
  {
    name: "Ichrake ",
    role: "Leader du club",
    text: "En tant que président, il a toujours été sérieux, responsable et très impliqué. Toujours prêt à aider, il donnait de précieux conseils et travaillait sans relâche pour la réussite du club et de ses événements",
    category: "Club",
  },
  {
    name: "Aya",
    role: "Membre d’une équipe projet",
    text: "Nous avons eu le plaisir de travailler ensemble au sein de la même équipe lors de notre projet académique de troisième année. Il s’est distingué par son sérieux et sa vigilance, étant toujours informé non seulement de ses propres tâches mais aussi de celles des autres membres de l’équipe. Il respectait les délais tout en fournissant un travail de grande qualité. Ouvert aux critiques et aux retours, il cherchait constamment à s’améliorer, participait activement aux discussions lors des réunions et apportait des idées et des suggestions pertinentes.",
    category: "Restauration",
  },
  {
    name: "Latrache",
    role: "Leader du club",
    text: "Doté d’un excellent esprit, leader naturel et partenaire de confiance, il sait délivrer des résultats concrets. Très accessible, convivial et agréable à collaborer",
    category: "Club",
  },
  {
    name: "Maria",
    role: "Leader du club",
    text: "As the Ex-President of the Ingeniums club, I quickly recognized his strong leadership potential from the moment he joined. He consistently demonstrated a high sense of responsibility, excellent teamwork and communication skills, adaptability, and a proactive mindset, making him both a reliable collaborator and a natural leader.",
    category: "Restauration",
  },
  {
    name: "Karim",
    role: "Collègue en restauration",
    text: "Sérieux, poli et efficace. Il garde une bonne énergie même pendant les services chargés.",
    category: "Restauration",
  },
];

const categories: Array<"Tous" | Review["category"]> = ["Tous", "Club", "Projet", "Restauration"];

export default function AvisPage() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("Tous");
  const [visibleCount, setVisibleCount] = useState(6);

  const filtered = useMemo(() => {
    const list =
      activeCategory === "Tous"
        ? reviews
        : reviews.filter((r) => r.category === activeCategory);

    return list;
  }, [activeCategory]);

  const visible = filtered.slice(0, visibleCount);
  const canLoadMore = visibleCount < filtered.length;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="max-w-5xl mx-auto px-4 py-24">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold">Avis & témoignages</h1>
            <p className="mt-3 text-sm md:text-base opacity-75">
              Retours de personnes avec qui j’ai travaillé (club, projets, expérience pro).
            </p>
          </div>

          <a
            href="/#contact"
            className="px-4 py-2 rounded-full text-xs font-medium border border-foreground/20 hover:bg-foreground/10 transition"
          >
            Me contacter →
          </a>
        </div>

        {/* Filtres */}
        <div className="mt-6 flex flex-wrap gap-2 text-xs md:text-sm">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setVisibleCount(6);
              }}
              className={`px-4 py-1.5 rounded-full border transition ${
                activeCategory === cat
                  ? "border-foreground bg-foreground text-background"
                  : "border-foreground/20 hover:bg-foreground/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {visible.map((r, idx) => {
            const initial = r.name.trim().slice(0, 1).toUpperCase();
            return (
              <div
                key={r.name + idx}
                className="rounded-2xl border border-foreground/15 bg-background/60 p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full border border-foreground/15 bg-foreground/5 flex items-center justify-center text-sm font-semibold">
                    {initial}
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm font-semibold leading-none truncate">{r.name}</p>
                    <p className="text-xs opacity-60 mt-1">{r.role}</p>
                    <span className="inline-block mt-2 text-[11px] px-2 py-1 rounded-full border border-foreground/15 bg-foreground/5 opacity-90">
                      {r.category}
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-sm opacity-80 leading-relaxed">
                  “{r.text}”
                </p>
              </div>
            );
          })}
        </div>

        {/* Load more */}
        <div className="mt-8 flex items-center justify-center">
          {canLoadMore ? (
            <button
              onClick={() => setVisibleCount((v) => v + 6)}
              className="px-5 py-2 rounded-full text-xs font-medium border border-foreground/20 hover:bg-foreground/10 transition"
            >
              Charger plus d’avis
            </button>
          ) : (
            <p className="text-xs opacity-60">Tous les avis sont affichés.</p>
          )}
        </div>
      </section>
    </main>
  );
}
