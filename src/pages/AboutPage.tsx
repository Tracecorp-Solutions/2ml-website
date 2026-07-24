import { ContactBand, Eyebrow, PageHero } from "../components/Shared";
import { Reveal } from "../components/Motion";
import { images } from "../data/site";
import { Users, Heart, Award } from "lucide-react";

const values = [
  {
    title: "Empowerment",
    copy: "We equip individuals and institutions with the knowledge, skills and confidence to drive continuous improvement.",
    icon: Users,
  },
  {
    title: "Teamwork",
    copy: "We foster collaboration, mutual respect and shared responsibility, knowing the best solutions come from diverse expertise.",
    icon: Heart,
  },
  {
    title: "Service excellence",
    copy: "We deliver high-quality, client-focused solutions that exceed expectations and create lasting value.",
    icon: Award,
  },
];

export function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About 2ML"
        title={
          <>
            Transforming institutions.
            <br />
            <em className="font-serif font-medium text-[#8C1E2D]">
              Delivering sustainable results.
            </em>
          </>
        }
        description="Since 2012, 2ML Consulting has partnered with leaders and institutions to strengthen governance, enhance service delivery and achieve lasting impact."
        picture={images.meeting}
      />
      <section className="mx-auto grid max-w-[1440px] gap-10 px-5 py-10 sm:px-8 lg:grid-cols-2 lg:px-12">
        <Reveal delay={150}>
          <Eyebrow>Our story</Eyebrow>
          <img
            src={images.community}
            alt="Community engagement"
            className="h-[300px] w-full rounded-2xl mt-10 object-cover shadow-2xl lg:h-[600px]"
          />
        </Reveal>
        <Reveal>
          <Reveal delay={100}>
            <p className="max-w-4xl text-2xl leading-9 tracking-[-.035em] text-black/70">
              At 2ML Consulting Limited, we believe that sustainable
              transformation begins with strong leadership, sound management and
              empowered institutions. Since our establishment in November 2012,
              we have partnered with governments, development partners,
              utilities and private sector organizations to deliver practical,
              result-oriented solutions that improve institutional performance,
              strengthen governance and enhance service delivery.
            </p>
            <p className="mt-7 max-w-4xl text-lg leading-8 text-black/65">
              As an ISO 9001:2015 certified management and leadership advisory
              firm, we specialize in institutional development, organizational
              transformation, utility management, WASH policy and regulatory
              support, strategic business planning, capacity development and
              technical advisory services. Our multidisciplinary team combines
              international best practices with local knowledge to help clients
              address complex challenges and achieve lasting impact.
            </p>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-black/65">
              From our headquarters in Kampala, Uganda, and our regional
              presence in Nigeria, Kenya and Zambia, we have successfully
              delivered assignments across Africa, Asia and the Caribbean,
              supporting institutions to become more efficient, resilient and
              customer focused.
            </p>
          </Reveal>
        </Reveal>
      </section>
      <section className="bg-[#f8e6d1]">
        <div className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 lg:px-12">
          <Reveal>
            <Eyebrow>Vision & Mission</Eyebrow>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal
              delay={100}
              className="rounded-xl border border-black/10 bg-white p-8 transition-all duration-300 hover:border-[#8C1E2D] hover:shadow-xl"
            >
              <Eyebrow>Our vision</Eyebrow>
              <h2 className="mt-6 text-3xl font-semibold leading-[.98] tracking-[-.06em]">
                To be a leading management and leadership consultancy firm.
              </h2>
              <p className="mt-6 leading-8 text-black/65">
                We aspire to be the partner of choice for organisations seeking
                innovative solutions that transform institutions, strengthen
                governance and improve performance.
              </p>
            </Reveal>
            <Reveal
              delay={200}
              className="rounded-xl border border-black/10 bg-white p-8 transition-all duration-300 hover:border-[#8C1E2D] hover:shadow-xl"
            >
              <Eyebrow>Our mission</Eyebrow>
              <h2 className="mt-6 text-3xl font-semibold leading-[.98] tracking-[-.06em]">
                To foster strong partnerships in transformation and performance
                improvement.
              </h2>
              <p className="mt-6 leading-8 text-black/65">
                We work collaboratively with clients to create tailored
                solutions that strengthen institutional capacity, improve
                organizational effectiveness and deliver measurable, long-term
                results.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Quality statement</Eyebrow>
            <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1] tracking-[-.065em] sm:text-6xl">
              Quality is at the heart of everything we do.
            </h2>
            <p className="mt-6 max-w-4xl text-lg leading-8 text-black/65">
              2ML Consulting Limited shall spare no effort to delight its
              clients with the highest quality of management and leadership
              advisory services by understanding client expectations, delivering
              practical and transformative solutions, and continually improving
              our processes. We are committed to complying with applicable
              requirements while fostering a client-centered culture,
              innovation, stakeholder engagement and service excellence that
              consistently delivers sustainable results.
            </p>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-black/65">
              Our ISO 9001:2015 Quality Management System reflects our
              commitment to excellence, continuous improvement and delivering
              value to every client and partner we serve.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <img
              src={images.team}
              alt="Team collaboration"
              className="h-[300px] w-full rounded-2xl object-cover shadow-2xl lg:h-[400px]"
            />
          </Reveal>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {values.map((value, index) => (
            <Reveal
              key={value.title}
              delay={index * 100}
              className="group rounded-xl border border-black/10 bg-white p-6 transition-all duration-300 hover:border-[#8C1E2D] hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-[#f8e6d1] p-2 transition-all duration-300 group-hover:bg-[#8C1E2D]">
                  <value.icon
                    className="h-8 w-8 text-[#F5953B] transition-colors duration-300 group-hover:text-white"
                    strokeWidth={2}
                  />
                </div>
                <span className="text-sm font-bold text-[#8C1E2D] transition-colors duration-300 group-hover:text-[#F5953B]">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold tracking-[-.05em] transition-colors duration-300 group-hover:text-[#8C1E2D]">
                {value.title}
              </h3>
              <p className="mt-4 leading-7 text-black/65 transition-colors duration-300">
                {value.copy}
              </p>
            </Reveal>
          ))}
        </div>
      </section>
      <ContactBand />
    </>
  );
}
