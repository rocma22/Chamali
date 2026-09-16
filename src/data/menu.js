export const MENU_DATA = [
  {
    id: "entrees",
    name: "Entrées",
    icon: "🥗",
    items: [
      { name: "Salade Coin Rose", description: "Grenade, feta, roquette, vinaigrette au miel de fleur d'oranger.", price: "45 MAD", tags: ["veg"] },
      { name: "Pastilla au poulet et amandes", description: "Feuilleté croustillant, cannelle et sucre glace.", price: "55 MAD", tags: [] },
      { name: "Velouté de potiron épicé", description: "Crème fraîche et graines de courge torréfiées.", price: "40 MAD", tags: ["veg"] },
      { name: "Tartare de saumon aux agrumes", description: "Avocat, citron vert et coriandre fraîche.", price: "65 MAD", tags: [] }
    ]
  },
  {
    id: "plats",
    name: "Plats Signature",
    icon: "🍽️",
    items: [
      { name: "Tagine Coin Rose", description: "Agneau confit, pruneaux, amandes et miel.", price: "120 MAD", tags: ["signature"] },
      { name: "Poulet rôti aux olives et citron confit", description: "Cuisson lente, jus court à la coriandre.", price: "95 MAD", tags: [] },
      { name: "Couscous royal", description: "Sept légumes, merguez, poulet et agneau.", price: "110 MAD", tags: [] },
      { name: "Filet de bœuf sauce au poivre rose", description: "Purée truffée, légumes de saison.", price: "145 MAD", tags: ["signature"] }
    ]
  },
  {
    id: "pates",
    name: "Pâtes & Risottos",
    icon: "🍝",
    items: [
      { name: "Risotto aux champignons et truffe", description: "Parmesan affiné 24 mois.", price: "90 MAD", tags: ["veg"] },
      { name: "Tagliatelles aux fruits de mer", description: "Sauce safranée, ail confit.", price: "100 MAD", tags: [] },
      { name: "Penne all'arrabbiata", description: "Burrata crémeuse, piment doux.", price: "75 MAD", tags: ["veg", "spice"] },
      { name: "Lasagne Coin Rose", description: "Bœuf mijoté, béchamel légèrement parfumée à la rose.", price: "85 MAD", tags: [] }
    ]
  },
  {
    id: "grillades",
    name: "Grillades & Poissons",
    icon: "🍖",
    items: [
      { name: "Brochettes d'agneau marinées", description: "Légumes grillés, sauce chermoula.", price: "100 MAD", tags: [] },
      { name: "Loup de mer grillé", description: "Beurre blanc au safran.", price: "130 MAD", tags: [] },
      { name: "Côte de bœuf Black Angus", description: "À partager, sel de Guérande.", price: "220 MAD", tags: ["signature"] },
      { name: "Crevettes royales flambées", description: "Flambées au whisky, beurre à l'ail.", price: "140 MAD", tags: ["spice"] }
    ]
  },
  {
    id: "desserts",
    name: "Desserts",
    icon: "🍰",
    items: [
      { name: "Fondant au chocolat Coin Rose", description: "Cœur coulant, glace vanille de Madagascar.", price: "50 MAD", tags: ["signature", "veg"] },
      { name: "Cornes de gazelle maison", description: "Servies avec thé à la menthe.", price: "35 MAD", tags: ["veg"] },
      { name: "Tarte aux fraises et rose", description: "Chantilly légère, éclats de pistache.", price: "45 MAD", tags: ["veg"] },
      { name: "Assiette de fruits frais de saison", description: "Sélection du marché du jour.", price: "30 MAD", tags: ["veg"] }
    ]
  },
  {
    id: "boissons",
    name: "Boissons & Mocktails",
    icon: "🍹",
    items: [
      { name: "Thé à la menthe traditionnel", description: "Servi à la marocaine.", price: "20 MAD", tags: ["veg"] },
      { name: "Jus d'orange pressé", description: "Pressé minute.", price: "25 MAD", tags: ["veg"] },
      { name: "Mocktail Coin Rose", description: "Sirop de rose, citron frais, eau pétillante.", price: "35 MAD", tags: ["signature", "veg"] },
      { name: "Café marocain épicé", description: "Cannelle, cardamome et gingembre.", price: "18 MAD", tags: ["spice"] }
    ]
  }
];

export const TAG_LABELS = {
  signature: "Signature",
  veg: "Végétarien",
  spice: "Épicé"
};

export const CAT_GRADIENTS = {
  entrees: "linear-gradient(150deg,#f7c9dc,#e01a63)",
  plats: "linear-gradient(150deg,#f2528c,#8c0d3a)",
  pates: "linear-gradient(150deg,#f6c453,#e01a63)",
  grillades: "linear-gradient(150deg,#c8124a,#3a0716)",
  desserts: "linear-gradient(150deg,#f9b8d1,#c11151)",
  boissons: "linear-gradient(150deg,#8fd7d2,#e01a63)"
};
