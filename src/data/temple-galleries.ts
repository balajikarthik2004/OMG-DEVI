import type { CreditedImage } from "./temples";
import { batuCavesGallery } from "./batu-caves";
import { tiruvannamalaiGallery } from "./tiruvannamalai";

import palani5Img from "@/assets/palani5.png";
import palani1Img from "@/assets/palani1.png";
import palani2Img from "@/assets/palani2.png";
import palani3Img from "@/assets/palani3.png";
import muruganImg from "@/assets/murugan.png";

import maduraiImg from "@/assets/Madurai.png";
import madurai1Img from "@/assets/Madurai1.png";
import meenakshiImg from "@/assets/meenakshi.png";

import srirangamImg from "@/assets/Srirangam.png";
import rameswaramImg from "@/assets/Rameswaram.png";

export const penangGallery: CreditedImage[] = [
  {
    src: "/temples/penang-balathandayuthapani/banner.webp",
    caption: "7-Storey Raja Gopuram Overlooking Penang Slopes",
    author: "Penang Hindu Endowments Board (HEB)",
    license: "Official",
    sourceUrl: "https://hebpenang.gov.my/waterfall-road-temple/",
  },
  {
    src: "/temples/penang-balathandayuthapani/grounds-map.webp",
    caption: "Waterfall Hilltop Grounds & The 513 Steps",
    author: "HEB Penang",
    license: "Official",
    sourceUrl: "https://hebpenang.gov.my/waterfall-road-temple/",
  },
  {
    src: "/temples/penang-balathandayuthapani/heatmap.jpg",
    caption: "Hilltop Temple Complex & Forest Canopy",
    author: "Penang Tourism",
    license: "Public Domain",
    sourceUrl: "https://www.mypenang.gov.my/",
  },
];

export const palaniGallery: CreditedImage[] = [
  {
    src: palani5Img,
    caption: "Palani Hilltop Temple Gopuram & Sanctum",
    author: "Tamil Nadu Tourism",
    license: "Public Domain",
    sourceUrl: "https://www.tamilnadutourism.tn.gov.in/",
  },
  {
    src: palani1Img,
    caption: "Sacred Stairway Ascending Palani Hill",
    author: "Devotee Archive",
    license: "CC BY-SA",
    sourceUrl: "https://palanimurugantemple.org/",
  },
  {
    src: palani2Img,
    caption: "Golden Vimanam of Lord Dhandayuthapani Swamy",
    author: "HR&CE Dept",
    license: "Official",
    sourceUrl: "https://hrce.tn.gov.in/",
  },
  {
    src: palani3Img,
    caption: "Panoramic View from the Summit",
    author: "Devotee Archive",
    license: "CC BY-SA",
    sourceUrl: "https://palanimurugantemple.org/",
  },
  {
    src: muruganImg,
    caption: "Lord Murugan Divine Alankaram",
    author: "Temple Archive",
    license: "Public Domain",
    sourceUrl: "https://palanimurugantemple.org/",
  },
];

export const maduraiGallery: CreditedImage[] = [
  {
    src: maduraiImg,
    caption: "South Rajagopuram with Sculpted Murals (160 ft)",
    author: "Tamil Nadu Tourism",
    license: "Public Domain",
    sourceUrl: "https://www.tamilnadutourism.tn.gov.in/",
  },
  {
    src: meenakshiImg,
    caption: "Goddess Meenakshi Amman Sanctum Portal",
    author: "HR&CE Dept",
    license: "Official",
    sourceUrl: "https://hrce.tn.gov.in/",
  },
  {
    src: madurai1Img,
    caption: "Porthamarai Kulam (Sacred Golden Lotus Tank)",
    author: "Devotee Archive",
    license: "CC BY-SA",
    sourceUrl: "https://hrce.tn.gov.in/",
  },
];

export const srirangamGallery: CreditedImage[] = [
  {
    src: srirangamImg,
    caption: "Grand Rajagopuram (236 ft) — Asia's Foremost Tower",
    author: "Tamil Nadu Tourism",
    license: "Public Domain",
    sourceUrl: "https://www.tamilnadutourism.tn.gov.in/",
  },
  {
    src: "/temples/srirangam.jpg",
    caption: "Ranganathaswamy Sacred Enclosure",
    author: "HR&CE Dept",
    license: "Official",
    sourceUrl: "https://hrce.tn.gov.in/",
  },
];

export const rameswaramGallery: CreditedImage[] = [
  {
    src: rameswaramImg,
    caption: "Third Corridor — World's Longest Pillared Hallway",
    author: "Tamil Nadu Tourism",
    license: "Public Domain",
    sourceUrl: "https://www.tamilnadutourism.tn.gov.in/",
  },
  {
    src: "/temples/rameswaram.jpg",
    caption: "Agni Theertham Facing the Sacred Bay",
    author: "HR&CE Dept",
    license: "Official",
    sourceUrl: "https://hrce.tn.gov.in/",
  },
];

export const TEMPLE_GALLERIES: Record<string, CreditedImage[]> = {
  "batu-caves-murugan": batuCavesGallery,
  "tiruvannamalai": tiruvannamalaiGallery,
  "penang-balathandayuthapani": penangGallery,
  "palani-murugan": palaniGallery,
  "madurai-meenakshi": maduraiGallery,
  "srirangam": srirangamGallery,
  "rameswaram": rameswaramGallery,
};

export function getTempleGallery(slug: string): CreditedImage[] | undefined {
  return TEMPLE_GALLERIES[slug];
}
