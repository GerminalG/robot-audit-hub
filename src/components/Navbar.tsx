import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Brand from "./Brand";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "@/i18n/LanguageContext";

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useTranslation();

  const navLinks = [
    { label: t.nav.home, path: "/" },
    { label: t.nav.contact, path: "/contact" },
    { label: t.nav.zoom, path: "/zoom" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Brand asLink size="md" />

        {/* Desktop nav */}
        <div className="hidden md:flex md:items-center md:gap-8">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    location.pathname === link.path ? "text-accent" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <LanguageSwitcher />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <button
            className="p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={t.nav.toggleMenu}
            aria-expanded={mobileOpen}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border md:hidden">
          <ul className="container flex flex-col gap-4 py-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`block text-sm font-medium ${
                    location.pathname === link.path ? "text-accent" : "text-muted-foreground"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
