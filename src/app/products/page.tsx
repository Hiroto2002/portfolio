import { GlassChildCardBox } from "@/components/ui/GlassChildCardBox";
import { PRODUCTS } from "@/constants/product";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <main className="flex flex-col items-center w-[94vw] mx-auto ">
      <GlassChildCardBox>
        <p
          className="font-semibold text-xl text-center"
          style={{ fontSize: "1.3rem", color: "rgba( 255, 212, 0)" }}
        >
          作品
        </p>
      </GlassChildCardBox>
      <section
        className="flex flex-wrap justify-around items-center gap-4 m-auto"
        style={{ width: "calc(94vw - 2vh)" }}
      >
        {PRODUCTS.map((product) => (
          <GlassChildCardBox key={product.title} width="45%">
            <Link href={`/products/${product.id}`} className="flex flex-row justify-center items-center gap-4">
              <Image
                src={`/images/icons/product/${product.src}`}
                alt={product.title}
                width={100}
                height={100}
                className="object-contain m-auto w-[100px] h-[100px]"
              />
              <p className="w-fit font-semibold m-auto">{product.title}</p>
            </Link>
          </GlassChildCardBox>
        ))}
        {PRODUCTS.length % 2 !== 0 && (
          <div className="w-[45%]"></div>
        )}
      </section>
    </main>
  );
};

export default page;
