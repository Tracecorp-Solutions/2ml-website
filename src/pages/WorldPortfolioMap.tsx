import { useEffect, useMemo, useRef, useState } from "react";
import * as d3 from "d3";
import { feature } from "topojson-client";
import worldAtlasUrl from "world-atlas/countries-110m.json?url";
import { portfolio, type Continent } from "../data/portfolio";
import { continentSummaries } from "../data/portfolioHelpers";

const countryCoordinates: Record<string, [number, number]> = {
  Nigeria: [8.6753, 9.082],
  "South Sudan": [31.307, 6.877],
  "Sierra Leone": [-11.779889, 8.460555],
  Ethiopia: [40.4897, 9.145],
  Uganda: [32.2903, 1.3733],
  Rwanda: [29.8739, -1.9403],
  Ghana: [-1.0232, 7.9465],
  Zambia: [27.8493, -13.1339],
  Kenya: [37.9062, -0.0236],
  Malawi: [34.3015, -13.2543],
  Bangladesh: [90.3563, 23.685],
  Jordan: [36.2384, 30.5852],
  India: [78.9629, 20.5937],
  Pakistan: [69.3451, 30.3753],
  "Trinidad & Tobago": [-61.2225, 10.6918],
};

const continentColors: Record<Continent, string> = {
  Africa: "#8C1E2D",
  Asia: "#F5953B",
  Caribbean: "#8C1E2D",
};

