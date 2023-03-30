import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  background: string;
  textColor?: string;
};

export default function SectionTitle({
  children,
  background,
  textColor = "text-heading",
}: Props) {
  return (
    <p
      className={`mb-2 inline-flex rounded-sm border-l-2 border-primary1 px-2 py-1 font-medium ${textColor} ${background} `}
    >
      {children}
    </p>
  );
}
