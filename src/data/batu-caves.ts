/**
 * Arulmigu Sri Subramaniar Swamy Temple, Batu Caves (Gombak, Selangor, Malaysia).
 *
 * Facts cross-checked against Wikipedia ("Batu Caves", "Batu Caves Murugan Statue",
 * "Thaipusam") and murugan.org's article by the Chairman of the Sri Maha Mariamman
 * Temple Devasthanam, which administers the shrine. Where sources disagree, the
 * figure used here is the one noted inline.
 *
 * Darshan and pooja times are NOT officially published by the Devasthanam. The
 * times carried in `temples.ts` follow the hours reported consistently by Malaysian
 * travel and temple directories (06:00 - 21:00) and are surfaced in the UI with a
 * "confirm with the temple office" note. Do not present them as official.
 */

import type { CreditedImage } from "./temples";

export const BATU_CAVES_SLUG = "batu-caves-murugan";

/** Thaipusam follows the Tamil calendar, so it moves every Gregorian year. */
export const BATU_CAVES_THAIPUSAM_DATES = [
  { year: 2026, label: "Sun, 1 Feb 2026" },
  { year: 2027, label: "Fri, 22 Jan 2027" },
];

export const batuCavesFacts = [
  { label: "Consecrated", value: "1891 — murti installed by K. Thamboosamy Pillai" },
  { label: "Murugan statue", value: "42.7 m (140 ft) · unveiled at Thaipusam 2006" },
  { label: "Stairway", value: "272 concrete steps (1940) · repainted in colour, 2018" },
  { label: "Limestone massif", value: "~400 million years old · hill rises 325 m (1,066 ft)" },
  { label: "Cave system", value: "About 20 caves — Temple, Ramayana, Art Gallery & Dark Cave" },
  { label: "Temple grounds", value: "16 acres at the foot of Batu Hill" },
  { label: "Location", value: "Gombak, Selangor — 13 km north of Kuala Lumpur" },
  { label: "Administration", value: "Sri Maha Mariamman Temple Devasthanam, Kuala Lumpur" },
];

export interface BatuCave {
  name: string;
  category: "Sanctum" | "Cave" | "Statue" | "Nature";
  description: string;
  access: string;
}

export const batuCavesCaves: BatuCave[] = [
  {
    name: "Temple Cave (Cathedral Cave)",
    category: "Sanctum",
    description:
      "The largest cavern in the hill and home of the Sri Subramaniar Swamy sanctum, roughly 120 m (400 ft) above the plaza. Daylight falls into the vault through openings in the cave roof, lighting the shrines on the floor below.",
    access: "Top of the 272 steps · free entry",
  },
  {
    name: "Lord Murugan Statue",
    category: "Statue",
    description:
      "At 42.7 m (140 ft) this is the tallest statue in Malaysia and the second-tallest Murugan statue in the world. Built over three years from 2004 using about 350 tonnes of steel, 1,550 cubic metres of concrete and 300 litres of gold paint, at a cost of RM 2.5 million.",
    access: "Base plaza, right of the stairway · unveiled 29 Jan 2006",
  },
  {
    name: "Ramayana Cave",
    category: "Cave",
    description:
      "At the far left of the hill, a long chamber of painted dioramas narrating the Ramayana. A 15 m (49 ft) green Hanuman stands at the entrance; the Hanuman shrine was consecrated in November 2001.",
    access: "Ground level · separate ticket",
  },
  {
    name: "Cave Villa — Art Gallery & Museum Caves",
    category: "Cave",
    description:
      "Two ground-level caves filled with statues and painted panels from Hindu mythology, most of them telling episodes from the life of Lord Murugan.",
    access: "Ground level · separate ticket",
  },
  {
    name: "Dark Cave",
    category: "Nature",
    description:
      "A two-kilometre network of undeveloped passages branching off the stairway, kept in its natural state. It shelters 21 bat species and the trapdoor spider Liphistius batuensis, found nowhere else in the world.",
    access:
      "Midway up the stairs · conservation tours; access has been restricted at times — check before visiting",
  },
  {
    name: "Sungai Batu (Batu River)",
    category: "Nature",
    description:
      "The stream beside the hill where kavadi bearers take a ritual bath and are prepared before beginning the climb on Thaipusam day.",
    access: "Beside the temple grounds · busiest on Thaipusam eve and morning",
  },
  {
    name: "Damai Caves Climbing Walls",
    category: "Nature",
    description:
      "Nearly 160 bolted rock-climbing routes on the north-eastern face of the massif, on walls rising to about 150 m (490 ft).",
    access: "North-eastern side · run by private climbing outfits",
  },
];

