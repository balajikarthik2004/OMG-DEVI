import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import {
  Footprints,
  CalendarCheck,
  Flame,
  Ticket,
  HeartHandshake,
  ArrowRight,
  MapPin,
  Sparkles,
} from "lucide-react";

import {
  GIRIVALAM_DISTANCE_KM,
  pastWalks,
} from "@/data/girivalam";
import { getTemple } from "@/data/temples";
import { formatINR } from "@/lib/currency";

export const Route = createFileRoute("/_app/journey")({
  head: () => ({
    meta: [
      { title: "My Journey — OMG Devotee" },
      { name: "description", content: "Your darshan history, Girivalam walks, bookings and offerings in one place." },
    ],
  }),
  component: MyJourney,
});

/** Sample activity until devotee history is connected. */
const DARSHAN_HISTORY = [
  { date: "18 Oct 2026", slug: "tiruvannamalai", type: "Special Entry", amount: 200 },
  { date: "14 Sep 2026", slug: "palani-murugan", type: "VIP Darshan", amount: 500 },
  { date: "21 Aug 2026", slug: "tiruvannamalai", type: "Free Darshan", amount: 0 },
  { date: "15 May 2025", slug: "madurai-meenakshi", type: "Temple visit", amount: 0 },
];

const OFFERINGS = [
  { date: "18 Oct 2026", cause: "Annadhanam", amount: 2500 },
  { date: "20 Sep 2026", cause: "Temple maintenance", amount: 1001 },
  { date: "3 Aug 2026", cause: "Deepam fund", amount: 5000 },
];

function MyJourney() {
  const { t } = useTranslation();
  const templesVisited = new Set(DARSHAN_HISTORY.map((visit) => visit.slug)).size;
  const totalKm = pastWalks.reduce((s, w) => s + w.completedKm, 0);
  const totalOffered = OFFERINGS.reduce((s, o) => s + o.amount, 0);

  return (
    <div className="min-h-screen gv-surface pb-10">
      <header className="px-4 pt-6 lg:px-7 lg:pt-8">
        <div className="relative mx-auto max-w-[1540px] overflow-hidden rounded-[28px] bg-[#0B2F25] px-6 py-8 text-white shadow-lg sm:px-9 sm:py-10">
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl" aria-hidden="true" />
          <div className="relative max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-amber-200">
              <Sparkles className="h-4 w-4" /> {t("My Journey")}
            </span>
            <h1 className="mt-5 font-serif text-3xl font-bold leading-tight sm:text-4xl">{t("The places that stay with you")}</h1>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
              {t("A home for the temples you have visited, the paths you have walked and the offerings you have made.")}
            </p>
            <Link to="/temples" className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-300 px-5 py-2.5 text-sm font-bold text-[#0B2F25] hover:bg-amber-200">
              {t("Explore temples")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1540px] space-y-4 px-4 pt-5 lg:px-7">
        <p className="text-xs text-slate-500">{t("Sample journey activity shown for preview")}</p>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          <Tile icon={MapPin} value={String(templesVisited)} label={t("Temples visited")} />
          <Tile icon={CalendarCheck} value={String(DARSHAN_HISTORY.length)} label={t("Temple visits")} />
          <Tile icon={Footprints} value={`${totalKm.toFixed(1)} km`} label={t("Paths walked")} />
          <Tile icon={HeartHandshake} value={formatINR(totalOffered)} label={t("Total offered")} />
        </div>

        <div className="grid items-start gap-4 lg:grid-cols-3">
          {/* Past walks */}
          <section className="gv-card order-2 p-5">
            <h2 className="mb-3 flex items-center gap-2 font-serif text-base font-bold text-[#0B2F25]">
              <Footprints className="h-4.5 w-4.5 text-[#C48437]" />
              {t("Paths walked at Arunachala")}
            </h2>
            <ul className="divide-y divide-[#f3eee2]">
              {pastWalks.map((w) => (
                <li key={w.date} className="flex items-center justify-between gap-3 py-2.5">
                  <div className="min-w-0">
                    <div className="truncate text-sm font-semibold text-slate-800">{w.date}</div>
                    <div className="truncate text-xs text-slate-400">
                      {t(w.occasion)} · {w.durationLabel}
                    </div>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-bold ${
                      w.completedKm >= GIRIVALAM_DISTANCE_KM
                        ? "bg-emerald-100 text-[#0B2F25]"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {w.completedKm} km
                  </span>
                </li>
              ))}
            </ul>
            <Link to="/girivalam" className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#0B2F25] hover:underline">
              {t("View Girivalam")} <ArrowRight className="h-4 w-4" />
            </Link>
          </section>

          {/* Darshan history */}
          <section className="gv-card order-1 p-5 lg:col-span-2">
            <h2 className="mb-3 flex items-center gap-2 font-serif text-base font-bold text-[#0B2F25]">
              <Ticket className="h-4.5 w-4.5 text-[#C48437]" />
              {t("Temple visits")}
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {DARSHAN_HISTORY.map((d, i) => {
                const temple = getTemple(d.slug);
                return (
                  <Link key={`${d.date}-${i}`} to="/temple/$slug" params={{ slug: d.slug }} className="group flex min-w-0 gap-3 rounded-xl border border-[#eee8dc] p-2 transition-all hover:border-[#C48437]/50 hover:shadow-md">
                    <img src={temple?.thumb || temple?.image} alt="" className="h-20 w-20 shrink-0 rounded-lg object-cover" />
                    <div className="flex min-w-0 flex-col justify-center">
                      <span className="text-[11px] font-medium text-[#A56A27]">{d.date}</span>
                      <span className="mt-0.5 line-clamp-2 font-serif text-sm font-bold leading-snug text-[#0B2F25] group-hover:text-[#A56A27]">{temple ? t(temple.name) : d.slug}</span>
                      <span className="mt-1 text-xs text-slate-500">{t(d.type)}{d.amount ? ` · ${formatINR(d.amount)}` : ""}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        </div>

        {/* Offerings */}
        <section className="gv-card p-5">
          <h2 className="mb-3 flex items-center gap-2 font-serif text-base font-bold text-[#0B2F25]">
            <Flame className="h-4.5 w-4.5 text-[#C48437]" />
            {t("Offerings & donations")}
          </h2>
          <ul className="divide-y divide-[#f3eee2]">
            {OFFERINGS.map((o, i) => (
              <li key={`${o.date}-${i}`} className="flex items-center justify-between gap-3 py-2.5">
                <div className="min-w-0">
                  <div className="truncate text-sm font-semibold text-slate-800">{t(o.cause)}</div>
                  <div className="text-xs text-slate-400">{o.date}</div>
                </div>
                <span className="shrink-0 text-sm font-bold tabular-nums text-[#0B2F25]">
                  {formatINR(o.amount)}
                </span>
              </li>
            ))}
          </ul>
          <Link
            to="/donations"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#0B2F25] underline-offset-2 hover:underline"
          >
            {t("Make another offering")} <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </div>
    </div>
  );
}

function Tile({
  icon: Icon,
  value,
  label,
}: {
  icon: typeof Footprints;
  value: string;
  label: string;
}) {
  return (
    <div className="gv-card flex min-w-0 items-center gap-2 p-3 sm:gap-3 sm:p-4">
      <Icon className="h-6 w-6 shrink-0 text-[#C48437] sm:h-7 sm:w-7" strokeWidth={1.75} />
      <div className="min-w-0">
        <div className="truncate text-xl font-black leading-tight text-[#0B2F25]">{value}</div>
        <div className="truncate text-[11px] text-slate-500">{label}</div>
      </div>
    </div>
  );
}
