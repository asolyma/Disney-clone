import Image from "next/image";
import Brand, { BrandProps } from "./Brand";
const brands: BrandProps[] = [
  { imageUrl: "/images/disnep.png", videoUrl: "/videos/disney.mp4" },
  { imageUrl: "/images/pixar.png", videoUrl: "/videos/pixar.mp4" },
  { imageUrl: "/images/marvel.png", videoUrl: "/videos/marvel.mp4" },
  { imageUrl: "/images/starwars.png", videoUrl: "/videos/star-wars.mp4" },
  {
    imageUrl: "/images/national-geographic.png",
    videoUrl: "/videos/national-geographic.mp4",
  },
];
const Brands = () => {
  return (
    <section className="flex flex-col md:flex-row max-w-[1400px] p-8 gap-6 mt-10 mx-auto items-center justify-center inset-0">
      {brands.map((brand, i) => {
        return (
          <Brand key={i} imageUrl={brand.imageUrl} videoUrl={brand.videoUrl} />
        );
      })}
    </section>
  );
};

export default Brands;
