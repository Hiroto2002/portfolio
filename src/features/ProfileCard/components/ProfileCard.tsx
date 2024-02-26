import React from "react";
import { GlassChildCardBox } from "@/components/ui/GlassChildCardBox";
import Image from "next/image";

const PROFILE_COLUMNS = [
  {
    title: "名前",
    value: "前田 啓人",
  },
  {
    title: "生年月日",
    value: "2002年 1月 17日",
  },
  {
    title: "趣味",
    value: "プログラミング、ハッカソン、エンジニア交流会",
  },
];

export const ProfileCard = () => {
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
          プロフィール
        </p>
        <div
          className="flex flex-row justify-around w-full"
          style={{ justifyContent: "space-around" }}
        >
          <Image src="/profile" alt="profile" width={100} height={100} />
          <div>
            {PROFILE_COLUMNS.map((column) => (
              <div
                key={column.title}
                style={{ marginBottom: "10px", gap: "5px" }}
                className="flex flex-col "
              >
                <p className="font-semibold" style={{ fontSize: "0.8rem" }}>
                  {column.title}
                </p>
                <p>{column.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </GlassChildCardBox>
  );
};
