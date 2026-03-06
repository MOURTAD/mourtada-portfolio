"use client";

import { useMemo, useState } from "react";

type Category =
  | "Tous"
  | "UI/UX Design"
  | "Frontend"
  | "Backend/API"
  | "Game Dev"
  | "Compilation"
  | "Crypto/CTF"
  | "Réseaux"
  | "Documentation";

type Project = {
  title: string;
  categories: Exclude<Category, "Tous">[]; // ✅ multi-categories
  description: string;
  tags: string[];
  context?: string;
};

const projects: Project[] = [
  {
    title: "Application de restaurant – UI/UX & maquettes",
    categories: ["UI/UX Design"],
    description:
      "Conception d’interfaces pour une application de restaurant : parcours utilisateur, écrans menu/commande, hiérarchie visuelle et cohérence mobile.",
    tags: ["UI/UX", "Figma", "Design mobile", "Wireframes"],
    context: "Projet personnel / académique",
  },
  {
    title: "Design & visuels pour Ingeniums Club",
    categories: ["UI/UX Design"],
    description:
      "Création de visuels pour la communication du club : affiches, posts réseaux sociaux et cohérence d’identité graphique.",
    tags: ["Branding", "Social media", "Design graphique"],
    context: "Travail associatif",
  },

  {
    title: "Portfolio / Site personnel",
    categories: ["Frontend", "UI/UX Design"],
    description:
      "Développement de mon portfolio avec Next.js et Tailwind, orienté lisibilité et présentation claire pour les recruteurs.",
    tags: ["Next.js", "TailwindCSS", "UI", "Responsive"],
    context: "Projet personnel",
  },
  {
    title: "Site tourisme – Algérie (UI/UX + Frontend)",
    categories: ["UI/UX Design", "Frontend"],
    description:
      "Projet multidisciplinaire : conception UI/UX et intégration frontend d’une plateforme visant à encourager le tourisme en Algérie.",
    tags: ["UI/UX", "Frontend", "Responsive", "Collaboration"],
    context: "Projet multidisciplinaire",
  },

  {
    title: "Mini projet – Intégration API de sons",
    categories: ["Frontend", "Backend/API"],
    description:
      "Mini interface web utilisant une API de sons : déclenchement/gestion de fonctionnalités audio via appels API, logique côté application.",
    tags: ["API", "Web", "Intégration", "Prototype"],
    context: "Mini projet",
  },

  {
    title: "2D Game – LibGDX",
    categories: ["Game Dev"],
    description:
      "Développement d’un jeu 2D avec LibGDX : scènes, logique, gestion d’entités et structure orientée objet.",
    tags: ["LibGDX", "Java", "Game dev", "OOP"],
    context: "Projet académique / personnel",
  },
  {
    title: "Pac-Man (Python) – Game logic + intégrations",
    categories: ["Game Dev", "Backend/API"],
    description:
      "Recréation de Pac-Man en Python : logique de jeu, collisions, états, avec intégrations (API / base de données) selon le besoin du projet.",
    tags: ["Python", "Game logic", "API", "BDD"],
    context: "Projet personnel / académique",
  },

  {
    title: "Mini langage de programmation (Compilation)",
    categories: ["Compilation"],
    description:
      "Projet de compilation : conception d’un mini langage avec analyse lexicale/syntaxique et mise en pratique des concepts de langages formels.",
    tags: ["Compilation", "Analyse lexicale", "Analyse syntaxique", "Automates"],
    context: "Projet académique",
  },

  {
    title: "CTF – Création de challenges Crypto",
    categories: ["Crypto/CTF"],
    description:
      "Conception de challenges de cryptographie pour CTF : scénarios, logique de résolution et calibration de difficulté.",
    tags: ["Cryptographie", "CTF", "Problem solving", "Scripting"],
    context: "Projet personnel",
  },
  {
    title: "CTF – Participation & résolution de challenges (Crypto)",
    categories: ["Crypto/CTF"],
    description:
      "Participation à des CTFs avec un focus sur la cryptographie : analyse de challenges, compréhension des mécanismes et résolution progressive.",
    tags: ["CTF", "Cryptographie", "Problem solving", "Security mindset"],
    context: "Pratique personnelle / apprentissage continu",
  },

  {
    title: "Topologies réseaux & subnetting (Simulations)",
    categories: ["Réseaux"],
    description:
      "Conception de réseaux (topologies variées), plan d’adressage IP, subnetting, configuration et analyse de trafic via outils de simulation.",
    tags: ["Packet Tracer", "GNS3", "Subnetting", "Wireshark"],
    context: "Projets académiques",
  },

  {
    title: "Documentation technique & fonctionnelle (projets multidisciplinaires)",
    categories: ["Documentation"],
    description:
      "Rédaction de documentation complète : cahier des charges, spécifications, diagrammes, user flows et livrables de projet.",
    tags: ["Cahier des charges", "Specs", "UML", "Documentation"],
    context: "Compétence transversale (plusieurs projets)",
  },

  {
    title: "Plateforme de digitalisation des documents (administration)",
    categories: ["UI/UX Design", "Frontend"],
    description:
      "Plateforme visant à organiser et digitaliser les documents (workflow, centralisation, accès), pensée pour des utilisateurs non techniques.",
    tags: ["Workflow", "UI/UX", "Web", "Organisation"],
    context: "Projet multidisciplinaire (Algérie)",
  },

  {
    title: "Hackathon – Application restauration (livraison & services)",
    categories: ["UI/UX Design", "Frontend"],
    description:
      "Prototype d’application orientée restauration : livraison et services, conçu et développé sous contrainte de temps en équipe.",
    tags: ["Hackathon", "Prototype", "UI/UX", "Teamwork"],
    context: "Hackathon",
  },

 
];

