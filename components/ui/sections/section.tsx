"use client";

type Props = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

export const LandingSection = ({ id, children, className }: Props) => {
  return (
    <section
      id={id}
      className={[
        "md:max-w-7xl w-full mx-auto my-12",
        "scroll-mt-24",
        className ?? "",
      ].join(" ")}
    >
      {children}
    </section>
  );
};
