import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Arrow, Eyebrow } from "../components/Shared";
import { Reveal } from "../components/Motion";
import { Partners } from "../components/Partners";
import { TypewriterHeading } from "../components/TypewriterHeading";
import { images, profilePDF } from "../data/site";
import {
  Calendar,
  Globe,
  Users,
  Building2,
  Database,
  TrendingUp,
} from "lucide-react";

const heroImages = [
  images.hero,
  images.field,
  images.map,
  images.meeting,
  images.team,
];

function CountingNumber({
  target,
  suffix = "",
  duration = 2000,
}: {
  target: string;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
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
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    const numericTarget = parseInt(target.toString().replace(/\D/g, ""));

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentCount = Math.floor(progress * numericTarget);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration, hasStarted]);

  return (
    <p
      ref={ref}
      className="text-5xl font-semibold tracking-[-.075em] text-white"
    >
      {count}
      {suffix}
    </p>
  );
}

export function HomePage() {
  const [activeImage, setActiveImage] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(
      () => setActiveImage((current) => (current + 1) % heroImages.length),
      5500,
    );
    return () => window.clearInterval(timer);
  }, []);
  return (
    <>
      <section className="relative isolate min-h-[50vh] overflow-hidden bg-[#111111] text-white">
        <img
          key={heroImages[activeImage]}
          src={heroImages[activeImage]}
          alt="Utility infrastructure"
          className="hero-image absolute top-[-80px] right-0 -z-20 w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
        <div className="mx-auto flex min-h-[40vh] max-w-[95%] flex-col mt-20 justify-end px-5 pb-20 sm:px-8 lg:px-12">
          <Reveal>
            <TypewriterHeading
              className="max-w-6xl text-5xl font-semibold leading-[.9]  tracking-[-.075em] sm:text-5xl lg:text-6xl"
              charDelay={60}
              lineDelay={350}
              startDelay={250}
              lines={[
                { text: "Transforming institutions." },
                { text: "Strengthening systems." },
                {
                  text: "Improving lives.",
                  as: "em",
                  className: "font-serif font-medium text-[#F5953B]",
                },
              ]}
            />
            <p className="my-8 max-w-2xl text-lg leading-8 text-white">
              2ML Consulting Limited is an ISO 9001:2015 certified management
              and leadership advisory firm specializing in digital
              transformation, institutional transformation, policy & regulation,
              organizational development and technical assistance. We partner
              with governments, development partners, utilities and private
              sector organizations to deliver sustainable performance
              improvements across Africa and beyond.
            </p>
            <div className="flex items-center gap-4">
              <Link
                to="/contact-us"
                className="w-fit rounded-full bg-[#F5953B] px-6 py-3.5 text-sm font-bold text-[#111111] transition hover:bg-white"
              >
                Start a conversation <Arrow />
              </Link>

              <a
                href={profilePDF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-fit items-center gap-2 rounded-full bg-[#8C1E2D] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#F5953B]"
              >
                View Profile
              </a>
            </div>
          </Reveal>
        </div>
        <div
          className="absolute bottom-7 right-5 z-10 flex gap-2 sm:right-8 lg:right-12"
          aria-label="Rotating banner images"
        >
          {heroImages.map((photo, index) => (
            <button
              key={photo}
              onClick={() => setActiveImage(index)}
              className={`h-2.5 rounded-full transition-all ${index === activeImage ? "w-8 bg-[#F5953B]" : "w-2.5 bg-white/60 hover:bg-white"}`}
              aria-label={`Show banner image ${index + 1}`}
            />
          ))}
        </div>
      </section>
      <section className="bg-[#f8e6d1]">
        <div className="mx-auto grid max-w-[95%] gap-10 px-5 py-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
          <Reveal>
            <Eyebrow>About 2ML</Eyebrow>
            <Reveal delay={100}>
              <h2 className="max-w-4xl text-4xl font-semibold leading-[1] tracking-[-.065em] sm:text-6xl">
                An African consulting firm built on practical transformation.
              </h2>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-black/65">
                Founded in 2012, 2ML Consulting Limited builds on the extensive
                executive leadership and utility transformation experience of
                its founder and senior team leader, Dr William T Muhairwe. His
                decades of experience in managing and transforming public
                utilities and institutions provide the strong foundation upon
                which 2ML delivers practical, result-oriented solutions. Today,
                the firm is recognized as a leading international management and
                leadership consulting company, delivering institutional
                development, organizational transformation, performance
                management and utility digitization services.
              </p>
              <Link
                to="/about-us"
                className="mt-8 inline-block border-b-2 border-[#8C1E2D] pb-2 text-sm font-bold text-[#8C1E2D]"
              >
                Learn about 2ML <Arrow />
              </Link>
            </Reveal>
          </Reveal>
          <Reveal delay={200}>
            <img
              src={images.hero}
              alt="About 2ML"
              className="h-[350] w-full rounded-2xl object-cover shadow-2xl lg:h-[500px]"
            />
          </Reveal>
        </div>
      </section>

      {/* Impact Figures Section */}
      <section className="relative isolate bg-[#111111] text-white">
        <img
          src={images.hero}
          alt="Impact background"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
        <div className="relative z-10 mx-auto grid max-w-[95%] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:px-12 lg:py-28">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#F5953B]">
              By the numbers
            </p>
            <h2 className="mt-6 text-4xl font-semibold leading-[.98] tracking-[-.065em] sm:text-6xl">
              Our impact across Africa and beyond.
            </h2>
            <p className="mt-6 max-w-sm leading-7 text-white/70">
              Decades of experience delivering transformational solutions to
              governments, development partners, utilities and private sector
              organizations.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-8 items-start">
            {[
              {
                icon: Calendar,
                value: "14",
                suffix: "+",
                label:
                  "Years of experience delivering transformational solutions",
              },
              {
                icon: Globe,
                value: "15",
                suffix: "+",
                label: "Countries across Africa and beyond",
              },
              {
                icon: Users,
                value: "100",
                suffix: "+",
                label: "Institutional clients served",
              },
              {
                icon: Building2,
                value: "20",
                suffix: "+",
                label: "Government agencies and utilities",
              },
              {
                icon: Database,
                value: "20",
                suffix: "+",
                label: "Successful projects delivered",
              },
              {
                icon: TrendingUp,
                value: "500",
                suffix: "+",
                label: "Utility staffs trained",
              },
            ].map(({ icon: Icon, value, suffix, label }, index) => (
              <Reveal key={value} delay={index * 100}>
                <div className="flex flex-col items-center justify-center gap-4">
                  <Icon className="h-16 w-16 text-[#F5953B]" strokeWidth={2} />
                  <CountingNumber
                    target={value}
                    suffix={suffix}
                    duration={2500}
                  />
                </div>
                <p className="mt-6 text-sm leading-6 text-center text-white/75">
                  {label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Partners title="Our trusted partners" />
    </>
  );
}
