import SectionHeader from "@/components/SectionHeader";
import { project } from "@/data/project";
import { useTranslation } from "@/i18n/LanguageContext";

const Zoom = () => {
  const { t } = useTranslation();

  return (
    <main className="py-16 md:py-20">
      <div className="container">
        <SectionHeader title={t.zoom.title} />

        <div className="mx-auto max-w-lg text-center">
          {project.zoomLink ? (
            <a
              href={project.zoomLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-md bg-primary px-8 py-4 text-lg font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              {t.zoom.join}
            </a>
          ) : (
            <div className="rounded-lg border border-dashed border-border bg-muted p-10">
              <p className="text-lg text-muted-foreground">{t.zoom.placeholder}</p>
              <p className="mt-4 text-sm italic text-muted-foreground">
                {/* TODO: Set the zoomLink in src/data/project.ts when available */}
                {t.zoom.editHint}
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Zoom;
