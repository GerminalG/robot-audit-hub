import SectionHeader from "@/components/SectionHeader";
import TeamMemberCard from "@/components/TeamMemberCard";
import FeatureCard from "@/components/FeatureCard";
import SprintCard from "@/components/SprintCard";
import Brand from "@/components/Brand";
import { project, features } from "@/data/project";
import { teamMembers } from "@/data/team";
import { sprints } from "@/data/sprints";
import { useTranslation } from "@/i18n/LanguageContext";
import commandCenterImg from "@/assets/command-center-mockup.png";

const Home = () => {
  const { t } = useTranslation();

  return (
    <main>
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="container text-center">
          <h1 className="flex items-center justify-center tracking-tight">
            <Brand size="lg" />
          </h1>
          <p className="mt-3 font-heading text-xl text-muted-foreground md:text-2xl">
            {project.teamName}
          </p>
          <p className="mt-2 text-lg font-medium text-accent">{project.tagline}</p>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {t.hero.description}
          </p>
        </div>
      </section>

      {/* Command Center Mockup */}
      <section className="pb-16">
        <div className="container">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-lg border border-border shadow-lg">
            <img
              src={commandCenterImg}
              alt={t.mockupCaption}
              className="w-full"
              loading="lazy"
            />
          </div>
          <p className="mt-3 text-center text-sm italic text-muted-foreground">
            {t.mockupCaption}
          </p>
        </div>
      </section>

      {/* Project / Goal / Aim — emphasis section */}
      <section className="bg-dark-surface py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 border-l-4 border-accent pl-6">
              <h2 className="font-heading text-3xl font-bold text-dark-surface-foreground md:text-4xl">
                {t.goal.title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-dark-surface-foreground/80">
                <strong>{t.goal.goalLabel}:</strong> {t.goal.goalText}
              </p>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h3 className="font-heading text-2xl font-bold text-dark-surface-foreground">
                {t.goal.aimTitle}
              </h3>
              <p className="mt-4 leading-relaxed text-dark-surface-foreground/80">
                {t.goal.aimText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-20">
        <div className="container">
          <SectionHeader title={t.features.title} subtitle={t.features.subtitle} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const copy = t.features.items[feature.id];
              return (
                <FeatureCard
                  key={feature.id}
                  icon={feature.icon}
                  title={copy.title}
                  description={copy.description}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="container">
          <SectionHeader title={t.team.title} />
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
          <SectionHeader title={t.sprints.title} />
          <div className="mx-auto mb-10 max-w-3xl">
            <div className="whitespace-pre-line rounded-lg bg-secondary p-6 text-sm leading-relaxed text-foreground">
              {t.sprints.intro}
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
