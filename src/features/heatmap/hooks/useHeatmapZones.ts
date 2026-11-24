import { useTranslation } from "react-i18next";
import palaniImg from "@/assets/palani5.png";
import meenakshiImg from "@/assets/Madurai.png";
import srirangamImg from "@/assets/Srirangam.png";
import arunachaleswararImg from "@/assets/Arunachaleswarar.png";
import rameswaramImg from "@/assets/Rameswaram.png";
import batuCavesImg from "@/assets/batu-caves-heatmap.jpg";
import penangHeatmapImg from "@/assets/penang-heatmap.jpg";

export function useHeatmapZones(t: any) {
  const { t: tStr } = useTranslation();

  const genericZones = [
    { name: tStr("Main Entrance"), pct: t?.parking?.lotA ?? 50, x: 40, y: 80, w: 120, h: 50, advice: tStr("Use East Gate instead") },
    { name: tStr("Queue Lane A"), pct: Math.min(95, (t?.crowdPct ?? 50) + 15), x: 40, y: 140, w: 60, h: 100, advice: tStr("Wait 30 min or visit after 4 PM") },
    { name: tStr("Queue Lane B"), pct: Math.max(20, (t?.crowdPct ?? 50) - 20), x: 105, y: 140, w: 55, h: 100, advice: tStr("Faster lane today") },
    { name: tStr("Sanctum approach"), pct: t?.crowdPct ?? 50, x: 170, y: 100, w: 90, h: 80, advice: tStr("~15-20 min wait") },
    { name: tStr("Prasad counter"), pct: Math.max(15, (t?.crowdPct ?? 50) - 30), x: 270, y: 80, w: 80, h: 60, advice: tStr("Light queue") },
    { name: tStr("Parking Lot A"), pct: t?.parking?.lotA ?? 50, x: 270, y: 150, w: 80, h: 70, advice: tStr("Almost full — use overflow") },
  ];

  const palaniZones = [
    { name: tStr("Sanctum Sanctorum"), pct: Math.min(95, t.crowdPct + 25), advice: tStr("Peak crowd right now. Expected wait ~45 mins.") },
    { name: tStr("Steps Route"), pct: Math.min(85, t.crowdPct + 15), advice: tStr("Heavy footfall. Use Rope Car or Winch if possible.") },
    { name: tStr("Rope Car Station"), pct: Math.max(20, t.crowdPct - 10), advice: tStr("Moderate queue. ~20 mins wait.") },
    { name: tStr("Winch Station"), pct: Math.max(15, t.crowdPct - 25), advice: tStr("Moving fast. Good alternative to steps.") },
    { name: tStr("Panchamirtham Counter"), pct: Math.max(10, t.crowdPct - 35), advice: tStr("Clear. Get your prasadam quickly.") },
    { name: tStr("Base Parking Area"), pct: t.parking.lotA, advice: tStr("Almost full. Consider overflow parking.") },
  ];

  const maduraiZones = [
    { name: tStr("Amman Sannithi"), pct: Math.min(98, t.crowdPct + 25), advice: tStr("Highest crowd density. Free darshan wait is ~60m.") },
    { name: tStr("Swami Sannithi"), pct: Math.min(85, t.crowdPct + 10), advice: tStr("Moderate to high queue. Try special ticket lane.") },
    { name: tStr("Golden Lotus Tank"), pct: Math.max(40, t.crowdPct - 20), advice: tStr("Beautiful and relatively clear. Great for resting.") },
    { name: tStr("Thousand Pillar Hall"), pct: Math.max(30, t.crowdPct - 30), advice: tStr("Low crowd. Excellent time to visit the museum.") },
    { name: tStr("South Tower Entrance"), pct: Math.max(25, t.crowdPct - 40), advice: tStr("Fastest entry point right now. Use this gate.") },
    { name: tStr("Chithirai Streets (Outer)"), pct: t.parking.lotB, advice: tStr("Traffic is heavy. Park at the multistory lot.") },
  ];

  const srirangamZones = [
    { name: tStr("Rajagopuram Entrance"), pct: t.parking.lotA, advice: tStr("Main entry point. Busy but moving steadily.") },
    { name: tStr("Ranga Ranga Gopuram"), pct: Math.min(80, t.crowdPct + 10), advice: tStr("High footfall. Stay in your designated lanes.") },
    { name: tStr("Garuda Mandapam"), pct: Math.min(95, t.crowdPct + 20), advice: tStr("Heavy crowd merging here. Expect delays.") },
    { name: tStr("Sanctum Sanctorum"), pct: Math.min(100, t.crowdPct + 35), advice: tStr("Peak wait time. General queue is ~75m.") },
    { name: tStr("Thayar Sannithi"), pct: Math.max(30, t.crowdPct - 15), advice: tStr("Relatively clear. Good time to visit.") },
    { name: tStr("Chithirai Streets (Parking)"), pct: t.parking.lotB, advice: tStr("Parking filling up quickly. Use North Gate parking.") },
  ];

  const tiruvannamalaiZones = [
    { id: "east", kind: "gate", name: tStr("East Rajagopuram (Main)"), pct: Math.min(98, t.crowdPct - 3), advice: tStr("11-storey main gateway — heaviest crowd. Enter via Thirumanjana Gopuram (South) if possible.") },
    { id: "inner", kind: "gate", name: tStr("Vallala & Kili Gopuram (Inner)"), pct: Math.max(30, t.crowdPct - 50), advice: tStr("Queues merge here before the sanctum.") },
    { id: "sanctum", kind: "place", name: tStr("Arunachaleswarar Sannithi"), pct: Math.min(100, t.crowdPct + 12), advice: tStr("Peak density. Free darshan wait can exceed 1.5 hrs.") },
    { id: "amman", kind: "place", name: tStr("Unnamulai Amman Sannithi"), pct: Math.max(40, t.crowdPct - 30), advice: tStr("Moves faster than the main sanctum.") },
    { id: "south", kind: "gate", name: tStr("Thirumanjana Gopuram (South)"), pct: Math.max(35, t.crowdPct - 25), advice: tStr("Quieter entry. Convenient for elders.") },
    { id: "west", kind: "gate", name: tStr("Pei Gopuram (West)"), pct: Math.max(30, t.crowdPct - 40), advice: tStr("Faces Arunachala. Busy with devotees returning from Girivalam.") },
    { id: "north", kind: "gate", name: tStr("Ammani Ammal Gopuram (North)"), pct: Math.max(30, t.crowdPct - 46), advice: tStr("Near the car shed and parking access.") },
    { id: "mandapam", kind: "place", name: tStr("Thousand Pillar Mandapam & Pathala Lingam"), pct: Math.max(20, t.crowdPct - 55), advice: tStr("Relatively quiet. Good spot to sit and meditate.") },
    { id: "girivalam", kind: "place", name: tStr("Girivalam Path (14 km)"), pct: Math.max(30, t.crowdPct - 35), advice: tStr("Steady flow. Expect a surge on Pournami nights.") },
  ];

  const rameswaramZones = [
    { name: tStr("Agni Theertham"), pct: Math.min(95, t.crowdPct + 25), advice: tStr("Heavy crowd at the beach. Complete holy dip early.") },
    { name: tStr("22 Holy Wells (Theerthams)"), pct: Math.min(100, t.crowdPct + 35), advice: tStr("Peak density. Expect significant delays moving between wells.") },
    { name: tStr("Ramanathaswamy Sannithi"), pct: Math.min(90, t.crowdPct + 20), advice: tStr("High wait time. Keep moving in the queue.") },
    { name: tStr("Parvathavardhini Amman"), pct: Math.max(60, t.crowdPct - 10), advice: tStr("Moderate crowd. Darshan is relatively quicker here.") },
    { name: tStr("Third Corridor (Prakaram)"), pct: Math.max(40, t.crowdPct - 25), advice: tStr("Famous long corridor is somewhat clear for walking.") },
    { name: tStr("East Gate Parking"), pct: t.parking.lotA, advice: tStr("Almost full. Proceed to West Gate parking lot.") },
  ];

  const trimbakeshwarZones = [
    { id: "east-gate", kind: "gate", name: tStr("East Mahadwar Entrance"), pct: Math.min(95, t.crowdPct + 10), advice: tStr("Main ornate stone gateway — prime entrance for general Mukh Darshan.") },
    { id: "kushavarta", kind: "place", name: tStr("Kushavarta Theertha Kund"), pct: Math.min(90, t.crowdPct + 5), advice: tStr("Sacred bathing pool where Godavari emerges. Pilgrims perform snanam before darshan.") },
    { id: "sabhamandap", kind: "place", name: tStr("Sabhamandap & Queue Corridors"), pct: Math.min(100, t.crowdPct + 15), advice: tStr("Carved basalt pillars area where Mukh Darshan and VIP queue lines converge.") },
    { id: "garbhagriha", kind: "place", name: tStr("Garbhagriha (Tridev Jyotirlinga)"), pct: Math.min(100, t.crowdPct + 25), advice: tStr("Sanctum housing the three-faced linga (Brahma, Vishnu, Shiva). Sparsh Darshan allowed 6–7 AM in Dhoti.") },
    { id: "nandi-mandap", kind: "place", name: tStr("Nandi Mandap"), pct: Math.max(30, t.crowdPct - 20), advice: tStr("Massive black stone Nandi statue facing the sanctum.") },
    { id: "north-gate", kind: "gate", name: tStr("North Gate & Brahmagiri Path"), pct: Math.max(25, t.crowdPct - 35), advice: tStr("Quieter exit leading towards Brahmagiri hill and Sant Nivruttinath shrine.") },
    { id: "parking", kind: "place", name: tStr("Trimbak Bypass Parking (Lot A/B)"), pct: t.parking?.lotA ?? 60, advice: tStr("Main parking area. Walk 500m or take shared auto to Mahadwar.") },
  ];

  const batuCavesZones = [
    { id: "temple-cave", kind: "place", name: tStr("Temple Cave Entrance"), pct: 81, advice: tStr("High crowd (81%). Upper cavern & Sri Subramaniar sanctum.") },
    { id: "stairway", kind: "place", name: tStr("Rainbow Staircase"), pct: 76, advice: tStr("High crowd (76%). 272 colorful steps. Keep right going up; beware of macaques.") },
    { id: "murugan-statue", kind: "place", name: tStr("Lord Murugan Statue"), pct: 58, advice: tStr("Moderate crowd (58%). 42.7m golden statue plaza.") },
    { id: "main-forecourt", kind: "gate", name: tStr("Main Forecourt"), pct: 32, advice: tStr("Low crowd (32%). Lower arrival plaza moving smoothly.") },
    { id: "parking", kind: "place", name: tStr("Car Parking (On-site)"), pct: 62, advice: tStr("Moderate load (62%). ~570 slots available in base parking.") },
    { id: "komuter", kind: "gate", name: tStr("KTM Batu Caves Gate"), pct: 38, advice: tStr("Low crowd (38%). Direct rail halt (~5 min walk).") },
    { id: "restrooms", kind: "place", name: tStr("Public Restrooms"), pct: 40, advice: tStr("Sanitation facilities near the foot of stairs.") },
    { id: "snacks", kind: "place", name: tStr("Snacks & Drinks"), pct: 45, advice: tStr("Refreshments & water stalls near main entrance.") },
    { id: "souvenirs", kind: "place", name: tStr("Souvenir Stalls"), pct: 42, advice: tStr("Religious artifacts and prasadam stalls at foot of stairs.") },
  ];

  const penangZones = [
    { id: "hilltop", kind: "place", name: tStr("Hilltop Murugan Temple"), pct: 78, advice: tStr("High crowd (78%). Hilltop complex & sanctum. Expected darshan wait ~35-45 mins.") },
    { id: "stairway", kind: "place", name: tStr("Hillside Stairway"), pct: 64, advice: tStr("Moderate crowd (64%). 500+ steps uphill climb. Take shaded resting breaks.") },
    { id: "old-shrine", kind: "place", name: tStr("Old Murugan Temple"), pct: 43, advice: tStr("Moderate crowd (43%). Mid-hill historic 1850 heritage shrine.") },
    { id: "shiva", kind: "place", name: tStr("Lord Shiva Statue"), pct: 25, advice: tStr("Foot of the hill. 8.23m Shiva statue courtyard is calm and peaceful.") },
    { id: "main-entrance", kind: "gate", name: tStr("Main Entrance"), pct: 30, advice: tStr("Low crowd (30%). Foothill entry gate and Rajagopuram moving smoothly.") },
    { id: "parking", kind: "place", name: tStr("Temple Car Park"), pct: 68, advice: tStr("Approximate area. Parking is 68% full; 160 parking slots open.") },
  ];

  const displayZones =
    t?.id === 1 || t?.slug === "palani-murugan"
      ? palaniZones
      : t?.id === 2 || t?.slug === "madurai-meenakshi"
      ? maduraiZones
      : t?.id === 3 || t?.slug === "srirangam"
      ? srirangamZones
      : t?.id === 4 || t?.slug === "tiruvannamalai"
      ? tiruvannamalaiZones
      : t?.id === 5 || t?.slug === "rameswaram"
      ? rameswaramZones
      : t?.id === 23 || t?.slug === "trimbakeshwar"
      ? trimbakeshwarZones
      : t?.id === 46 || t?.slug === "batu-caves-murugan" || (typeof t?.name === "string" && (t.name.toLowerCase().includes("batu") || t.name.toLowerCase().includes("subramaniar")))
      ? batuCavesZones
      : t?.id === 47 || t?.slug === "penang-balathandayuthapani" || (typeof t?.name === "string" && (t.name.toLowerCase().includes("balathandayuthapani") || t.name.toLowerCase().includes("penang") || t.name.toLowerCase().includes("thaneermalai")))
      ? penangZones
      : genericZones;

  const getMapImage = (item: any) => {
    if (!item) return batuCavesImg;
    const slug = item?.slug || "";
    const name = (item?.name || "").toLowerCase();
    const id = item?.id;

    if (id === 46 || slug === "batu-caves-murugan" || name.includes("batu") || name.includes("subramaniar")) {
      return batuCavesImg;
    }
    if (id === 47 || slug === "penang-balathandayuthapani" || name.includes("balathandayuthapani") || name.includes("penang") || name.includes("thaneermalai")) {
      return penangHeatmapImg;
    }
    switch (id) {
      case 1: return palaniImg;
      case 2: return meenakshiImg;
      case 3: return srirangamImg;
      case 4: return arunachaleswararImg;
      case 5: return rameswaramImg;
      default: return batuCavesImg;
    }
  };

  return { displayZones, mapImage: getMapImage(t), genericZones };
}
