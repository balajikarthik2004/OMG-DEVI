import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Flower2, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { penangTemple } from "@/data/penang-temple";
import { penangOfferings } from "@/data/penang-visit";

export function PenangOfferings() {
  const { t } = useTranslation();

  return (
    <section aria-labelledby="penang-offerings-title" className="space-y-5">
      <div>
        <h2 id="penang-offerings-title" className="font-serif text-xl font-bold text-slate-900">{t("Published pooja services")}</h2>
        <p className="mt-1 text-sm text-slate-600">{t("Contact the temple to confirm arrangements and fees. Online checkout is unavailable.")}</p>
      </div>
      <ul className="grid gap-4 sm:grid-cols-3">
        {penangOfferings.map((offering) => (
          <li key={offering.name} className="rounded-2xl border border-[#E8E2D5] bg-white p-5">
            <Flower2 className="mb-3 size-5 text-[#A46C28]" />
            <h3 className="font-serif text-lg font-bold text-slate-900">{t(offering.name)}</h3>
            <p className="mt-1 text-sm leading-relaxed text-slate-600">{t(offering.description)}</p>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-[#165B43]">
        <a href={penangTemple.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-[#165B43] px-4 py-2.5 text-white"><Phone className="size-4" /> {t("Call temple")} {penangTemple.phone}</a>
        <Link to="/temple/$slug" params={{ slug: penangTemple.slug }} hash="daily-pooja-schedule" className="underline underline-offset-2">{t("View pooja schedule")}</Link>
        <a href={penangTemple.prayerTimetable} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 underline underline-offset-2">{t("Temple Board prayer timetable")} <ArrowUpRight className="size-4" /></a>
      </div>
    </section>
  );
}
