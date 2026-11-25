import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
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
  Flame,
  ShoppingBag,
  Sparkles,
  Ticket,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";

import palani5Img from "@/assets/palani5.png";
import maduraiImg from "@/assets/Madurai.png";
import srirangamImg from "@/assets/Srirangam.png";
import rameswaramImg from "@/assets/Rameswaram.png";
import dallasMariammanImg from "@/assets/dallas-mariamman.png";

const bgImages: Record<string, string> = {
  "tiruvannamalai": "/temples/tiruvannamalai/panorama.jpg",
  "palani-murugan": palani5Img,
  "madurai-meenakshi": maduraiImg,
  "srirangam": srirangamImg,
  "rameswaram": rameswaramImg,
  "dallas-arulmigu-mariamman-usa": dallasMariammanImg,
  "trimbakeshwar": "/temples/trimbakeshwar_banner.jpg",
  "batu-caves-murugan": "/temples/batu-caves/banner.jpg",
  "penang-balathandayuthapani": "/temples/penang-balathandayuthapani/banner.webp",
};

// Per-temple object-position overrides (centers key architectural elements)
const bgPositions: Record<string, string> = {
  "tiruvannamalai": "center 38%",
  "palani-murugan": "center 30%",
  "madurai-meenakshi": "center 28%",
  "srirangam": "center 32%",
  "rameswaram": "center 35%",
  "dallas-arulmigu-mariamman-usa": "center 20%",
  "trimbakeshwar": "center 35%",
  "batu-caves-murugan": "center 32%",
  "penang-balathandayuthapani": "center 18%",
};

/** `state` holds a country for temples outside India; keep this in sync with temples.ts. */
const OVERSEAS_STATES = new Set(["USA", "Malaysia"]);

