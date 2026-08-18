import { Eyebrow } from "../components/Shared";
import { Reveal } from "../components/Motion";
import { Partners } from "../components/Partners";
import { ContactForm } from "../components/ContactForm";
import { Mail, MapPin, FileText } from "lucide-react";
import {
  TwitterIcon,
  FacebookIcon,
  LinkedinIcon,
} from "../components/SocialIcons";
import { profilePDF } from "../data/site";

export function ContactPage() {
  return (
    <>
      <section className="mx-auto grid max-w-[95%] gap-14 mt-16 px-5 py-10 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:px-12">
        <Reveal>
          <Eyebrow>Our offices</Eyebrow>
          <h2 className="mt-6 text-4xl font-semibold leading-[.98] tracking-[-.06em]">
            We’re ready to listen.
          </h2>
          <div className="mt-10 space-y-8 text-lg text-black/65">
            {/* Uganda Office */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#8C1E2D]">
                Uganda Office
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-4">
                  <Mail className="mt-1 h-6 w-6 text-[#F5953B]" />
                  <a
                    className="hover:text-[#8C1E2D]"
                    href="mailto:info@2mlconsulting.com"
                  >
                    info@2mlconsulting.com
                  </a>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-6 w-6 text-[#F5953B]" />
                  <p>
                    Padre Pio House, Level 5<br />
                    Plot 32 Lumumba Avenue
                    <br />
                    P.O. Box 31456
                    <br />
                    Kampala, Uganda
                  </p>
                </div>
                <div className="mt-4 rounded-xl overflow-hidden border border-black/10">
                  <iframe
                    src="https://maps.google.com/maps?q=Padre+Pio+House,+Lumumba+Avenue,+Kampala,+Uganda&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Nigeria Office */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#8C1E2D]">
                Nigeria Office
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-4">
                  <Mail className="mt-1 h-6 w-6 text-[#F5953B]" />
                  <a
                    className="hover:text-[#8C1E2D]"
                    href="mailto:info@2mlconsulting.com"
                  >
                    info@2mlconsulting.com
                  </a>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-6 w-6 text-[#F5953B]" />
                  <p>Abuja, Nigeria</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                className="flex items-center gap-2 rounded-lg border border-black/10 px-4 py-2 transition-all duration-300 hover:border-[#8C1E2D] hover:bg-[#8C1E2D]/5"
                href="https://twitter.com/2MLConsult"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon className="h-5 w-5" color="#F5953B" />
                <span className="text-base">Twitter</span>
              </a>
              <a
                className="flex items-center gap-2 rounded-lg border border-black/10 px-4 py-2 transition-all duration-300 hover:border-[#8C1E2D] hover:bg-[#8C1E2D]/5"
                href="https://facebook.com/2MLConsult"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon className="h-5 w-5" color="#F5953B" />
                <span className="text-base">Facebook</span>
              </a>
              <a
                className="flex items-center gap-2 rounded-lg border border-black/10 px-4 py-2 transition-all duration-300 hover:border-[#8C1E2D] hover:bg-[#8C1E2D]/5"
                href="https://www.linkedin.com/company/2ml-consulting-limited"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon className="h-5 w-5" color="#F5953B" />
                <span className="text-base">LinkedIn</span>
              </a>
            </div>
            <a
              className="inline-flex items-center gap-2 mt-4 rounded-full bg-[#8C1E2D] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#6f1724] hover:shadow-lg"
              href={profilePDF}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText className="h-5 w-5" />
              Download Company Profile
            </a>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <ContactForm />
        </Reveal>
      </section>
      <Partners title="Our trusted partners" />
    </>
  );
}
