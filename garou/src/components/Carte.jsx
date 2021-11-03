export default function Carte({ type }) {
  const cardsData = {
    villageois: {
      title: "Villageois",
      description:
        "Son objectif est d'éliminer tous les Loups-Garous. Il ne dispose d'aucun pouvoir particulier : uniquement sa perspicacité et sa force de persuasion.",
    },
    garou: {
      title: "Loup-Garou",
      description:
        "Son objectif est d'éliminer tous les innocents (ceux qui ne sont pas Loups-Garous). Chaque nuit, il se réunit avec ses compères Loups pour décider d'une victime à éliminer...",
    },
    voyante: {
      title: "Voyante",
      description:
        "Son objectif est d'éliminer tous les Loups-Garous. Chaque nuit, elle peut espionner un joueur et découvrir sa véritable identité...",
    },
  };

  const carte = cardsData[type];

  return (
    <div className="carte">
      <h2>{carte.title}</h2>
      <p>{carte.description}</p>
    </div>
  );
}
