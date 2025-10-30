import { colors, layout } from '../tokens';
import { Description, Heading, HeadingVariant } from './Typography';

interface Item {
  value: string;
  title: string;
  subtitle: string;
  id: string;
}

interface ICarouselProps {
  items: Item[];
}

export function Carousel({ items }: ICarouselProps) {
  return (
    <div className="overflow-hidden w-full py-24 bg-white">
      <div className="flex animate-marquee justify-between gap-24">
        {[...items, ...items].map((item, index) => (
          <CarouselItem item={item} index={index} key={`${item.id}-${index}`} />
        ))}
      </div>
    </div>
  );
}

const CarouselItem = ({ item, index }: { item: Item; index: number }) => {
  const isEven = index % 2 === 0;
  const borderColor = isEven ? colors['purple'] : colors['orange'];
  const outlineColor = isEven ? colors['purpleLight'] : colors['orangeLight'];

  return (
    <div
      className="align-columns-center p-[2%] border gap-y-2 flex-wrap min-w-[20%]"
      style={{
        borderRadius: layout.radius,
        borderColor,
        borderWidth: 3,
        outline: `5px solid ${outlineColor}`,
      }}
    >
      <Heading style={{ color: borderColor }} variant={HeadingVariant.H1}>
        {item.value}
      </Heading>
      <Heading variant={HeadingVariant.H3}>{item.title}</Heading>
      <Description>{item.subtitle}</Description>
    </div>
  );
};
