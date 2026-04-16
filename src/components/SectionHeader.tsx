interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  dark?: boolean;
}

const SectionHeader = ({ title, subtitle, dark = false }: SectionHeaderProps) => {
  return (
    <div className="mb-10 text-center">
      <h2
        className={`font-heading text-3xl font-bold tracking-tight md:text-4xl ${
          dark ? "text-dark-surface-foreground" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 max-w-2xl mx-auto text-base md:text-lg ${
            dark ? "text-dark-surface-foreground/70" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
