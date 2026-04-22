import SectionHeader from "@/components/SectionHeader";
import { project } from "@/data/project";
import { useTranslation } from "@/i18n/LanguageContext";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <main className="py-16 md:py-20">
      <div className="container">
        <SectionHeader title={t.contact.title} subtitle={t.contact.subtitle} />

        <div className="mx-auto max-w-lg">
          <div className="rounded-lg border border-border bg-card p-8 text-center shadow-sm">
            <h3 className="font-heading text-xl font-semibold text-card-foreground">
              {t.contact.cardTitle}
            </h3>
            <p className="mt-4 text-muted-foreground">{t.contact.cardBody}</p>
            <a
              href={`mailto:${project.contactEmail}`}
              className="mt-6 inline-block rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              {project.contactEmail}
            </a>
          </div>

          <div className="mt-8 rounded-lg border border-dashed border-border bg-muted p-6 text-center">
            <p className="text-sm italic text-muted-foreground">{t.contact.formPlaceholder}</p>
          </div>

          <div className="mt-6 rounded-lg border border-dashed border-border bg-muted p-6 text-center">
            <p className="text-sm italic text-muted-foreground">{t.contact.socialPlaceholder}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
