import { useRef, useEffect, useState } from "react";
import { Eyebrow } from "../components/Shared";
import { Reveal } from "../components/Motion";
import { ArrowRight, Calendar } from "lucide-react";

const articles = [
  {
    title: "World Water Summit — Madrid, Spain",
    description:
      "2ML Consulting participated in the Global Water Summit in Madrid, Spain, joining water sector leaders, utilities, development partners and policymakers from around the world to discuss emerging trends, innovative solutions and the future of sustainable water management. The summit provided a valuable platform to exchange experiences on utility transformation, institutional strengthening and climate resilience.",
    category: "Conference",
    date: "2024",
    location: "Madrid, Spain",
  },
  {
    title: "Uganda Water and Environment Week (UWEWK)",
    description:
      "As part of the Uganda Water and Environment Week, 2ML Consulting hosted a successful side event at the Ministry of Water and Environment Headquarters. The session brought together government representatives, development partners, utilities and sector professionals to discuss Harnessing Science, Technology, Innovation and Capacity Development to Transform Water Management. The event highlighted practical lessons from the Bor Water Supply System in South Sudan and reinforced the importance of innovation and institutional capacity in delivering sustainable water services.",
    category: "Event",
    date: "2024",
    location: "Kampala, Uganda",
  },
  {
    title: "Victoria Basin International Conference and Exhibition (Upcoming)",
    description:
      "2ML Consulting plans to participate in the upcoming Victoria Basin International Conference and Exhibition (VBICE) in Kisumu, Kenya. The conference will provide another opportunity to engage with regional stakeholders, showcase our expertise in institutional transformation and WASH sector development, strengthen partnerships and contribute to discussions on sustainable water resources management and regional development.",
    category: "Upcoming",
    date: "2024",
    location: "Kisumu, Kenya",
  },
];

interface InsightCardProps {
  article: (typeof articles)[0];
  index: number;
}

function InsightCard({ article, index }: InsightCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <Reveal delay={index * 100}>
      <div
        ref={ref}
        className={`group cursor-pointer rounded-2xl border border-black/10 bg-white p-8 transition-all duration-500 hover:border-[#8C1E2D] hover:shadow-2xl hover:-translate-y-2 ${
          isVisible ? "animate-slide-in-left" : "opacity-0"
        }`}
      >
        {/* Category Badge */}
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center rounded-full bg-[#f8e6d1] px-3 py-1 text-xs font-semibold text-[#8C1E2D] transition-all duration-300 group-hover:bg-[#8C1E2D] group-hover:text-white">
            {article.category}
          </span>
          <Calendar className="h-4 w-4 text-[#8C1E2D]/50 transition-colors duration-300 group-hover:text-[#F5953B]" />
        </div>

        {/* Title */}
        <h3 className="mt-6 text-xl font-semibold tracking-[-.045em] transition-colors duration-300 group-hover:text-[#8C1E2D]">
          {article.title}
        </h3>

        {/* Location & Date */}
        <div className="mt-4 flex items-center gap-4 text-sm text-black/60">
          <span className="flex items-center gap-1">
            <span className="h-1 w-1 rounded-full bg-[#F5953B]" />
            {article.location}
          </span>
          <span className="flex items-center gap-1">
            <span className="h-1 w-1 rounded-full bg-[#F5953B]" />
            {article.date}
          </span>
        </div>

        {/* Description */}
        <p className="mt-5 leading-7 text-black/65 line-clamp-3 transition-colors duration-300 group-hover:text-black/80">
          {article.description}
        </p>

        {/* Read More Link */}
        <div className="mt-6 flex items-center gap-2 text-[#8C1E2D] font-semibold text-sm transition-all duration-300 group-hover:gap-3">
          <span>Learn more</span>
          <ArrowRight className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Reveal>
  );
}

export function InsightsPage() {
  return (
    <>
      <section className="mx-auto max-w-[95%] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
        <Reveal>
          <Eyebrow>Latest from 2ML</Eyebrow>
          <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-[.98] tracking-[-.06em] sm:text-5xl">
            News & insights
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-black/65">
            At 2ML Consulting Limited, we actively participate in leading
            regional and international conferences, forums and knowledge-sharing
            platforms that advance innovation, strengthen partnerships and shape
            the future of the water, sanitation and hygiene sector.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <InsightCard key={article.title} article={article} index={index} />
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#8C1E2D] to-[#F5953B]">
        <div className="mx-auto max-w-[95%] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-white/80">
              Stay connected
            </p>
            <h2 className="mt-6 max-w-4xl text-3xl font-semibold leading-[.98] tracking-[-.065em] text-white sm:text-4xl">
              Follow our latest news, project milestones, conference
              participation and thought leadership as we continue partnering
              with governments, utilities and development partners to transform
              institutions and improve water and sanitation services across
              Africa and beyond.
            </h2>
          </Reveal>
        </div>
      </section>
    </>
  );
}
