import { useTranslation } from "@/i18n/LanguageContext";
import { LANGUAGES, LanguageCode } from "@/i18n/translations";

/**
 * LanguageSwitcher: simple <select>-based language picker.
 * Designed to be placed in the navbar. Uses native select for accessibility
 * and zero extra dependencies.
 */
const LanguageSwitcher = () => {
  const { language, setLanguage } = useTranslation();

  return (
    <label className="relative inline-flex items-center">
      <span className="sr-only">Language</span>
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as LanguageCode)}
        className="appearance-none rounded-md border border-border bg-card px-3 py-1.5 pr-8 text-sm font-medium text-foreground hover:border-accent focus:border-accent focus:outline-none focus:ring-2 focus:ring-ring transition-colors cursor-pointer"
      >
        {LANGUAGES.map((lang) => (
          <option key={lang.code} value={lang.code} className="bg-card text-foreground">
            {lang.short} · {lang.label}
          </option>
        ))}
      </select>
      <svg
        className="pointer-events-none absolute right-2 h-4 w-4 text-muted-foreground"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </label>
  );
};

export default LanguageSwitcher;
