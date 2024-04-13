import Image from "next/image";


const logos = [
  {
    image: "/logo/logoipsum-248.svg",
  },
  {
    image: "/logo/logoipsum-245.svg",
  },
  {
    image: "/logo/logoipsum-225.svg",
  },
  {
    image: "/logo/logoipsum-248.svg",
  },
  {
    image: "/logo/logoipsum-249.svg",
  },
  {
    image: "/logo/stripelogo.png",
  },
];

const Brands = () => {
  return (
    <div>
      <div className=" relative   z-10 mx-auto w-full  p-4 pt-20 md:pt-32">
        <div
          className="bg-opacity-50 bg-gradient-to-b from-purple-500 to-sky-200 bg-clip-text 
        text-center font-heading text-4xl text-transparent md:pb-8 md:text-7xl"
        >
          The best brands <br /> choose us
        </div>

        <p className="mx-auto mt-4 max-w-lg text-center  text-lg font-normal text-muted-foreground">
          From small businesses to large corporations, we have helped many
          brands elevate their business.
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

        <div className="font-lora flex items-center justify-center px-8 pb-4 pt-10 text-center text-xl  text-white  md:pt-0 xl:text-2xl">
          &quot;We got rid of nearly a dozen different tools because of what
          Bird does for us.&quot;
        </div>

        <div className="flex flex-col items-center justify-center text-white">
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
    </div>
  );
};

export default Brands;
