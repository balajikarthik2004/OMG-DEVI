import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Info, MapPin, Star, Accessibility, ChevronRight, Flame, Mountain, Landmark, Sparkles, ShieldAlert, Droplets, BookOpen, Footprints, TramFront } from "lucide-react";
import { tiruvannamalaiFacts, ashtaLingams, tiruvannamalaiGallery } from "@/data/tiruvannamalai";
import { trimbakeshwarFacts, trimbakeshwarSacredSpots, trimbakeshwarSpecialPoojas } from "@/data/trimbakeshwar";
import { penangTemple } from "@/data/penang-temple";
import { getTempleGallery } from "@/data/temple-galleries";
import {
  batuCavesFacts,
  batuCavesCaves,
  batuCavesOfferings,
  batuCavesThaipusam,
  batuCavesGettingThere,
  batuCavesGuidelines,
  batuCavesNearby,
  batuCavesGallery,
} from "@/data/batu-caves";

export function TempleTabs({ t }: any) {
  const { t: tStr } = useTranslation();
  const isPenang = t.slug === penangTemple.slug;
  const gallery = getTempleGallery(t.slug);

  const tabs = [
    { name: tStr("About"), icon: <Info className="w-3.5 h-3.5" />, colorClass: "text-blue-500" },
    { name: tStr("Facilities"), icon: <Accessibility className="w-3.5 h-3.5" />, colorClass: "text-emerald-500" },
    { name: tStr("Nearby"), icon: <MapPin className="w-3.5 h-3.5" />, colorClass: "text-rose-500" },
    { name: tStr("Reviews"), icon: <Star className="w-3.5 h-3.5" />, colorClass: "text-amber-500" }
  ];
  const [tab, setTab] = useState(0);

  const getRealDescription = (slug: string) => {
    switch (slug) {
      case 'palani-murugan':
        return tStr("Palani Murugan Temple is one of the Six Abodes of Lord Murugan (Arupadaiveedu), situated majestically on the Palani Hills. The idol of the presiding deity, Lord Dhandayuthapani Swamy, is uniquely made out of an amalgam of nine poisonous herbs (Navapashanam) by the ancient Siddhar Bogar. Known for its spiritually charged atmosphere, the temple attracts millions of devotees seeking blessings and profound peace.");
      case 'madurai-meenakshi':
        return tStr("Meenakshi Amman Temple is a historic Hindu temple located on the southern bank of the Vaigai River in Madurai. It is dedicated to Goddess Meenakshi, a form of Parvati, and her consort, Sundareshwarar. The temple is famed for its stunning Dravidian architecture, towering gopurams adorned with thousands of colorful figures, and the legendary Hall of Thousand Pillars.");
      default:
        return t.description ? tStr(t.description) : `${tStr(t.name)} ${tStr("is a renowned spiritual destination located in the heart of")} ${tStr(t.city)}, ${tStr(t.state)}. ${tStr("Dedicated to")} ${tStr(t.deity)}, ${tStr("it is an architectural marvel that attracts thousands of devotees daily.")}`;
    }
  };

  const description = getRealDescription(t.slug);

  // Facilities and nearby amenities default to the Indian temple-town pattern.
  // Temples that differ materially (paid parking, no bathing ghat, a rail halt
  // at the gate) override them here rather than showing misleading defaults.
  const DEFAULT_FACILITIES = [
    { n: "Wheelchair", i: "♿" }, { n: "Restrooms", i: "🚻" },
    { n: "Prasad", i: "🥛" }, { n: "Footwear", i: "👟" },
    { n: "First Aid", i: "💊" }, { n: "Bathing Ghat", i: "🚿" },
    { n: "No Photography", i: "📵" }, { n: "Free Parking", i: "🅿" },
  ];

  const facilities = t.slug === 'batu-caves-murugan'
    ? [
        { n: "272 Steps Only", i: "🪜" }, { n: "Restrooms", i: "🚻" },
        { n: "Prasadam Stalls", i: "🥛" }, { n: "Footwear Counter", i: "👟" },
        { n: "First Aid Post", i: "💊" }, { n: "Sarong Hire", i: "🧵" },
        { n: "Watch for Macaques", i: "🐒" }, { n: "Paid Parking", i: "🅿" },
      ]
    : isPenang
      ? [
          { n: "More than 500 steps to the hilltop shrine", i: "🪜" },
          { n: "Ganeshar shrine at the foot of the hill", i: "🛕" },
          { n: "Temple car park", i: "🅿️" },
        ]
      : DEFAULT_FACILITIES;

  const nearbyPlaces = t.slug === 'batu-caves-murugan'
    ? batuCavesNearby.map(p => ({ n: p.name, d: p.distance, i: p.icon }))
    : isPenang
      ? [
          { n: "Arulmigu Sree Ganeshar Temple", d: "", i: "🛕" },
          { n: "Penang Botanic Gardens", d: "", i: "🌿" },
          { n: "Penang Municipal Park", d: "", i: "🌳" },
        ]
      : [
        { n: "Choultries", d: "0.3 km", i: "🏨" },
        { n: "Veg Restaurants", d: "0.5 km", i: "🍽" },
        { n: "ATM", d: "0.2 km", i: "🏧" },
        { n: "Hospital", d: "1.1 km", i: "🏥" },
      ];

  const mockReviews = [
    { initials: "RK", name: "Ramesh K", date: "2 days ago", rating: 5, color: "bg-orange-100 text-orange-700", text: "Very peaceful in the morning hours. The arrangements were quite orderly, allowing for a good darshan experience." },
    { initials: "PS", name: "Priya S", date: "1 week ago", rating: 4, color: "bg-emerald-100 text-emerald-700", text: "Queue was manageable at 4 PM. Highly recommend visiting during weekdays to avoid the heavy weekend rush." },
    { initials: "MK", name: "Manoj Kumar", date: "2 weeks ago", rating: 5, color: "bg-blue-100 text-blue-700", text: "Amazing architecture and divine atmosphere. The temple administration is doing a great job maintaining cleanliness." },
    { initials: "AL", name: "Anitha L", date: "1 month ago", rating: 3, color: "bg-rose-100 text-rose-700", text: "Darshan was wonderful but parking was a bit chaotic. Better to use public transport during festival days." },
    { initials: "VN", name: "Venkatesh N", date: "2 months ago", rating: 5, color: "bg-indigo-100 text-indigo-700", text: "A truly spiritually uplifting experience. The Annadhanam provided was hygienic and tasty. Will definitely visit again." },
  ];

  return (
    <div className="bg-white border border-slate-100/60 rounded-2xl p-5 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_4px_25px_rgb(0,0,0,0.06)] transition-all duration-300">
      <div className="flex flex-wrap gap-2 border-b border-slate-100 pb-4">
        {tabs.map((tb, i) => (
          <button
            key={tb.name}
            onClick={() => setTab(i)}
            className={`flex items-center gap-1.5 whitespace-nowrap px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${tab === i ? "bg-gradient-to-r from-orange-500 to-rose-500 text-white shadow-md shadow-orange-500/20" : "text-slate-600 hover:bg-orange-50 hover:text-orange-600"}`}
          >
            <span className={tab === i ? "text-white" : tb.colorClass}>{tb.icon}</span>
            {tb.name}
          </button>
        ))}
      </div>

      <div className="pt-5">
        {tab === 0 && (
          <div className="space-y-5">
            <div className="flex flex-col md:flex-row gap-3 bg-gradient-to-br from-orange-50/50 to-rose-50/30 p-4 rounded-xl border border-orange-100/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3 opacity-10 pointer-events-none">
                <Landmark className="w-16 h-16 text-orange-600" />
              </div>
              <div className="relative z-10 flex flex-col justify-center">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-orange-600/80 mb-0.5">{tStr("Presiding Deity")}</span>
                <span className="text-lg md:text-xl font-serif font-bold text-slate-900 break-words leading-tight">{tStr(t.deity)}</span>
              </div>
            </div>

            <div className="text-sm text-slate-700 leading-relaxed font-medium whitespace-pre-wrap inline">
              {description}
              {!isPenang && <span className="text-blue-600 font-bold cursor-pointer ml-1 hover:underline">{tStr("See more")}</span>}
            </div>

            {isPenang && (
              <section className="rounded-xl border border-orange-100 bg-orange-50/50 p-4">
                <h3 className="flex items-center gap-2 font-bold text-slate-900">
                  <Flame className="size-4 text-orange-600" /> {tStr("Thaipusam and annual festivals")}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  {tStr("The hilltop shrine is the final stop of Penang’s annual Thaipusam procession. Devotees climb to the temple carrying milk pots (paal kudam) or kavadi.")}
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {penangTemple.festivals.map((festival) => (
                    <li key={festival} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700">{tStr(festival)}</li>
                  ))}
                </ul>
                <a href={penangTemple.officialSite} target="_blank" rel="noreferrer" className="mt-3 inline-block text-xs font-semibold text-orange-800 underline">{tStr("Penang Hindu Endowments Board")}</a>
              </section>
            )}

            {t.slug === 'tiruvannamalai' && (
              <>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {tiruvannamalaiFacts.map(f => (
                    <div key={f.label} className="bg-slate-50 border border-slate-100 rounded-xl p-3">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{tStr(f.label)}</div>
                      <div className="text-xs font-bold text-slate-800 mt-0.5">{tStr(f.value)}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-rose-50/50 p-4 rounded-xl border border-rose-100/50">
                  <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-1.5"><Flame className="w-4 h-4 text-rose-500" /> {tStr("Upcoming Festival")}</h3>
                  <div className="bg-white rounded-lg p-3 border border-rose-100 shadow-sm flex items-center justify-between gap-3">
                    <div>
                      <div className="font-bold text-rose-700 text-sm">{tStr("Karthigai Deepam · Bharani & Maha Deepam")}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{tStr("Bharani Deepam at 4 AM in the temple; Maha Deepam lit on the Arunachala summit at 6 PM. Dates per published calendars — confirm with the temple.")}</div>
                    </div>
                    <div className="bg-rose-100 text-rose-800 text-xs font-bold px-3 py-1.5 rounded-lg text-center shrink-0 shadow-inner">
                      {tStr("Nov 24")}<br />2026
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                  <h3 className="font-bold text-slate-800 mb-1 flex items-center gap-1.5"><Mountain className="w-4 h-4 text-amber-600" /> {tStr("Girivalam · Ashta Lingams")}</h3>
                  <p className="text-xs text-slate-500 mb-3">{tStr("The 14 km barefoot walk around Arunachala passes these eight lingams, clockwise from the East.")}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {ashtaLingams.map((l, i) => (
                      <div key={l.name} className="bg-white rounded-lg border border-amber-100 p-2 text-center">
                        <div className="text-[10px] font-bold text-amber-600">{i + 1} · {tStr(l.direction)}</div>
                        <div className="text-xs font-bold text-slate-800">{tStr(l.name)}</div>
                      </div>
                    ))}
                  </div>
                </div>


              </>
            )}

            {t.slug === 'palani-murugan' && (
              <>
                {/* 1. Palani Kshetram Highlights */}
                <div>
                  <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-600" /> {tStr("Sacred Kshetram Highlights")}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    <div className="bg-amber-50/40 border border-amber-100/80 rounded-xl p-3">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-amber-700/80">{tStr("Kshetram Tier")}</div>
                      <div className="text-xs font-bold text-slate-800 mt-1">{tStr("3rd Arupadaiveedu")}</div>
                    </div>
                    <div className="bg-amber-50/40 border border-amber-100/80 rounded-xl p-3">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-amber-700/80">{tStr("Presiding Idol")}</div>
                      <div className="text-xs font-bold text-slate-800 mt-1">{tStr("Navapashanam by Bogar")}</div>
                    </div>
                    <div className="bg-amber-50/40 border border-amber-100/80 rounded-xl p-3">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-amber-700/80">{tStr("Hill Access")}</div>
                      <div className="text-xs font-bold text-slate-800 mt-1">{tStr("670+ Steps · Winch & Rope Car")}</div>
                    </div>
                    <div className="bg-amber-50/40 border border-amber-100/80 rounded-xl p-3">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-amber-700/80">{tStr("GI-Tag Prasadam")}</div>
                      <div className="text-xs font-bold text-slate-800 mt-1">{tStr("Palani Panchamirtham")}</div>
                    </div>
                  </div>
                </div>

                {/* 2. Upcoming Festivals */}
                <div className="bg-rose-50/50 p-4 rounded-xl border border-rose-100/50">
                  <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-1.5"><Flame className="w-4 h-4 text-rose-500" /> {tStr("Upcoming Major Festivals")}</h3>
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-3 border border-rose-100 shadow-sm flex items-center justify-between gap-3">
                      <div>
                        <div className="font-bold text-rose-700 text-sm">{tStr("Thaipusam & Panguni Uthiram")}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{tStr("Millions of devotees walk barefoot on Pada Yatra carrying Pal Kudam and silver kavadi to the hilltop sanctum.")}</div>
                      </div>
                      <div className="bg-rose-100 text-rose-800 text-xs font-bold px-3 py-1.5 rounded-lg text-center shrink-0 shadow-inner">
                        {tStr("Thaipusam")}<br />{tStr("Jan / Feb")}
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-rose-100 shadow-sm flex items-center justify-between gap-3">
                      <div>
                        <div className="font-bold text-rose-700 text-sm">{tStr("Kanda Sashti & Soora Samharam")}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{tStr("The grand 6-day festival commemorating Lord Murugan's victory at the sacred foothills of Palani.")}</div>
                      </div>
                      <div className="bg-rose-100 text-rose-800 text-xs font-bold px-3 py-1.5 rounded-lg text-center shrink-0 shadow-inner">
                        {tStr("Nov 10")}<br />2026
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {t.slug === 'madurai-meenakshi' && (
              <>
                {/* 1. Meenakshi Amman Highlights */}
                <div>
                  <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-600" /> {tStr("Temple Architecture & Highlights")}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    <div className="bg-amber-50/40 border border-amber-100/80 rounded-xl p-3">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-amber-700/80">{tStr("Gateway Towers")}</div>
                      <div className="text-xs font-bold text-slate-800 mt-1">{tStr("14 Majestic Gopurams")}</div>
                    </div>
                    <div className="bg-amber-50/40 border border-amber-100/80 rounded-xl p-3">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-amber-700/80">{tStr("South Rajagopuram")}</div>
                      <div className="text-xs font-bold text-slate-800 mt-1">{tStr("170 ft (52 m) Tallest")}</div>
                    </div>
                    <div className="bg-amber-50/40 border border-amber-100/80 rounded-xl p-3">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-amber-700/80">{tStr("Pillared Marvel")}</div>
                      <div className="text-xs font-bold text-slate-800 mt-1">{tStr("Hall of 1000 Pillars (985)")}</div>
                    </div>
                    <div className="bg-amber-50/40 border border-amber-100/80 rounded-xl p-3">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-amber-700/80">{tStr("Sacred Theertham")}</div>
                      <div className="text-xs font-bold text-slate-800 mt-1">{tStr("Golden Lotus Tank")}</div>
                    </div>
                  </div>
                </div>

                {/* 2. Upcoming Chithirai Festival */}
                <div className="bg-gradient-to-r from-amber-50 to-rose-50/60 p-4 rounded-xl border border-rose-200/80">
                  <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                    <Flame className="w-4 h-4 text-rose-600" /> {tStr("Upcoming Chithirai Thiruvizha")}
                  </h3>
                  <div className="bg-white rounded-xl p-3.5 border border-rose-100 shadow-sm flex items-start justify-between gap-3">
                    <div>
                      <div className="font-bold text-rose-800 text-sm">{tStr("Meenakshi Thirukalyanam & Chariot Festival")}</div>
                      <div className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {tStr("The celestial wedding of Goddess Meenakshi and Lord Sundareswarar, followed by Lord Kallazhagar's grand entry into the Vaigai River, witnessed by over a million pilgrims.")}
                      </div>
                    </div>
                    <div className="bg-rose-100 text-rose-900 text-xs font-bold px-3 py-1.5 rounded-lg text-center shrink-0 border border-rose-200">
                      {tStr("Chithirai")}<br />{tStr("April / May")}
                    </div>
                  </div>
                </div>

                {/* 3. Darshan Tradition */}
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-3.5 text-xs text-emerald-950">
                  <strong className="font-bold text-emerald-900 flex items-center gap-1.5 mb-1">
                    <Info className="w-3.5 h-3.5 text-emerald-700" /> {tStr("Traditional Darshan Protocol")}
                  </strong>
                  <p className="text-[11px] text-emerald-900/90 leading-relaxed">
                    {tStr("Devotees traditionally pay homage first to Goddess Meenakshi in her sanctum holding the sacred green parrot, before proceeding to the sanctum of Lord Sundareswarar and the Golden Lotus Tank.")}
                  </p>
                </div>
              </>
            )}

            {t.slug === 'srirangam' && (
              <>
                {/* 1. Srirangam Kshetram Highlights */}
                <div>
                  <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-600" /> {tStr("Sacred Divya Desam Highlights")}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    <div className="bg-amber-50/40 border border-amber-100/80 rounded-xl p-3">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-amber-700/80">{tStr("Vaishnava Kshetram")}</div>
                      <div className="text-xs font-bold text-slate-800 mt-1">{tStr("1st of 108 Divya Desams")}</div>
                    </div>
                    <div className="bg-amber-50/40 border border-amber-100/80 rounded-xl p-3">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-amber-700/80">{tStr("Temple Complex")}</div>
                      <div className="text-xs font-bold text-slate-800 mt-1">{tStr("156 Acres · 7 Prakarams")}</div>
                    </div>
                    <div className="bg-amber-50/40 border border-amber-100/80 rounded-xl p-3">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-amber-700/80">{tStr("Rajagopuram")}</div>
                      <div className="text-xs font-bold text-slate-800 mt-1">{tStr("236 ft (72 m) Tallest in Asia")}</div>
                    </div>
                    <div className="bg-amber-50/40 border border-amber-100/80 rounded-xl p-3">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-amber-700/80">{tStr("Gopuram Count")}</div>
                      <div className="text-xs font-bold text-slate-800 mt-1">{tStr("21 Majestic Towers")}</div>
                    </div>
                  </div>
                </div>

                {/* 2. Vaikunta Ekadasi Festival */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50/60 p-4 rounded-xl border border-indigo-200/80">
                  <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                    <Flame className="w-4 h-4 text-indigo-600" /> {tStr("Upcoming Vaikunta Ekadasi")}
                  </h3>
                  <div className="bg-white rounded-xl p-3.5 border border-indigo-100 shadow-sm flex items-start justify-between gap-3">
                    <div>
                      <div className="font-bold text-indigo-900 text-sm">{tStr("Paramapada Vaasal Opening & 21-Day Utsavam")}</div>
                      <div className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {tStr("The celestial door to Vaikuntam opens at dawn on Margazhi Ekadasi. Devotees pass through the sacred portal following Lord Namperumal clad in the Ratnangi diamond armour.")}
                      </div>
                    </div>
                    <div className="bg-indigo-100 text-indigo-900 text-xs font-bold px-3 py-1.5 rounded-lg text-center shrink-0 border border-indigo-200">
                      {tStr("Margazhi")}<br />{tStr("Dec / Jan")}
                    </div>
                  </div>
                </div>
              </>
            )}

            {t.slug === 'rameswaram' && (
              <>
                {/* 1. Rameswaram Jyotirlinga Highlights */}
                <div>
                  <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-600" /> {tStr("Jyotirlinga & Theertham Highlights")}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    <div className="bg-amber-50/40 border border-amber-100/80 rounded-xl p-3">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-amber-700/80">{tStr("Sacred Pilgrimage")}</div>
                      <div className="text-xs font-bold text-slate-800 mt-1">{tStr("12 Jyotirlinga & Char Dham")}</div>
                    </div>
                    <div className="bg-amber-50/40 border border-amber-100/80 rounded-xl p-3">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-amber-700/80">{tStr("Sacred Wells")}</div>
                      <div className="text-xs font-bold text-slate-800 mt-1">{tStr("22 Holy Theerthams")}</div>
                    </div>
                    <div className="bg-amber-50/40 border border-amber-100/80 rounded-xl p-3">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-amber-700/80">{tStr("Grand Corridor")}</div>
                      <div className="text-xs font-bold text-slate-800 mt-1">{tStr("1,212 Pillars (Longest)")}</div>
                    </div>
                    <div className="bg-amber-50/40 border border-amber-100/80 rounded-xl p-3">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-amber-700/80">{tStr("Presiding Lingam")}</div>
                      <div className="text-xs font-bold text-slate-800 mt-1">{tStr("Ramalinga consecrated by Sita")}</div>
                    </div>
                  </div>
                </div>

                {/* 2. 22 Holy Theerthams Snanam */}
                <div className="bg-sky-50/60 p-4 rounded-xl border border-sky-200/80">
                  <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                    <Droplets className="w-4 h-4 text-sky-600" /> {tStr("Theertha Snanam (Holy Bathing Ritual)")}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {tStr("The sacred pilgrimage commences with a purification dip in Agni Theertham (Bay of Bengal) followed by bathing in the 22 interior temple wells—including Mahalakshmi, Gayatri, and Kodi Theertham—believed to absolve all sins.")}
                  </p>
                </div>
              </>
            )}

            {t.slug === 'dallas-arulmigu-mariamman-usa' && (
              <>
                {/* 1. Dallas Mariamman Highlights */}
                <div>
                  <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-600" /> {tStr("North American Heritage Highlights")}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    <div className="bg-amber-50/40 border border-amber-100/80 rounded-xl p-3">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-amber-700/80">{tStr("Location")}</div>
                      <div className="text-xs font-bold text-slate-800 mt-1">{tStr("Carrollton / Dallas, Texas")}</div>
                    </div>
                    <div className="bg-amber-50/40 border border-amber-100/80 rounded-xl p-3">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-amber-700/80">{tStr("Presiding Deity")}</div>
                      <div className="text-xs font-bold text-slate-800 mt-1">{tStr("Arulmigu Mariamman")}</div>
                    </div>
                    <div className="bg-amber-50/40 border border-amber-100/80 rounded-xl p-3">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-amber-700/80">{tStr("Tradition")}</div>
                      <div className="text-xs font-bold text-slate-800 mt-1">{tStr("Agamic South Indian Worship")}</div>
                    </div>
                    <div className="bg-amber-50/40 border border-amber-100/80 rounded-xl p-3">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-amber-700/80">{tStr("Community")}</div>
                      <div className="text-xs font-bold text-slate-800 mt-1">{tStr("Diaspora Annadhanam & Poojas")}</div>
                    </div>
                  </div>
                </div>

                {/* 2. Annual Aadi Festival */}
                <div className="bg-rose-50/60 p-4 rounded-xl border border-rose-200/80">
                  <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                    <Flame className="w-4 h-4 text-rose-600" /> {tStr("Annual Aadi Thiruvizha")}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {tStr("The auspicious Tamil month of Aadi brings grand abhishekam with milk, turmeric and rosewater, special koozh varthal distribution, and community procession for the North Texas devotee family.")}
                  </p>
                </div>
              </>
            )}

            {t.slug === 'trimbakeshwar' && (
              <>
                {/* 1. Key Jyotirlinga Facts */}
                <div>
                  <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-600" /> {tStr("Sacred Jyotirlinga Highlights")}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {trimbakeshwarFacts.map((f) => (
                      <div key={f.label} className="bg-amber-50/40 border border-amber-100/80 rounded-xl p-3">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-amber-700/80">{tStr(f.label)}</div>
                        <div className="text-xs font-bold text-slate-800 mt-1">{tStr(f.value)}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. Upcoming Mahashivratri Festival */}
                <div className="bg-gradient-to-r from-amber-50 to-orange-50/60 p-4 rounded-xl border border-amber-200/80">
                  <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                    <Flame className="w-4 h-4 text-amber-600" /> {tStr("Upcoming Grand Mahotsav")}
                  </h3>
                  <div className="bg-white rounded-xl p-3.5 border border-amber-100 shadow-sm flex items-start justify-between gap-3">
                    <div>
                      <div className="font-bold text-amber-900 text-sm">{tStr("Maha Shivratri & Shravan Somwar Mahotsav")}</div>
                      <div className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {tStr("All-night Rudrabhishek chanting, 24-hour Akhand Jyoti, golden chariot palanquin procession through Trimbak town, and the ceremonial viewing of the jeweled Suvarna Mukut.")}
                      </div>
                    </div>
                    <div className="bg-amber-100/80 text-amber-900 text-xs font-bold px-3 py-1.5 rounded-lg text-center shrink-0 border border-amber-300">
                      {tStr("Peak")}<br />{tStr("Monday")}
                    </div>
                  </div>
                </div>

                {/* 3. Sacred Spots & Tirthas */}
                <div className="bg-slate-50/80 p-4 rounded-xl border border-slate-200/70">
                  <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                    <Mountain className="w-4 h-4 text-emerald-600" /> {tStr("Sacred Pilgrimage Spots around Mandir")}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {trimbakeshwarSacredSpots.map((spot) => (
                      <div key={spot.name} className="bg-white rounded-xl border border-slate-200/60 p-3 shadow-2xs">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-xs text-slate-900">{tStr(spot.name)}</span>
                          <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                            {tStr(spot.category)}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">{tStr(spot.description)}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Specialized Vedic Poojas */}
                <div className="bg-orange-50/40 p-4 rounded-xl border border-orange-200/60">
                  <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-orange-600" /> {tStr("Authentic Vedic Poojas & Anushthan")}
                  </h3>
                  <div className="space-y-2">
                    {trimbakeshwarSpecialPoojas.map((pooja) => (
                      <div key={pooja.name} className="bg-white rounded-xl border border-orange-100 p-3 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="min-w-0 flex-1">
                          <div className="font-bold text-xs text-slate-900">{tStr(pooja.name)}</div>
                          <div className="text-[11px] text-slate-600 mt-0.5 leading-snug">{tStr(pooja.significance)}</div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0 text-[11px]">
                          <span className="font-semibold text-orange-800 bg-orange-100/70 px-2 py-0.5 rounded-md">{pooja.duration}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 5. Garbhagriha Dress Code & Regulations */}
                <div className="rounded-xl border border-amber-300 bg-amber-50/80 p-3.5 text-xs text-amber-900 flex items-start gap-2.5">
                  <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div className="leading-relaxed">
                    <strong className="font-bold">{tStr("Garbhagriha Sparsh Darshan Guidelines")}:</strong>{" "}
                    {tStr("Sanctum entry for direct Jalabhishek is permitted only from 6:00 AM to 7:00 AM. Male devotees must wear traditional unstitched Dhoti / Sovala (silk or cotton) with no upper garment. Female devotees must wear sarees. Belts, wallets, and mobile phones are strictly prohibited inside the sanctum.")}
                  </div>
                </div>
              </>
            )}

            {t.slug === 'batu-caves-murugan' && (
              <>
                {/* 1. Key Highlights */}
                <div>
                  <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-600" /> {tStr("Temple at a Glance")}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {batuCavesFacts.map((f) => (
                      <div key={f.label} className="bg-amber-50/40 border border-amber-100/80 rounded-xl p-3">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-amber-700/80">{tStr(f.label)}</div>
                        <div className="text-xs font-bold text-slate-800 mt-1">{tStr(f.value)}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. Thaipusam Highlight */}
                <div className="bg-gradient-to-r from-amber-50 to-orange-50/60 p-4 rounded-xl border border-amber-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="font-bold text-slate-800 flex items-center gap-1.5 text-sm">
                      <Flame className="w-4 h-4 text-amber-600" /> {tStr(batuCavesThaipusam.name)}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed max-w-xl">
                      {tStr("Malaysia’s foremost Murugan pilgrimage, drawing over a million devotees who carry paal kudam and vel kavadi up the 272 steps.")}
                    </p>
                  </div>
                  <div className="bg-amber-100/80 text-amber-900 text-xs font-bold px-3 py-1.5 rounded-lg text-center shrink-0 border border-amber-300">
                    <span className="text-[10px] uppercase text-amber-700 font-semibold">{tStr("Next")}</span>
                    <div className="font-bold text-slate-800">{batuCavesThaipusam.nextDate}</div>
                  </div>
                </div>

                {/* 3. Essentials & Getting There */}
                <div className="grid sm:grid-cols-2 gap-2.5">
                  <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-3.5 text-xs text-amber-950">
                    <strong className="font-bold text-amber-900 flex items-center gap-1.5 mb-1.5">
                      <ShieldAlert className="w-3.5 h-3.5 text-amber-700" /> {tStr("Visitor Essentials")}
                    </strong>
                    <ul className="space-y-1 text-[11px] text-amber-900/90 leading-relaxed">
                      <li>• {tStr("Modest attire required — knees and shoulders covered (sarongs rentable at gate).")}</li>
                      <li>• {tStr("Climb early morning (7–9 AM) to avoid midday sun and stairway queues.")}</li>
                      <li>• {tStr("Keep food and drink concealed from friendly macaques along the steps.")}</li>
                    </ul>
                  </div>

                  <div className="rounded-xl border border-sky-200 bg-sky-50/70 p-3.5 text-xs text-sky-950">
                    <strong className="font-bold text-sky-900 flex items-center gap-1.5 mb-1.5">
                      <TramFront className="w-3.5 h-3.5 text-sky-600" /> {tStr("Getting to Batu Caves")}
                    </strong>
                    <ul className="space-y-1 text-[11px] text-sky-900/90 leading-relaxed">
                      <li>• <span className="font-semibold text-slate-800">{tStr("KTM Komuter:")}</span> {tStr("Direct train from KL Sentral to Batu Caves station (30 mins).")}</li>
                      <li>• <span className="font-semibold text-slate-800">{tStr("Taxi / Ride-hail:")}</span> {tStr("15 km north of central KL via MRR2 / Jalan Kuching.")}</li>
                      <li>• <span className="font-semibold text-slate-800">{tStr("Parking:")}</span> {tStr("On-site parking lots available at the temple entrance.")}</li>
                    </ul>
                  </div>
                </div>
              </>
            )}


            {/* Universal Photo Gallery for all temples */}
            {gallery && gallery.length > 0 && (
              <div className="pt-2">
                <h3 className="font-bold text-slate-800 mb-2.5 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  {tStr("Photo Gallery")}
                  <span className="text-[11px] font-normal text-slate-400">({gallery.length})</span>
                </h3>
                <div className="flex gap-3 overflow-x-auto pb-2 snap-x scrollbar-thin">
                  {gallery.map((img) => (
                    <figure key={img.src} className="shrink-0 w-52 snap-start group">
                      <div className="overflow-hidden rounded-xl border border-slate-100 bg-slate-50 shadow-2xs">
                        <img
                          src={img.src}
                          alt={img.caption}
                          loading="lazy"
                          className="w-52 h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <figcaption className="text-[10px] text-slate-600 mt-1.5 leading-snug">
                        <span className="font-semibold text-slate-800">{tStr(img.caption)}</span>
                        {img.author && (
                          <div className="text-[9px] text-slate-400 mt-0.5 truncate">
                            {img.sourceUrl ? (
                              <a
                                href={img.sourceUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="hover:underline hover:text-slate-600"
                              >
                                {img.author} · {img.license}
                              </a>
                            ) : (
                              `${img.author} · ${img.license}`
                            )}
                          </div>
                        )}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            )}

          </div>
        )}

        {tab === 1 && (
          <div className="grid grid-cols-2 gap-3">
            {facilities.map(f => (
              <div key={f.n} className="flex flex-col items-center justify-center bg-white border border-slate-100 hover:border-slate-200 hover:bg-orange-50/30 rounded-xl p-3 text-center transition-colors shadow-sm">
                <span className="text-2xl mb-1.5">{f.i}</span>
                <span className="text-[11px] font-bold text-slate-700">{tStr(f.n)}</span>
              </div>
            ))}
          </div>
        )}

        {tab === 2 && (
          <div className="grid md:grid-cols-2 gap-3">
            {nearbyPlaces.map(n => (
              <div key={n.n} className="flex items-center p-3 bg-slate-50 hover:bg-orange-50/50 rounded-xl border border-slate-100/80 transition-colors">
                <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-xl shrink-0 mr-3">{n.i}</div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-bold text-slate-800 truncate">{tStr(n.n)}</div>
                  {n.d && <div className="text-[10px] font-semibold text-slate-500 mt-0.5">{tStr("Distance")}: {n.d}</div>}
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 3 && isPenang && (
          <div className="space-y-2 text-sm text-slate-700">
            <p>{tStr("Visitor reviews are available on Google Maps.")}</p>
            <a href="https://www.google.com/maps/search/?api=1&query=Arulmigu+Balathandayuthapani+Temple%2C+Penang" target="_blank" rel="noreferrer" className="font-semibold text-orange-800 underline">
              {tStr("Find visitor reviews on Google Maps")}
            </a>
          </div>
        )}

        {tab === 3 && !isPenang && (
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-orange-50/50 rounded-xl border border-orange-100/50">
              <div className="text-3xl font-serif font-bold text-slate-900 tracking-tight">4.3</div>
              <div>
                <div className="flex text-amber-500 mb-0.5">
                  {[1, 2, 3, 4].map(i => <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />)}
                  <Star className="w-3.5 h-3.5 text-slate-200 fill-slate-200" />
                </div>
                <div className="text-xs font-bold text-slate-500">{tStr("Based on 2,841 reviews")}</div>
              </div>
            </div>

            <div className="grid gap-3 max-h-[190px] overflow-y-auto pr-2 pb-2">
              {mockReviews.map((rev, idx) => (
                <div key={idx} className="border border-slate-100 rounded-xl p-4 bg-white shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-[11px] ${rev.color}`}>
                        {rev.initials}
                      </div>
                      <div>
                        <div className="text-xs font-extrabold text-slate-800">{rev.name}</div>
                        <div className="text-[10px] font-medium text-slate-400 mt-0.5">{rev.date}</div>
                      </div>
                    </div>
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3 h-3 ${i < rev.rating ? "fill-amber-500" : "text-slate-200 fill-slate-200"}`} />
                      ))}
                    </div>
                  </div>
                  <div className="text-[12px] font-medium text-slate-600 leading-relaxed">"{rev.text}"</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
