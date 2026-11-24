// Shree Trimbakeshwar Jyotirlinga Mandir (Trimbak, Nashik, Maharashtra)
// Reference data and authentic information cross-checked against official temple trust records and Maharashtra Tourism (MTDC).

export const TRIMBAKESHWAR_SLUG = "trimbakeshwar";

export const trimbakeshwarFacts = [
  { label: "Jyotirlinga", value: "One of the 12 Sacred Jyotirlingas of Lord Shiva" },
  { label: "Unique Deity", value: "Three-Faced Linga (Tridev: Brahma, Vishnu, Rudra)" },
  { label: "Holy River Origin", value: "Source of Sacred Godavari River (Dakshin Ganga)" },
  { label: "Architecture", value: "Black Basalt Stone Hemadpanthi Style (Peshwa Era, 1755–1786 CE)" },
  { label: "Sacred Kund", value: "Kushavarta Theertha Kund (Built 1768 CE)" },
  { label: "Holy Mountains", value: "Brahmagiri, Nilagiri & Kalagiri Hills" },
  { label: "Simhastha Kumbh", value: "Held once every 12 years in Trimbak & Nashik" },
  { label: "Garbhagriha Dress Code", value: "Strictly Dhoti / Sovala (Men) & Saree (Women) for Sparsh Darshan" },
];

export interface SacredSpot {
  name: string;
  category: "Sanctum" | "Kund" | "Mountain" | "Temple";
  description: string;
}

export const trimbakeshwarSacredSpots: SacredSpot[] = [
  {
    name: "Kushavarta Theertha Kund",
    category: "Kund",
    description: "The sacred stone reservoir where Sage Gautama held back river Godavari. Pilgrims take a holy dip here before temple entry.",
  },
  {
    name: "Tridev Garbhagriha & Jyotirlinga",
    category: "Sanctum",
    description: "The sanctum sanctorum housing the unique hollow linga with three thumb-sized lingas representing Brahma, Vishnu, and Maheshwara.",
  },
  {
    name: "Suvarna Mukut (Golden Jeweled Crown)",
    category: "Sanctum",
    description: "The priceless 5-faced golden crown studded with diamonds, emeralds, and rubies, placed on the deity during Monday afternoon poojas.",
  },
  {
    name: "Nandi Mandap & Basalt Nandi",
    category: "Temple",
    description: "A monumental black stone pavilion facing the sanctum with a finely sculpted monolithic Nandi Bull.",
  },
  {
    name: "Brahmagiri Mountain & Gangadwar",
    category: "Mountain",
    description: "The 750-step holy hill where river Ganga first appeared from the rock face (Gangadwar) and Gautama Rishi meditated.",
  },
  {
    name: "Gorakhnath Gufa",
    category: "Mountain",
    description: "Ancient rock-cut meditation cave where Nath tradition master Guru Gorakhnath performed severe austerities.",
  },
  {
    name: "Sant Nivruttinath Samadhi Mandir",
    category: "Temple",
    description: "The sacred samadhi shrine of Sant Nivruttinath, elder brother and guru of Sant Dnyaneshwar, located 1 km from the Jyotirlinga.",
  },
];

export interface TrimbakPoojaVidhi {
  name: string;
  significance: string;
  duration: string;
  bookingTip: string;
}

export const trimbakeshwarSpecialPoojas: TrimbakPoojaVidhi[] = [
  {
    name: "Kalsarp Dosh Nivaran Shanti",
    significance: "Vedic ritual performed at Trimbakeshwar to neutralize astrological planetary afflictions and bring peace and career prosperity.",
    duration: "2 – 3 hours",
    bookingTip: "Performed by authorized Tamrapatradhari Gurujis. Advance slot booking recommended.",
  },
  {
    name: "Narayan Nagbali Pooja",
    significance: "Rare and exclusive 3-day Vedic ritual performed only at Trimbakeshwar for the liberation of ancestral souls and removal of generational curses.",
    duration: "3 days (consecutive)",
    bookingTip: "Requires stay in Trimbakeshwar. Specific muhurtas per Hindu Panchang.",
  },
  {
    name: "Tripindi Shradha",
    significance: "Rites performed for peace of departed ancestors across past three generations to eliminate Pitru Dosh.",
    duration: "1.5 – 2 hours",
    bookingTip: "Conducted at holy spots near Kushavarta Kund and Trimbak river banks.",
  },
  {
    name: "Laghurudra & Rudrabhishek Seva",
    significance: "Intense chanting of Sri Rudram alongside holy bath of milk, honey, panchamrit, and sacred Godavari theertha on the Jyotirlinga.",
    duration: "1 – 2 hours",
    bookingTip: "Available in early morning hours during Garbhagriha Sparsh Darshan.",
  },
  {
    name: "Maha Mrityunjaya Jap & Anushthan",
    significance: "Sacred chanting of the Maha Mrityunjaya mantra for healing, long life, and spiritual protection.",
    duration: "2 – 4 hours",
    bookingTip: "Performed inside the temple sabhamandap or designated priest Vedic ashrams.",
  },
];
