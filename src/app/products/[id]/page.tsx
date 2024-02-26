import { GlassChildCardBox } from "@/components/ui/GlassChildCardBox";
import { PRODUCTS } from "@/constants/product";
import React from "react";
import Image from "next/image";

type Props = {
  params: Param;
  searchParams: {};
};
type Param = {
  id: string;
};
const page = (props: Props) => {
  const { id } = props.params;
  const product = PRODUCTS.find((product) => product.id === Number(id));
  if (!product) {
    return <div>Not Found</div>;
  }
  return (
    <main className="flex flex-col items-center w-[94vw] mx-auto ">
      <GlassChildCardBox>
        <section
          className="w-full flex flex-col justify-center items-center gap-4"
          style={{ gap: "16px" }}
        >
          <p
            className="font-semibold text-xl"
            style={{ fontSize: "1.3rem", color: "rgba( 255, 212, 0)" }}
          >
            {product.title}
          </p>
          <div
            className="flex flex-row justify-around w-full"
            style={{ justifyContent: "space-around" }}
          >
            <Image
              src={`/images/icons/product/${product.src}`}
              alt="profile"
              width={175}
              height={175}
              className="object-contain"
              style={{ borderRadius: "15px" }}
            />
            <div>
              <div
                style={{ marginBottom: "10px", gap: "5px" }}
                className="flex flex-col "
              >
                <p className="font-semibold" style={{ fontSize: "0.8rem" }}>
                  概要
                </p>
                <p> {product.description}</p>
              </div>
              <div
                style={{ marginBottom: "10px", gap: "5px" }}
                className="flex flex-col "
              >
                <p className="font-semibold" style={{ fontSize: "0.8rem" }}>
                  技術
                </p>
                <p>
                  {product.techs?.map((tech) => (
                    <span key={tech.title}>{tech.title},</span>
                  ))}
                </p>
              </div>
              <div
                style={{ marginBottom: "10px", gap: "5px" }}
                className="flex flex-col "
              >
                <p className="font-semibold" style={{ fontSize: "0.8rem" }}>
                  担当
                </p>
                <p> {product.inCharge}</p>
              </div>
            </div>
          </div>
        </section>
      </GlassChildCardBox>
    </main>
  );
};

export default page;
