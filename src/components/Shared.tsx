import { type ReactNode } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "./Motion";

export function Arrow() {
  return <span aria-hidden="true">↗</span>;
}
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-xl font-bold uppercase tracking-[0.18em] text-[#8C1E2D]">
      {children}
    </h2>
  );
}

export function PageHero({
  kicker,
  title,
  description,
  picture,
}: {
  kicker: string;
  title: ReactNode;
  description: ReactNode;
  picture: string;
}) {
  return (
    <section className="bg-[#f8e6d1]">
      <div className="mx-auto grid max-w-[95%] items-stretch lg:grid-cols-[1.05fr_.95fr]">
        <div className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <Reveal>
            <Eyebrow>{kicker}</Eyebrow>
            <h1 className="mt-7 max-w-3xl text-5xl font-semibold leading-[.93] tracking-[-0.075em] sm:text-7xl xl:text-8xl">
              {title}
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-black/65">
              {description}
            </p>
          </Reveal>
        </div>
        <div className="overflow-hidden">
          <img
            className="hero-image h-[280px] w-full object-cover lg:h-full"
            src={picture}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export function ContactBand() {
  return (
    <section className="bg-[#F5953B]">
      <div className="mx-auto flex max-w-[95%] flex-col justify-between gap-10 px-5 py-10 sm:px-8 md:flex-row md:items-end lg:px-12">
        <div>
          <Eyebrow>Let’s work together</Eyebrow>
          <h2 className="mt-5 text-5xl font-semibold leading-[.9] tracking-[-.075em] sm:text-7xl">
            A good idea
            <br />
            deserves momentum.
          </h2>
        </div>
        <Link
          to="/contact-us"
          className="w-fit rounded-full bg-[#111111] px-6 py-3.5 text-sm font-bold text-white"
        >
          Talk to our team <Arrow />
        </Link>
      </div>
    </section>
  );
}
