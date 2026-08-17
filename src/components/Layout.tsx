import { useState, type ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { navigation } from "../data/site";
import {
  TwitterIcon,
  FacebookIcon,
  LinkedinIcon,
} from "../components/SocialIcons";
import "./Layout.css";

function Logo() {
  return (
    <Link to="/" className="block shrink-0" aria-label="2ML Consulting home">
      <img
        className="h-10 w-auto sm:h-12"
        src={logo}
        alt="2ML Consulting — Management and Leadership Advisory"
      />
    </Link>
  );
}

function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="mx-auto grid max-w-[95%] gap-12 px-5 py-8 sm:px-8 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="text-2xl font-extrabold tracking-[-.07em]">
            2ML <span className="font-medium">CONSULTING</span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-6 text-white/65">
            Trusted thinking and practical delivery for organisations building a
            stronger future.
          </p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[.16em] text-[#F5953B]">
            Explore
          </p>
          <div className="mt-5 grid gap-3 text-sm text-white/75">
            {navigation.slice(0, 4).map((link) => (
              <Link key={link.to} className="hover:text-white" to={link.to}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[.16em] text-[#F5953B]">
            Get in touch
          </p>
          <a
            className="mt-5 block text-sm text-white/75 hover:text-white"
            href="mailto:info@2mlconsulting.com"
          >
            info@2mlconsulting.com
          </a>
          <a
            className="mt-2 block text-sm text-white/75 hover:text-white"
            href="/src/assets/2ML-Consulting-Limited-Updated-Profile.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Company Profile
          </a>
          <div className="mt-4 flex gap-3">
            <a
              className="text-white/75 hover:text-white transition-colors"
              href="https://twitter.com/2MLConsult"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <TwitterIcon className="h-5 w-5" color="#F5953B" />
            </a>
            <a
              className="text-white/75 hover:text-white transition-colors"
              href="https://facebook.com/2MLConsult"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FacebookIcon className="h-5 w-5" color="#F5953B" />
            </a>
            <a
              className="text-white/75 hover:text-white transition-colors"
              href="https://www.linkedin.com/company/2ml-consulting-limited"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-5 w-5" color="#F5953B" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/15 px-5 py-5 text-xs text-white/45 sm:px-8 lg:px-12 flex items-center justify-between">
        <div>
          © {new Date().getFullYear()} 2ML Consulting Limited. All rights
          reserved.
        </div>
        Designed By TraceCorp Solutions Limited
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-[#111111]">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="mx-auto flex py-2 max-w-full items-center justify-between px-5 sm:px-8 lg:px-12">
          <Logo />
          <nav
            className="nav-desktop items-center gap-8 flex-1 ml-12"
            aria-label="Main navigation"
          >
            {navigation.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-md font-medium transition-colors duration-200 ${isActive ? "text-[#8C1E2D] border-b-2 border-[#8C1E2D] pb-1" : "text-[#111111] hover:text-[#8C1E2D]"}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
        {open && (
          <nav
            className="nav-mobile open border-t border-black/8 bg-white px-5 py-4 shadow-md"
            aria-label="Mobile navigation"
          >
            <div className="mx-auto grid max-w-[95%] gap-1">
              {navigation.map((link) => (
                <NavLink
                  onClick={() => setOpen(false)}
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-3 text-base font-medium transition-colors duration-200 ${isActive ? "bg-[#8C1E2D] text-white" : "text-[#111111] hover:bg-black/5"}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </nav>
        )}
      </header>
      <div className="">{children}</div>
      <Footer />
    </div>
  );
}
