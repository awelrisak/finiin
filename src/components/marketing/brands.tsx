import Image from "next/image";

interface BrandsProps {
  title: string;
  text: string;
  logos: {
    image: string;
  }[];
}

const Brands = ({ title, text, logos }: BrandsProps) => {
  return (
    <section id="brands">
      <div className=" relative   z-10 mx-auto w-full  p-4 pt-20 md:pt-32">
        <h2
          className="text-balance bg-opacity-50 bg-gradient-to-b from-purple-500 to-sky-400 bg-clip-text text-center 
        font-heading text-4xl text-transparent dark:to-sky-200 md:pb-8 md:text-7xl"
        >
          {title}
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-center  text-lg font-normal text-muted-foreground">
          {text}
        </p>

        <div className="mx-auto grid  cursor-pointer grid-cols-3  items-center justify-center md:w-3/5">
          {logos.map((logo, i) => (
            <div key={i} className="p-4 md:p-20">
              <Image
                priority
                src={logo.image}
                width={500}
                height={500}
                alt="logo"
                className="h-auto w-full max-w-full rounded-lg"
              />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center px-8 pb-4 pt-10 text-center font-lora text-xl  md:pt-0 xl:text-2xl">
          &quot;We got rid of nearly a dozen different tools because of what
          Sonamax does for us.&quot;
        </div>

        <div className="flex flex-col items-center justify-center ">
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={1000}
            height={1000}
            className="w-10 pt-2  xl:w-14 xl:pt-0 "
          />

          <div className="text-center">
            <div className="pt-4  text-sm font-medium">Carlos Hernandez</div>
            <div className="text-sm">Marketing Director, Palium Software</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