export default function ProjectPortfolioMap() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [world, setWorld] = useState<any>(null);
  const [dims, setDims] = useState({ width: 0, height: 0 });
  const [selectedContinent, setSelectedContinent] = useState<"All" | Continent>(
    "All",
  );
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const countries = useMemo(
    () =>
      Object.entries(portfolio).map(([country, data]) => ({
        country,
        data,
        count: data.projects.length,
        coordinates: countryCoordinates[country] || [0, 0],
      })),
    [],
  );

  useEffect(() => {
    fetch(worldAtlasUrl)
      .then((res) => res.json())
      .then(setWorld);
  }, []);

  useEffect(() => {
    const update = () => {
      if (wrapperRef.current) {
        setDims({
          width: wrapperRef.current.clientWidth,
          height: wrapperRef.current.clientHeight,
        });
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const { landPath, markerPositions } = useMemo(() => {
    if (!world || dims.width === 0 || dims.height === 0)
      return { landPath: "", markerPositions: [] };

    const active =
      selectedContinent === "All"
        ? countries
        : countries.filter((c) => c.data.continent === selectedContinent);

    const projection = d3.geoNaturalEarth1();

    if (active.length === 1) {
      projection
        .scale(600)
        .center(active[0].coordinates)
        .translate([dims.width / 2, dims.height / 2]);
    } else {
      const fit = {
        type: "FeatureCollection" as const,
        features: active.map((c) => ({
          type: "Feature" as const,
          properties: {},
          geometry: {
            type: "Point" as const,
            coordinates: c.coordinates,
          },
        })),
      };
      projection.fitSize([dims.width, dims.height], fit as any);
    }

    const path = d3.geoPath(projection);
    const land = feature(world, world.objects.countries);
    const landPath = path(land) || "";
    const markerPositions = active.map((c) => {
      const [x, y] = projection(c.coordinates) || [0, 0];
      return { ...c, x, y };
    });

    return { landPath, markerPositions };
  }, [world, dims, countries, selectedContinent]);

  const selectedData = selectedCountry ? portfolio[selectedCountry] : null;

  return (
    <section className="w-full bg-[#f8e6d1] py-6">
      <div className="px-6">
        <div className="mb-8 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#F5953B]">
            Our Global Footprint
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[#8C1E2D] md:text-4xl">
            Projects & Impact Across the Globe
          </h2>
          <p className="text-sm leading-7 text-gray-700 md:text-base">
            Select a continent to zoom into a region and click a marker to see
            the projects.
          </p>
        </div>

        <div className="mb-4 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <label className="flex items-center gap-3">
            <span className="text-sm font-semibold text-gray-800">
              Filter by continent:
            </span>
            <select
              value={selectedContinent}
              onChange={(e) => {
                setSelectedContinent(e.target.value as "All" | Continent);
                setSelectedCountry(null);
              }}
              className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-800 focus:border-[#8C1E2D] focus:outline-none"
            >
              <option value="All">All continents</option>
              <option value="Africa">Africa</option>
              <option value="Asia">Asia</option>
              <option value="Caribbean">Caribbean</option>
            </select>
          </label>

          <div className="flex flex-wrap gap-6 text-sm font-medium">
            {continentSummaries.map((cs) => (
              <div key={cs.name} className="flex items-center gap-2">
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: continentColors[cs.name] }}
                />
                <span className="text-gray-700">
                  {cs.name}: {cs.projectCount} projects
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={wrapperRef}
          className="relative overflow-hidden rounded-2xl bg-white shadow-lg"
          style={{ height: 480 }}
        >
          {dims.width === 0 && (
            <div className="p-8 text-center text-gray-500">Loading map...</div>
          )}
          {dims.width > 0 && (
            <svg width={dims.width} height={dims.height}>
              <path
                d={landPath}
                fill="#E5E7EB"
                stroke="#9CA3AF"
                strokeWidth={0.5}
              />
              {markerPositions.map((m) => (
                <g
                  key={m.country}
                  transform={`translate(${m.x},${m.y})`}
                  onClick={() => setSelectedCountry(m.country)}
                  className="cursor-pointer"
                >
                  <circle
                    r={6 + Math.min(m.count * 2, 12)}
                    fill={continentColors[m.data.continent]}
                    stroke="white"
                    strokeWidth={1.5}
                    onMouseEnter={() => setHoveredCountry(m.country)}
                    onMouseLeave={() => setHoveredCountry(null)}
                  />
                  <text
                    textAnchor="middle"
                    dy="-12"
                    className="text-xs font-semibold"
                    fill={continentColors[m.data.continent]}
                    style={{
                      display: hoveredCountry === m.country ? "block" : "none",
                    }}
                  >
                    {m.country}
                  </text>
                </g>
              ))}
            </svg>
          )}
          {hoveredCountry && (
            <div className="pointer-events-none absolute bottom-4 left-4 max-h-56 w-64 overflow-y-auto rounded-lg bg-white px-4 py-3 shadow-md">
              <p className="text-sm font-semibold text-gray-900">
                {hoveredCountry}
              </p>
              <ul className="mt-2 space-y-1">
                {portfolio[hoveredCountry]?.projects.map((project) => (
                  <li
                    key={project.title}
                    className="text-xs leading-relaxed text-gray-600"
                  >
                    • {project.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {selectedData && (
          <div className="mt-8 rounded-2xl bg-white p-6 shadow-lg">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-[#8C1E2D]">
                {selectedCountry}
              </h3>
              <button
                onClick={() => setSelectedCountry(null)}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-[#8C1E2D] hover:text-[#8C1E2D]"
              >
                Close
              </button>
            </div>
            {selectedData.introduction && (
              <p className="mb-6 text-sm leading-7 text-gray-600">
                {selectedData.introduction}
              </p>
            )}
            <div className="grid gap-6 lg:grid-cols-2">
              {selectedData.projects.map((project) => (
                <article
                  key={project.title}
                  className="rounded-xl border border-gray-200 p-5 transition hover:border-[#F5953B] hover:shadow-lg"
                >
                  <span className="inline-flex rounded-full bg-[#8C1E2D]/10 px-3 py-1 text-xs font-semibold text-[#8C1E2D]">
                    {project.service}
                  </span>
                  <h4 className="mt-4 text-lg font-bold leading-7 text-gray-900">
                    {project.title}
                  </h4>
                  {project.client && (
                    <p className="mt-2 text-sm text-gray-600">
                      <span className="font-semibold text-gray-800">
                        Client:
                      </span>{" "}
                      {project.client}
                    </p>
                  )}
                  {project.funding && (
                    <p className="mt-1 text-sm text-gray-600">
                      <span className="font-semibold text-gray-800">
                        Funding:
                      </span>{" "}
                      {project.funding}
                    </p>
                  )}
                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {project.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
