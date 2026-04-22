import { Link } from "react-router-dom";
import { project } from "@/data/project";
import logo from "@/assets/scanos-logo.png";

interface BrandProps {
  /** Render size of the logo + text. */
  size?: "sm" | "md" | "lg";
  /** When true, wraps the brand in a Link to "/". */
  asLink?: boolean;
  className?: string;
}

const sizeMap = {
  sm: { logo: "h-6 w-6", text: "text-base" },
  md: { logo: "h-8 w-8", text: "text-xl" },
  lg: { logo: "h-14 w-14 md:h-20 md:w-20", text: "text-5xl md:text-7xl" },
};

/**
 * Brand: the project logo immediately followed by the project name.
 * Reuse this anywhere the brand should appear (navbar, hero, footer).
 */
const Brand = ({ size = "md", asLink = false, className = "" }: BrandProps) => {
  const s = sizeMap[size];
  const content = (
    <span className={`inline-flex items-center gap-2 md:gap-3 ${className}`}>
      <img src={logo} alt="" aria-hidden="true" className={`${s.logo} object-contain`} />
      <span className={`font-heading font-bold tracking-tight ${s.text}`}>
        {project.projectName}
      </span>
    </span>
  );

  if (asLink) {
    return (
      <Link to="/" className="inline-flex items-center" aria-label={project.projectName}>
        {content}
      </Link>
    );
  }
  return content;
};

export default Brand;
