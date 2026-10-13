export const PastSponsorsSection = () => {
  const sponsors = [
    {
      name: 'APL Apollo Steel Pipes',
      render: () => (
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1.5">
            <div className="relative w-9 h-9 rounded-full border-4 border-[#008C99] border-r-[#F37021] flex items-center justify-center">
              <span className="text-[10px] font-black text-[#008C99] tracking-tighter">APL</span>
            </div>
            <div className="text-left leading-none">
              <span className="text-base font-black text-[#F37021] tracking-tight block">APOLLO</span>
              <span className="text-[9px] font-extrabold text-neutral-900 tracking-wider block">STEEL PIPES</span>
            </div>
          </div>
          <span className="text-[8px] font-semibold text-neutral-500 tracking-wider uppercase mt-1.5">
            APL APOLLO TUBES LIMITED
          </span>
        </div>
      ),
    },
    {
      name: 'Manilam Decorative Panel',
      render: () => (
        <div className="flex flex-col items-center text-center">
          <svg className="w-10 h-6 text-[#B69146] mb-0.5" viewBox="0 0 64 32" fill="none">
            <path
              d="M12 26C18 26 20 8 26 8C30 8 30 22 32 22C34 22 34 8 38 8C44 8 46 26 52 26"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path d="M8 28H56" stroke="currentColor" strokeWidth="1.8" />
          </svg>
          <span className="text-base font-semibold tracking-[0.22em] text-neutral-900 leading-none">
            MAN<span className="text-[#C8232C]">I</span>LAM<sup className="text-[8px]">®</sup>
          </span>
          <span className="text-[8px] font-semibold tracking-[0.18em] text-neutral-500 uppercase mt-1">
            DECORATIVE PANEL
          </span>
        </div>
      ),
    },
    {
      name: 'Kohler',
      render: () => (
        <div className="flex items-center justify-center">
          <span className="text-2xl sm:text-[26px] font-black tracking-tight text-neutral-950 font-sans">
            KOHLER<span className="text-neutral-950">.</span>
          </span>
        </div>
      ),
    },
    {
      name: 'Johnson Tiles',
      render: () => (
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-neutral-900 p-1 flex items-center justify-center shrink-0">
            <div className="w-full h-full bg-[#E31E24] flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white" />
            </div>
          </div>
          <div className="text-left leading-none">
            <span className="text-base font-black tracking-wider text-neutral-900 block">
              JOHNSON<sup className="text-[8px] font-bold">®</sup>
            </span>
            <span className="text-[9px] italic font-semibold text-neutral-700 border-b-2 border-[#E31E24] pb-0.5 inline-block mt-0.5">
              Not just tiles, Lifestyles.
            </span>
          </div>
        </div>
      ),
    },
    {
      name: 'Adharshila Power Corporation',
      render: () => (
        <div className="flex flex-col items-center text-center">
          <svg className="w-8 h-8 mb-0.5" viewBox="0 0 48 48" fill="none">
            <path d="M24 4L10 42H38L24 4Z" stroke="#525252" strokeWidth="2" />
            <path d="M15 20H33M12 30H36" stroke="#525252" strokeWidth="1.5" />
            <path d="M28 14L18 27H26L20 40" stroke="#E31E24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-xs font-serif font-bold text-[#146A2E] leading-tight">
            <span className="text-base font-extrabold">A</span>dharshila Power Corporation
          </span>
          <span className="text-[8px] font-medium text-neutral-500">
            A Complete Power Solutions
          </span>
        </div>
      ),
    },
    {
      name: 'Euronics',
      render: () => (
        <div className="flex items-center gap-2">
          <div className="flex flex-col gap-0.5">
            <div className="w-5 h-1.5 bg-neutral-900 skew-y-12" />
            <div className="w-5 h-1.5 bg-neutral-900 skew-y-12" />
            <div className="w-5 h-1.5 bg-neutral-900 skew-y-12" />
          </div>
          <span className="text-lg sm:text-xl font-black tracking-wide text-neutral-950">
            EURONICS
          </span>
        </div>
      ),
    },
    {
      name: 'Kitchen World',
      render: () => (
        <div className="flex flex-col items-center text-center">
          <span className="text-lg font-extrabold text-[#E31E24] tracking-tight leading-none">
            Kitchen World
          </span>
          <span className="text-[9px] font-semibold text-neutral-600 mt-1">
            Modular Kitchen &amp; Interior
          </span>
        </div>
      ),
    },
    {
      name: 'Greenply',
      render: () => (
        <div className="flex flex-col items-center">
          <span className="bg-[#0B5D2A] text-white text-[8px] italic font-bold px-2 py-0.5 rounded-tl-xl rounded-br-xl -mb-1 ml-4 shadow-2xs">
            Green
          </span>
          <span className="text-xl sm:text-2xl font-serif italic font-black text-[#0B5D2A] tracking-tight">
            Greenply
          </span>
        </div>
      ),
    },
    {
      name: 'Celestia Luxury Residences',
      render: () => (
        <div className="flex flex-col items-center text-center">
          <div className="flex items-end gap-1 mb-1">
            <div className="w-3.5 h-5 bg-gradient-to-t from-[#9C7A32] to-[#C8A456] rounded-t-xs" />
            <div className="w-4 h-7 bg-gradient-to-t from-[#9C7A32] to-[#C8A456] rounded-t-xs relative">
              <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[#B68D3B] text-[10px]">★</span>
            </div>
            <div className="w-3.5 h-4 bg-gradient-to-t from-[#9C7A32] to-[#C8A456] rounded-t-xs" />
          </div>
          <span className="text-xs font-bold tracking-[0.2em] text-neutral-800 leading-none">
            CELESTIA
          </span>
          <span className="text-[7px] font-semibold tracking-wider text-[#9C7A32] uppercase mt-0.5">
            LUXURY RESIDENCES • A. P. SEN ROAD
          </span>
        </div>
      ),
    },
    {
      name: 'Jaquar',
      render: () => (
        <div className="flex items-center gap-2">
          <div className="flex -space-x-1">
            <span className="w-1.5 h-7 rounded-full bg-[#005B60] rotate-12 block" />
            <span className="w-1.5 h-7 rounded-full bg-[#00838F] rotate-12 block" />
          </div>
          <span className="text-xl font-serif italic font-extrabold text-[#004D52] tracking-tight">
            Jaquar
          </span>
        </div>
      ),
    },
    {
      name: 'Daikin',
      render: () => (
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 relative overflow-hidden shrink-0">
            <div className="absolute inset-0 bg-[#00A0E4] [clip-path:polygon(0_0,100%_0,0_100%)]" />
            <div className="absolute inset-0 bg-[#003B71] [clip-path:polygon(0_0,55%_0,0_55%)]" />
          </div>
          <span className="text-xl font-black italic tracking-wider text-[#0097E0]">
            DAIKIN
          </span>
        </div>
      ),
    },
    {
      name: 'Protostar',
      render: () => (
        <div className="flex flex-col items-center text-center">
          <div className="w-6 h-6 rounded-full border-2 border-[#9B7B31] flex items-center justify-center mb-1">
            <span className="text-[#9B7B31] text-xs font-black">✦</span>
          </div>
          <span className="text-[11px] font-extrabold tracking-[0.22em] text-[#6B531E]">
            PROTOSTAR
          </span>
        </div>
      ),
    },
    {
      name: 'Hindware',
      render: () => (
        <div className="flex flex-col items-center text-center">
          <span className="text-xl font-extrabold text-[#D73628] tracking-tight leading-none">
            hindware
          </span>
          <span className="text-[8px] font-semibold text-neutral-600 tracking-wide mt-0.5">
            Start with the expert
          </span>
        </div>
      ),
    },
    {
      name: 'Vijay Electricals',
      render: () => (
        <div className="flex items-center gap-2 bg-neutral-100 border border-neutral-200/80 px-3 py-1.5 rounded">
          <div className="w-6 h-6 rounded-full border border-neutral-500 flex items-center justify-center text-xs font-serif italic font-bold text-neutral-700 shrink-0">
            V
          </div>
          <span className="text-xs font-bold text-[#E31E24] tracking-wide uppercase">
            VIJAY ELECTRICALS
          </span>
        </div>
      ),
    },
    {
      name: 'Tata Steel',
      render: () => (
        <div className="flex items-center gap-1.5">
          <span className="text-lg sm:text-xl font-black tracking-wider text-[#1C64AC]">
            TATA
          </span>
          <span className="text-lg sm:text-xl font-semibold tracking-wide text-[#1C64AC]">
            STEEL
          </span>
        </div>
      ),
    },
    {
      name: 'Window Magic',
      render: () => (
        <div className="flex items-center gap-2">
          <span className="text-xs font-black tracking-wider text-neutral-900 uppercase">
            WINDOW MAGIC
          </span>
          <span className="text-xl font-black text-[#B81D5B] tracking-tighter leading-none">
            wm
          </span>
        </div>
      ),
    },
    {
      name: 'Infra.Market',
      render: () => (
        <div className="flex items-center">
          <span className="text-base sm:text-lg font-black tracking-tight text-neutral-800">
            INFRA.
          </span>
          <span className="text-base sm:text-lg font-black tracking-tight text-[#F04E23]">
            MARKET
          </span>
        </div>
      ),
    },
    {
      name: 'RAK Ceramics',
      render: () => (
        <div className="flex flex-col items-center text-center leading-none">
          <span className="text-2xl font-bold tracking-widest text-neutral-900">
            RAK
          </span>
          <span className="text-[7px] font-semibold tracking-[0.35em] text-neutral-600 mt-1">
            CERAMICS
          </span>
        </div>
      ),
    },
    {
      name: 'Impac Lift',
      render: () => (
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full border-2 border-[#E67E22] flex flex-col items-center justify-center p-1">
            <span className="text-xs font-black text-[#0E7C6B] leading-none">(IL)</span>
            <span className="text-[6px] font-extrabold text-[#E67E22] uppercase tracking-tighter mt-0.5">
              IMPAC LIFT
            </span>
          </div>
        </div>
      ),
    },
    {
      name: 'New Vicky Enterprises',
      render: () => (
        <div className="flex items-center gap-1.5">
          <span className="text-2xl font-black text-[#0F52BA] tracking-tighter leading-none">
            NE
          </span>
          <div className="text-left leading-tight">
            <span className="text-[9px] font-extrabold text-[#1E3A8A] uppercase block">
              NEW VICKY
            </span>
            <span className="text-[9px] font-extrabold text-[#1E3A8A] uppercase block">
              ENTERPRISES
            </span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="relative w-full bg-white text-neutral-900 py-14 sm:py-20 border-t border-neutral-200 overflow-hidden select-none">
      {/* Subtle Decorative Flowing Wave Lines in Background */}
      <svg
        className="absolute inset-0 w-full h-full text-red-500/[0.06] pointer-events-none"
        viewBox="0 0 1200 700"
        fill="none"
        preserveAspectRatio="none"
      >
        {Array.from({ length: 18 }).map((_, idx) => (
          <path
            key={idx}
            d={`M ${250 + idx * 18} -40 C ${650 + idx * 14} 180, ${180 - idx * 12} 420, ${520 + idx * 16} 740`}
            stroke="currentColor"
            strokeWidth="1.5"
          />
        ))}
      </svg>

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* ========================================================
            SECTION HEADER (GOLDEN SEAL + PAST SPONSORS TITLE)
        ======================================================== */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-12 sm:mb-14 text-center sm:text-left">
          {/* Golden Seal Circle */}
          <div
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-md shrink-0 border border-amber-600/40"
            style={{
              background:
                'radial-gradient(circle at 35% 30%, #e5b85c 0%, #c48b2c 55%, #8c5a14 100%)',
            }}
          />
          <div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#E31E24] tracking-tight uppercase leading-none">
              PAST SPONSORS
            </h2>
            <p className="text-xs sm:text-base font-extrabold text-[#E31E24] tracking-wider uppercase mt-1">
              OUR PARTNERS IN SUCCESS
            </p>
          </div>
        </div>

        {/* ========================================================
            SPONSORS BRAND GRID (20 PARTNERS)
        ======================================================== */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              title={sponsor.name}
              className="group bg-white/95 backdrop-blur-xs border border-neutral-200/90 rounded-xl p-4 sm:p-5 h-24 sm:h-28 flex items-center justify-center shadow-2xs hover:shadow-lg hover:border-[#B70D2B]/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="group-hover:scale-105 transition-transform duration-300">
                {sponsor.render()}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Crimson Accent Bar */}
      <div className="mt-14 sm:mt-16 h-2 w-full bg-gradient-to-r from-[#8B0000] via-[#E31E24] to-[#8B0000]" />
    </section>
  );
};