export function TempleHero({ t }: any) {
  const { t: tStr } = useTranslation();
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const bannerSrc = bgImages[t.slug] || t.image;
  const hasBgImg = !!bannerSrc;
  const isIndianTemple = !OVERSEAS_STATES.has(t.state);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <>
      <div
        className="relative h-[320px] sm:h-[360px] lg:h-[400px] w-full overflow-hidden shadow-lg"
        style={{ background: `linear-gradient(135deg, ${t.gradientFrom}, ${t.color})` }}
      >
        {/* Banner image with subtle zoom transition */}
        {hasBgImg && (
          <img
            src={bannerSrc}
            alt={t.imageCaption ? `${tStr(t.name)} · ${tStr(t.imageCaption)}` : tStr(t.name)}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            style={{ objectPosition: bgPositions[t.slug] ?? "center 30%" }}
          />
        )}

        {/* Multi-layered cinematic gradient overlays for high text contrast */}
        {hasBgImg && (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/45 to-black/25" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/35" />
          </>
        )}

        {!hasBgImg && (
          <svg viewBox="0 0 100 100" className="absolute -right-10 -bottom-10 w-48 h-48 text-white opacity-[0.08]">
            <text x="50" y="72" textAnchor="middle" fontSize="80" fill="currentColor" fontFamily="Noto Serif">ॐ</text>
          </svg>
        )}

        {/* Top Floating Controls */}
        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4 sm:p-6 z-10">
          <div className="flex items-center gap-2.5">
            <Link
              to="/"
              className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/60 transition-all shadow-sm"
              title={tStr("Back to Temples")}
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-amber-300 text-xs font-bold tracking-wide shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{tStr(t.tier || "Major Kshetram")}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/heatmap"
              search={{ temple: t.slug }}
              title={tStr("Live Crowd Heatmap")}
              className="h-10 px-3.5 rounded-full bg-gradient-to-r from-orange-500 to-rose-600 hover:from-orange-600 hover:to-rose-700 text-white backdrop-blur flex items-center gap-1.5 text-xs font-bold transition-all shadow-md hover:scale-105"
            >
              <Flame className="w-4 h-4 text-white" />
              <span className="hidden sm:inline">{tStr("Live Heatmap")}</span>
            </Link>

            <button
              onClick={() => setIsShareOpen(true)}
              className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/60 transition-all shadow-sm cursor-pointer"
              title={tStr("Share Temple")}
            >
              <Share2 className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all shadow-sm cursor-pointer ${
                isBookmarked ? "text-amber-400 bg-black/60" : "text-white hover:bg-black/60"
              }`}
              title={tStr("Bookmark")}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-amber-400" : ""}`} />
            </button>
          </div>
        </div>

        {/* Bottom Hero Info */}
        <div className="absolute bottom-0 inset-x-0 p-5 sm:p-7 lg:p-8 text-white z-10">
          <div className="sm:hidden mb-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-amber-300 text-[11px] font-bold">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>{tStr(t.tier || "Major Kshetram")}</span>
          </div>

          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight drop-shadow-md">
            {tStr(t.name)}
          </h1>

          <div className="text-xs sm:text-sm font-semibold text-amber-200/90 flex items-center gap-1.5 mt-1.5 drop-shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>
              {tStr(t.city)}, {tStr(t.district)}
              {isIndianTemple ? ` ${tStr("District")}` : `, ${tStr(t.state)}`}
            </span>
            <span className="opacity-60">·</span>
            <span className="text-slate-300">{tStr(t.established || "Ancient Heritage")}</span>
          </div>

          {/* Action pills row: Store & VIP Darshan shortcuts */}
          <div className="mt-3.5 flex flex-wrap items-center gap-2">
            <Link
              to="/store/$storeId"
              params={{ storeId: `store-${t.slug}` }}
              className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/25 backdrop-blur-md px-3.5 py-1.5 text-xs font-bold text-amber-200 hover:bg-amber-500/35 border border-amber-300/40 shadow-xs transition-all hover:scale-105"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-amber-300" />
              <span>{tStr("Temple Store")}</span>
            </Link>

            <Link
              to="/booking/$slug"
              params={{ slug: t.slug }}
              className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/25 backdrop-blur-md px-3.5 py-1.5 text-xs font-bold text-emerald-200 hover:bg-emerald-500/35 border border-emerald-300/40 shadow-xs transition-all hover:scale-105"
            >
              <Ticket className="w-3.5 h-3.5 text-emerald-300" />
              <span>{tStr("VIP Darshan")}</span>
            </Link>

            <div className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-slate-200 text-xs font-medium">
              <span>🛕</span>
              <span>{tStr("Agamic Rituals")}</span>
            </div>

            <div className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-slate-200 text-xs font-medium">
              <span>✨</span>
              <span>{tStr("Live Queue Telemetry")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Share Modal */}
      {isShareOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsShareOpen(false)}>
          <div className="bg-white rounded-[32px] w-full max-w-sm overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200" onClick={e => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif text-xl font-bold text-slate-900">{tStr("Share Temple")}</h3>
                <button onClick={() => setIsShareOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-4 gap-4">
                <button className="flex flex-col items-center gap-2 group">
                  <div className="w-14 h-14 rounded-full bg-green-50 text-green-600 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-all shadow-sm border border-green-100">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-600">WhatsApp</span>
                </button>

                <button className="flex flex-col items-center gap-2 group">
                  <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm border border-blue-100">
                    <Facebook className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-600">Facebook</span>
                </button>

                <button className="flex flex-col items-center gap-2 group">
                  <div className="w-14 h-14 rounded-full bg-slate-50 text-slate-700 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all shadow-sm border border-slate-200">
                    <Twitter className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-600">Twitter</span>
                </button>

                <button className="flex flex-col items-center gap-2 group">
                  <div className="w-14 h-14 rounded-full bg-pink-50 text-pink-600 flex items-center justify-center group-hover:bg-gradient-to-tr from-orange-500 via-pink-500 to-purple-500 group-hover:text-white group-hover:border-transparent transition-all shadow-sm border border-pink-100">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-600">Instagram</span>
                </button>
              </div>

              <div className="mt-6 p-1 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-2">
                <div className="truncate text-xs text-slate-500 pl-3 flex-1 font-medium select-all">
                  https://omg-devotee.vercel.app/temple/{t.slug}
                </div>
                <button onClick={copyLink} className="shrink-0 bg-white text-slate-700 text-xs font-bold px-4 py-2.5 rounded-lg border border-slate-200 shadow-sm hover:border-saffron hover:text-saffron transition-colors flex items-center gap-1.5 w-24 justify-center">
                  {isCopied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> : <Link2 className="w-3.5 h-3.5" />}
                  {isCopied ? tStr("Copied!") : tStr("Copy")}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toast Popup */}
      {isCopied && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[110] bg-slate-900/90 backdrop-blur-md text-white px-5 py-3 rounded-full shadow-2xl flex items-center gap-2 animate-in slide-in-from-bottom-5 fade-in duration-300">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span className="text-sm font-bold tracking-wide">{tStr("Link copied to clipboard")}</span>
        </div>
      )}
    </>
  );
}
