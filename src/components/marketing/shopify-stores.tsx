"use client";

import Image from "next/image";

interface Store {
  image: string;
  quote: string;
  name: string;
}



interface ShopifyStoresProps {
  title: string;
  text: string;
  stores: Store[];
}

const ShopifyStores = ({title, text, stores}: ShopifyStoresProps) => {
  return (
    <section
      className=" mt-10 w-full rounded-3xl bg-primary text-primary-foreground md:py-10"
      id="shopify-stores"
    >
      <div className=" relative   z-10 mx-auto w-full  p-4 ">
        <h2 className="text-balance bg-opacity-50 bg-gradient-to-b from-neutral-800 to-neutral-500 bg-clip-text py-10 text-center font-heading text-4xl text-transparent md:pb-8 md:text-7xl">
          {title}
        </h2>

        <p className="mx-auto mt-4 max-w-lg  text-center text-lg font-normal text-muted-foreground">
          {text}
        </p>
        <div className="items-center justify-center px-10  md:flex ">
          {stores.map((store, index) => (
            <div
              key={index}
              className="mx-auto mt-10 flex flex-col items-center justify-center md:w-2/3"
            >
              <div className="flex flex-col items-center justify-center ">
                <Image
                  src={store.image}
                  alt="shopify store"
                  width={400}
                  height={400}
                  className="mx-auto rounded-lg"
                />
                <p className="mt-4 text-center text-lg font-bold  ">
                  &quot;{store.quote}&quot;
                </p>
                <p className="mt-4 text-lg font-bold ">
                  {" "}
                  - {store.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopifyStores;
