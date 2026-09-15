export interface WasteItem {
  id: string;
  name: string;
  category: "cocina" | "jardin" | "mascotas" | "prohibido";
  allowed: boolean;
  silvaAdvice: string;
  iconName: string;
  tag: string;
  badgeColor?: string;
}

export const WASTE_DATABASE: WasteItem[] = [
  // Frutas y Verduras
  {
    id: "cascaras-fruta",
    name: "Cáscaras de frutas (plátano, papaya, mango)",
    category: "cocina",
    allowed: true,
    silvaAdvice: "Ideales para el centro del nido. No necesitas picarlas; la fermentación y los insectos recicladores las descomponen.",
    iconName: "Apple",
    tag: "Frutas",
  },
  {
    id: "citricos",
    name: "Cítricos (naranjas, limones, piña)",
    category: "cocina",
    allowed: true,
    silvaAdvice: "En la paca Silva sí van. A diferencia del lombricultivo, los microorganismos y hongos de la paca procesan los cítricos sin problema.",
    iconName: "Sun",
    tag: "Cítricos",
  },
  {
    id: "aguacate",
    name: "Pepas y cáscaras de aguacate",
    category: "cocina",
    allowed: true,
    silvaAdvice: "Aportan estructura y materia leñosa lenta. Tardarán más tiempo, pero al cosechar a los 6 meses enriquecen el mantillo.",
    iconName: "CircleDot",
    tag: "Semillas",
  },
  {
    id: "cafe-filtros",
    name: "Restos de café y filtros de papel",
    category: "cocina",
    allowed: true,
    silvaAdvice: "Excelente fuente de nitrógeno y carbono. El filtro de papel sin blanquear se descompone rápidamente.",
    iconName: "Coffee",
    tag: "Café",
  },
  {
    id: "cascaras-huevo",
    name: "Cáscaras de huevo",
    category: "cocina",
    allowed: true,
    silvaAdvice: "Aportan calcio mineral al compost. Si puedes triturarlas un poco con la mano antes de echarlas, se integran más rápido.",
    iconName: "Egg",
    tag: "Minerales",
  },
  {
    id: "comida-cocida",
    name: "Comida cocida (arroz, fríjoles, pastas, verduras)",
    category: "cocina",
    allowed: true,
    silvaAdvice: "Permitido en la paca Silva. Importante: escurre los caldos y líquidos en el sifón antes de echarlos al balde.",
    iconName: "Utensils",
    tag: "Cocidos",
  },
  {
    id: "carnes-huesos",
    name: "Restos de carne, pollo, pescado y huesos pequeños",
    category: "cocina",
    allowed: true,
    silvaAdvice: "Gran aporte proteico. Guillermo Silva demostró que al prensarse en el nido central y limitar el oxígeno, no generan moscas ni olor.",
    iconName: "Flame",
    tag: "Cárnicos",
  },
  {
    id: "pan-arepas",
    name: "Pan, arepas y cereales secos",
    category: "cocina",
    allowed: true,
    silvaAdvice: "Se fermentan fácilmente enriqueciendo la flora bacteriana. Colócalos en el centro del nido bien cubiertos.",
    iconName: "Wheat",
    tag: "Harinas",
  },

  // Jardín & Materia Seca
  {
    id: "hojarasca-seca",
    name: "Hojarasca seca de árboles y parque",
    category: "jardin",
    allowed: true,
    silvaAdvice: "El pilar de la PDS. Se requiere igual peso de hojarasca que de cocina (relación 1:1). Sirve para el nido perimetral y la cobertura.",
    iconName: "Leaf",
    tag: "Materia Seca",
  },
  {
    id: "ramas-drenaje",
    name: "Ramas, chamizas y palos leñosos",
    category: "jardin",
    allowed: true,
    silvaAdvice: "Paso 1 del manual: se colocan al fondo en un solo sentido para drenar excesos de agua y aislar el bloque del piso húmedo.",
    iconName: "TreePine",
    tag: "Drenaje",
  },
  {
    id: "pasto-verde",
    name: "Césped y hierba verde recién podada",
    category: "jardin",
    allowed: true,
    silvaAdvice: "Excelente material para complementar el nido. Písala bien para compactar el volumen de aire.",
    iconName: "Sprout",
    tag: "Verde",
  },
  {
    id: "aserrin-madera",
    name: "Aserrín o viruta de madera natural (sin pintar)",
    category: "jardin",
    allowed: true,
    silvaAdvice: "Elemento clave cuando la hojarasca escasea. Úsalo también al fondo de tu balde en la cocina para absorber humedad.",
    iconName: "Layers",
    tag: "Seco",
  },
  {
    id: "servilletas-papel",
    name: "Servilletas de papel y toallas de cocina sin químicos",
    category: "jardin",
    allowed: true,
    silvaAdvice: "Papel picado o toallas sin tintas plásticas son celulosa digestible que ayuda a balancear la humedad.",
    iconName: "FileText",
    tag: "Papel",
  },

  // Mascotas
  {
    id: "estiercol-perro",
    name: "Estiércol de perro (con aserrín o papel)",
    category: "mascotas",
    allowed: true,
    silvaAdvice: "Página 4 del manual: Almacenar en caneca hermética con aserrín o tierra al fondo. La fermentación a 60°C higieniza el material.",
    iconName: "Dog",
    tag: "Mascotas",
  },
  {
    id: "arena-gatos",
    name: "Arena de gato con estiércol (sin químicos)",
    category: "mascotas",
    allowed: true,
    silvaAdvice: "Guillermo Silva indica que se puede incorporar al centro de la paca cubriendo bien con hojarasca y prensando a fondo.",
    iconName: "Cat",
    tag: "Mascotas",
  },

  // Prohibidos
  {
    id: "stickers-fruta",
    name: "Calcomanías y stickers de las frutas",
    category: "prohibido",
    allowed: false,
    silvaAdvice: "Son de vinilo plástico y nunca se degradan; contaminan el abono final con microplásticos. Retíralas siempre.",
    iconName: "Tag",
    tag: "Retirar",
  },
  {
    id: "bolsas-plasticas",
    name: "Bolsas plásticas (incluso biodegradables)",
    category: "prohibido",
    allowed: false,
    silvaAdvice: "El balde se vacía directo a la paca. Ningún plástico debe ingresar porque bloquea los microorganismos y arruina la cosecha.",
    iconName: "ShoppingBag",
    tag: "Prohibido",
  },
  {
    id: "vidrio-latas",
    name: "Vidrios, latas, grapas y alambres",
    category: "prohibido",
    allowed: false,
    silvaAdvice: "Peligroso para los vecinos que pisan la paca y arruina el suelo para las plantas y niños del parque.",
    iconName: "Trash2",
    tag: "Peligroso",
  },
  {
    id: "quimicos-medicinas",
    name: "Medicamentos, cloro, pinturas o químicos",
    category: "prohibido",
    allowed: false,
    silvaAdvice: "Matan la vida microbiológica (hongos, bacterias, lombrices y larvas recicladoras) que hacen posible la paca.",
    iconName: "FlaskConical",
    tag: "Tóxico",
  },
  {
    id: "colillas-cigarrillo",
    name: "Colillas de cigarrillo",
    category: "prohibido",
    allowed: false,
    silvaAdvice: "Tienen acetato de celulosa plástico y nicotina tóxica concentrada. Van a la basura ordinaria.",
    iconName: "Cigarette",
    tag: "Prohibido",
  },
  {
    id: "aceites-usados",
    name: "Aceite de cocina quemado en gran cantidad",
    category: "prohibido",
    allowed: false,
    silvaAdvice: "Pequeñas sobras de comida grasosa sí van, pero litros de aceite frito saturan el nido. Llévalo a puntos limpios de aceite.",
    iconName: "Droplets",
    tag: "Punto limpio",
  }
];
