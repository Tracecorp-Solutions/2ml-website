import { portfolio, type Continent } from "./portfolio";

export interface ContinentSummary {
  name: Continent;
  countries: string[];
  projectCount: number;
}

export const continentSummaries: ContinentSummary[] = ([
  "Africa",
  "Asia",
  "Caribbean",
] as Continent[]).map((continent) => {
  const countries = Object.entries(portfolio)
    .filter(([, data]) => data.continent === continent)
    .map(([country]) => country);

  const projectCount = countries.reduce(
    (total, country) => total + portfolio[country].projects.length,
    0
  );

  return {
    name: continent,
    countries,
    projectCount,
  };
});

export const getCountriesByContinent = (continent: Continent) =>
  Object.entries(portfolio)
    .filter(([, data]) => data.continent === continent)
    .map(([country, data]) => ({
      country,
      ...data,
    }));