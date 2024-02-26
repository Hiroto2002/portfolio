import { yellowCardGlass,yellowRoundedGlass } from "@/variants/glassmorphism";

type Props = {
  children: React.ReactNode;
  rounded?: boolean;
  width?: string;
};

export const GlassChildCardBox = (props: Props) => {
  const { children, width = "calc(94vw - 2vh)",rounded } = props;
  const variant = rounded ? yellowRoundedGlass : yellowCardGlass;
  return (
    <div
      className={`mx-auto relative top-[5vh]`}
      style={{ width: width,maxWidth:width, ...variant }}
    >
      {children}
    </div>
  );
};
