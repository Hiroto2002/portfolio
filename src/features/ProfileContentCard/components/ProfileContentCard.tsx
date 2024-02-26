import { GlassChildCardBox } from "@/components/ui/GlassChildCardBox";
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  link?: boolean;
  contents: Content[];
};

type Content = {
  title: string;
  value: string;
};
export const ProfileContentCard = (props: Props) => {
  const { contents, link,title } = props;
  return (
    <GlassChildCardBox>
      <section
        className="w-full flex flex-col justify-center items-center gap-4"
        style={{ gap: "16px" }}
      >
        <p
          className="font-semibold text-xl"
          style={{ fontSize: "1.3rem", color: "rgba( 255, 212, 0)" }}
        >
          {title}
        </p>
        <div className="flex flex-col " style={{ gap: "10px" }}>
          {contents.map((content) =>
            link ? (
              <Link
                key={content.title}
                href={content.value}
                className="text-lg"
              >
                <p>
                  {content.title} : {content.value}
                </p>
              </Link>
            ) : (
              <p key={content.title}>
                {content.title} : {content.value}
              </p>
            )
          )}
        </div>
      </section>
    </GlassChildCardBox>
  );
};
