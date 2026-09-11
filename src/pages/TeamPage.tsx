import { useState, useRef, useEffect } from "react";
import { Eyebrow } from "../components/Shared";
import { Reveal } from "../components/Motion";
import { images } from "../data/site";
import { ChevronRight } from "lucide-react";

// Utility function to calculate years of experience
function calculateYearsOfExperience(startYear: number, field: string): string {
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - startYear;
  return `${yearsOfExperience}+ years in ${field}`;
}

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

const API_BASE_URL = "http://localhost:8000";

type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  expertise: string[];
  education: string;
  startYear: number;
  experienceField: string;
};

interface TeamCardProps {
  member: TeamMember;
  index: number;
  onSelect: (member: TeamMember) => void;
}

function TeamCard({ member, index, onSelect }: TeamCardProps) {
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
    <Reveal delay={index * 80}>
      <div
        ref={ref}
        onClick={() => onSelect(member)}
        className={`group cursor-pointer rounded-2xl border border-black/10 bg-white overflow-hidden transition-all duration-500 hover:border-[#8C1E2D] hover:shadow-2xl hover:-translate-y-2 ${
          isVisible ? "animate-slide-in-left" : "opacity-0"
        }`}
      >
        <div className="flex flex-col sm:flex-row gap-6 p-6">
          {/* Image */}
          <div className="h-32 w-32 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100">
            <img
              src={member.image}
              alt={member.name}
              className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold tracking-[-.045em] transition-colors duration-300 group-hover:text-[#8C1E2D]">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-[#8C1E2D] font-semibold">
                {member.role}
              </p>

              {/* Expertise */}
              <div className="mt-3">
                <p className="text-xs font-bold uppercase tracking-[.16em] text-[#8C1E2D] mb-2">
                  Expertise
                </p>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-full bg-[#f8e6d1] px-2 py-1 text-xs font-semibold text-[#8C1E2D] transition-all duration-300 group-hover:bg-[#8C1E2D] group-hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div className="mt-4">
                <p className="text-xs font-bold uppercase tracking-[.16em] text-[#8C1E2D] mb-1">
                  Experience
                </p>
                <p className="text-sm text-black/65 group-hover:text-black/80 transition-colors duration-300">
                  {calculateYearsOfExperience(
                    member.startYear,
                    member.experienceField,
                  )}
                </p>
              </div>
            </div>

            {/* Expand Indicator */}
            <div className="mt-4 flex items-center gap-2 text-[#8C1E2D] font-semibold text-sm transition-all duration-300 group-hover:gap-3">
              <span>View details</span>
              <ChevronRight className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

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
    startYear: 2004,
    experienceField: "water sector leadership",
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
    startYear: 2008,
    experienceField: "operations management",
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
    startYear: 2011,
    experienceField: "financial management",
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
    startYear: 2014,
    experienceField: "legal advisory",
  },
];

const experts: TeamMember[] = [
  {
    id: "1",
    name: "Dr. William T. Muhairwe",
    role: "Utility Management, Governance & Institutional Development Specialist",
    image: images.william,
    bio: "Dr. William T. Muhairwe is an internationally recognized Utility Management, Governance and Institutional Development Specialist and Economist. He specializes in strengthening public utilities and institutions through organizational restructuring, governance reform, strategic planning, performance management, commercialization, change management and leadership development.",
    expertise: [
      "Institutional Development",
      "Utility Management and Governance",
      "Strategic and Business Planning",
      "Performance Improvement Programmes",
      "Performance Management",
      "Organizational Restructuring",
      "Regulatory Systems",
      "Utility Commercialization",
      "Change Management",
      "Leadership Development",
      "Capacity Development",
      "Stakeholder Engagement",
    ],
    education: "",
    startYear: 1991,
    experienceField:
      "utility management, governance and institutional development",
  },

  {
    id: "2",
    name: "George Okol Echaku",
    role: "Commercial, Billing, Customer Care & Utility Management Expert",
    image: images.gilbert,
    bio: "George Okol Echaku is a senior Commercial, Billing, Customer Care and Utility Management Expert specializing in the strengthening and modernization of water utility commercial operations. He has led initiatives focused on revenue growth, billing and collection performance, customer care, receivables management, staff capacity development, policy implementation, performance monitoring and the adoption of ICT for service delivery.",
    expertise: [
      "Commercial and Financial Management",
      "Billing and Revenue Collection",
      "Customer Care",
      "Strategic Business Planning",
      "Revenue Enhancement",
      "Debt Management",
      "Non-Revenue Water Reduction",
      "Tariff Development",
      "Financial Sustainability",
      "ICT and Automated Billing Systems",
      "Utility Commercialization",
      "Performance Improvement",
      "Capacity Development",
    ],
    education: "",
    startYear: 2006,
    experienceField:
      "commercial management, billing and utility performance improvement",
  },

  {
    id: "3",
    name: "Gilbert Akol Echelai",
    role: "Utility Performance, GIS, Asset Management & Project Management Expert",
    image: images.gilbert,
    bio: "Gilbert Akol Echelai is a Utility Performance, GIS, Asset Management and Project Management Expert with a strong background in using data, technology and performance management systems to strengthen water utilities. He has supported the design and implementation of Performance Improvement Programmes and the integration of GIS, asset, inventory, customer relationship and computerized utility management systems.",
    expertise: [
      "Utility Performance Management",
      "Performance Improvement Programmes",
      "Project Management",
      "GIS and Mapping",
      "Spatial Data Management",
      "Asset Management Systems",
      "Utility Diagnostic Assessments",
      "Strategic and Business Planning",
      "Performance Indicators and KPIs",
      "Customer Enumeration and Mapping",
      "ICT and Digital Solutions",
      "Billing and Customer Management Systems",
      "Organizational Restructuring",
      "Non-Revenue Water Strategies",
      "Capacity Building",
      "Quality Management Systems",
      "Data Management and Analysis",
    ],
    education: "",
    startYear: 2009,
    experienceField:
      "utility performance management, GIS, asset management and project management",
  },

  {
    id: "4",
    name: "Eng. Vincent Kamoga",
    role: "Operations and Maintenance Expert",
    image: images.vincent,
    bio: "Eng. Vincent Kamoga specializes in operations and maintenance of water utilities, providing expertise in system optimization, maintenance planning and operational efficiency.",
    expertise: [
      "Operations",
      "Maintenance",
      "System Optimization",
      "Operational Efficiency",
      "Water Distribution",
      "Network Management",
      "Hydraulic Systems",
      "Preventive Maintenance",
    ],
    education: "",
    startYear: 2008,
    experienceField: "operations and maintenance",
  },

  {
    id: "5",
    name: "Samuel Aikhomu",
    role: "Human Resources Management & Organizational Development Specialist",
    image: images.sam,
    bio: "Samuel Aikhomu is a Human Resources Management and Organizational Development Specialist with a strong focus on strengthening organizational structures, workforce systems and institutional capacity. His work includes organizational diagnostics, staffing and manpower assessments, competency reviews, workforce planning, HR policies and manuals, performance appraisal systems, succession plans and staff development programmes.",
    expertise: [
      "Human Resource Management",
      "HR Strategy",
      "Organizational Development",
      "Institutional Strengthening",
      "Organizational Assessments",
      "Organizational Restructuring",
      "Workforce Planning",
      "Competency and Skills Gap Assessments",
      "HR Policies and Manuals",
      "Job Evaluation and Job Design",
      "Performance Management",
      "Capacity Development",
      "Succession Planning",
      "Change Management",
      "Organizational Transformation",
      "Strategic Planning",
      "Stakeholder Engagement",
    ],
    education: "",
    startYear: 2001,
    experienceField: "human resource management and organizational development",
  },

  {
    id: "6",
    name: "Lorna Kobusingye",
    role: "Legal Expert",
    image: images.lorna,
    bio: "Lorna Kobusingye provides legal advisory support for water sector projects, with a focus on regulatory compliance, contracts and water sector legal matters.",
    expertise: [
      "Legal Advisory",
      "Regulatory Compliance",
      "Contract Management",
      "Water Law",
      "Policy and Regulation",
      "Institutional Reform",
    ],
    education: "",
    startYear: 2014,
    experienceField: "legal advisory",
  },

  {
    id: "7",
    name: "Rosemary Akidi",
    role: "Finance and Administration Expert",
    image: images.rosemary,
    bio: "Rosemary Akidi specializes in financial management and administrative systems, providing expertise in financial planning, budgeting and organizational support services.",
    expertise: [
      "Financial Management",
      "Financial Planning",
      "Budget Planning",
      "Administrative Systems",
      "Financial Governance",
      "Organizational Support",
    ],
    education: "",
    startYear: 2011,
    experienceField: "financial management and administration",
  },
];

const imageByName = new Map<string, string>(
  [...teamMembers, ...experts].map((m) => [m.name, m.image]),
);

function mapApiTeam(m: any): TeamMember {
  return {
    id: String(m.id),
    name: m.name,
    role: m.role,
    image: m.image || imageByName.get(m.name) || "",
    bio: m.bio,
    expertise: m.expertise ?? [],
    education: m.education ?? "",
    startYear: m.start_year,
    experienceField: m.experience_field,
  };
}

export function TeamPage() {
  const [expertList, setExpertList] = useState<TeamMember[]>(experts);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/team`)
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data: any[]) => {
        if (!Array.isArray(data) || data.length === 0) return;
        const mapped = data
          .filter((m) => m.is_active !== false)
          .map(mapApiTeam)
          .sort((a, b) => a.startYear - b.startYear);

        setExpertList(
          mapped.filter((m) => m.role.toLowerCase().includes("expert")),
        );
      })
      .catch(() => {});
  }, []);

  return (
    <>
      {/* Team Members Section */}
      {/* <section className="mx-auto max-w-[95%] px-5 py-10 mt-10 sm:px-8 lg:px-12">
        <Reveal>
          <Eyebrow>Top management</Eyebrow>
          <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-[.98] tracking-[-.06em] sm:text-5xl">
            Leadership driving impact.
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {members.map((member, index) => (
            <TeamCard
              key={member.id}
              member={member}
              index={index}
              onSelect={setSelectedMember}
            />
          ))}
        </div>
      </section> */}

      {/* Experts Section */}
      <section className="mx-auto max-w-[95%] px-5 mt-20 pb-10 sm:px-8 lg:px-12">
        <Reveal>
          <Eyebrow>Our experts</Eyebrow>
        </Reveal>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {expertList.map((expert, index) => (
            <TeamCard
              key={expert.id}
              member={expert}
              index={index}
              onSelect={setSelectedMember}
            />
          ))}
        </div>
      </section>

      <section className="bg-[#f8e6d1]">
        <div className="mx-auto max-w-[95%] px-5 py-10 sm:px-8 lg:px-12">
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
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-.045em]">
                    {selectedMember.name}
                  </h3>
                  <p className="mt-1 text-[#8C1E2D] font-semibold">
                    {selectedMember.role}
                  </p>
                  <p className="mt-1 text-sm text-black/65">
                    {calculateYearsOfExperience(
                      selectedMember.startYear,
                      selectedMember.experienceField,
                    )}
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
            <div className="mt-6 max-h-[60vh] space-y-6 overflow-y-auto pr-2">
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
              <div>
                <p className="text-xs font-bold uppercase tracking-[.16em] text-[#8C1E2D]">
                  Bio
                </p>
                <p className="mt-2 leading-7 text-black/65">
                  {selectedMember.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
