import { useState } from "react";
import type { Sprint } from "@/data/sprints";

interface SprintCardProps {
  sprint: Sprint;
}

const SprintCard = ({ sprint }: SprintCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-lg border bg-card shadow-sm">
      <button
        className="flex w-full items-center justify-between p-6 text-left"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        <div>
          <h3 className="font-heading text-xl font-semibold text-card-foreground">
            {sprint.title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Duration: {sprint.duration}
          </p>
        </div>
        <svg
          className={`h-5 w-5 text-muted-foreground transition-transform ${
            expanded ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {expanded && (
        <div className="border-t px-6 pb-6 pt-4">
          {/* Sprint Goal */}
          <div className="mb-4">
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Sprint Goal
            </h4>
            <p className="mt-2 text-foreground">{sprint.goal}</p>
          </div>

          {/* Backlog Items */}
          <div className="mb-4">
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Selected Product Backlog Items
            </h4>
            <ul className="mt-2 space-y-1">
              {sprint.backlogItems.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-foreground">
                  <span className="text-accent">•</span>
                  {item.title}
                  {item.estimation !== null && (
                    <span className="text-xs text-muted-foreground">
                      (est. {item.estimation})
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Actionable Plan */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Actionable Plan
            </h4>
            <pre className="mt-2 whitespace-pre-wrap text-sm text-foreground font-body">
              {sprint.actionablePlan}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default SprintCard;
