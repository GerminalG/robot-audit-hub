import { Link } from "react-router-dom";
import { project } from "@/data/project";

const Footer = () => {
  return (
    <footer className="border-t bg-primary text-primary-foreground">
      <div className="container py-10">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <p className="font-heading text-lg font-bold">{project.teamName}</p>
            <p className="text-sm opacity-80">{project.projectName}</p>
            <p className="text-sm opacity-60">© {project.year}</p>
          </div>

          <nav>
            <ul className="flex gap-6 text-sm">
              <li>
                <Link to="/" className="opacity-80 hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/contact" className="opacity-80 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/zoom" className="opacity-80 hover:opacity-100 transition-opacity">
                  Zoom
                </Link>
              </li>
            </ul>
          </nav>

          <div className="text-center md:text-right">
            <a
              href={`mailto:${project.contactEmail}`}
              className="text-sm opacity-80 hover:opacity-100 transition-opacity"
            >
              {project.contactEmail}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
