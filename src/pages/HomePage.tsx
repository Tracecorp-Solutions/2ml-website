import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Arrow, ContactBand, Eyebrow } from "../components/Shared";
import { Reveal } from "../components/Motion";
import { TypewriterHeading } from "../components/TypewriterHeading";
import { images } from "../data/site";
import {
  Calendar,
  Globe,
  Users,
  Building2,
  Database,
  TrendingUp,
  Scale,
  Droplets,
  Map,
  DollarSign,
  Search,
  Award,
  Lightbulb,
  Target,
  Users2,
} from "lucide-react";
import unicef from "../assets/unicef.png";
import afdb from "../assets/afdb.png";
import wbg from "../assets/wbg.png";
import usaid from "../assets/usaid.png";
import giz from "../assets/giz.png";
import afd from "../assets/AFD.png";
import waterorg from "../assets/water.org.png";
import rti from "../assets/RTI.png";
import global from "../assets/global.png";
import gwi from "../assets/gwi.png";
import isdb from "../assets/isdb.png";
import nwsc from "../assets/nwsc.png";
import rock from "../assets/rock.png";
import afwa from "../assets/Afwa.jpeg";
import ministry from "../assets/Ministry-of-Water-and-Environment.jpg";
import amane from "../assets/amane.jpg";
import icrc from "../assets/icrc.jpg";
import idev from "../assets/idev.jpg";
import sustainablewater from "../assets/sustainablewater.jpg";
import tracecorp from "../assets/TraceCorp.png";

const partners = [
  ["UNICEF", "https://www.unicef.org/", unicef],
  ["African Development Bank", "https://www.afdb.org/", afdb],
  ["World Bank", "https://www.worldbank.org/", wbg],
  ["USAID", "https://www.usaid.gov/", usaid],
  ["GIZ", "https://www.giz.de/", giz],
  ["AFD", "https://www.afd.fr/", afd],
  ["Water.org", "https://water.org/", waterorg],
  ["RTI International", "https://www.rti.org/", rti],
  ["Global Water Partnership", "https://www.gwp.org/", global],
  ["GWI", "https://www.gwi.org/", gwi],
  ["Islamic Development Bank", "https://www.isdb.org/", isdb],
  ["NWSC", "https://www.nwsc.co.ug/", nwsc],
  ["Rockefeller Foundation", "https://www.rockefellerfoundation.org/", rock],
  ["AfWA", "https://www.afwa-hq.org/", afwa],
  ["Ministry of Water and Environment", "https://www.mwe.go.ug/", ministry],
  ["Amane", "https://www.amane.org/", amane],
  ["ICRC", "https://www.icrc.org/", icrc],
  ["Idev", "https://www.idev.org/", idev],
  ["Sustainable Water", "https://www.sustainablewater.org/", sustainablewater],
  ["TraceCorp", "https://www.tracecorp.com/", tracecorp],
];

const services = [
  { name: "Institutional development", icon: Building2 },
  { name: "Enterprise resource planning", icon: Database },
  { name: "Performance improvement programmes", icon: TrendingUp },
  { name: "Policy, regulation & institutional reform", icon: Scale },
  { name: "Utility management & commercialisation", icon: Building2 },
  { name: "Strategic business planning", icon: TrendingUp },
  { name: "Water, sanitation & hygiene", icon: Droplets },
  { name: "GIS, surveys & digital solutions", icon: Map },
  { name: "Financial & non-revenue water management", icon: DollarSign },
  {
    name: "Research, monitoring, evaluation & capacity development",
    icon: Search,
  },
];

const reasons = [
  {
    title: "Regional experience",
    copy: "Over a decade of successfully supporting utilities and governments across Africa.",
    icon: Globe,
  },
  {
    title: "Practical solutions",
    copy: "International best practice grounded in real implementation experience.",
    icon: Lightbulb,
  },
  {
    title: "Results-based approach",
    copy: "Performance Improvement Programmes that deliver measurable change.",
    icon: Target,
  },
  {
    title: "Multidisciplinary expertise",
    copy: "Engineering, policy, governance, finance, digital solutions, and more.",
    icon: Users2,
  },
  {
    title: "Tailor-made solutions",
    copy: "Every intervention is designed around your institutional context.",
    icon: Award,
  },
  {
    title: "Long-term partnerships",
    copy: "We work alongside clients from diagnosis through capacity transfer.",
    icon: Building2,
  },
];

