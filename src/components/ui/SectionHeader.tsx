import SplitReveal from './SplitReveal';

interface SectionHeaderProps {
  number: string;
  label: string;
  title: string;
  className?: string;
}

const SectionHeader = ({ number, label, title, className = '' }: SectionHeaderProps) => {
  return (
    <div className={`mb-14 md:mb-20 ${className}`}>
      <div className="reveal flex items-center gap-3 mb-5">
        <span className="section-label text-accent-ink">{number}</span>
        <span className="w-10 h-px bg-ink/20" />
        <span className="section-label">{label}</span>
      </div>
      <SplitReveal as="h2" className="font-display text-display-lg font-medium text-ink text-balance">
        {title}
      </SplitReveal>
    </div>
  );
};

export default SectionHeader;
