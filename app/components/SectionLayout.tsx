import { Heading, Subtitle, Description, HeadingVariant } from './Typography';
import { colors } from '../tokens';
import Image from 'next/image';

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
          <Image
            src={imageTop.src}
            alt={imageTop.alt}
            width={800}
            height={1200}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="h-auto w-full object-cover"
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
          <Image
            src={imageBottom.src}
            alt={imageBottom.alt}
            width={1200}
            height={800}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="h-auto w-full object-cover"
          />
        </div>
      )}
    </section>
  );
};
