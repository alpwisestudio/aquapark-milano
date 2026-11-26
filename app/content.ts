// Tutti i testi e i dati del sito. Fonte: 01-ricerca/scheda.md (acquaticapark.it, listino 2026).
import type { StaticImageData } from "next/image";
import babyLagoon from "@/photos/baby-lagoon.jpg";
import crazyRiver from "@/photos/crazy-river.jpg";
import fiumeLento from "@/photos/fiume-lento.jpg";
import foam from "@/photos/foam.jpg";
import homeFoam from "@/photos/home-foam.jpg";
import kamikaze from "@/photos/kamikaze.jpg";
import lagunaAzteca from "@/photos/laguna-azteca.jpg";
import piada from "@/photos/piada.jpg";
import pokepizza from "@/photos/pokepizza.jpg";
import raftingPipe from "@/photos/rafting-pipe.jpg";
import rainbow from "@/photos/rainbow.jpg";
import shuttle from "@/photos/shuttle.jpg";
import spaceBowl from "@/photos/space-bowl.jpg";
import sprayPark from "@/photos/spray-park.jpg";
import toboga from "@/photos/toboga.jpg";
import torre from "@/photos/torre.jpg";
import torrente from "@/photos/torrente.jpg";
import twister from "@/photos/twister.jpg";

export const SHOP_URL = "#biglietti"; // nel mock i biglietti puntano alla sezione listino
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Acquatica+Park+Via+Gaetano+Airaghi+Milano";
export const PHONE = { label: "02 4820 0134", href: "tel:+390248200134" };
export const EMAIL = "info@acquaticapark.it";
export const EMAIL_GRUPPI = "gruppi@acquaticapark.it";
export const REVIEWS = {
  score: "4,2",
  count: 256,
  source: "Tiqets",
  href: "https://www.tiqets.com/it/acquatica-park-biglietti-l146723/",
};

export const season = {
  label: "Stagione 2026",
  dates: "30 maggio – 6 settembre",
  hours: "10:00 – 19:00",
  pools: "vasche fino alle 18:30",
  closed: "chiuso dal 3 al 5 giugno",
};

export const hero = {
  // video della home di acquaticapark.it (40 MB, servito dal loro streaming)
  video: "https://streaming.matematici.com/acquatica/home/ap26.mp4",
  photo: homeFoam,
  alt: "Tre ragazze scendono insieme sullo scivolo largo, tra gli spruzzi d'acqua",
};

export const stats = [
  { value: 19, unit: "m", label: "la partenza del Kamikaze" },
  { value: 340, unit: "m", label: "di Fiume Lento" },
  { value: 25, unit: "m", label: "la Torre degli Scivoli" },
  { value: 100000, unit: "m²", label: "di parco, prato e vasche", prefix: "oltre " },
];

export type Group = "Adrenalina" | "Famiglia" | "Bimbi";
export type Attraction = {
  name: string;
  group: Group;
  spec: string;
  text: string;
  photo: StaticImageData;
  alt: string;
};

