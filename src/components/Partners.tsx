import { useRef, useEffect, useState } from "react";
import { Reveal } from "./Motion";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

import AFD from "../assets/AFD.png";
import Afwa from "../assets/Afwa.jpeg";
import MinistryOfWater from "../assets/Ministry-of-Water-and-Environment.jpg";
import RTI from "../assets/RTI.png";
import Afdb from "../assets/afdb.png";
import Amane from "../assets/amane.jpg";
import Giz from "../assets/giz.png";
import Global from "../assets/global.png";
import Gwi from "../assets/gwi.png";
import Icrc from "../assets/icrc.jpg";
import Idev from "../assets/idev.jpg";
import Isdb from "../assets/isdb.png";
import Nwsc from "../assets/nwsc.png";
import Rock from "../assets/rock.png";
import SustainableWater from "../assets/sustainablewater.jpg";
import Unicef from "../assets/unicef.png";
import Usaid from "../assets/usaid.png";
import WaterOrg from "../assets/water.org.png";
import Wbg from "../assets/wbg.png";
import Tracecorp from "../assets/TraceCorp.png";

const partners = [
  { name: "AFD", logo: AFD, url: "https://www.afd.fr/" },
  { name: "AFWA", logo: Afwa, url: "https://www.afwa.org/" },
  {
    name: "TraceCorp",
    logo: Tracecorp,
    url: "https://www.tracecorpsolutions.com/",
  },
  { name: "Ministry of Water", logo: MinistryOfWater },
  { name: "RTI", logo: RTI, url: "https://www.rti.org/" },
  { name: "AfDB", logo: Afdb, url: "https://www.afdb.org/" },
  { name: "AMANE", logo: Amane },
  { name: "GIZ", logo: Giz, url: "https://www.giz.de/" },
  { name: "Global", logo: Global },
  { name: "GWI", logo: Gwi, url: "https://www.globalwaterinstitute.org/" },
  { name: "ICRC", logo: Icrc, url: "https://www.icrc.org/" },
  { name: "IDEV", logo: Idev },
  { name: "ISDB", logo: Isdb, url: "https://www.isdb.org/" },
  { name: "NWSC", logo: Nwsc },
  { name: "ROCK", logo: Rock },
  { name: "Sustainable Water", logo: SustainableWater },
  { name: "UNICEF", logo: Unicef, url: "https://www.unicef.org/" },
  { name: "USAID", logo: Usaid, url: "https://www.usaid.gov/" },
  { name: "Water.org", logo: WaterOrg, url: "https://water.org/" },
  { name: "WBG", logo: Wbg, url: "https://www.worldbank.org/" },
];

interface PartnersProps {
  // partners: Partner[];
  title?: string;
  description?: string;
}

export function Partners({
  title = "Our partners",
  description,
}: PartnersProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef(0);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-scroll functionality with seamless right-to-left loop
  useEffect(() => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    let animationId: number;
    const scrollSpeed = 0.8;

    const autoScrollLoop = () => {
      if (!isHovering && container.scrollWidth > container.clientWidth) {
        const maxScroll = container.scrollWidth / 2;
        scrollPositionRef.current += scrollSpeed;

        if (scrollPositionRef.current >= maxScroll) {
          scrollPositionRef.current -= maxScroll;
        }

        container.scrollLeft = Math.floor(scrollPositionRef.current);
      }
      animationId = requestAnimationFrame(autoScrollLoop);
    };

    animationId = requestAnimationFrame(autoScrollLoop);

    return () => cancelAnimationFrame(animationId);
  }, [isHovering]);

  const scrollAmount = 300;

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const maxScroll = container.scrollWidth / 2;
      scrollPositionRef.current -= scrollAmount;

      if (scrollPositionRef.current < 0) {
        scrollPositionRef.current += maxScroll;
      }

      container.scrollLeft = Math.floor(scrollPositionRef.current);
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const maxScroll = container.scrollWidth / 2;
      scrollPositionRef.current += scrollAmount;

      if (scrollPositionRef.current >= maxScroll) {
        scrollPositionRef.current -= maxScroll;
      }

      container.scrollLeft = Math.floor(scrollPositionRef.current);
    }
  };

  return (
    <section className="border-t border-black/10 bg-gradient-to-b from-white to-[#f8e6d1]/30 py-16 sm:py-20">
      <div className="mx-auto max-w-[95%] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-[-.06em] sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 max-w-2xl text-lg leading-8 text-black/65">
              {description}
            </p>
          )}
        </Reveal>

        <div
          className="relative mt-12"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Gradient Fade Left */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent" />

          {/* Gradient Fade Right */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent" />

          {/* Left Arrow */}
          <button
            type="button"
            onClick={scrollLeft}
            className="group absolute left-0 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg transition-all duration-300 hover:bg-[#8C1E2D] hover:text-white hover:scale-110 focus:outline-none"
            aria-label="Scroll partners left"
          >
            <ChevronLeft className="h-6 w-6 text-[#8C1E2D] transition-colors duration-300 group-hover:text-white" />
          </button>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={scrollRight}
            className="group absolute right-0 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg transition-all duration-300 hover:bg-[#8C1E2D] hover:text-white hover:scale-110 focus:outline-none"
            aria-label="Scroll partners right"
          >
            <ChevronRight className="h-6 w-6 text-[#8C1E2D] transition-colors duration-300 group-hover:text-white" />
          </button>

          {/* Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto scroll-smooth pb-4 px-12 select-none [&::-webkit-scrollbar]:hidden"
          >
            {[...partners, ...partners].map((partner, index) => (
              <Reveal key={`${partner.name}-${index}`} delay={index * 50}>
                <a
                  href={partner.url || "#"}
                  target={partner.url ? "_blank" : undefined}
                  rel={partner.url ? "noopener noreferrer" : undefined}
                  className="group relative flex-shrink-0 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex h-28 w-48 items-center justify-center rounded-2xl border-2 border-black/10 bg-white p-6 transition-all duration-300 group-hover:border-[#8C1E2D] group-hover:shadow-2xl group-hover:-translate-y-2">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-20 max-w-full object-contain transition-all duration-300 group-hover:brightness-125 group-hover:scale-110"
                    />
                    {partner.url && (
                      <div className="absolute right-3 top-3 rounded-full bg-[#F5953B]/10 p-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                        <ExternalLink className="h-4 w-4 text-[#F5953B]" />
                      </div>
                    )}
                  </div>
                  <p className="mt-3 text-center text-sm font-semibold text-black/70 transition-colors duration-300 group-hover:text-[#8C1E2D]">
                    {partner.name}
                  </p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Info Text */}
        <Reveal delay={100}>
          <p className="mt-12 text-center text-sm text-black/50">
            Scroll to explore our trusted partners and collaborators
          </p>
        </Reveal>
      </div>
    </section>
  );
}
