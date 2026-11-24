import { useTranslation } from "react-i18next";
import palaniImg from "@/assets/palani5.png";
import meenakshiImg  from "@/assets/Madurai.png";
import srirangamImg from "@/assets/Srirangam.png";
import arunachaleswararImg from "@/assets/Arunachaleswarar.png";
import rameswaramImg from "@/assets/Rameswaram.png";

export function useHeatmapZones(t: any) {
  const { t: tStr } = useTranslation();

  const genericZones = [
    { name: tStr("Main Entrance"), pct: t.parking.lotA, x: 40, y: 80, w: 120, h: 50, advice: tStr("Use East Gate instead") },
    { name: tStr("Queue Lane A"), pct: Math.min(95, t.crowdPct + 15), x: 40, y: 140, w: 60, h: 100, advice: tStr("Wait 30 min or visit after 4 PM") },
    { name: tStr("Queue Lane B"), pct: Math.max(20, t.crowdPct - 20), x: 105, y: 140, w: 55, h: 100, advice: tStr("Faster lane today") },
    { name: tStr("Sanctum approach"), pct: t.crowdPct, x: 170, y: 100, w: 90, h: 80, advice: tStr("~15-20 min wait") },
    { name: tStr("Prasad counter"), pct: Math.max(15, t.crowdPct - 30), x: 270, y: 80, w: 80, h: 60, advice: tStr("Light queue") },
    { name: tStr("Parking Lot A"), pct: t.parking.lotA, x: 270, y: 150, w: 80, h: 70, advice: tStr("Almost full — use overflow") },
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

  // `kind` separates gates from key places in the gate-wise table and insights.
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
    { id: "base-plaza", kind: "gate", name: tStr("Base Plaza & Murugan Statue"), pct: Math.min(95, t.crowdPct + 18), advice: tStr("Arrival plaza below the 42.7 m statue. Heaviest congestion point outside festival days.") },
    { id: "stairway", kind: "place", name: tStr("272-Step Stairway"), pct: Math.min(100, t.crowdPct + 28), advice: tStr("Steep climb with no step-free alternative. Keep right going up; macaques gather on the balustrades.") },
    { id: "temple-cave", kind: "place", name: tStr("Temple Cave Sanctum"), pct: Math.min(100, t.crowdPct + 22), advice: tStr("Main Sri Subramaniar Swamy shrine, 120 m above the plaza. Paal kudam queues merge here.") },
    { id: "ramayana-cave", kind: "place", name: tStr("Ramayana Cave & Hanuman"), pct: Math.max(20, t.crowdPct - 18), advice: tStr("Ticketed cave at the far left. Usually quiet — good while you wait for the stair crowd to thin.") },
    { id: "cave-villa", kind: "place", name: tStr("Cave Villa — Art Gallery"), pct: Math.max(15, t.crowdPct - 25), advice: tStr("Ground-level galleries. Shaded and rarely crowded.") },
    { id: "komuter", kind: "gate", name: tStr("KTM Komuter Station Gate"), pct: Math.min(90, t.crowdPct + 8), advice: tStr("Train arrivals surge in waves. Expect a queue at the ticket counters on weekends.") },
    { id: "parking", kind: "place", name: tStr("Base Plaza Paid Parking"), pct: t.parking?.lotA ?? 60, advice: tStr("Fills by mid-morning at weekends. Consider the Komuter instead of driving.") },
  ];

  const displayZones =
    t.id === 1
      ? palaniZones
      : t.id === 2
      ? maduraiZones
      : t.id === 3
      ? srirangamZones
      : t.id === 4
      ? tiruvannamalaiZones
      : t.id === 5
      ? rameswaramZones
      : t.id === 23 || t.slug === "trimbakeshwar"
      ? trimbakeshwarZones
      : t.slug === "batu-caves-murugan"
      ? batuCavesZones
      : genericZones;

  const getMapImage = (id: number) => {
    switch (id) {
      case 1: return palaniImg;
      case 2: return meenakshiImg;
      case 3: return srirangamImg;
      case 4: return arunachaleswararImg;
      case 5: return rameswaramImg;
      default: return null;
    }
  };

  return { displayZones, mapImage: getMapImage(t.id), genericZones };
}
