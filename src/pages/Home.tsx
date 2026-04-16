import SectionHeader from "@/components/SectionHeader";
import TeamMemberCard from "@/components/TeamMemberCard";
import FeatureCard from "@/components/FeatureCard";
import SprintCard from "@/components/SprintCard";
import { project, features } from "@/data/project";
import { teamMembers } from "@/data/team";
import { sprints, sprintIntro } from "@/data/sprints";
import commandCenterImg from "@/assets/command-center-mockup.png";

const Home = () => {
  return (
    <main>
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="container text-center">
          <h1 className="font-heading text-5xl font-bold tracking-tight md:text-7xl">
            {project.projectName}
          </h1>
          <p className="mt-3 font-heading text-xl text-muted-foreground md:text-2xl">
            {project.teamName}
          </p>
          <p className="mt-2 text-lg text-accent font-medium">{project.tagline}</p>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {project.heroDescription}
          </p>
        </div>
      </section>

      {/* Command Center Mockup */}
      <section className="pb-16">
        <div className="container">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-lg border shadow-lg">
            <img
              src={commandCenterImg}
              alt="InvenBo Cloud Command Center mockup showing live camera feed, robot control panel, detected objects, and telemetry data"
              className="w-full"
              loading="lazy"
            />
          </div>
          <p className="mt-3 text-center text-sm text-muted-foreground italic">
            Vision: The InvenBo Cloud Command Center
          </p>
        </div>
      </section>

      {/* Project / Goal / Aim — dark section */}
      <section className="bg-dark-surface py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="border-l-4 border-accent pl-6 mb-10">
              <h2 className="font-heading text-3xl font-bold text-dark-surface-foreground md:text-4xl">
                {project.goalTitle}
              </h2>
              <p className="mt-4 text-lg text-dark-surface-foreground/80 leading-relaxed">
                <strong>The Goal:</strong> {project.goalText}
              </p>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h3 className="font-heading text-2xl font-bold text-dark-surface-foreground">
                Aim
              </h3>
              <p className="mt-4 text-dark-surface-foreground/80 leading-relaxed">
                {project.aimText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-20">
        <div className="container">
          <SectionHeader title="Features" subtitle="Core capabilities of the InvenBo system" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="container">
          <SectionHeader title="Team Members" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Sprints */}
      <section className="py-16 md:py-20">
        <div className="container">
          <SectionHeader title="Sprints" />
          <div className="mx-auto max-w-3xl mb-10">
            <div className="rounded-lg bg-secondary p-6 text-sm text-foreground leading-relaxed whitespace-pre-line">
              {sprintIntro}
            </div>
          </div>
          <div className="mx-auto max-w-3xl space-y-4">
            {sprints.map((sprint) => (
              <SprintCard key={sprint.number} sprint={sprint} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