export interface BatuCavesOffering {
  name: string;
  tamilName: string;
  significance: string;
  duration: string;
  note: string;
}

/**
 * Vow offerings documented at Batu Caves. The Devasthanam does not publish a fixed
 * price list for these, so no amounts are quoted here.
 */
export const batuCavesOfferings: BatuCavesOffering[] = [
  {
    name: "Paal Kudam (Milk Pot Offering)",
    tamilName: "பால் குடம்",
    significance:
      "The most common vow at Batu Caves. A brass or clay pot of milk is carried barefoot up the 272 steps and poured over the vel and the murti in the Temple Cave as abhishekam.",
    duration: "45 – 60 min including the climb",
    note: "Pots are prepared at licensed stalls on the base plaza. Carried by devotees of every age.",
  },
  {
    name: "Vel Kavadi Vow",
    tamilName: "வேல் காவடி",
    significance:
      "A portable altar decked with peacock feathers, borne on the shoulders and fixed to the body with vel skewers and hooks. Vel kavadi stand up to 2 m tall and can weigh 30 kg or more.",
    duration: "2 – 4 hrs from preparation to the sanctum",
    note: "Undertaken mainly at Thaipusam, after a fasting and abstinence period. Register at the Devasthanam kavadi counter.",
  },
  {
    name: "Archanai & Abhishekam",
    tamilName: "அர்ச்சனை / அபிஷேகம்",
    significance:
      "Name-and-star archanai at the Temple Cave sanctum, and abhishekam of milk, panneer, sandal and vibhuti on the utsava murti of Sri Subramaniar Swamy.",
    duration: "15 – 30 min",
    note: "Booked at the counter inside the Temple Cave. Heaviest demand on Tuesdays and Kirthigai days.",
  },
  {
    name: "Mottai / Thala Sambal (Tonsure)",
    tamilName: "மொட்டை",
    significance:
      "Offering of the hair at the base of the hill before the climb — a vow fulfilled by children and adults alike.",
    duration: "20 – 30 min",
    note: "Tonsure sheds sit on the base plaza, left of the stairway, with bathing facilities alongside.",
  },
  {
    name: "Kirthigai Deeparadhanai",
    tamilName: "கிருத்திகை தீபாராதனை",
    significance:
      "Monthly Kirthigai star worship of Lord Murugan, with lamp offerings and the chanting of the Kanda Sashti Kavacham in the Temple Cave.",
    duration: "1 – 1.5 hrs",
    note: "Falls once each Tamil month. Crowds are far lighter than Thaipusam but heavier than an ordinary day.",
  },
];

export const batuCavesThaipusam = {
  name: "Thaipusam · Batu Caves",
  tamilName: "தைப்பூசம்",
  nextDate: "Fri, 22 Jan 2027",
  summary:
    "The largest Hindu gathering in Malaysia and the defining festival of this temple, observed here since 1892. It falls on the full moon of the Tamil month of Thai, when the star Pusam is ascendant.",
  highlights: [
    "On the eve, the murti at Sri Mahamariamman Temple in Kuala Lumpur is bathed, decorated and placed on the silver chariot.",
    "The 350 kg silver chariot, carrying Murugan with Valli and Deivanai, is drawn from Jalan Tun H S Lee in KL to Batu Caves, halting along the route for prayers and coconut-breaking.",
    "Kavadi bearers bathe in the Sungai Batu, are pierced with vel skewers and hooks, and climb the 272 steps barefoot to discharge their vows.",
    "Paal kudam — milk pots — are carried up the stairway in an unbroken stream for close to three days.",
    "Devotees prepare with a fast and a period of abstinence beforehand; sources put it at anywhere from a fortnight to 48 days.",
  ],
  crowd: "Close to a million worshippers and visitors across the three festival days",
  publicHoliday:
    "A public holiday in Kuala Lumpur, Putrajaya, Selangor, Johor, Negeri Sembilan, Penang and Perak.",
};

