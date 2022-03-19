import Head from "next/head";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="">
      <Head>
        <title>Log in | Disney+</title>
      </Head>
      <div>
        <Image
          src={"/images/hero-background.jpg"}
          layout="fill"
          objectFit="cover"
          alt=""
        />
      </div>
      <div className="w-screen flex justify-center">
        <div className="asd flex flex-col h-[500px] justify-center items-center">
          <Image
            src={"/images/cta-logo-one.svg"}
            height={150}
            width={600}
            objectFit="contain"
            alt=""
          />
          <button className="bg-blue-500 uppercase tracking-wide text-xl font-extrabold py-4 px-6 w-full z-20 text-white hover:bg-blue-800 rounded-sm max-w-sm">
            Get all there
          </button>
          <p>say whatever is on your mind but dont be rude</p>
          <Image
            src={"/images/cta-logo-two.png"}
            height={70}
            width={600}
            objectFit="contain"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
