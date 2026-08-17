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
import { Eyebrow, PageHero, Arrow } from "../components/Shared";
import { Reveal } from "../components/Motion";
import { Link } from "react-router-dom";
import { images } from "../data/site";
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

const partners = [
  ["UNICEF", "https://www.unicef.org/", unicef],
  ["African Development Bank", "https://www.afdb.org/", afdb],
  ["World Bank", "https://www.worldbank.org/", wbg],
  ["USAID", "https://www.usaid.gov/", usaid],
  ["GIZ", "https://www.giz.de/", giz],
  ["AFD", "https://www.afd.fr/", afd],
  ["Water.org", "https://water.org/", waterorg],
  ["RTI International", "https://www.rti.org/", rti],
  ["Global Water Intelligence", "https://www.globalwaterintel.com/", global],
  ["GWI", "https://www.gwi.org/", gwi],
  ["ISDB", "https://www.isdb.org/", isdb],
  ["NWSC", "https://www.nwsc.co.ug/", nwsc],
  ["Rock", "https://www.rockwater.org/", rock],
  ["AFWA", "https://www.afwa.org/", afwa],
  ["Ministry of Water and Environment", "https://www.mwe.go.ug/", ministry],
  ["Amane", "https://www.amane.org/", amane],
  ["ICRC", "https://www.icrc.org/", icrc],
  ["IDEV", "https://www.idev.org/", idev],
  ["Sustainable Water", "https://www.sustainablewater.org/", sustainablewater],
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

export function ExperiencePage() {
  return (
    <>
      <PageHero
        kicker="Experience"
        title={
          <>
            Experience that
            <br />
            <em className="font-serif font-medium text-[#8C1E2D]">
              travels well.
            </em>
          </>
        }
        description="International experience, rooted in the contexts where institutions need to deliver."
        picture={images.hero}
      />

      {/* By the Numbers Section */}
      <section className="relative isolate bg-[#111111] text-white">
        <img
          src={images.about}
          alt="About background"
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
                value: "14+",
                label:
                  "Years of experience delivering transformational solutions",
              },
              {
                icon: Globe,
                value: "15+",
                label: "Countries across Africa and beyond",
              },
              {
                icon: Users,
                value: "100+",
                label: "Institutional clients served",
              },
              {
                icon: Building2,
                value: "50+",
                label: "Government agencies and utilities",
              },
              {
                icon: Database,
                value: "200+",
                label: "Successful projects delivered",
              },
              {
                icon: TrendingUp,
                value: "1000+",
                label: "Professionals trained and developed",
              },
            ].map(({ icon: Icon, value, label }, index) => (
              <Reveal key={value} delay={index * 100}>
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

      {/* Services Section */}
      <section className="mx-auto max-w-[95%] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
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

      {/* Why Clients Choose 2ML Section */}
      <section className="bg-[#111111] text-white">
        <div className="mx-auto grid max-w-[95%] gap-12 px-5 py-10 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:px-12">
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

      {/* Partners Section */}
      <section className="mx-auto max-w-[95%] bg-white px-5 py-16 sm:px-8 lg:px-12">
        <Reveal>
          <Eyebrow>Trusted partners</Eyebrow>
          <h2 className="mt-6 text-4xl font-semibold leading-[1] tracking-[-.065em] sm:text-6xl">
            Institutions shaping the future.
          </h2>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-black/65">
            We work alongside leading organizations globally to deliver
            sustainable solutions and drive institutional transformation.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
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
    </>
  );
}
