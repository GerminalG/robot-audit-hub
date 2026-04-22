import { Link } from "react-router-dom";
import { project } from "@/data/project";
import { useTranslation } from "@/i18n/LanguageContext";
import Brand from "./Brand";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border bg-card text-card-foreground">
      <div className="container py-10">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex flex-col items-center gap-1 md:items-start">
            <Brand size="sm" />
            <p className="text-sm text-muted-foreground">{project.teamName}</p>
            <p className="text-xs text-muted-foreground">
              © {project.year} · {t.footer.rights}
            </p>
          </div>

          <nav>
            <ul className="flex gap-6 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-accent transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-accent transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
              <li>
                <Link to="/zoom" className="text-muted-foreground hover:text-accent transition-colors">
                  {t.nav.zoom}
                </Link>
              </li>
            </ul>
          </nav>

          <a
            href={`mailto:${project.contactEmail}`}
            className="text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            {project.contactEmail}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
