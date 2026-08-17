import { useMemo, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Eyebrow } from "../components/Shared";
import { Reveal } from "../components/Motion";
import { ArrowRight } from "lucide-react";

type Project = {
  title: string;
  service: string;
  client?: string;
  funding?: string;
  description: string;
};
type CountryPortfolio = { introduction: string; projects: Project[] };

interface ProjectCardProps {
  project: Project & { country: string };
  index: number;
  onProjectClick: (project: Project & { country: string }) => void;
}

function ProjectCard({ project, onProjectClick }: ProjectCardProps) {
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
    <Reveal>
      <div
        ref={ref}
        onClick={() => onProjectClick(project)}
        className={`group rounded-xl border border-black/10 bg-white p-6 transition-all duration-500 hover:border-[#8C1E2D] hover:shadow-2xl hover:-translate-y-2 cursor-pointer ${
          isVisible ? "animate-slide-in-left" : "opacity-0"
        }`}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <p className="text-xs font-bold uppercase tracking-[.16em] text-[#F5953B] transition-colors duration-300 group-hover:text-[#8C1E2D]">
              {project.country}
            </p>
            <h3 className="mt-3 text-lg font-semibold tracking-[-.045em] transition-all duration-300 group-hover:text-[#8C1E2D] group-hover:text-xl">
              {project.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-black/65 transition-colors duration-300 group-hover:text-black/80">
              {project.description.slice(0, 150)}...
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-[#f8e6d1] px-3 py-1 text-xs font-semibold text-[#8C1E2D] transition-all duration-300 group-hover:bg-[#8C1E2D] group-hover:text-white">
                {project.service}
              </span>
            </div>
          </div>
          <div className="flex-shrink-0 transition-all duration-300 group-hover:translate-x-1">
            <ArrowRight className="h-5 w-5 text-[#8C1E2D] transition-all duration-300 group-hover:text-[#F5953B]" />
          </div>
        </div>
      </div>
    </Reveal>
  );
}

const portfolio: Record<string, CountryPortfolio> = {
  Nigeria: {
    introduction:
      "Nigeria represents one of 2ML Consulting's largest portfolios, with projects ranging from national policy development to institutional strengthening, utility transformation and organizational change management.",
    projects: [
      {
        title: "Updating the National WASH Policy (Ongoing)",
        service: "Policy & regulation",
        client:
          "Federal Ministry responsible for Water Resources and Sanitation",
        description:
          "2ML is leading the development of Nigeria's updated National WASH Policy, providing technical leadership for nationwide stakeholder consultations, institutional assessments, policy reviews and implementation planning. The assignment is helping establish a modern policy framework that will guide water, sanitation and hygiene services across Nigeria through to 2030.",
      },
      {
        title:
          "Organizational and Institutional Technical Assistance for Ondo State Water Corporation",
        service: "Institutional transformation",
        client: "Ondo State Water Corporation (ODWC)",
        funding: "Agence Française de Développement (AFD)",
        description:
          "2ML provided comprehensive institutional and organizational support aimed at improving operational efficiency and long-term sustainability. The assignment included organizational restructuring, change management, commercialization, financial management, human resource development, customer database development, tariff review, asset management and non-revenue water reduction.",
      },
      {
        title:
          "Management, Commercialization and Institutional Support to Kaduna State Water Corporation",
        service: "Utility management",
        description:
          "2ML supported Kaduna State Water Corporation through institutional strengthening and commercialization initiatives designed to improve operational performance, customer service, financial sustainability and organizational efficiency. The assignment focused on strengthening internal systems while building long-term institutional capacity.",
      },
      {
        title:
          "Performance Improvement Programme – Taraba Water and Sewerage Corporation (TAWASCO)",
        service: "Performance improvement",
        description:
          "2ML implemented its flagship Performance Improvement Programme to strengthen management systems, improve operational performance and enhance service delivery. The intervention contributed to improved institutional performance and demonstrated the effectiveness of results-oriented organizational transformation.",
      },
      {
        title:
          "Performance Improvement Programme – Water Corporation of Oyo State (WCOS)",
        service: "Performance improvement",
        description:
          "2ML supported the utility through organizational transformation, leadership development and performance improvement initiatives focused on strengthening governance, operational efficiency and customer service delivery.",
      },
      {
        title: "Performance Improvement Programme – Lagos Water Corporation",
        service: "Performance improvement",
        description:
          "2ML implemented institutional reforms and Performance Improvement Programmes that contributed to improved operational sustainability and service delivery. Lagos Water Corporation later received international recognition for operational sustainability at the Global Water Leaders' Summit.",
      },
    ],
  },
  "South Sudan": {
    introduction:
      "2ML has supported South Sudan's water sector through institutional strengthening and utility management programmes aimed at improving service delivery and organizational capacity.",
    projects: [
      {
        title: "System Strengthening Services for Urban Water Utilities",
        service: "Institutional transformation",
        client: "UNICEF South Sudan",
        description:
          "2ML is providing technical assistance to strengthen governance, management systems, financial performance, commercial operations and institutional capacity for urban water utilities across South Sudan. The programme is designed to build resilient utility institutions capable of delivering sustainable water services.",
      },
    ],
  },
  "Sierra Leone": {
    introduction:
      "2ML has been a long-standing partner in strengthening Sierra Leone's water sector through utility transformation.",
    projects: [
      {
        title: "Performance Improvement Programme – Guma Valley Water Company",
        service: "Performance improvement",
        description:
          "2ML designed and implemented a Performance Improvement Programme that transformed utility operations, significantly improved operational efficiency and substantially increased revenue collection. The utility's achievements received international recognition at the Global Water Summit, demonstrating the impact of 2ML's institutional transformation approach.",
      },
    ],
  },
  Ethiopia: {
    introduction:
      "Ethiopia represents one of 2ML's most extensive institutional strengthening portfolios, delivered in partnership with UNICEF and national stakeholders.",
    projects: [
      {
        title: "Long-Term System Strengthening for Eleven Town Water Utilities",
        service: "Institutional transformation",
        client: "UNICEF Ethiopia",
        description:
          "2ML provided institutional strengthening services to eleven town water utilities, including diagnostic assessments, business planning, financial management, human resource development, non-revenue water reduction, asset management and operational improvement. The programme strengthened utility performance and institutional sustainability across multiple regions.",
      },
      {
        title: "Establishment of a WASH Regulatory Framework",
        service: "Policy & regulation",
        client: "UNICEF Ethiopia",
        description:
          "2ML supported the Government of Ethiopia in assessing existing regulatory arrangements and developing recommendations for establishing a national WASH regulatory body to improve oversight of urban water supply and wastewater services.",
      },
      {
        title: "Exposure Visits for WASH Regulation",
        service: "Policy & regulation",
        description:
          "2ML facilitated international exposure visits to Kenya and Zambia for Ethiopian stakeholders to support learning and knowledge exchange during the establishment of Ethiopia's WASH regulatory framework.",
      },
    ],
  },
  Uganda: {
    introduction:
      "As its home country, Uganda remains central to 2ML's work in institutional development, regulation and utility reform.",
    projects: [
      {
        title:
          "Review and Development of Water Supply and Sanitation Regulatory Tools",
        service: "Policy & regulation",
        client: "Ministry of Water and Environment",
        description:
          "2ML reviewed Uganda's existing regulatory framework and developed updated regulatory tools, implementation guidelines and monitoring frameworks to strengthen governance and improve regulation across the water supply and sanitation subsector.",
      },
    ],
  },
  Rwanda: {
    introduction: "",
    projects: [
      {
        title:
          "Performance Improvement Programme – Water and Sanitation Corporation (WASAC)",
        service: "Performance improvement",
        description:
          "2ML partnered with WASAC to implement its Performance Improvement Programme, supporting organizational transformation, operational efficiency and revenue improvement. The utility received international recognition for its outstanding performance and achievements in utility management.",
      },
    ],
  },
  Ghana: {
    introduction: "",
    projects: [
      {
        title: "Institutional Development and Utility Transformation",
        service: "Institutional transformation",
        description:
          "2ML has provided institutional development and utility transformation support to Ghana Water Company Limited, helping strengthen organizational systems and improve utility performance through practical management and leadership interventions.",
      },
    ],
  },
  Zambia: {
    introduction: "",
    projects: [
      {
        title: "Utility Management and Institutional Support",
        service: "Utility management",
        description:
          "2ML has worked with Mulonga Water and Sewerage Company and supported sector institutions through utility management, institutional strengthening and knowledge exchange initiatives focused on improving operational performance and service delivery.",
      },
    ],
  },
  Kenya: {
    introduction: "",
    projects: [
      {
        title: "Utility Transformation and Regional Knowledge Exchange",
        service: "Institutional transformation",
        description:
          "2ML has supported regional institutional strengthening initiatives involving Kenyan water utilities and facilitated technical knowledge exchange programmes that have contributed to strengthening utility regulation and management across East Africa.",
      },
    ],
  },
  Bangladesh: {
    introduction: "",
    projects: [
      {
        title: "Utility Capacity Building and Technical Advisory",
        service: "Capacity development",
        description:
          "2ML has provided institutional strengthening and technical advisory support to water utilities in Bangladesh, contributing expertise in utility management, organizational development and performance improvement.",
      },
    ],
  },
  Jordan: {
    introduction: "",
    projects: [
      {
        title: "Utility Reform and Institutional Strengthening",
        service: "Institutional transformation",
        description:
          "2ML has supported utility transformation initiatives in Jordan, sharing international best practices in institutional development, organizational performance and utility management.",
      },
    ],
  },
  India: {
    introduction: "",
    projects: [
      {
        title: "Institutional Development and Utility Performance Improvement",
        service: "Performance improvement",
        description:
          "2ML has collaborated with water sector institutions in India to support institutional strengthening and organizational performance improvement, applying lessons learned from utility transformation programmes across Africa.",
      },
    ],
  },
  Malawi: {
    introduction:
      "Through technical advisory services, institutional development and knowledge-sharing initiatives, 2ML has extended its expertise to diverse operating environments.",
    projects: [
      {
        title:
          "Technical Advisory, Institutional Development and Knowledge Sharing",
        service: "Institutional transformation",
        description:
          "2ML has contributed to organizational strengthening and improved utility performance through technical advisory services, institutional development and knowledge-sharing initiatives.",
      },
    ],
  },
  Pakistan: {
    introduction:
      "Through technical advisory services, institutional development and knowledge-sharing initiatives, 2ML has extended its expertise to diverse operating environments.",
    projects: [
      {
        title:
          "Technical Advisory, Institutional Development and Knowledge Sharing",
        service: "Institutional transformation",
        description:
          "2ML has contributed to organizational strengthening and improved utility performance through technical advisory services, institutional development and knowledge-sharing initiatives.",
      },
    ],
  },
  "Trinidad & Tobago": {
    introduction:
      "Through technical advisory services, institutional development and knowledge-sharing initiatives, 2ML has extended its expertise to diverse operating environments.",
    projects: [
      {
        title:
          "Technical Advisory, Institutional Development and Knowledge Sharing",
        service: "Institutional transformation",
        description:
          "2ML has contributed to organizational strengthening and improved utility performance through technical advisory services, institutional development and knowledge-sharing initiatives.",
      },
    ],
  },
};

export function ProjectsPage() {
  const navigate = useNavigate();
  const [country, setCountry] = useState("All countries");
  const [service, setService] = useState("All service lines");
  const [searchTerm, setSearchTerm] = useState("");
  const serviceLines = useMemo(
    () => [
      "All service lines",
      ...Array.from(
        new Set(
          Object.values(portfolio).flatMap((item) =>
            item.projects.map((project) => project.service),
          ),
        ),
      ),
    ],
    [],
  );

  const allProjects = useMemo(() => {
    return Object.entries(portfolio).flatMap(([countryName, countryData]) =>
      countryData.projects.map((project) => ({
        ...project,
        country: countryName,
      })),
    );
  }, []);

  const filteredProjects = useMemo(() => {
    let filtered = allProjects;

    if (country !== "All countries") {
      filtered = filtered.filter((p) => p.country === country);
    }

    if (service !== "All service lines") {
      filtered = filtered.filter((p) => p.service === service);
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.description.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    return filtered;
  }, [allProjects, country, service, searchTerm]);

  const handleProjectClick = (project: Project & { country: string }) => {
    const projectId = `${project.country}-${project.title.replace(/\s+/g, "-").toLowerCase()}`;
    navigate(`/projects/${projectId}`);
  };

  return (
    <>
      <section className="mx-auto max-w-[95%] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
        <div className="flex flex-col gap-10 md:flex-row">
          {/* Search and Filter Section */}
          <div className="space-y-8 md:w-80 md:flex-shrink-0">
            <Reveal>
              <Eyebrow>Filter projects</Eyebrow>
              <h2 className="mt-6 text-3xl font-semibold tracking-[-.05em] sm:text-4xl">
                Find your project
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <div>
                <label className="text-xs font-bold uppercase tracking-[.16em] text-[#8C1E2D]">
                  Search
                </label>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search projects..."
                  className="mt-3 w-full border border-black/15 bg-white p-4 text-base outline-none focus:border-[#8C1E2D]"
                />
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div>
                <label className="text-xs font-bold uppercase tracking-[.16em] text-[#8C1E2D]">
                  Filter by service line
                </label>
                <select
                  value={service}
                  onChange={(event) => setService(event.target.value)}
                  className="mt-3 w-full border border-black/15 bg-white p-4 text-base font-semibold text-black outline-none focus:border-[#8C1E2D]"
                >
                  {serviceLines.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div>
                <label className="text-xs font-bold uppercase tracking-[.16em] text-[#8C1E2D]">
                  Filter by country
                </label>
                <select
                  value={country}
                  onChange={(event) => setCountry(event.target.value)}
                  className="mt-3 w-full border border-black/15 bg-white p-4 text-base font-semibold text-black outline-none focus:border-[#8C1E2D]"
                >
                  <option value="All countries">All countries</option>
                  {Object.keys(portfolio).map((name) => (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  ))}
                </select>
              </div>
            </Reveal>
          </div>

          {/* Project Cards */}
          <div className="flex-1">
            <Reveal>
              <p className="text-sm text-black/65">
                Showing {filteredProjects.length} project
                {filteredProjects.length !== 1 ? "s" : ""}
              </p>
            </Reveal>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={`${project.country}-${project.title}`}
                  project={project}
                  index={index}
                  onProjectClick={handleProjectClick}
                />
              ))}
            </div>
            {filteredProjects.length === 0 && (
              <Reveal>
                <div className="text-center py-12">
                  <p className="text-lg text-black/65">
                    No projects found matching your criteria.
                  </p>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
