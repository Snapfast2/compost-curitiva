export interface PacaRecord {
  id: string;
  name: string;
  startDate: string; // YYYY-MM-DD
  harvestDate: string; // YYYY-MM-DD
  daysElapsed: number;
  totalDays: number;
  status: "en-construccion" | "madurando" | "cosecha-lista";
  kgOrganic: number;
  kgLeaves: number;
  projectedCompostKg: number;
  godparents: string[];
  notes: string;
  tag: string;
  floraTop: string; // qué sembraron encima (jardinera)
}

export const PACAS_DATA: PacaRecord[] = [
  {
    id: "paca-06-domingo-proximo",
    name: "Paca #6: 'La Esperanza'",
    startDate: "2026-09-20",
    harvestDate: "2027-03-20",
    daysElapsed: 0,
    totalDays: 180,
    status: "en-construccion",
    kgOrganic: 0,
    kgLeaves: 0,
    projectedCompostKg: 150,
    godparents: ["Mauricio", "Vecinos del Parque", "Nuevos participantes"],
    notes: "¡Es la paca que construiremos este próximo domingo a las 9:30 AM! Trae tu balde para inaugurarla.",
    tag: "Próxima Paca",
    floraTop: "Semillas de caléndula y albahaca",
  },
  {
    id: "paca-05-guayacan",
    name: "Paca #5: 'Guayacán Amarillo'",
    startDate: "2026-08-23",
    harvestDate: "2027-02-23",
    daysElapsed: 23,
    totalDays: 180,
    status: "madurando",
    kgOrganic: 260,
    kgLeaves: 250,
    projectedCompostKg: 155,
    godparents: ["Mauricio", "Familia Gómez", "Doña Luz M."],
    notes: "Superó la fase térmica inicial (55°C). Ya brotan los primeros tréboles en la superficie.",
    tag: "Fase Fermentación",
    floraTop: "Trébol blanco silvestre",
  },
  {
    id: "paca-04-la-ceiba",
    name: "Paca #4: 'La Ceiba'",
    startDate: "2026-07-12",
    harvestDate: "2027-01-12",
    daysElapsed: 65,
    totalDays: 180,
    status: "madurando",
    kgOrganic: 245,
    kgLeaves: 240,
    projectedCompostKg: 148,
    godparents: ["Vecinos de Transversal 39", "Carlos R.", "Juliana"],
    notes: "Estructura cúbica perfecta. Se observan larvas de cucarrón reciclador trabajando activamente.",
    tag: "Fase Microbiana",
    floraTop: "Menta y hierbabuena",
  },
  {
    id: "paca-03-colibri",
    name: "Paca #3: 'El Colibrí'",
    startDate: "2026-05-17",
    harvestDate: "2026-11-17",
    daysElapsed: 121,
    totalDays: 180,
    status: "madurando",
    kgOrganic: 270,
    kgLeaves: 260,
    projectedCompostKg: 160,
    godparents: ["Comunidad Calle 38", "Edificio Los Álamos", "Mauricio"],
    notes: "A solo 2 meses de la cosecha. La temperatura interna ya es ambiente y el olor es de tierra mojada.",
    tag: "Maduración Final",
    floraTop: "Begonias y geranios",
  },
  {
    id: "paca-02-conquistadores",
    name: "Paca #2: 'Conquistadores'",
    startDate: "2026-03-15",
    harvestDate: "2026-09-15",
    daysElapsed: 180,
    totalDays: 180,
    status: "cosecha-lista",
    kgOrganic: 250,
    kgLeaves: 250,
    projectedCompostKg: 152,
    godparents: ["Mauricio", "Doña Marta", "Vecinos fundadores"],
    notes: "Cosecha lista: 152 kg de mantillo de bosque nativo 100% fértil para las jardineras y plantas de los vecinos.",
    tag: "Lista para Cosechar",
    floraTop: "Jardín florido",
  },
];

export const PARK_SUMMARY = {
  totalPacasHistoric: 8,
  totalOrganicDivertedKg: 2150, // kg salvados de La Pradera
  totalDryMatterKg: 2100,
  totalCompostHarvestedKg: 1250,
  familiesParticipating: 34,
  litersLeachatePrevented: 1350,
  parkAddress: "Calle 38 # 64A-8, Conquistadores, Medellín",
  sundayMeetingTime: "9:30 AM",
  whatsappGroup1Url: "https://chat.whatsapp.com/sample-compost-vecinos-1",
  whatsappGroup2Url: "https://chat.whatsapp.com/sample-compost-vecinos-2",
  googleMapsUrl: "https://maps.google.com/?q=Calle+38+%23+64A-8,+Medellin",
};
