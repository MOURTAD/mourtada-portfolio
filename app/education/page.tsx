export default function EducationPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="max-w-5xl mx-auto px-4 py-24">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Parcours académique
        </h1>
        <p className="mt-3 text-sm md:text-base opacity-75">
          Une vue structurée de mon cursus en informatique, avec les modules
          marquants et les compétences développées au fil des années.
        </p>

        {/* Timeline générale */}
        <div className="mt-10 space-y-8">
          {/* UCA (L3 + M1) */}
          <div className="border border-foreground/15 rounded-2xl p-5 md:p-6">
            <p className="text-xs uppercase tracking-[0.2em] opacity-60 mb-1">
              2024 – Aujourd&apos;hui · Nice, France
            </p>
            <h2 className="text-lg md:text-xl font-semibold">
              Licence Informatique (L3) & Master Informatique (M1) – Université Côte d&apos;Azur
            </h2>
            <p className="mt-2 text-sm opacity-75">
              Cursus universitaire orienté ingénierie : consolidation des bases
              théoriques, développement, systèmes/réseaux et ouverture sur des
              notions d&apos;intelligence artificielle.
            </p>

            {/* Modules principaux */}
            <div className="mt-4">
              <h3 className="text-sm font-semibold mb-2">Axes & modules</h3>
              <div className="grid gap-3 md:grid-cols-2 text-xs md:text-sm">
                <div className="rounded-xl border border-foreground/15 bg-background/60 p-3">
                  <p className="font-medium">Développement & génie logiciel</p>
                  <p className="mt-1 opacity-75">
                    Conception, programmation orientée objet, structuration de
                    projets et bonnes pratiques de code.
                  </p>
                </div>

                <div className="rounded-xl border border-foreground/15 bg-background/60 p-3">
                  <p className="font-medium">Systèmes & réseaux</p>
                  <p className="mt-1 opacity-75">
                    Concepts avancés autour des systèmes, communications et
                    compréhension des couches réseau.
                  </p>
                </div>

                <div className="rounded-xl border border-foreground/15 bg-background/60 p-3">
                  <p className="font-medium">Compilation & bases théoriques</p>
                  <p className="mt-1 opacity-75">
                    Notions liées aux langages formels, compilation et modèles
                    théoriques.
                  </p>
                </div>

                <div className="rounded-xl border border-foreground/15 bg-background/60 p-3">
                  <p className="font-medium">Bases en intelligence artificielle</p>
                  <p className="mt-1 opacity-75">
                    Introduction aux concepts IA et à la logique derrière les
                    approches modernes (fondations, méthodes, usages).
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 text-xs md:text-sm opacity-80">
              <p>
                Cette étape m&apos;a permis de renforcer mes compétences techniques
                tout en élargissant mon champ vers des thématiques actuelles
                comme l&apos;IA.
              </p>
            </div>
          </div>

          {/* ESI – Cycle supérieur */}
          <div className="border border-foreground/15 rounded-2xl p-5 md:p-6">
            <p className="text-xs uppercase tracking-[0.2em] opacity-60 mb-1">
              2023 – 2024 · Sidi Bel Abbès, Algérie
            </p>
            <h2 className="text-lg md:text-xl font-semibold">
              Cycle supérieur (1ère année) – École Supérieure d&apos;Informatique (ESI)
            </h2>
            <p className="mt-2 text-sm opacity-75">
              Approfondissement en informatique avec une approche plus orientée
              projets, documentation et concepts avancés (réseaux, sécurité,
              automates, etc.).
            </p>

            <div className="mt-4">
              <h3 className="text-sm font-semibold mb-2">Modules / compétences</h3>
              <div className="grid gap-3 md:grid-cols-2 text-xs md:text-sm">
                <div className="rounded-xl border border-foreground/15 bg-background/60 p-3">
                  <p className="font-medium">Gestion de projet & documentation</p>
                  <p className="mt-1 opacity-75">
                    Cahier des charges, diagrammes (UML), livrables et
                    structuration de projets en équipe.
                  </p>
                </div>

                <div className="rounded-xl border border-foreground/15 bg-background/60 p-3">
                  <p className="font-medium">Réseaux & sécurité</p>
                  <p className="mt-1 opacity-75">
                    Bases renforcées en réseaux, sécurité et logique de
                    protection des systèmes.
                  </p>
                </div>

                <div className="rounded-xl border border-foreground/15 bg-background/60 p-3">
                  <p className="font-medium">Automates & théorie</p>
                  <p className="mt-1 opacity-75">
                    Modélisation, automates, notions de langages formels et
                    raisonnement théorique.
                  </p>
                </div>

                <div className="rounded-xl border border-foreground/15 bg-background/60 p-3">
                  <p className="font-medium">Analyse numérique</p>
                  <p className="mt-1 opacity-75">
                    Méthodes numériques et outils mathématiques appliqués à la
                    résolution de problèmes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ESI – Cycle préparatoire */}
          <div className="border border-foreground/15 rounded-2xl p-5 md:p-6">
            <p className="text-xs uppercase tracking-[0.2em] opacity-60 mb-1">
              2021 – 2023 · Sidi Bel Abbès, Algérie
            </p>
            <h2 className="text-lg md:text-xl font-semibold">
              Cycle préparatoire (2 ans) – École Supérieure d&apos;Informatique (ESI)
            </h2>
            <p className="mt-2 text-sm opacity-75">
              Formation intensive axée sur les mathématiques et les fondamentaux
              de l&apos;informatique, avec une forte rigueur scientifique.
            </p>

            <div className="mt-4">
              <h3 className="text-sm font-semibold mb-2">Fondations</h3>
              <ul className="text-xs md:text-sm opacity-80 space-y-1">
                <li>• Algorithmique & fondamentaux de l’informatique</li>
                <li>• Algèbre, analyse, probabilités</li>
                <li>• Programmation & bases POO</li>
                <li>• Systèmes d’exploitation (Linux) – bases</li>
                <li>• Architecture des ordinateurs</li>
              </ul>
            </div>
          </div>

          {/* Bac */}
          <div className="border border-foreground/15 rounded-2xl p-5 md:p-6">
            <p className="text-xs uppercase tracking-[0.2em] opacity-60 mb-1">
              2021 · Algérie
            </p>
            <h2 className="text-lg md:text-xl font-semibold">
              Baccalauréat – Filière Mathématique
            </h2>
            <p className="mt-2 text-sm opacity-75">
              Moyenne : <span className="font-medium">16,76 / 20</span>.
            </p>
          </div>
        </div>

        {/* Conclusion */}
        <div className="mt-10 border border-foreground/15 rounded-2xl p-4 md:p-5 text-xs md:text-sm opacity-80">
          Mon parcours académique m&apos;a donné une base solide en informatique
          (algorithmique, programmation, systèmes/réseaux) tout en développant
          des compétences de structuration (documentation, projets). Aujourd’hui,
          je continue à monter en niveau à l’université, avec une ouverture sur
          l’IA et des sujets modernes.
        </div>
      </section>
    </main>
  );
}
