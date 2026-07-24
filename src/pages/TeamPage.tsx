import { useState } from "react";
import { ContactBand, Eyebrow, PageHero } from "../components/Shared";
import { Reveal } from "../components/Motion";
import { images } from "../data/site";

const disciplines = [
  "Institutional development & capacity building",
  "Utility management & performance improvement",
  "Water supply, sanitation & hygiene engineering",
  "Water resources, hydrology & environmental management",
  "WASH policy, regulation, governance & legal advisory",
  "WASH finance, economics & financial management",
  "Commercial operations, customer care & operations and maintenance",
  "GIS, surveying, mapping, data analytics & information systems",
  "Gender, social development, monitoring, evaluation & learning",
];

type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  expertise: string[];
  education: string;
  experience: string;
};

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Dr. William Tsimwa Muhairwe",
    role: "Senior Team Leader",
    image: images.william,
    bio: "Dr. William Tsimwa Muhairwe provides strategic leadership and oversight for 2ML Consulting's projects and initiatives, bringing extensive experience in water sector development and institutional transformation.",
    expertise: [
      "Strategic Leadership",
      "Water Sector Development",
      "Institutional Transformation",
      "Project Oversight",
    ],
    education: "PhD in Water Resources Management",
    experience: "20+ years in water sector leadership",
  },
  {
    id: "2",
    name: "Gilbert Akol Echelai",
    role: "Chief Operations Officer",
    image: images.gilbert,
    bio: "Gilbert Akol Echelai oversees the day-to-day operations of 2ML Consulting, ensuring efficient project delivery and organizational effectiveness across all business functions.",
    expertise: [
      "Operations Management",
      "Project Delivery",
      "Organizational Efficiency",
      "Business Operations",
    ],
    education: "MBA in Operations Management",
    experience: "18+ years in operations management",
  },
  {
    id: "3",
    name: "Rosemary Akidi",
    role: "Finance and Administrative Manager",
    image: images.rosemary,
    bio: "Rosemary Akidi manages financial planning, budgeting, and administrative systems, ensuring sound financial governance and efficient organizational support services.",
    expertise: [
      "Financial Management",
      "Budget Planning",
      "Administrative Systems",
      "Financial Governance",
    ],
    education: "MSc in Finance",
    experience: "15+ years in financial management",
  },
  {
    id: "4",
    name: "Lorna Kobusingye",
    role: "Legal Advisor",
    image: images.lorna,
    bio: "Lorna Kobusingye provides legal advisory services on regulatory compliance, contracts, and legal frameworks for water sector projects and institutional development initiatives.",
    expertise: [
      "Legal Advisory",
      "Regulatory Compliance",
      "Contract Management",
      "Water Law",
    ],
    education: "LLM in Environmental Law",
    experience: "12+ years in legal advisory",
  },
];

