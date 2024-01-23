import Image from "next/image";

export interface GerejaType {
  id: number;
  title: string;
  type: string;
  slug: string;
  short_desc: string;
  description: string;
  imgUrl: string;
  galeri: string[];
}

interface DetailGerejaProps {
  gereja: GerejaType;
}

export default function DetailGereja({ gereja }: DetailGerejaProps) {
  return (
    <div className="px-3 md:px-0">
      <div className="pb-20 pt-10 lg:pt-16">
        <p className="text-justify text-muted-foreground">
          {gereja.description}
        </p>

        <div className="grid grid-cols-1 gap-5 pb-20 pt-16 md:grid-cols-3">
          {gereja.galeri.map((e, idx) => (
            <div className="relative aspect-square overflow-hidden" key={idx}>
              <Image
                className="object-cover"
                src={e}
                alt={`img-${idx + 1}`}
                fill
                sizes="(min-width: 1360px) 360px, (min-width: 780px) calc(29.82vw - 40px), calc(100vw - 44px)"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