export interface TravelOption {
  mode: string;
  detail: string;
  time: string;
}

export const batuCavesGettingThere: TravelOption[] = [
  {
    mode: "KTM Komuter",
    detail:
      "Batu Caves is the northern terminus of the Komuter line. The station sits at the edge of the temple grounds.",
    time: "~30 min from KL Sentral",
  },
  {
    mode: "Bus",
    detail:
      "RapidKL bus 11 runs from the Bangkok Bank stop near Pasar Seni / Central Market in central Kuala Lumpur.",
    time: "~45 – 60 min",
  },
  {
    mode: "Car / e-hailing",
    detail:
      "13 km north of the city centre via Jalan Kuching and the MRR2. Paid parking on the base plaza, which fills early at weekends.",
    time: "~25 – 40 min from KL city centre",
  },
  {
    mode: "Airport",
    detail:
      "Kuala Lumpur International Airport (KLIA / klia2) is the nearest airport — take the KLIA Ekspres to KL Sentral, then the Komuter.",
    time: "~2 hrs in total",
  },
];

export const batuCavesGuidelines = [
  "Entry to the Temple Cave is free. Cave Villa and the Dark Cave conservation tour are ticketed separately.",
  "Modest dress is required — shoulders and knees covered. Sarongs can be hired at the foot of the stairway.",
  "The 272 steps are steep and uneven in places. An escalator was announced in 2024 but is not yet in service, so there is no step-free route to the Temple Cave.",
  "Long-tailed macaques live on the stairway. Do not carry food, drinks or plastic bags in the open, do not feed them, and avoid eye contact.",
  "Footwear is removed before entering the sanctum area inside the Temple Cave.",
  "Quietest on weekday mornings soon after opening. Avoid Thaipusam, weekends and Malaysian public holidays if you want an unhurried darshan.",
];

export interface NearbyPlace {
  name: string;
  distance: string;
  icon: string;
}

export const batuCavesNearby: NearbyPlace[] = [
  { name: "Batu Caves KTM Komuter Station", distance: "0.3 km", icon: "🚆" },
  { name: "Indian Vegetarian Stalls (Base Plaza)", distance: "0.1 km", icon: "🍽" },
  { name: "ATM & Money Changer", distance: "0.2 km", icon: "🏧" },
  { name: "Clinic — Batu Caves Town", distance: "1.2 km", icon: "💊" },
  { name: "Hospital Selayang", distance: "~7 km", icon: "🏥" },
  { name: "Base Plaza Paid Parking", distance: "0.1 km", icon: "🅿" },
];

/**
 * All gallery photographs come from Wikimedia Commons and carry an attribution
 * requirement (CC BY / CC BY-SA), apart from the CC0 one. Keep the author, licence
 * and source link rendered next to every image.
 */
