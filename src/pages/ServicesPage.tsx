import { ContactBand, Eyebrow, PageHero } from "../components/Shared";
import { Reveal } from "../components/Motion";
import { images } from "../data/site";

const services = [
  {
    title: "Institutional Development & Organizational Transformation",
    copy: "Strong institutions are the foundation of sustainable development. 2ML has extensive experience supporting organizations to strengthen governance structures, improve organizational effectiveness, redesign business processes and build institutional capacity. Our institutional development services include organizational assessments, change management, business process re-engineering, governance strengthening, organizational restructuring, capacity development and implementation of performance improvement initiatives that enhance accountability and operational efficiency.",
    experience: [
      "Organizational and Institutional Technical Assistance – Ondo State Water Corporation (Nigeria)",
      "System Strengthening for Urban Water Utilities – South Sudan",
      "System Strengthening for Eleven Town Water Utilities – Ethiopia",
    ],
  },
  {
    title: "Enterprise Resource Planning (ERP) Solutions",
    copy: "2ML Consulting Limited supports governments, utilities and public institutions in implementing integrated Enterprise Resource Planning solutions that drive digital transformation, improve operational efficiency and strengthen institutional performance. Our ERP solutions integrate billing, customer relationship management (CRM), procurement, asset management, accounting, human resource management and business intelligence into a single digital platform, enabling organizations to streamline operations, improve decision-making and enhance service delivery.",
    experience: [
      "Upgrade of Customer Information, Billing and Collection System – Lagos Water Corporation (Nigeria)",
      "Automated Procurement Management System – Lagos Water Corporation (Nigeria)",
      "Customer Billing, CRM and Cloud Infrastructure – Ogun State Water Corporation (Nigeria)",
      "Utility Digitization and Enterprise Systems Strengthening – Bor Water Supply System, South Sudan",
      "Information Management Systems and Billing Process Improvement – Mulonga Water and Sewerage Company (Zambia)",
    ],
  },
  {
    title: "Performance Improvement Programmes (PIP)",
    copy: "Performance Improvement Programmes are at the core of 2ML’s transformation approach. Developed from the internationally recognized 100-Day Performance Improvement Programme pioneered at Uganda’s National Water and Sewerage Corporation (NWSC), our methodology enables institutions to achieve rapid, measurable improvements in organizational performance through leadership, accountability, staff engagement and continuous performance management. Our PIPs have successfully transformed utilities across Africa by improving operational efficiency, strengthening customer service, increasing revenue collection and enhancing institutional performance.",
    experience: [
      "Lagos Water Corporation (Nigeria)",
      "Water and Sanitation Corporation (WASAC), Rwanda",
      "Guma Valley Water Company, Sierra Leone",
      "Taraba Water and Sewerage Corporation, Nigeria",
      "Water Corporation of Oyo State, Nigeria",
    ],
  },
  {
    title: "Policy, Regulation & Institutional Reform",
    copy: "2ML has become a trusted partner in supporting governments to develop policies, regulatory frameworks and institutional reforms that strengthen the water, sanitation and hygiene sector. Our experience includes policy reviews, legislative analysis, regulatory framework development, institutional assessments, stakeholder consultations, implementation planning and capacity building to support effective policy implementation.",
    experience: [
      "Development of Nigeria National WASH Policy",
      "Development of Regulatory Tools for Uganda’s Water Supply and Sanitation Subsector",
      "Establishment of a WASH Regulatory Framework – Ethiopia",
    ],
  },
  {
    title: "Utility Management & Commercialization",
    copy: "We support utilities to become financially sustainable, operationally efficient and customer-focused through integrated utility management solutions. Our expertise includes commercialization, strategic business planning, customer enumeration, billing and customer management systems, tariff studies, financial modelling, asset management, operations and maintenance, and organizational strengthening.",
    experience: [
      "Kaduna State Water Corporation (Nigeria)",
      "Ondo State Water Corporation (Nigeria)",
      "South Sudan Urban Water Utilities",
      "Eleven Town Water Utilities (Ethiopia)",
    ],
  },
  {
    title: "Strategic Business Planning & Institutional Strengthening",
    copy: "2ML works with governments and utilities to develop practical, results-oriented strategic and investment plans that align institutional priorities with long-term development objectives. Using participatory approaches, we facilitate organizational diagnostics, stakeholder engagement, strategy formulation, implementation planning and performance monitoring to ensure ownership and sustainability.",
    experience: [
      "Utility Business Planning – Ethiopia Town Water Utilities",
      "Institutional Strengthening Programmes across multiple African utilities",
    ],
  },
  {
    title: "Water Supply, Sanitation & Hygiene (WASH)",
    copy: "Our WASH experience covers the full spectrum of urban and rural water supply, sanitation and hygiene services. We provide advisory services that strengthen institutional performance, improve service delivery and support sustainable sector development. Our multidisciplinary team has extensive experience in sanitation planning, hygiene promotion, city-wide inclusive sanitation, utility strengthening, climate-resilient planning, financing strategies and institutional capacity development.",
    experience: [
      "Nigeria National WASH Policy",
      "South Sudan Urban Water Utilities",
      "Ethiopia Utility Strengthening Programme",
    ],
  },
  {
    title: "GIS, Surveys & Digital Solutions",
    copy: "2ML integrates modern technologies and digital tools into institutional strengthening programmes to improve planning, decision-making and operational performance. Our expertise includes Geographic Information Systems (GIS), customer enumeration, utility mapping, network surveys, spatial analysis, data management, digital information systems and decision-support tools that enhance operational efficiency.",
    experience: [
      "Customer Enumeration and GIS Mapping – Multiple Water Utilities",
      "Utility Network Mapping and Database Development",
      "Spatial Analysis for Utility Operations",
    ],
  },
  {
    title:
      "Financial Management, Commercial Operations & Non-Revenue Water Management",
    copy: "We assist utilities in strengthening financial sustainability through improved commercial systems, financial management and operational efficiency. Our services include financial modelling, tariff studies, revenue enhancement, billing systems, customer database development, asset management, non-revenue water reduction strategies, hydraulic analysis and operational optimization.",
    experience: [
      "Ondo State Water Corporation",
      "Eleven Town Water Utilities – Ethiopia",
      "Kaduna State Water Corporation",
    ],
  },
  {
    title: "Research, Monitoring, Evaluation & Capacity Development",
    copy: "Evidence-based decision-making is central to our approach. We conduct research, institutional assessments, monitoring and evaluation, impact assessments and capacity development programmes that enable clients to make informed decisions and sustain improvements beyond project completion. Our participatory training and mentoring programmes strengthen technical, managerial and leadership capacity at all levels of an organization, ensuring long-term institutional resilience and continuous improvement.",
    experience: [],
  },
];

