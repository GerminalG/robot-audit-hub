import SectionHeader from "@/components/SectionHeader";
import { project } from "@/data/project";

const Zoom = () => {
  return (
    <main className="py-16 md:py-20">
      <div className="container">
        <SectionHeader title="Zoom" />

        <div className="mx-auto max-w-lg text-center">
          {project.zoomLink ? (
            // When a Zoom link is available, show it as a button
            <a
              href={project.zoomLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-md bg-primary px-8 py-4 text-lg font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Join Zoom Meeting
            </a>
          ) : (
            // Placeholder until the link is added
            <div className="rounded-lg border border-dashed bg-muted p-10">
              <p className="text-lg text-muted-foreground">
                The Zoom link for {project.teamName} / {project.projectName} will
                be added here later.
              </p>
              <p className="mt-4 text-sm text-muted-foreground italic">
                {/* TODO: Set the zoomLink in src/data/project.ts when available */}
                Update <code className="bg-background px-1 py-0.5 rounded text-xs">src/data/project.ts</code> to add the Zoom URL.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Zoom;