const experts: TeamMember[] = [
  {
    id: "5",
    name: "Dr. William Tsimwa Muhairwe",
    role: "Institutional Development and Governance Expert",
    image: images.william,
    bio: "Dr. William Tsimwa Muhairwe specializes in institutional development and governance, providing expert advisory on organizational transformation and capacity building.",
    expertise: [
      "Institutional Development",
      "Governance",
      "Capacity Building",
      "Organizational Transformation",
    ],
    education: "PhD in Water Resources Management",
    experience: "20+ years in institutional development",
  },
  {
    id: "6",
    name: "Gilbert Akol Echelai",
    role: "GIS Expert",
    image: images.gilbert,
    bio: "Gilbert Akol Echelai specializes in Geographic Information Systems, providing expertise in spatial data management, mapping, and information systems for water sector projects.",
    expertise: [
      "GIS",
      "Spatial Data Management",
      "Mapping",
      "Information Systems",
    ],
    education: "MSc in GIS",
    experience: "15+ years in GIS and mapping",
  },
  {
    id: "7",
    name: "Eng. Vincent Kamoga",
    role: "Operations and Maintenance Expert",
    image: images.vincent,
    bio: "Eng. Vincent Kamoga specializes in operations and maintenance of water utilities, providing expertise in system optimization, maintenance planning, and operational efficiency.",
    expertise: [
      "Operations",
      "Maintenance",
      "System Optimization",
      "Operational Efficiency",
    ],
    education: "MSc in Water Engineering",
    experience: "18+ years in operations and maintenance",
  },
  {
    id: "8",
    name: "Sam Aikhomu",
    role: "Organizational Development Expert",
    image: images.sam,
    bio: "Sam Aikhomu specializes in organizational development, providing expertise in change management, organizational design, and capacity building for water sector institutions.",
    expertise: [
      "Organizational Development",
      "Change Management",
      "Organizational Design",
      "Capacity Building",
    ],
    education: "MBA in Organizational Development",
    experience: "16+ years in organizational development",
  },
  {
    id: "9",
    name: "Lorna Kobusingye",
    role: "Legal Expert",
    image: images.lorna,
    bio: "Lorna Kobusingye specializes in legal advisory services for water sector projects, providing expertise in regulatory compliance, contracts, and water law.",
    expertise: [
      "Legal Advisory",
      "Regulatory Compliance",
      "Contract Management",
      "Water Law",
    ],
    education: "LLM in Environmental Law",
    experience: "12+ years in legal advisory",
  },
  {
    id: "10",
    name: "Rosemary Akidi",
    role: "Finance and Administration Expert",
    image: images.rosemary,
    bio: "Rosemary Akidi specializes in financial management and administrative systems, providing expertise in financial planning, budgeting, and organizational support services.",
    expertise: [
      "Financial Management",
      "Budget Planning",
      "Administrative Systems",
      "Financial Governance",
    ],
    education: "MSc in Finance",
    experience: "15+ years in financial management",
  },
];