export function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Our services & experience"
        title={
          <>
            Transformational solutions
            <br />
            <em className="font-serif font-medium text-[#8C1E2D]">
              for lasting impact.
            </em>
          </>
        }
        description="For over a decade, 2ML Consulting Limited has partnered with governments, development partners, utilities and private sector organizations to strengthen institutions, improve service delivery and drive sustainable transformation."
        picture={images.map}
      />
      <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
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
            const serviceImages = [
              images.hero,
              images.field,
              images.map,
              images.hero,
              images.community,
              images.hero,
              images.field,
              images.map,
              images.hero,
              images.community,
            ];
            const isEven = index % 2 === 0;
            return (
              <Reveal key={service.title} delay={index * 100}>
                <div className="grid gap-8 lg:grid-cols-[80px_1fr_1fr]">
                  <div className="relative flex items-start justify-center lg:items-center">
                    <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#8C1E2D] text-sm font-bold text-white transition-all duration-300 hover:scale-110 hover:bg-[#F5953B]">
                      {index + 1}
                    </div>
                    {index < services.length - 1 && (
                      <div className="absolute left-1/2 top-8 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#8C1E2D] to-[#F5953B]" />
                    )}
                  </div>
                  {isEven ? (
                    <>
                      <div className="space-y-4">
                        <h2 className="text-2xl font-semibold tracking-[-.05em] transition-colors duration-300 group-hover:text-[#8C1E2D] sm:text-3xl">
                          {service.title}
                        </h2>
                        <p className="leading-7 text-black/65">
                          {service.copy}
                        </p>
                        {service.experience.length > 0 && (
                          <div className="mt-6">
                            <p className="text-xs font-bold uppercase tracking-[.16em] text-[#8C1E2D]">
                              Representative experience
                            </p>
                            <ul className="mt-3 space-y-2">
                              {service.experience.map((item) => (
                                <li
                                  key={item}
                                  className="flex items-start gap-2 text-sm leading-6 text-black/65"
                                >
                                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F5953B]" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                      <div className="flex flex-col">
                        <img
                          src={serviceImages[index % serviceImages.length]}
                          alt={service.title}
                          className="h-full min-h-[250px] w-full rounded-2xl object-cover shadow-xl"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="lg:col-start-2 flex flex-col">
                        <img
                          src={serviceImages[index % serviceImages.length]}
                          alt={service.title}
                          className="h-full min-h-[250px] w-full rounded-2xl object-cover shadow-xl"
                        />
                      </div>
                      <div className="lg:col-start-3 space-y-4">
                        <h2 className="text-2xl font-semibold tracking-[-.05em] transition-colors duration-300 group-hover:text-[#8C1E2D] sm:text-3xl">
                          {service.title}
                        </h2>
                        <p className="leading-7 text-black/65">
                          {service.copy}
                        </p>
                        {service.experience.length > 0 && (
                          <div className="mt-6">
                            <p className="text-xs font-bold uppercase tracking-[.16em] text-[#8C1E2D]">
                              Representative experience
                            </p>
                            <ul className="mt-3 space-y-2">
                              {service.experience.map((item) => (
                                <li
                                  key={item}
                                  className="flex items-start gap-2 text-sm leading-6 text-black/65"
                                >
                                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F5953B]" />
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
          })}
        </div>
      </section>
      <ContactBand />
    </>
  );
}