export const batuCavesGallery: CreditedImage[] = [
  {
    src: "/temples/batu-caves/murugan-statue-stairs.jpg",
    caption: "The 42.7 m Murugan statue and the painted 272-step stairway",
    author: "*angys*",
    license: "CC BY-SA 4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Thaipusam_2025_Frontal_View_of_Lord_Murugan_Statue_and_Rainbow_Staircase_at_Batu_Caves_(250212).jpg",
  },
  {
    src: "/temples/batu-caves/temple-cave-interior.jpg",
    caption: "Inside the Temple Cave — the main chamber and its shrines",
    author: "*angys*",
    license: "CC BY-SA 4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Thaipusam_2025_Interior_View_of_Temple_Cave_Main_Chamber_and_Shrines_at_Batu_Caves_(250212).jpg",
  },
  {
    src: "/temples/batu-caves/cave-shrine.jpg",
    caption: "Ornate shrine beneath the Temple Cave vault",
    author: "*angys*",
    license: "CC BY-SA 4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Thaipusam_2025_Highly_Ornate_Hindu_Shrine_Inside_Main_Temple_Cave_Vault_at_Batu_Caves_(250212).jpg",
  },
  {
    src: "/temples/batu-caves/stairway.jpg",
    caption: "The stairway climbing to the Temple Cave",
    author: "*angys*",
    license: "CC BY-SA 4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Stairway_to_Temple_Cave,_Batu_Caves_(220714).jpg",
  },
  {
    src: "/temples/batu-caves/temple-gate.jpg",
    caption: "Sri Subramaniar Swamy Temple gateway",
    author: "*angys*",
    license: "CC BY-SA 4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Thaipusam_2025_Sri_Subramaniar_Swamy_Temple_Gate_(250212).jpg",
  },
  {
    src: "/temples/batu-caves/thaipusam-dusk.jpg",
    caption: "Thaipusam at dusk — the statue and the lit stairway",
    author: "*angys*",
    license: "CC BY-SA 4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Thaipusam_2025_Lord_Murugan_Statue_and_Illumined_Main_Stairs_at_Dusk_in_Batu_Caves_(250211).jpg",
  },
  {
    src: "/temples/batu-caves/kavadi-procession.jpg",
    caption: "Kavadi procession along the main road on Thaipusam",
    author: "*angys*",
    license: "CC BY-SA 4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Thaipusam_2025_Procession_of_Kavadis_and_Devotees_Along_Main_Road_at_Batu_Caves(250211).jpg",
  },
  {
    src: "/temples/batu-caves/peacock-kavadi.jpg",
    caption: "A devotee bearing a large peacock kavadi",
    author: "*angys*",
    license: "CC BY-SA 4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Haipusam_2025_Devotee_Carrying_Large_Peacock_Kavadi_at_Batu_Caves_(250211).jpg",
  },
  {
    src: "/temples/batu-caves/silver-chariot.jpg",
    caption: "The silver chariot that carries Murugan from Kuala Lumpur",
    author: "*angys*",
    license: "CC BY-SA 4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Thaipusam_2025_Silver_Chariot_Garage_and_Digital_LED_Banner_at_Batu_Caves_(250211).jpg",
  },
  {
    src: "/temples/batu-caves/crowds.jpg",
    caption: "Thaipusam crowds below the temple",
    author: "*angys*",
    license: "CC BY-SA 4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Thaipusam_2025_Sri_Subramaniar_Swamy_Temple_and_Crowds_at_Batu_Caves_(250211).jpg",
  },
  {
    src: "/temples/batu-caves/hanuman-ramayana-cave.jpg",
    caption: "The 15 m Hanuman at the Ramayana Cave entrance",
    author: "*angys*",
    license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Statue_of_Hanuman,_Batu_Caves_(220714).jpg",
  },
  {
    src: "/temples/batu-caves/courtyard-view.jpg",
    caption: "Temple courtyard and the Gombak skyline from the steps",
    author: "*angys*",
    license: "CC BY-SA 4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Thaipusam_2025_Elevated_View_of_Temple_Courtyard_and_Gombak_Skyline_from_Batu_Caves_(250212).jpg",
  },
  {
    src: "/temples/batu-caves/dark-cave.jpg",
    caption: "Inside the Dark Cave conservation reserve",
    author: "KQuhen",
    license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Batu_Caves_Dark_Cave_Interior_2015.jpg",
  },
  {
    src: "/temples/batu-caves/hillside.jpg",
    caption: "The limestone hillside above the temple grounds",
    author: "Photo Dharma",
    license: "CC BY 2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:01_Batu_Caves_Hillside_(9123159439).jpg",
  },
  {
    src: "/temples/batu-caves/macaque.jpg",
    caption: "A long-tailed macaque on the stairway",
    author: "Public domain",
    license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:20190821_Batu_Caves_macaque_stairs-1.jpg",
  },
  {
    src: "/temples/batu-caves/banner.jpg",
    caption: "The temple grounds beneath the limestone cliff",
    author: "VasenkaPhotography",
    license: "CC BY 2.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Murugan_statue,_Batu_Caves_-_Jun_19,_2010.jpg",
  },
];
