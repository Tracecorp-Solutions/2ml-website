import { useRef, useEffect, useState } from "react";
import { Reveal } from "../components/Motion";
import { Rocket, UsersRound, Trophy } from "lucide-react";
import WorldPortfolioMap from "./WorldPortfolioMap";

const values = [
  {
    title: "Empowerment",
    copy: "We equip individuals and institutions with the knowledge, skills and confidence to drive continuous improvement.",
    icon: Rocket,
  },
  {
    title: "Teamwork",
    copy: "We foster collaboration, mutual respect and shared responsibility, knowing the best solutions come from diverse expertise.",
    icon: UsersRound,
  },
  {
    title: "Service excellence",
    copy: "We deliver high-quality, client-focused solutions that exceed expectations and create lasting value.",
    icon: Trophy,
  },
];

interface ValueCardProps {
  value: (typeof values)[0];
  index: number;
}

function ValueCard({ value, index }: ValueCardProps) {
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
    <div
      ref={ref}
      className={`group cursor-pointer rounded-2xl border border-black/10 bg-white p-8 transition-all duration-500 hover:border-[#8C1E2D] hover:shadow-2xl hover:-translate-y-2 ${
        isVisible ? "animate-slide-in-left" : "opacity-0"
      }`}
    >
      <Reveal delay={index * 100}>
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-[#f8e6d1] p-3 transition-all duration-300 group-hover:bg-[#8C1E2D] group-hover:scale-110">
            <value.icon
              className="h-8 w-8 text-[#F5953B] transition-all duration-300 group-hover:text-white group-hover:scale-110"
              strokeWidth={2}
            />
          </div>
          <span className="text-sm font-bold text-[#8C1E2D] transition-colors duration-300 group-hover:text-[#F5953B]">
            0{index + 1}
          </span>
        </div>
        <h3 className="mt-6 text-xl font-semibold tracking-[-.045em] transition-colors duration-300 group-hover:text-[#8C1E2D]">
          {value.title}
        </h3>
        <p className="mt-4 leading-7 text-[#111111]/70 transition-colors duration-300 group-hover:text-[#111111]/90">
          {value.copy}
        </p>
      </Reveal>
    </div>
  );
}

export function AboutPage() {
  return (
    <>
      <section id="about" className="w-full bg-[#EEF0EC]">
        <div className="mx-auto max-w-[95%] px-5 pt-20 pb-10 sm:px-8 lg:px-12">
          <div>
            <Reveal>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#8C1E2D]">
                About 2ML Consulting Limited
              </span>
              <h2 className="mt-5 text-4xl font-semibold leading-[1.15] tracking-[-.065em] text-[#111111] sm:text-5xl">
                Strong leadership. Sound management. Empowered institutions.
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <p className="mt-10 text-lg leading-8 text-[#111111]/80">
                At 2ML Consulting Limited, we believe that sustainable
                transformation begins with strong leadership, sound management
                and empowered institutions. Since our establishment in November
                2012, we have partnered with governments, development partners,
                utilities and private sector organizations to deliver practical,
                result-oriented solutions that improve institutional
                performance, strengthen governance and enhance service delivery.
              </p>
            </Reveal>

            <Reveal delay={150}>
              <p className="mt-6 text-lg leading-8 text-[#111111]/80">
                As an ISO 9001:2015 certified management and leadership advisory
                firm, we specialize in institutional development, organizational
                transformation, utility management, WASH policy and regulatory
                support, strategic business planning, capacity development and
                technical advisory services. Our multidisciplinary team combines
                international best practices with local knowledge to help
                clients address complex challenges and achieve lasting impact.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-6 text-lg leading-8 text-[#111111]/80">
                From our headquarters in Kampala, Uganda, and our regional
                presence in Nigeria, Kenya and Zambia, we have successfully
                delivered assignments across Africa, Asia and the Caribbean,
                supporting institutions to become more efficient, resilient and
                customer focused.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="bg-[#f8e6d1]">
        <div className="mx-auto max-w-[95%] px-5 py-10 sm:px-8 lg:px-12">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#8C1E2D]">
              Vision & Mission
            </span>
            <h2 className="mt-4 text-4xl font-semibold leading-[1.15] tracking-[-.065em] text-[#111111] sm:text-5xl">
              Our vision and mission guide everything we do.
            </h2>
          </Reveal>
          <div className="mt-5 grid gap-8 md:grid-cols-2">
            <Reveal
              delay={100}
              className="rounded-2xl border border-black/10 bg-white p-10 transition-all duration-300 hover:border-[#8C1E2D] hover:shadow-xl"
            >
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#8C1E2D]">
                Our vision
              </span>
              <h3 className="mt-5 text-2xl font-semibold leading-[1.2] tracking-[-.045em] text-[#111111]">
                To be a leading management and leadership consultancy firm.
              </h3>
              <p className="mt-6 leading-8 text-[#111111]/70">
                We aspire to be the partner of choice for organisations seeking
                innovative solutions that transform institutions, strengthen
                governance and improve performance.
              </p>
            </Reveal>
            <Reveal
              delay={200}
              className="rounded-2xl border border-black/10 bg-white p-10 transition-all duration-300 hover:border-[#8C1E2D] hover:shadow-xl"
            >
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#8C1E2D]">
                Our mission
              </span>
              <h3 className="mt-5 text-2xl font-semibold leading-[1.2] tracking-[-.045em] text-[#111111]">
                To foster strong partnerships in transformation and performance
                improvement.
              </h3>
              <p className="mt-6 leading-8 text-[#111111]/70">
                We work collaboratively with clients to create tailored
                solutions that strengthen institutional capacity, improve
                organizational effectiveness and deliver measurable, long-term
                results.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[95%] px-5 py-10 sm:px-8 lg:px-12">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#8C1E2D]">
            Quality statement
          </span>
          <h2 className="mt-4 text-4xl font-semibold leading-[1.15] tracking-[-.065em] text-[#111111] sm:text-5xl">
            Quality is at the heart of everything we do.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-4 text-lg leading-8 text-[#111111]/80">
            2ML Consulting Limited shall spare no effort to delight its clients
            with the highest quality of management and leadership advisory
            services by understanding client expectations, delivering practical
            and transformative solutions, and continually improving our
            processes. We are committed to complying with applicable
            requirements while fostering a client-centered culture, innovation,
            stakeholder engagement and service excellence that consistently
            delivers sustainable results.
          </p>
          <p className="mt-6 text-lg leading-8 text-[#111111]/80">
            Our ISO 9001:2015 Quality Management System reflects our commitment
            to excellence, continuous improvement and delivering value to every
            client and partner we serve.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {values.map((value, index) => (
            <ValueCard key={value.title} value={value} index={index} />
          ))}
        </div>
      </section>
      <main className="mx-auto max-w-7xl px-6 py-12">
        <WorldPortfolioMap />
      </main>
    </>
  );
}
