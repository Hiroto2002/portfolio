import { GlassChildCardBox } from "@/components/ui/GlassChildCardBox";
import { ProfileCard } from "@/features/ProfileCard/components/ProfileCard";
import { ProfileContentCard } from "@/features/ProfileContentCard/components/ProfileContentCard";

const CONTENTS = {
  links: {
    title: "リンク",
    link: true,
    value: [
      { title: "Twitter", value: "https://twitter.com/adeam_02" },
      { title: "GitHub", value: "https://github.com/Hiroto2002" },
      { title: "Qiita", value: "https://qiita.com/hiroto_dnpk" },
      { title: "hack hack", value: "https://discord.com/invite/wsrNZUWUR6" },
    ],
  },
  affiliations: {
    title: "所属",
    link: false,
    value: [
      { title: "学校", value: "HAL名古屋専門学校" },
      { title: "インターン", value: "Life is Tech Web Service Course Mentor" },
      { title: "コミュニティ", value: "hack hack owner, STECH member" },
    ],
  },
  Awards: {
    title: "受賞歴・資格",
    link: false,
    value: [
      { title: "2024 02 技育CAMP", value: "サイバーエージェント賞" },
      { title: "2023 10 技育CAMP", value: "ウイングアーク1st賞" },
      { title: "2023 07 技育CAMP", value: "MIXI賞" },
      { title: "2023 03 技育CAMP", value: "努力賞" },
      { title: "2023 03 HAL3校合同コンテスト", value: "構成力賞" },
      { title: "2023 03 HEW", value: "金賞" },
      { title: "2023 10 HAL3校合同コンテスト", value: "構成力賞" },
      { title: "2023 02 HAL3校合同コンテスト", value: "銅賞" },
      { title: "2021 03 IPA", value: "基本情報技術者資格" },
    ],
  },
};

export default function Home() {
  return (
    <main className="flex flex-col items-center w-[94vw] mx-auto ">
      <ProfileCard />
      {Object.values(CONTENTS).map((content) => (
        <ProfileContentCard
          key={content.title}
          title={content.title}
          contents={content.value}
          link={content.link}
        />
      ))}
      <ProfileContentCard title="技術スタック" contents={[]}/>
    </main>
  );
}
