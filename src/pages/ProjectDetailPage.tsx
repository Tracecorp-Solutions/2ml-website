import { useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Eyebrow, PageHero } from "../components/Shared";
import { Reveal } from "../components/Motion";
import { images } from "../data/site";

type Project = {
  title: string;
  service: string;
  client?: string;
  funding?: string;
  description: string;
};
type CountryPortfolio = { introduction: string; projects: Project[] };

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

export function ProjectDetailPage() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const project = useMemo(() => {
    if (!projectId) return null;
    const [country, titleSlug] = projectId.split("-");
    const countryData = portfolio[country];
    if (!countryData) return null;

    const titleFromSlug = titleSlug.replace(/-/g, " ");
    return countryData.projects.find((p) =>
      p.title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .includes(titleFromSlug.toLowerCase().replace(/\s+/g, "-")),
    );
  }, [projectId]);

  const country = useMemo(() => {
    if (!project) return null;
    return (
      Object.entries(portfolio).find(([_, data]) =>
        data.projects.includes(project),
      )?.[0] || null
    );
  }, [project]);

  if (!project || !country) {
    return (
      <>
        <PageHero
          kicker="Project Details"
          title="Project Not Found"
          description="The project you're looking for doesn't exist or has been removed."
          picture={images.hero}
        />
        <section className="mx-auto max-w-[95%] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
          <Reveal>
            <p className="text-lg text-black/65">
              Please check the URL or navigate back to the projects page.
            </p>
            <button
              onClick={() => navigate("/projects")}
              className="mt-6 rounded-lg bg-[#8C1E2D] px-6 py-3 text-white transition-all duration-300 hover:bg-[#F5953B]"
            >
              Back to Projects
            </button>
          </Reveal>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="mx-auto max-w-[95%] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <Reveal>
              <Eyebrow>Project overview</Eyebrow>
              <h2 className="mt-6 text-3xl font-semibold tracking-[-.05em] sm:text-4xl">
                {project.title}
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <div>
                <p className="text-sm font-bold uppercase tracking-[.16em] text-[#8C1E2D]">
                  Country
                </p>
                <p className="mt-2 text-lg">{country}</p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div>
                <p className="text-sm font-bold uppercase tracking-[.16em] text-[#8C1E2D]">
                  Service line
                </p>
                <p className="mt-2 text-lg">{project.service}</p>
              </div>
            </Reveal>

            {project.client && (
              <Reveal delay={200}>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[.16em] text-[#8C1E2D]">
                    Client
                  </p>
                  <p className="mt-2 text-lg">{project.client}</p>
                </div>
              </Reveal>
            )}

            {project.funding && (
              <Reveal delay={250}>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[.16em] text-[#8C1E2D]">
                    Funding partner
                  </p>
                  <p className="mt-2 text-lg">{project.funding}</p>
                </div>
              </Reveal>
            )}

            <Reveal delay={300}>
              <div>
                <p className="text-sm font-bold uppercase tracking-[.16em] text-[#8C1E2D]">
                  Description
                </p>
                <p className="mt-4 max-w-3xl leading-8 text-black/65">
                  {project.description}
                </p>
              </div>
            </Reveal>

            <Reveal delay={350}>
              <button
                onClick={() => navigate("/projects")}
                className="rounded-lg border-2 border-[#8C1E2D] px-6 py-3 font-semibold text-[#8C1E2D] transition-all duration-300 hover:bg-[#8C1E2D] hover:text-white"
              >
                Back to Projects
              </button>
            </Reveal>
          </div>

          <div className="space-y-8">
            <Reveal delay={100}>
              <div className="rounded-2xl bg-[#111111] p-6 text-white">
                <h3 className="text-xl font-semibold">Project Details</h3>
                <div className="mt-6 space-y-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[.16em] text-[#F5953B]">
                      Service
                    </p>
                    <p className="mt-1 text-white/75">{project.service}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[.16em] text-[#F5953B]">
                      Country
                    </p>
                    <p className="mt-1 text-white/75">{country}</p>
                  </div>
                  {project.client && (
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[.16em] text-[#F5953B]">
                        Client
                      </p>
                      <p className="mt-1 text-white/75">{project.client}</p>
                    </div>
                  )}
                  {project.funding && (
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[.16em] text-[#F5953B]">
                        Funding
                      </p>
                      <p className="mt-1 text-white/75">{project.funding}</p>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="rounded-2xl border border-black/10 bg-white p-6">
                <h3 className="text-xl font-semibold text-[#8C1E2D]">
                  Related Projects
                </h3>
                <div className="mt-4 space-y-3">
                  {portfolio[country]?.projects
                    .filter((p) => p.title !== project.title)
                    .slice(0, 3)
                    .map((relatedProject) => (
                      <button
                        key={relatedProject.title}
                        onClick={() =>
                          navigate(
                            `/projects/${country}-${relatedProject.title.replace(/\s+/g, "-").toLowerCase()}`,
                          )
                        }
                        className="block w-full text-left transition-colors duration-300 hover:text-[#8C1E2D]"
                      >
                        <p className="font-semibold text-sm">
                          {relatedProject.title}
                        </p>
                        <p className="mt-1 text-xs text-black/65">
                          {relatedProject.service}
                        </p>
                      </button>
                    ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
