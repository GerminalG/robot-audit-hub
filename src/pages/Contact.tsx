import SectionHeader from "@/components/SectionHeader";
import { project } from "@/data/project";

const Contact = () => {
  return (
    <main className="py-16 md:py-20">
      <div className="container">
        <SectionHeader
          title="Contact Us"
          subtitle="Have questions about InvenBo? We'd love to hear from you."
        />

        <div className="mx-auto max-w-lg">
          {/* Contact card */}
          <div className="rounded-lg border bg-card p-8 shadow-sm text-center">
            <h3 className="font-heading text-xl font-semibold text-card-foreground">
              Get in Touch
            </h3>
            <p className="mt-4 text-muted-foreground">
              Reach out to us via email for project inquiries, collaboration, or feedback.
            </p>
            <a
              href={`mailto:${project.contactEmail}`}
              className="mt-6 inline-block rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              {project.contactEmail}
            </a>
          </div>

          {/* Placeholder for future contact form */}
          <div className="mt-8 rounded-lg border border-dashed bg-muted p-6 text-center">
            <p className="text-sm text-muted-foreground italic">
              A contact form may be added here in the future.
            </p>
          </div>

          {/* Placeholder for additional social/contact details */}
          <div className="mt-6 rounded-lg border border-dashed bg-muted p-6 text-center">
            <p className="text-sm text-muted-foreground italic">
              Additional social and contact details will be added here.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
