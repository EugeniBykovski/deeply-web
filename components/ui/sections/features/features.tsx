"use client";

import { Separator } from "../../separator";
import { LandingSection } from "../section";

export const FeaturesSection = ({ t }: { t: (k: string) => string }) => {
  return (
    <LandingSection id="features">
      <div className="rounded-4xl border border-white/10 bg-[#1A3B42]/25 p-8 backdrop-blur-xl">
        <h2 className="text-2xl font-semibold md:text-3xl">
          {t("features.title")}
        </h2>
        <p className="mt-3 text-white/70">{t("features.subtitle")}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          repudiandae consequuntur id porro. Corrupti ducimus repudiandae
          repellendus! Non eaque iusto iste hic optio autem sit magnam, at nulla
          provident vitae totam quasi ab illum eligendi nam rem! Deserunt
          pariatur aut repellendus similique repudiandae mollitia perspiciatis
          voluptatibus itaque dolorum accusamus magni cum sed sequi, eius ipsum.
          Porro minus minima officiis fuga sit consectetur facilis, repellat
          iusto voluptatum inventore explicabo ab, beatae eos voluptatem! Omnis,
          temporibus incidunt quam tempora voluptate magnam qui ullam quasi
          adipisci aliquam quaerat ex a iste. Commodi aspernatur enim
          recusandae? Aliquid, provident tempora numquam consequatur accusamus
          delectus iusto debitis libero fuga quo, quibusdam molestias incidunt
          tempore eius inventore sint consectetur quis maiores neque, ducimus
          veniam sed. Suscipit amet reiciendis aliquid maiores sed. Suscipit
          sunt sapiente numquam repellendus accusantium ipsum quaerat sequi
          aliquam voluptatibus nam praesentium, eum commodi facilis ea fugit
          totam minus cumque soluta. Praesentium dolores sunt laborum! Molestias
          atque quos necessitatibus esse maxime adipisci veniam tenetur quo
          perspiciatis cupiditate laboriosam eaque voluptas dolor aut nobis
          debitis doloremque, dicta minima mollitia. Hic laborum quos tenetur?
          Explicabo sunt minima eos impedit! Aspernatur exercitationem eum
          repudiandae cum. Dolor a deserunt ea voluptatem debitis sunt, quod
          dolores maxime impedit quasi atque iusto, omnis fugit aliquam dolore
          hic quis obcaecati laborum rem repellendus nam eos quia. Numquam
          commodi alias nulla vitae est. Nemo eveniet, sed sit quidem asperiores
          natus et accusamus nesciunt libero beatae minima impedit. Repellat
          eaque fugiat velit accusantium sit in obcaecati eum optio doloribus
          laboriosam. Quis porro quidem, accusantium aut nobis dolorem fugiat,
          ex, harum tenetur veritatis veniam minima! Ad voluptas impedit at illo
          soluta! Doloremque officiis voluptate dolorem voluptatum labore! Quasi
          hic veritatis repellat, nobis quibusdam sapiente reiciendis explicabo
          magni, soluta odit non? In excepturi commodi, corporis sed qui hic
          reiciendis, totam vitae sequi ut maxime numquam eveniet.
        </p>
      </div>
      <Separator className="bg-(--main-color) my-12" />
    </LandingSection>
  );
};
