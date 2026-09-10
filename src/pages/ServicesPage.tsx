import { Eyebrow } from "../components/Shared";
import { Reveal } from "../components/Motion";
import { images } from "../data/site";
import { useState, useRef, useEffect } from "react";

interface Service {
  title: string;
  copy: string;
  experience: string[];
  image: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
  isEven: boolean;
}

function ServiceCard({ service, index, isEven }: ServiceCardProps) {
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
    <Reveal delay={index * 100}>
      <div
        ref={ref}
        className={`group grid gap-8 lg:grid-cols-[80px_1fr_1fr] transition-all duration-500 ${
          isVisible
            ? isEven
              ? "animate-slide-in-left"
              : "animate-slide-in-right"
            : "opacity-0"
        }`}
      >
        <div className="relative flex items-start justify-center lg:items-center">
          <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#8C1E2D] text-sm font-bold text-white transition-all duration-300 group-hover:scale-125 group-hover:bg-[#F5953B] group-hover:shadow-lg group-hover:shadow-[#F5953B]/50">
            {index + 1}
          </div>
          {index < services.length - 1 && (
            <div className="absolute left-1/2 top-8 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#8C1E2D] to-[#F5953B] transition-all duration-300 group-hover:w-1" />
          )}
        </div>
        {isEven ? (
          <>
            <div className="space-y-4 transition-all duration-300 group-hover:translate-x-2">
              <h2 className="text-2xl font-semibold tracking-[-.05em] transition-all duration-300 group-hover:text-[#8C1E2D] group-hover:text-3xl sm:text-3xl">
                {service.title}
              </h2>
              <p className="leading-7 text-black/65 transition-colors duration-300 group-hover:text-black/80">
                {service.copy}
              </p>
              {service.experience.length > 0 && (
                <div className="mt-6">
                  <p className="text-xs font-bold uppercase tracking-[.16em] text-[#8C1E2D] transition-colors duration-300 group-hover:text-[#F5953B]">
                    Representative experience
                  </p>
                  <ul className="mt-3 space-y-2">
                    {service.experience.map((item: string, i: number) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm leading-6 text-black/65 transition-all duration-300 group-hover:text-black/80 group-hover:translate-x-1"
                        style={{
                          transitionDelay: `${i * 50}ms`,
                        }}
                      >
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F5953B] transition-all duration-300 group-hover:scale-125" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="flex flex-col overflow-hidden rounded-2xl transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
              <img
                src={service.image}
                alt={service.title}
                className="h-full min-h-[250px] w-full object-contain transition-all duration-300"
              />
            </div>
          </>
        ) : (
          <>
            <div className="lg:col-start-2 flex flex-col overflow-hidden rounded-2xl transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
              <img
                src={service.image}
                alt={service.title}
                className="h-full min-h-[250px] w-full object-contain transition-all duration-300"
              />
            </div>
            <div className="lg:col-start-3 space-y-4 transition-all duration-300 group-hover:-translate-x-2">
              <h2 className="text-2xl font-semibold tracking-[-.05em] transition-all duration-300 group-hover:text-[#8C1E2D] group-hover:text-3xl sm:text-3xl">
                {service.title}
              </h2>
              <p className="leading-7 text-black/65 transition-colors duration-300 group-hover:text-black/80">
                {service.copy}
              </p>
              {service.experience.length > 0 && (
                <div className="mt-6">
                  <p className="text-xs font-bold uppercase tracking-[.16em] text-[#8C1E2D] transition-colors duration-300 group-hover:text-[#F5953B]">
                    Representative experience
                  </p>
                  <ul className="mt-3 space-y-2">
                    {service.experience.map((item: string, i: number) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm leading-6 text-black/65 transition-all duration-300 group-hover:text-black/80 group-hover:-translate-x-1"
                        style={{
                          transitionDelay: `${i * 50}ms`,
                        }}
                      >
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F5953B] transition-all duration-300 group-hover:scale-125" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </Reveal>
  );
}

const services = [
  {
    title: "Performance Improvement Programmes (PIPs)",

    copy: "2ML Consulting provides tailor-made, short-term and high-impact Performance Improvement Programmes designed to improve the technical, commercial and financial performance of utilities. Our approach combines performance diagnostics, KPI analysis, participatory target setting, action planning, performance monitoring and incentive frameworks to generate quick wins and sustain long-term improvements.",

    experience: [
      "Uganda National Water and Sewerage Corporation (NWSC)",
      "Utility Performance Improvement Programmes across Africa",
      "Performance improvement assignments in Nigeria, Ethiopia, South Sudan and Kenya",
    ],

    image: images.pip,
  },

  {
    title: "Utility Management & Business Re-Engineering",

    copy: "We support utilities and institutions to strengthen organisational effectiveness, operational efficiency and service delivery through institutional development and business re-engineering. Our services include organisational development, leadership training, human resource reviews, job and competency analysis, change management, efficiency improvement and performance-based incentive mechanisms.",

    experience: [
      "Uganda National Water and Sewerage Corporation (NWSC)",
      "Port Harcourt Water Corporation – Nigeria",
      "Ondo State Water Corporation – Nigeria",
      "Taraba State Water & Sewerage Corporation – Nigeria",
      "Public water institutions in Ethiopia and Jordan",
    ],

    image: images.utilitymanagement,
  },

  {
    title: "Enterprise Resource Planning (ERP) Solutions",

    copy: "We provide integrated ERP solutions that help utilities and institutions streamline core business processes and improve operational efficiency. Our solutions support Billing, Customer Relationship Management, Asset Management, Accounting, Procurement and Human Resource Management, helping organisations reduce operational costs, improve customer satisfaction, reduce utility losses and enhance billing and payment accuracy.",

    experience: [
      "ICT and computerized utility systems integration",
      "Automated billing and customer management systems",
      "Integration of GIS with billing and customer care systems",
      "Utility management systems implementation and enhancement",
    ],

    image: images.erp,
  },

  {
    title: "Strategic Planning",

    copy: "2ML supports water sector institutions and utilities to strengthen strategic, institutional and financial planning for sustainable and accountable service delivery. Our services include business and corporate planning, institutional reform, transitional management, tariff studies and design, cost-recovery strategies, financial modelling, investment planning and development of technical, commercial and financial operating procedures.",

    experience: [
      "Strategic and business planning assignments across Africa",
      "Uganda National Water and Sewerage Corporation (NWSC)",
      "Water utilities in Nigeria, Ethiopia, Kenya and South Sudan",
    ],

    image: images.strategicplanning,
  },

  {
    title: "Tariff Studies, Financial Modelling & Investment Planning",

    copy: "We support utilities to strengthen financial sustainability through tariff studies, tariff design, cost-recovery strategies, financial modelling and investment planning. Our approach links financial analysis with operational requirements and service delivery objectives to support informed decision-making and sustainable utility performance.",

    experience: [
      "Tariff studies and tariff design for water utilities",
      "Financial modelling and investment planning assignments",
      "Commercial and financial management support to utilities in Uganda, Nigeria and Ethiopia",
    ],

    image: images.financialmanagement,
  },

  {
    title: "Integrated Water Resources Management",

    copy: "2ML Consulting integrates water resources management into utility performance and strategic planning to address water scarcity, climate change and environmental pressures. We support clients in ecosystem management and restoration and promote catchment-wide approaches to corporate planning and operations, including water resource management, water quality assessment, flood risk management and groundwater management.",

    experience: [
      "Water resources management at watershed and regional levels",
      "Water quality assessment",
      "River hydrology and hydraulics and flood risk management",
      "Ecological continuity and waterways bank restoration",
      "Groundwater management",
    ],

    image: images.field,
  },

  {
    title: "Utility Diagnostic & Environmental Studies",

    copy: "We undertake utility diagnostic and environmental studies to identify performance gaps, establish priorities and develop practical action plans. Our services include baseline assessments based on utility performance indicators, water and sanitation studies, public-private partnership assessments, infrastructure planning, socio-economic studies, environmental and social impact assessments, strategic environmental assessments, environmental management plans and stakeholder engagement.",

    experience: [
      "Utility baseline and performance assessments",
      "Water and sanitation studies",
      "Public-Private Partnership assessments",
      "Infrastructure planning assignments",
      "Environmental and Social Impact Assessments (ESIAs)",
      "Strategic Environmental Assessments (SEAs)",
    ],

    image: images.research,
  },

  {
    title: "Operational Planning & Optimization",

    copy: "We help utilities optimize their technical and operational performance through structured planning and performance improvement interventions. Our expertise covers Non-Revenue Water management, District Metering Areas, pressure and flow monitoring, hydraulic analysis, network optimization, water balance computation and meter management.",

    experience: [
      "Non-Revenue Water (NRW) management",
      "District Metering Area establishment",
      "Pressure and flow monitoring",
      "Hydraulic analysis and network optimization",
      "Water balance computation",
      "Meter installation, policy development and maintenance training",
    ],

    image: images.map,
  },

  {
    title: "Water Distribution & Network Management",

    copy: "2ML supports utilities to improve the reliability and efficiency of water distribution networks through leak detection, planned preventive maintenance, network surveillance, asset inventory development and hydraulic network management. We also support the use of hydraulic modelling tools and build the capacity of technical teams to operate and maintain network systems.",

    experience: [
      "Leak detection and repair programmes",
      "Planned Preventive Maintenance (PPM)",
      "Piped network surveillance",
      "Hydraulic modelling and pressure management",
      "Water supply network operations and maintenance",
    ],

    image: images.team,
  },

  {
    title: "Asset Management",

    copy: "We support utilities to establish effective asset management systems that improve the planning, maintenance and performance of water supply infrastructure. Our services include asset inventory development, asset management policies, asset management strategies and action plans, network maintenance procedures and Standard Operating Procedures for operations and maintenance.",

    experience: [
      "Development of Asset Inventories",
      "Asset Management Policy Development",
      "Asset Management Strategies and Action Plans",
      "Network maintenance planning",
      "Asset management systems for water utilities",
    ],

    image: images.institutionaldevelopment,
  },

  {
    title: "GIS, Survey & Mapping",

    copy: "We use GIS, spatial data and digital technologies to strengthen utility planning, customer management and operational decision-making. Our services include customer enumeration, customer mapping, utility network surveys, basemap development, GIS database implementation, spatial analysis and incident location mapping and tracking.",

    experience: [
      "Customer enumeration and mapping",
      "Utility network surveys and mapping",
      "GIS database implementation",
      "Development of utility Geoportals",
      "Integration of GIS with billing and customer care systems",
      "Spatial analysis of commercial and technical operations",
    ],

    image: images.gissolutions,
  },

  {
    title: "Human Capital Development",

    copy: "We provide comprehensive Human Resource Management solutions aligned to organisational needs and focused on improving staff performance, commitment and motivation. Our services include organisational design and restructuring, capacity needs assessments, job evaluations, salary surveys, workload analysis, performance management, change management, job descriptions, HR manuals and policies.",

    experience: [
      "Port Harcourt Water Corporation – Nigeria",
      "Ondo State Water Corporation – Nigeria",
      "Taraba State Water & Sewerage Corporation – Nigeria",
      "Ogun State Water Corporation – Nigeria",
      "UNICEF Utility Strengthening Programme – Ethiopia",
    ],

    image: images.community,
  },

  {
    title: "Policy, Regulation & Institutional Reform",

    copy: "2ML supports governments, regulators, utilities and public institutions to strengthen institutional systems, governance and regulatory arrangements. Our expertise includes institutional assessments, organisational restructuring, regulatory systems, policy implementation support, governance and accountability systems, stakeholder engagement and institutional capacity strengthening.",

    experience: [
      "Regulatory systems and sector oversight assignments",
      "Institutional reform and organisational restructuring",
      "Policy implementation support",
      "Institutional strengthening of public water utilities",
      "Assignments across Uganda, Nigeria, Ethiopia, Kenya and South Sudan",
    ],

    image: images.policy,
  },

  {
    title: "Capacity Development, Training & Leadership",

    copy: "We strengthen organisational and individual capacity through targeted training, leadership development, coaching, mentoring and skills-gap assessments. Our approach focuses on building the capabilities required to sustain institutional reforms, improve performance and strengthen management and service delivery.",

    experience: [
      "Leadership training, coaching and mentoring",
      "Staff capacity development programmes",
      "Training needs and skills-gap assessments",
      "Executive capacity development",
      "Performance management and staff development",
    ],

    image: images.meeting,
  },
];
export function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-[95%] px-5 py-20 sm:px-8 lg:px-12">
        <Reveal>
          <Eyebrow>Our service lines</Eyebrow>
          <p className="mt-6 max-w-4xl text-xl leading-8 text-black/65">
            Our multidisciplinary teams combine the best international practices
            with practical experience to deliver tailored, evidence-based
            solutions that create lasting impact across Africa, Asia and the
            Caribbean.
          </p>
        </Reveal>
        <div className="mt-16 space-y-16">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <ServiceCard
                key={service.title}
                service={service}
                index={index}
                isEven={isEven}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