const categories: Category[] = [
  "Tous",
  "UI/UX Design",
  "Frontend",
  "Backend/API",
  "Game Dev",
  "Compilation",
  "Crypto/CTF",
  "Réseaux",
  "Documentation",
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("Tous");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "Tous") return projects;
    return projects.filter((p) => p.categories.includes(activeCategory));
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="max-w-5xl mx-auto px-4 py-24">
        <h1 className="text-3xl md:text-4xl font-semibold">Projets</h1>
        <p className="mt-3 text-sm md:text-base opacity-75">
          Un aperçu de mes projets en design, développement, réseaux et sécurité.
          Chaque projet reflète ma manière de réfléchir, structurer et livrer des
          solutions concrètes.
        </p>

        {/* Filtres */}
        <div className="mt-6 flex flex-wrap gap-2 text-xs md:text-sm">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
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

        {/* Liste projets */}
        <div className="mt-8 grid gap-5 md:gap-6 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <article
              key={project.title + index}
              className="rounded-2xl border border-foreground/15 bg-background/60 p-4 md:p-5 shadow-sm hover:-translate-y-1 hover:shadow-md transition-transform"
            >
              {/* ✅ show all categories as small chips */}
              <div className="flex flex-wrap gap-1.5 mb-2">
                {project.categories.map((cat) => (
                  <span
                    key={cat}
                    className="text-[11px] uppercase tracking-[0.2em] opacity-60"
                  >
                    {cat}
                  </span>
                ))}
              </div>

              <h2 className="text-sm md:text-base font-semibold">
                {project.title}
              </h2>

              {project.context && (
                <p className="mt-1 text-[11px] opacity-60">{project.context}</p>
              )}

              <p className="mt-2 text-xs md:text-sm opacity-80">
                {project.description}
              </p>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full text-[11px] border border-foreground/15 bg-foreground/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}

          {filteredProjects.length === 0 && (
            <p className="mt-6 text-sm opacity-70">
              Aucun projet dans cette catégorie pour le moment.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
