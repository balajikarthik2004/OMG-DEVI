import { memo, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Share2,
  Bookmark,
  MapPin,
  X,
  MessageCircle,
  Twitter,
  Facebook,
  Instagram,
  Link2,
  CheckCircle2,
  Sparkles,
  Flame,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import type { Temple } from "@/data/temples";

interface Props {
  temple: Temple;
}

export const TempleHeroBanner = memo(function TempleHeroBanner({ temple }: Props) {
  const { t } = useTranslation();
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const isTrimbak =
    temple.slug === "trimbakeshwar" || temple.name.toLowerCase().includes("trimbakeshwar");

  // Determine banner image
  const bannerImage =
    temple.slug === "trimbakeshwar"
      ? "/temples/trimbakeshwar/banner.jpg"
      : temple.image || "/planner_itinerary_temple_hd.jpg";

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  // Feature pills
  const featurePills = isTrimbak
    ? [
      { icon: "🔱", text: "Jyotirlinga" },
      { icon: "🛕", text: "Tridev Lingam" },
      { icon: "🌊", text: "Godavari Origin" },
      { icon: "🏰", text: "Peshwa Heritage" },
    ]
    : [
      { icon: "🔱", text: "Ancient Kshetram" },
      { icon: "🛕", text: "Agamic Rituals" },
      { icon: "✨", text: "Sacred Darshan" },
      { icon: "🚩", text: "Pilgrim Heritage" },
    ];

  return (
    <>
      <div className="relative w-full rounded-3xl overflow-hidden shadow-md bg-slate-900 border border-[#E8E2D5]">
        {/* Background Image with Dark & Warm Gradients */}
        <div className="relative h-[340px] sm:h-[380px] lg:h-[400px] w-full overflow-hidden">
          <img
            src={bannerImage}
            alt={temple.name}
            className="w-full h-full object-cover object-[center_35%]"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/planner_itinerary_temple_hd.jpg";
            }}
          />

          {/* Cinematic Vignette & Bottom Text Contrast Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/30" />

          {/* Top Floating Controls */}
          <div className="absolute top-4 inset-x-4 lg:top-6 lg:inset-x-6 flex items-center justify-between z-10">
            {/* Top-Left Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/25 backdrop-blur-md border border-amber-300/40 text-amber-200 text-xs font-bold tracking-wide shadow-xs">
              <span className="text-amber-300 text-sm">🔱</span>
              <span>{isTrimbak ? t("12 Jyotirlinga") : t(temple.tier || "Major Kshetram")}</span>
            </div>

            {/* Top-Right Action Buttons */}
            <div className="flex items-center gap-2">
              <Link
                to="/heatmap"
                search={{ temple: temple.slug }}
                title={t("Live Crowd Heatmap")}
                className="h-10 px-3.5 rounded-full bg-gradient-to-r from-orange-500 to-rose-600 hover:from-orange-600 hover:to-rose-700 text-white backdrop-blur flex items-center gap-1.5 text-xs font-bold transition-all shadow-md hover:scale-105"
              >
                <Flame className="w-4 h-4 text-white" />
                <span className="hidden sm:inline">{t("Live Heatmap")}</span>
              </Link>
              <button
                onClick={() => setIsShareOpen(true)}
                title={t("Share")}
                className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-black/60 transition-all cursor-pointer shadow-xs"
              >
                <Share2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                title={t("Bookmark")}
                className={`w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-xs ${isBookmarked ? "text-amber-400 bg-black/60" : "text-white hover:bg-black/60"
                  }`}
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-amber-400" : ""}`} />
              </button>
            </div>
          </div>

          {/* Bottom Content Area */}
          <div className="absolute bottom-0 inset-x-0 p-5 sm:p-7 lg:p-8 text-white z-10">
            {/* Title */}
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight drop-shadow-md text-white">
              {temple.name}
            </h1>

            {/* Location */}
            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-amber-200/90 mt-1.5 drop-shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>
                {isTrimbak
                  ? "Trimbak, Nashik, Maharashtra"
                  : `${temple.city}, ${temple.district}, ${temple.state}`}
              </span>
            </div>

            {/* Subtitle / History line */}
            <p className="text-xs sm:text-sm text-slate-200/90 max-w-3xl mt-2 leading-relaxed drop-shadow-xs font-normal">
              {isTrimbak
                ? "Built in black basalt stone by Peshwa Balaji Baji Rao (1755–1786 CE) • One of the 12 Sacred Jyotirlingas • Origin of River Godavari (Dakshin Ganga)"
                : temple.description || temple.established}
            </p>

            {/* Feature Pills Row */}
            <div className="flex flex-wrap items-center gap-2 mt-3.5">
              {featurePills.map((pill, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/25 text-white/95 text-xs font-medium shadow-xs"
                >
                  <span className="text-xs">{pill.icon}</span>
                  <span>{t(pill.text)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Share Modal */}
      {isShareOpen && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setIsShareOpen(false)}
        >
          <div
            className="bg-white rounded-3xl w-full max-w-sm p-6 shadow-2xl relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-serif text-lg font-bold text-slate-900">{t("Share Temple")}</h3>
              <button
                onClick={() => setIsShareOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-4 gap-3 mb-5">
              <button
                onClick={() => {
                  window.open(
                    `https://api.whatsapp.com/send?text=${encodeURIComponent(
                      `${temple.name}: ${window.location.href}`
                    )}`,
                    "_blank"
                  );
                }}
                className="flex flex-col items-center gap-1.5 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all shadow-xs border border-green-100">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-slate-600">WhatsApp</span>
              </button>

              <button
                onClick={() => {
                  window.open(
                    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      window.location.href
                    )}`,
                    "_blank"
                  );
                }}
                className="flex flex-col items-center gap-1.5 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xs border border-blue-100">
                  <Facebook className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-slate-600">Facebook</span>
              </button>

              <button
                onClick={() => {
                  window.open(
                    `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                      `${temple.name} on OMG Devotee`
                    )}&url=${encodeURIComponent(window.location.href)}`,
                    "_blank"
                  );
                }}
                className="flex flex-col items-center gap-1.5 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all shadow-xs border border-slate-200">
                  <Twitter className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-slate-600">Twitter</span>
              </button>

              <button
                onClick={() => {
                  window.open(`https://www.instagram.com/`, "_blank");
                }}
                className="flex flex-col items-center gap-1.5 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center group-hover:bg-gradient-to-tr group-hover:from-orange-500 group-hover:to-pink-500 group-hover:text-white transition-all shadow-xs border border-pink-100">
                  <Instagram className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-slate-600">Instagram</span>
              </button>
            </div>

            <div className="p-1 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-2">
              <div className="truncate text-xs text-slate-500 pl-3 flex-1 font-mono select-all">
                {window.location.href}
              </div>
              <button
                onClick={copyLink}
                className="shrink-0 bg-white text-slate-800 text-xs font-bold px-3 py-2 rounded-lg border border-slate-200 shadow-xs hover:border-amber-500 hover:text-amber-600 transition-colors flex items-center gap-1.5"
              >
                {isCopied ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                ) : (
                  <Link2 className="w-3.5 h-3.5" />
                )}
                {isCopied ? t("Copied!") : t("Copy")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
});
