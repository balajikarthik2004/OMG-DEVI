import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Clock, MapPin, ParkingCircle, Phone, Store, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import { penangTemple as temple } from "@/data/penang-temple";
import { penangStoreId } from "@/data/penang-visit";
import { OtherTemples } from "./SidebarWidgets";
import { TempleHero } from "./TempleHero";
import { TempleTabs } from "./TempleTabs";

const panel = "rounded-3xl border border-slate-100 bg-white p-5 shadow-sm sm:p-7";

export function PenangTempleProfile() {
  const { t } = useTranslation();

  return (
    <div className="pb-12">
      <TempleHero t={temple} />
      <div className="relative z-20 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-2 py-3">
          <nav aria-label={t("Temple services")} className="flex flex-wrap gap-2">
            <Link to="/heatmap" search={{ temple: temple.slug }} className="inline-flex items-center gap-1.5 rounded-full border border-emerald-600/30 bg-emerald-50 px-3.5 py-1.5 text-sm font-bold text-[#165B43] hover:bg-emerald-100 shadow-xs"><MapPin className="size-4 text-emerald-700" /> {t("Live Crowd Heatmap")}</Link>
            <Link to="/store/$storeId" params={{ storeId: penangStoreId }} className="inline-flex items-center gap-1.5 rounded-full border bg-white px-3 py-1.5 text-sm font-semibold text-[#165B43] hover:bg-emerald-50"><Store className="size-4" /> {t("Temple Store")}</Link>
          </nav>
          <p className="text-xs text-slate-500">{t(temple.imageCaption)}</p>
        </div>
        <section aria-labelledby="darshan-status" className={panel}>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 id="darshan-status" className="font-serif text-2xl font-bold text-slate-900">{t("Darshan and visit status")}</h2>
            <a href="#daily-pooja-schedule" className="inline-flex items-center gap-1.5 text-sm font-bold text-[#165B43] underline-offset-4 hover:underline">
              {t("View full pooja schedule")} <ArrowDown className="size-4" />
            </a>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {[
              { label: "Live Darshan Wait", value: "22 mins", sub: "Moving steadily", Icon: Clock },
              { label: "Live crowd level", value: "42% Moderate", sub: "~4,200 devotees", Icon: Users },
              { label: "Live parking availability", value: "68% full", sub: "160 slots open", Icon: ParkingCircle },
            ].map(({ label, value, sub, Icon }) => (
              <div key={label} className="rounded-xl border border-emerald-100/60 bg-emerald-50/40 p-4">
                <p className="flex items-center gap-2 text-sm font-semibold text-slate-700"><Icon className="size-4 text-[#165B43]" /> {t(label)}</p>
                <p className="mt-2 text-xl font-bold text-slate-900">{t(value)}</p>
                <p className="text-xs text-slate-500 mt-0.5">{t(sub)}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-600">
            {t("Call the temple for current queue and access information.")} <a href={temple.phoneHref} className="font-semibold text-[#165B43] underline underline-offset-2">{temple.phone}</a>
          </p>
        </section>

        <div className="mt-8 grid items-start gap-8 lg:grid-cols-3">
          <div className="min-w-0 space-y-6 lg:col-span-2">
            <TempleTabs t={temple} />
            <section id="daily-pooja-schedule" className={`${panel} scroll-mt-24`} aria-labelledby="pooja-schedule-heading">
              <h2 id="pooja-schedule-heading" className="font-serif text-2xl font-bold text-slate-900">{t("Daily pooja schedule")}</h2>
              <p className="mt-1 text-sm text-slate-600">{t("Malaysia time (MYT). Festival schedules may vary.")}</p>
              <div className="mt-4 overflow-hidden rounded-xl border border-slate-200">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 text-slate-700">
                    <tr>
                      <th scope="col" className="px-2.5 py-3 sm:px-4">{t("Session")}</th>
                      <th scope="col" className="px-2.5 py-3 sm:px-4">{t("Abhishegam")}</th>
                      <th scope="col" className="px-2.5 py-3 sm:px-4">{t("Pooja")}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-800">
                    {temple.prayers.map(({ session, abhishegam, pooja }) => (
                      <tr key={session}>
                        <th scope="row" className="px-2.5 py-3 font-semibold sm:px-4">{t(session)}</th>
                        <td className="whitespace-nowrap px-2.5 py-3 sm:px-4">{abhishegam}</td>
                        <td className="whitespace-nowrap px-2.5 py-3 sm:px-4">{pooja}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 rounded-xl bg-orange-50 px-4 py-3 text-sm text-slate-800">
                <h3 className="font-bold">{t("Archanai")}</h3>
                <p className="mt-1">{temple.archanai.morning} · {temple.archanai.evening}</p>
              </div>
              <a href={temple.prayerTimetable} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#165B43] underline underline-offset-2">
                {t("Penang Hindu Endowments Board prayer timetable")} <ArrowUpRight className="size-4 shrink-0" />
              </a>
              <details className="mt-4 rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700">
                <summary className="cursor-pointer font-semibold">{t("Prayer times listed by Penang eRIBI")}</summary>
                <p className="mt-2 leading-relaxed">{t("Penang eRIBI lists archanai from 8:30–11:30 AM and 6:15–8:15 PM, with closing rituals from 11:35 AM–12:00 PM and 8:35–9:00 PM. Call the temple to confirm the current times.")}</p>
                <a href={temple.ritualDirectory} target="_blank" rel="noreferrer" className="mt-2 inline-block font-semibold text-[#165B43] underline underline-offset-2">{t("Penang eRIBI temple entry")}</a>
              </details>
            </section>
            <section className={panel}>
              <h2 className="font-serif text-xl font-bold text-slate-900">{t("Annadhanam")}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                {t("The Board advertised Annadhanam at the foothill grounds for Thaipusam 2026. A regular meal schedule is unavailable. Call the temple for current arrangements.")}
              </p>
              <a href={temple.annadhanamNotice} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm font-semibold text-[#165B43] underline underline-offset-2">{t("Thaipusam 2026 Annadhanam notice")}</a>
            </section>
          </div>

          <aside className="min-w-0 space-y-6" aria-label={t("Visitor information")}>
            <section className={`${panel} space-y-4`}>
              <h2 className="font-serif text-xl font-bold text-slate-900">{t("Visiting hours and directions")}</h2>
              <p className="flex items-start gap-2 text-sm leading-relaxed text-slate-700">
                <MapPin className="mt-0.5 size-4 shrink-0 text-[#165B43]" /> {temple.address}
              </p>
              <dl className="space-y-3 rounded-xl bg-slate-50 p-4 text-sm leading-relaxed text-slate-700">
                <div>
                  <dt className="font-semibold"><a href={temple.tourismGuide} target="_blank" rel="noreferrer" className="text-[#165B43] underline underline-offset-2">{t("Penang Global Tourism visitor guide")}</a></dt>
                  <dd>{temple.hours} {t("daily, MYT")}</dd>
                </div>
                <div>
                  <dt className="font-semibold"><a href={temple.prayerTimetable} target="_blank" rel="noreferrer" className="text-[#165B43] underline underline-offset-2">{t("Temple Board prayer notice")}</a></dt>
                  <dd>{t(temple.boardClosingHours)} (MYT)</dd>
                </div>
              </dl>
              <p className="text-sm leading-relaxed text-slate-600">{t("Published hours differ. Call ahead for evening prayers, festival access, or booking enquiries.")}</p>
              <div className="flex flex-wrap items-center gap-3">
                <a href={temple.directions} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-lg bg-[#165B43] px-3 py-2 text-sm font-semibold text-white hover:bg-[#0B2F25]">
                  {t("Directions")} <ArrowUpRight className="size-4" />
                </a>
                <a href={temple.phoneHref} className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#165B43] underline underline-offset-2">
                  <Phone className="size-4" /> {temple.phone}
                </a>
              </div>
            </section>

            <section className={`${panel} space-y-3`}>
              <h2 className="font-serif text-xl font-bold text-slate-900">{t("Parking and accessibility")}</h2>
              <p className="text-sm leading-relaxed text-slate-700">{t("Penang Hill Corporation lists a designated temple car park. The hilltop shrine is reached by more than 500 steps.")}</p>
              <ul className="space-y-2 text-sm font-semibold text-[#165B43]">
                <li><a href={temple.parkingMap} target="_blank" rel="noreferrer" className="underline underline-offset-2">{t("Find the temple car park")}</a></li>
                <li><a href={temple.parkingSource} target="_blank" rel="noreferrer" className="underline underline-offset-2">{t("Penang Hill Corporation parking notice")}</a></li>
                <li><a href={temple.ganesharShrine} target="_blank" rel="noreferrer" className="underline underline-offset-2">{t("Ganeshar shrine at the foot of the hill")}</a></li>
              </ul>
            </section>
            <OtherTemples t={temple} />
          </aside>
        </div>
      </div>
    </div>
  );
}
