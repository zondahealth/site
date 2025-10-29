import { Heading, Subtitle, Description, HeadingVariant } from './Typography';
import { colors } from '../tokens';

export enum SectionVariant {
  COLOR = 'color',
  WHITE = 'white',
}

interface IImageProps {
  src: string;
  alt: string;
}

interface ISectionLayoutProps {
  variant?: SectionVariant;
  title: string;
  subtitle?: string;
  description?: string;
  imageTop?: IImageProps;
  imageBottom?: IImageProps;
  children?: any;
}

export const SectionLayout = ({
  variant = SectionVariant.WHITE,
  title,
  subtitle,
  description,
  imageTop,
  imageBottom,
  children,
}: ISectionLayoutProps) => {
  return (
    <section
      className="align-columns-center gap-12 px-[15%] pt-24"
      style={{
        backgroundColor:
          variant === SectionVariant.COLOR ? colors['gray-gabi'] : 'white',
        color: variant === SectionVariant.COLOR ? 'white' : colors['gray-gabi'],
      }}
    >
      {imageTop && (
        <div className="mt-auto flex justify-center">
          <img
            src={imageTop.src}
            alt={imageTop.alt}
            className="h-auto object-cover"
          />
        </div>
      )}
      <Heading variant={HeadingVariant.H1}>{title}</Heading>
      {subtitle && <Subtitle className="w-4/5">{subtitle}</Subtitle>}
      {description && (
        <Description className="w-4/5">{description}</Description>
      )}
      {children}
      {imageBottom && (
        <div className="mt-auto flex justify-center">
          <img
            src={imageBottom.src}
            alt={imageBottom.alt}
            className="h-auto object-cover"
          />
        </div>
      )}
    </section>
  );
};