const heroImages = [images.hero, images.city, images.field, images.map];

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
      <section className="relative isolate min-h-[700px] overflow-hidden bg-[#111111] text-white">
        <img
          key={heroImages[activeImage]}
          src={heroImages[activeImage]}
          alt="Utility infrastructure"
          className="hero-image absolute inset-0 -z-20 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/90 via-black/65 to-black/25" />
        <div className="mx-auto flex min-h-[700px] max-w-[1440px] mt-20 flex-col justify-end px-5 pb-24 sm:px-8 lg:px-12 lg:pb-28">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#F5953B] mb-4">
              ISO 9001:2015 certified advisory firm
            </p>
            <TypewriterHeading
              className="max-w-6xl text-5xl font-semibold leading-[.9]  tracking-[-.075em] sm:text-7xl lg:text-8xl"
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
            <p className="my-8 max-w-2xl text-lg leading-8 text-white/75">
              2ML Consulting Limited is an ISO 9001:2015 certified management
              and leadership advisory firm specializing in digital
              transformation, institutional transformation, policy & regulation,
              organizational development and technical assistance. We partner
              with governments, development partners, utilities and private
              sector organizations to deliver sustainable performance
              improvements across Africa and beyond.
            </p>
            <Link
              to="/contact-us"
              className="mt-24 w-fit rounded-full bg-[#F5953B] px-6 py-3.5 text-sm font-bold text-[#111111] transition hover:bg-white"
            >
              Start a conversation <Arrow />
            </Link>
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

      <section className="mx-auto max-w-[1440px] bg-white px-5 py-8 sm:px-8 lg:px-12">
        <Reveal>
          <Eyebrow>Trusted by institutions shaping the future</Eyebrow>
          <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
            {partners.map(([name, url, imageUrl], index) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noreferrer"
                className={`group flex min-h-24 items-center justify-center p-5 transition hover:bg-gray-50 ${
                  index % 2 === 0 ? "animate-slide-left" : "animate-slide-right"
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                  animationFillMode: "forwards",
                }}
              >
                {imageUrl ? (
                  <img
                    src={imageUrl as string}
                    alt={`${name} logo`}
                    className="h-12 w-auto object-contain transition-opacity duration-300"
                  />
                ) : (
                  <span className="text-lg font-bold tracking-[-.04em] transition hover:text-[#8C1E2D]">
                    {name}
                  </span>
                )}
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="bg-[#f8e6d1]">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-10 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
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
              src={images.about}
              alt="About 2ML"
              className="h-[350] w-full rounded-2xl object-cover shadow-2xl lg:h-[500px]"
            />
          </Reveal>
        </div>
      </section>

      <section className="relative isolate bg-[#111111] text-white">
        <img
          src={images.about}
          alt="About background"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
        <div className="relative z-10 mx-auto grid max-w-[1440px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:px-12 lg:py-28">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#F5953B]">
              By the numbers
            </p>
            <h2 className="mt-6 text-4xl font-semibold leading-[.98] tracking-[-.065em] sm:text-6xl">
              Experience that travels well.
            </h2>
            <p className="mt-6 max-w-sm leading-7 text-white/70">
              International experience, rooted in the contexts where
              institutions need to deliver.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-8 items-start">
            {[
              {
                icon: Calendar,
                value: "14+",
                label: "Years of institutional transformation",
              },
              { icon: Globe, value: "14+", label: "Countries worked in" },
              { icon: Users, value: "90+", label: "Associates" },
            ].map(({ icon: Icon, value, label }) => (
              <Reveal
                key={label}
                className="flex flex-col items-center text-center p-6"
              >
                <div className="flex flex-col items-center justify-center gap-4">
                  <Icon className="h-16 w-16 text-[#F5953B]" strokeWidth={2} />
                  <p className="text-5xl font-semibold tracking-[-.075em] text-white">
                    {value}
                  </p>
                </div>
                <p className="mt-6 text-sm leading-6 text-white/75">{label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Services & experience</Eyebrow>
            <Reveal delay={100}>
              <h2 className="text-4xl font-semibold leading-[1] tracking-[-.065em] sm:text-6xl">
                Delivering transformational solutions across the water,
                sanitation and development sectors.
              </h2>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-black/65">
                Our teams combine international practice with local knowledge to
                deliver evidence-based, tailored solutions that create lasting
                impact.
              </p>
            </Reveal>
          </Reveal>
          <Reveal delay={200}>
            <img
              src={images.city}
              alt="City infrastructure"
              className="h-[300px] w-full rounded-2xl object-cover shadow-2xl lg:h-[400px]"
            />
          </Reveal>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal
              key={service.name}
              delay={index * 100}
              className="group rounded-xl border border-black/10 bg-white p-6 transition-all duration-300 hover:border-[#8C1E2D] hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-[#f8e6d1] p-2 transition-all duration-300 group-hover:bg-[#8C1E2D]">
                  <service.icon
                    className="h-8 w-8 text-[#F5953B] transition-colors duration-300 group-hover:text-white"
                    strokeWidth={2}
                  />
                </div>
                <span className="text-sm font-bold text-[#8C1E2D] transition-colors duration-300 group-hover:text-[#F5953B]">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-[-.045em] transition-colors duration-300 group-hover:text-[#8C1E2D]">
                {service.name}
              </h3>
              <Link
                to="/services"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#8C1E2D] transition-all duration-500 hover:translate-x-1 hover:text-[#6f1724]"
              >
                Explore service <Arrow />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[#111111] text-white">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-10 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:px-12">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#F5953B]">
              Why clients choose 2ML
            </p>
            <h2 className="mt-6 text-4xl font-semibold leading-[.98] tracking-[-.065em] sm:text-6xl">
              Expert advice. Tangible results.
            </h2>
            <Reveal delay={100}>
              <img
                src={images.field}
                alt="Team collaboration"
                className="mt-8 h-[300px] w-full rounded-2xl object-cover shadow-2xl lg:h-[400px]"
              />
            </Reveal>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, index) => (
              <Reveal
                key={reason.title}
                delay={index * 80}
                className="group rounded-xl border border-white/20 bg-white/5 p-6 transition-all duration-300 hover:border-[#F5953B] hover:bg-white/10 hover:shadow-xl"
              >
                <reason.icon
                  className="h-10 w-10 text-[#F5953B] transition-colors duration-300 group-hover:text-white"
                  strokeWidth={2}
                />
                <h3 className="mt-4 text-lg font-semibold tracking-[-.025em] text-[#F5953B] transition-colors duration-300 group-hover:text-white">
                  {reason.title}
                </h3>
                <p className="mt-3 leading-7 text-white/65 transition-colors duration-300 group-hover:text-white/80">
                  {reason.copy}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
