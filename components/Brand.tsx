import Image from "next/image";
export interface BrandProps {
  imageUrl: string;
  videoUrl: string;
}
const Brand: React.FC<BrandProps> = ({ imageUrl, videoUrl }) => {
  return (
    <div className="brand group relative h-32 w-52 sm:w-64 sm:h-36 border-[3px] border-[#f9f9f9] rounded-lg border-opacity-10 overflow-hidden cursor-pointer shadow-xl hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300">
      <Image src={imageUrl} layout="fill" alt="" objectFit="cover" />
      <video
        autoPlay
        loop
        playsInline
        className="hidden group-hover:block transition duration-300 transform scale-105 rounded object-cover"
      >
        <source src={videoUrl} />
      </video>
    </div>
  );
};
export default Brand;
