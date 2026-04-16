import SocialLinks from "./SocialLinks";
import type { TeamMember } from "@/data/team";

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard = ({ member }: TeamMemberCardProps) => {
  return (
    <div className="flex flex-col items-center rounded-lg border bg-card p-6 text-center shadow-sm">
      {/* Profile placeholder */}
      <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-secondary text-2xl font-bold text-secondary-foreground">
        {member.name
          .split(" ")
          .map((n) => n[0])
          .slice(0, 2)
          .join("")}
      </div>

      <h3 className="font-heading text-lg font-semibold text-card-foreground">
        {member.name}
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>

      <div className="mt-4">
        <SocialLinks linkedin={member.linkedin} github={member.github} />
      </div>
    </div>
  );
};

export default TeamMemberCard;
