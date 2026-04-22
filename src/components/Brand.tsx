import { Link } from "react-router-dom";
import { project } from "@/data/project";

interface BrandProps {
  /** Render size of the logo + text. */
  size?: "sm" | "md" | "lg";
  /** When true, wraps the brand in a Link to "/". */
  asLink?: boolean;
  className?: string;
}

const sizeMap = {
  sm: { logo: "h-6 w-6", text: "text-base", stroke: 6 },
  md: { logo: "h-8 w-8", text: "text-xl", stroke: 6 },
  lg: { logo: "h-14 w-14 md:h-20 md:w-20", text: "text-5xl md:text-7xl", stroke: 5 },
};

/**
 * Inline SVG of the Scanos "S" monogram — two parallel rounded strokes.
 * Inline so it inherits currentColor (theme-aware) and has a truly
 * transparent background. Edit the paths here to refine the mark.
 */
const ScanosMark = ({ className, strokeWidth = 6 }: { className?: string; strokeWidth?: number }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {/* Outer S */}
    <path d="M78 28 C78 18, 68 14, 55 14 C40 14, 28 22, 28 34 C28 46, 40 50, 55 50 C70 50, 82 54, 82 66 C82 78, 70 86, 55 86 C42 86, 32 82, 32 72" />
    {/* Inner S (parallel stroke) */}
    <path d="M70 30 C70 24, 64 22, 55 22 C44 22, 36 27, 36 34 C36 41, 44 44, 55 44 C72 44, 90 50, 90 66 C90 84, 72 94, 55 94" opacity="0.55" />
  </svg>
);

/**
 * Brand: the project logo immediately followed by the project name.
 * Reuse this anywhere the brand should appear (navbar, hero, footer).
 */
const Brand = ({ size = "md", asLink = false, className = "" }: BrandProps) => {
  const s = sizeMap[size];
  const content = (
    <span className={`inline-flex items-center gap-2 md:gap-3 ${className}`}>
      <ScanosMark className={`${s.logo} text-foreground`} strokeWidth={s.stroke} />
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