export function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <>
      <PageHero
        kicker="Our management team"
        title={
          <>
            Expertise that
            <br />
            <em className="font-serif font-medium text-[#8C1E2D]">
              moves institutions.
            </em>
          </>
        }
        description={
          <>
            Our permanent multidisciplinary team is complemented by an extensive
            network of regional and international technical associates, enabling
            us to deliver integrated solutions tailored to the unique needs of
            every assignment. Our experts bring extensive experience across
            institutional development and capacity building, utility management,
            performance improvement, water supply and sanitation engineering,
            civil and electro-mechanical engineering, water resources
            management, hydrology, WASH policy and regulatory development, water
            law, governance, legal advisory, WASH finance, financial management,
            water sector economics, environmental and natural resources
            management, gender and social development, human resource
            management, commercial operations and customer care, operations and
            maintenance, Geographic Information Systems, surveying and mapping,
            information management systems, information technology, data
            analytics, monitoring, evaluation and learning, as well as research,
            training and knowledge management.
            <br />
            <br />
            This breadth of expertise allows 2ML Consulting Limited to assemble
            highly skilled multidisciplinary teams that combine the best
            international practices with local knowledge to deliver practical,
            innovative and sustainable solutions for governments, development
            partners, utilities and private sector organizations.
          </>
        }
        picture={images.team}
      />
      {/* <section className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal>
              <Eyebrow>Our people</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="max-w-4xl text-4xl font-semibold leading-[1] tracking-[-.065em] sm:text-6xl">
                A team shaped around the complete challenge.
              </h2>
              <p className="mt-8 max-w-4xl text-lg leading-8 text-black/65">
                Our permanent multidisciplinary team is complemented by an
                extensive network of regional and international technical
                associates, enabling us to deliver integrated solutions tailored
                to the unique needs of every assignment. Our experts bring
                extensive experience across institutional development and
                capacity building, utility management, performance improvement,
                water supply and sanitation engineering, civil and
                electro-mechanical engineering, water resources management,
                hydrology, WASH policy and regulatory development, water law,
                governance, legal advisory, WASH finance, financial management,
                water sector economics, environmental and natural resources
                management, gender and social development, human resource
                management, commercial operations and customer care, operations
                and maintenance, Geographic Information Systems, surveying and
                mapping, information management systems, information technology,
                data analytics, monitoring, evaluation and learning, as well as
                research, training and knowledge management.
              </p>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-black/65">
                This breadth of expertise allows 2ML Consulting Limited to
                assemble highly skilled multidisciplinary teams that combine the
                best international practices with local knowledge to deliver
                practical, innovative and sustainable solutions for governments,
                development partners, utilities and private sector
                organizations.
              </p>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <img
              src={images.team}
              alt="Our Team"
              className="h-full min-h-[300px] w-full rounded-2xl object-cover shadow-xl"
            />
          </Reveal>
        </div>
      </section> */}

      {/* Team Members Section */}
      <section className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 lg:px-12">
        <Reveal>
          <Eyebrow>Top management</Eyebrow>
          <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-[.98] tracking-[-.06em] sm:text-5xl">
            Leadership driving impact.
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <Reveal key={member.id} delay={index * 80}>
              <div
                onClick={() => setSelectedMember(member)}
                className="group cursor-pointer rounded-2xl border border-black/10 bg-white p-6 transition-all duration-300 hover:border-[#8C1E2D] hover:shadow-xl hover:-translate-y-1"
              >
                <div className="aspect-square overflow-hidden rounded-xl bg-gray-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-fill transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-[-.045em] transition-colors duration-300 group-hover:text-[#8C1E2D]">
                  {member.name}
                </h3>
                <p className="mt-2 text-sm text-[#8C1E2D] font-semibold">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-6 text-black/65 line-clamp-3">
                  {member.bio}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Experts Section */}
      <section className="mx-auto max-w-[1440px] px-5 pb-10 sm:px-8 lg:px-12">
        <Reveal>
          <Eyebrow>Our experts</Eyebrow>
          <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-[.98] tracking-[-.06em] sm:text-5xl">
            Specialist knowledge driving results.
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {experts.map((expert, index) => (
            <Reveal key={expert.id} delay={index * 80}>
              <div
                onClick={() => setSelectedMember(expert)}
                className="group cursor-pointer rounded-2xl border border-black/10 bg-white p-6 transition-all duration-300 hover:border-[#8C1E2D] hover:shadow-xl hover:-translate-y-1"
              >
                <div className="aspect-square overflow-hidden rounded-xl bg-gray-100">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="h-full w-full object-fill transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-[-.045em] transition-colors duration-300 group-hover:text-[#8C1E2D]">
                  {expert.name}
                </h3>
                <p className="mt-2 text-sm text-[#8C1E2D] font-semibold">
                  {expert.role}
                </p>
                <p className="mt-3 text-sm leading-6 text-black/65 line-clamp-3">
                  {expert.bio}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[#f8e6d1]">
        <div className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 lg:px-12">
          <Reveal>
            <Eyebrow>Multidisciplinary capability</Eyebrow>
            <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-[.98] tracking-[-.06em] sm:text-5xl">
              The specialist knowledge behind every engagement.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {disciplines.map((discipline, index) => (
              <Reveal
                key={discipline}
                delay={(index % 3) * 80}
                className="group rounded-xl border border-black/10 bg-white p-6 transition-all duration-300 hover:border-[#8C1E2D] hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#8C1E2D] text-sm font-bold text-white transition-colors duration-300 group-hover:bg-[#F5953B]">
                    {index + 1}
                  </div>
                  <p className="font-semibold tracking-[-.025em] text-[#111111] leading-6">
                    {discipline}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-5"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="max-w-2xl rounded-2xl bg-white p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div className="flex gap-6">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-.045em]">
                    {selectedMember.name}
                  </h3>
                  <p className="mt-1 text-[#8C1E2D] font-semibold">
                    {selectedMember.role}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedMember(null)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 transition-colors duration-300 hover:border-[#8C1E2D] hover:bg-[#8C1E2D] hover:text-white"
              >
                ✕
              </button>
            </div>
            <div className="mt-6 space-y-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[.16em] text-[#8C1E2D]">
                  Bio
                </p>
                <p className="mt-2 leading-7 text-black/65">
                  {selectedMember.bio}
                </p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[.16em] text-[#8C1E2D]">
                  Expertise
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {selectedMember.expertise.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-[#f8e6d1] px-3 py-1 text-xs font-semibold text-[#8C1E2D]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[.16em] text-[#8C1E2D]">
                    Education
                  </p>
                  <p className="mt-2 text-black/65">
                    {selectedMember.education}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[.16em] text-[#8C1E2D]">
                    Experience
                  </p>
                  <p className="mt-2 text-black/65">
                    {selectedMember.experience}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <ContactBand />
    </>
  );
}
