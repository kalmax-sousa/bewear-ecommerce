import Image from "next/image";

interface BrandProps {
  brands: {
    name: string;
    logo: string;
  }[];
}

const BrandList = ({ brands }: BrandProps) => {
  return (
    <div className="space-y-6">
      <h3 className="px-5 font-semibold">Marcas parceiras</h3>

      <div className="w-full overflow-hidden">
        <div className="animate-marquee flex w-max gap-6">
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex min-w-20 flex-col items-center space-y-1"
            >
              <div className="flex items-center justify-center rounded-2xl border-[1.6px] border-[#f1f1f1] px-6 py-6">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  height={32}
                  width={32}
                />
              </div>
              <p className="text-center text-sm font-medium">{brand.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandList;
