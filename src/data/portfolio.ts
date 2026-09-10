export interface Project {
  title: string;
  service: string;
  client?: string;
  funding?: string;
  description: string;
}

export interface CountryPortfolio {
  continent: Continent;
  introduction: string;
  projects: Project[];
}

export type Continent = "Africa" | "Asia" | "Caribbean";

export const portfolio: Record<string, CountryPortfolio> = {
  Nigeria: {
    continent: "Africa",
    introduction:
      "Nigeria represents one of 2ML Consulting's largest portfolios, with projects ranging from national policy development to institutional strengthening, utility transformation and organizational change management.",
    projects: [
      {
        title: "Updating the National WASH Policy (Ongoing)",
        service: "Policy & regulation",
        client:
          "Federal Ministry responsible for Water Resources and Sanitation",
        description:
          "2ML is leading the development of Nigeria's updated National WASH Policy, providing technical leadership for nationwide stakeholder consultations, institutional assessments, policy reviews and implementation planning.",
      },
      {
        title:
          "Organizational and Institutional Technical Assistance for Ondo State Water Corporation",
        service: "Institutional transformation",
        client: "Ondo State Water Corporation (ODWC)",
        funding: "Agence Française de Développement (AFD)",
        description:
          "2ML provided comprehensive institutional and organizational support aimed at improving operational efficiency and long-term sustainability.",
      },
      {
        title:
          "Management, Commercialization and Institutional Support to Kaduna State Water Corporation",
        service: "Utility management",
        description:
          "2ML supported Kaduna State Water Corporation through institutional strengthening and commercialization initiatives designed to improve operational performance, customer service, financial sustainability and organizational efficiency.",
      },
      {
        title:
          "Performance Improvement Programme – Taraba Water and Sewerage Corporation (TAWASCO)",
        service: "Performance improvement",
        description:
          "2ML implemented its flagship Performance Improvement Programme to strengthen management systems, improve operational performance and enhance service delivery.",
      },
      {
        title:
          "Performance Improvement Programme – Water Corporation of Oyo State (WCOS)",
        service: "Performance improvement",
        description:
          "2ML supported the utility through organizational transformation, leadership development and performance improvement initiatives focused on strengthening governance, operational efficiency and customer service delivery.",
      },
      {
        title:
          "Performance Improvement Programme – Lagos Water Corporation",
        service: "Performance improvement",
        description:
          "2ML implemented institutional reforms and Performance Improvement Programmes that contributed to improved operational sustainability and service delivery.",
      },
    ],
  },

  "South Sudan": {
    continent: "Africa",
    introduction:
      "2ML has supported South Sudan's water sector through institutional strengthening and utility management programmes aimed at improving service delivery and organizational capacity.",
    projects: [
      {
        title: "System Strengthening Services for Urban Water Utilities",
        service: "Institutional transformation",
        client: "UNICEF South Sudan",
        description:
          "2ML is providing technical assistance to strengthen governance, management systems, financial performance, commercial operations and institutional capacity for urban water utilities across South Sudan.",
      },
    ],
  },

  "Sierra Leone": {
    continent: "Africa",
    introduction:
      "2ML has been a long-standing partner in strengthening Sierra Leone's water sector through utility transformation.",
    projects: [
      {
        title:
          "Performance Improvement Programme – Guma Valley Water Company",
        service: "Performance improvement",
        description:
          "2ML designed and implemented a Performance Improvement Programme that transformed utility operations, significantly improved operational efficiency and substantially increased revenue collection.",
      },
    ],
  },

  Ethiopia: {
    continent: "Africa",
    introduction:
      "Ethiopia represents one of 2ML's most extensive institutional strengthening portfolios, delivered in partnership with UNICEF and national stakeholders.",
    projects: [
      {
        title: "Long-Term System Strengthening for Eleven Town Water Utilities",
        service: "Institutional transformation",
        client: "UNICEF Ethiopia",
        description:
          "2ML provided institutional strengthening services to eleven town water utilities, including diagnostic assessments, business planning, financial management, human resource development, non-revenue water reduction, asset management and operational improvement.",
      },
      {
        title: "Establishment of a WASH Regulatory Framework",
        service: "Policy & regulation",
        client: "UNICEF Ethiopia",
        description:
          "2ML supported the Government of Ethiopia in assessing existing regulatory arrangements and developing recommendations for establishing a national WASH regulatory body.",
      },
      {
        title: "Exposure Visits for WASH Regulation",
        service: "Policy & regulation",
        client: "UNICEF Ethiopia",
        description:
          "2ML facilitated international exposure visits to Kenya and Zambia for Ethiopian stakeholders to support learning and knowledge exchange.",
      },
    ],
  },

  Uganda: {
    continent: "Africa",
    introduction:
      "As its home country, Uganda remains central to 2ML's work in institutional development, regulation and utility reform.",
    projects: [
      {
        title:
          "Review and Development of Water Supply and Sanitation Regulatory Tools",
        service: "Policy & regulation",
        client: "Ministry of Water and Environment",
        description:
          "2ML reviewed Uganda's existing regulatory framework and developed updated regulatory tools, implementation guidelines and monitoring frameworks.",
      },
    ],
  },

  Rwanda: {
    continent: "Africa",
    introduction: "",
    projects: [
      {
        title:
          "Performance Improvement Programme – Water and Sanitation Corporation (WASAC)",
        service: "Performance improvement",
        description:
          "2ML partnered with WASAC to implement its Performance Improvement Programme, supporting organizational transformation, operational efficiency and revenue improvement.",
      },
    ],
  },

  Ghana: {
    continent: "Africa",
    introduction: "",
    projects: [
      {
        title: "Institutional Development and Utility Transformation",
        service: "Institutional transformation",
        description:
          "2ML has provided institutional development and utility transformation support to Ghana Water Company Limited.",
      },
    ],
  },

  Zambia: {
    continent: "Africa",
    introduction: "",
    projects: [
      {
        title: "Utility Management and Institutional Support",
        service: "Utility management",
        description:
          "2ML has worked with Mulonga Water and Sewerage Company and supported sector institutions through utility management, institutional strengthening and knowledge exchange initiatives.",
      },
    ],
  },

  Kenya: {
    continent: "Africa",
    introduction: "",
    projects: [
      {
        title: "Utility Transformation and Regional Knowledge Exchange",
        service: "Institutional transformation",
        description:
          "2ML has supported regional institutional strengthening initiatives involving Kenyan water utilities and facilitated technical knowledge exchange programmes.",
      },
    ],
  },

  Malawi: {
    continent: "Africa",
    introduction: "",
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

  Bangladesh: {
    continent: "Asia",
    introduction: "",
    projects: [
      {
        title: "Utility Capacity Building and Technical Advisory",
        service: "Capacity development",
        description:
          "2ML has provided institutional strengthening and technical advisory support to water utilities in Bangladesh.",
      },
    ],
  },

  Jordan: {
    continent: "Asia",
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
    continent: "Asia",
    introduction: "",
    projects: [
      {
        title:
          "Institutional Development and Utility Performance Improvement",
        service: "Performance improvement",
        description:
          "2ML has collaborated with water sector institutions in India to support institutional strengthening and organizational performance improvement.",
      },
    ],
  },

  Pakistan: {
    continent: "Asia",
    introduction: "",
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
    continent: "Caribbean",
    introduction: "",
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