export const attractions: Attraction[] = [
  { name: "Kamikaze", group: "Adrenalina", spec: "19 m · 2 piste da 90 m", text: "Si parte da 19 metri e si arriva in un lampo.", photo: kamikaze, alt: "Lo scivolo Kamikaze con lo spruzzo d'arrivo e gli ombrelloni blu" },
  { name: "Torre degli Scivoli", group: "Famiglia", spec: "fino a 25 m · 3 percorsi", text: "Tre percorsi dalla stessa torre, senza limiti di altezza.", photo: torre, alt: "La Torre degli Scivoli con gli scivoli arancio, giallo e rosso sopra la piscina" },
  { name: "Shuttle", group: "Adrenalina", spec: "gara a tempo · 2 piste", text: "Due piste affiancate da 10 metri, sul tappetino, a cronometro.", photo: shuttle, alt: "Una ragazza alla partenza dello Shuttle con il tappetino blu" },
  { name: "Space Bowl", group: "Adrenalina", spec: "vortice", text: "Un vortice artificiale che finisce con uno splash.", photo: spaceBowl, alt: "Il catino bianco dello Space Bowl visto dall'alto" },
  { name: "Twister", group: "Adrenalina", spec: "2 scivoli a spirale", text: "Due spirali chiuse, una accanto all'altra.", photo: twister, alt: "Le spirali rosse del Twister" },
  { name: "Rafting Pipe", group: "Adrenalina", spec: "rampa a V", text: "Su e giù per una rampa a V, in gommone.", photo: raftingPipe, alt: "La rampa del Rafting Pipe con un gommone verde" },
  { name: "Fiume Lento", group: "Famiglia", spec: "340 m", text: "Calme acque per 340 metri, rinnovato per il 2026.", photo: fiumeLento, alt: "Bambini che nuotano nel Fiume Lento" },
  { name: "Crazy River", group: "Famiglia", spec: "210 m in gommone", text: "Duecentodieci metri di fiume, seduti sul gommone.", photo: crazyRiver, alt: "Ragazzi con i gommoni colorati all'arrivo del Crazy River" },
  { name: "Foam", group: "Famiglia", spec: "4 piste morbide", text: "Quattro piste morbide per scendere come vuoi.", photo: foam, alt: "Le piste bianche del Foam che scendono in piscina" },
  { name: "Laguna Azteca", group: "Famiglia", spec: "rocce e cascate", text: "Rocce, cascate e lettini all'ombra dei gazebo.", photo: lagunaAzteca, alt: "La porta in pietra della Laguna Azteca con la cascata" },
  { name: "Toboga", group: "Famiglia", spec: "3 scivoli", text: "Tre scivoli con lunghezze e pendenze diverse.", photo: toboga, alt: "Gli scivoli gialli e blu del Toboga" },
  { name: "Baby Lagoon", group: "Bimbi", spec: "acqua bassa", text: "Più livelli, spruzzi e piccoli scivoli.", photo: babyLagoon, alt: "Bambini sotto la cascata della Baby Lagoon" },
  { name: "Torrente Veloce", group: "Famiglia", spec: "corrente continua", text: "Una corrente che non si ferma mai.", photo: torrente, alt: "La vasca azzurra del Torrente Veloce" },
  { name: "Spray Park", group: "Bimbi", spec: "fontane interattive", text: "Fontane da azionare, castelli e scivoli bassi.", photo: sprayPark, alt: "Lo Spray Park con i castelli dai tetti rossi" },
  { name: "Rainbow", group: "Bimbi", spec: "superfici morbide", text: "Scivoli colorati per i più piccoli.", photo: rainbow, alt: "Bambini che salgono la scaletta colorata del Rainbow" },
];

export const tickets = [
  { name: "Giornaliero", who: "intero", online: 28, cassa: 29, note: "dalle 10:00 alla chiusura", cta: "Compra il giornaliero" },
  { name: "Famiglia", who: "2 adulti + 2 bambini 100–140 cm", online: 86, cassa: 88, note: "il conto più leggero per quattro", featured: true, cta: "Compra il pacchetto famiglia" },
  { name: "Pomeridiano", who: "intero", online: 23, cassa: 24, note: "dalle 14:30", cta: "Compra il pomeridiano" },
];
export const ticketsExtra = [
  { name: "Ridotto giornaliero o pomeridiano", price: "21 €" },
  { name: "Famiglia con bambini oltre 140 cm", price: "107 €" },
  { name: "Gazebo + 2 lettini", price: "30 € online · 32 € in cassa" },
  { name: "Ombrellone + 2 lettini in Spiaggia", price: "20 € online · 22 € in cassa" },
  { name: "Lettino singolo", price: "5 € online · 6 € in cassa" },
  { name: "Gommone singolo / doppio", price: "4 € / 5 €" },
];

export const food = [
  { name: "Bar Caribbean", text: "Street food, gelato e granite, in centro al parco." },
  { name: "Piadineria La Piada", text: "Piadine dolci e salate, all'ingresso dell'area Azteca." },
  { name: "Tropico Bahia", text: "Pizza, insalate e poke, anche da asporto." },
  { name: "Chiringuito La Playa", text: "Cocktail tropicali e frullati di frutta." },
];
export const foodPhotos = [
  { photo: pokepizza, alt: "Pizza e poke con avocado di Tropico Bahia" },
  { photo: piada, alt: "Una piadina farcita della Piadineria La Piada" },
];

export const services = [
  { name: "Area picnic", text: "Nel verde, porti il tuo pranzo. Niente vetro." },
  { name: "Armadietti", text: "5 € regular, 7 € large." },
  { name: "Parcheggio", text: "Auto 3 € feriali, 5 € festivi. Gratuito a pochi passi." },
  { name: "Accessibilità", text: "Ingresso gratuito per persone non deambulanti con tessera." },
];

export const routes = [
  { line: "M1", color: "#E3001B", stop: "Bisceglie", bus: "76" },
  { line: "M1", color: "#E3001B", stop: "De Angeli", bus: "80" },
  { line: "M5", color: "#8C4799", stop: "San Siro Stadio", bus: "80 o 423" },
];

export const groups = {
  items: ["Compleanni", "Comunioni", "Feste di laurea", "Scuole e centri estivi", "A.S.D., C.A.G. e oratori"],
};
