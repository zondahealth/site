import { Heading, Subtitle, Description } from './Typography';

interface ISectionLayoutProps {
  title: string;
  subtitle?: string;
  description?: string;
  children?: any;
}

export const SectionLayout = ({
  title,
  subtitle,
  description,
  children,
}: ISectionLayoutProps) => {
  return (
    <section className="align-columns-center gap-12 py-12 lg:py-24">
      <Heading variant="h1">{title}</Heading>
      {subtitle && <Subtitle className="w-4/5">{subtitle}</Subtitle>}
      {description && (
        <Description className="w-4/5">{description}</Description>
      )}
      {children}
    </section>
  );
};
