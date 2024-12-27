import type { NextPage } from "next";
import BlockRow from "./block-row";

export type AstrologerConspectsSectionType = {
  className?: string;
};

const blockRowsData = [
  {
    title: "Блок I.",
    description: [
      "Знаки зодиака, планеты, стихии, обители, ",
      "экзальтации, падения, изгнания, кресты",
    ],
  },
  {
    title: "Блок II.",
    description: [
      "Мажорные аспекты, планеты в шахте, ретро планеты",
    ],
  },
  {
    title: "Блок III.",
    description: [
      "Дома гороскопа, управители домов",
    ],
  },
  {
    title: "Блок IV.",
    description: [
      "Прогрессии, дирекции, транзиты, соляр",
    ],
  },
  {
    title: "Блок V.",
    description: [
      "Фазы Луны, лунные затмения, солнечные затмения",
    ],
  },
  {
    title: "Блок VI.",
    description: [
      "Синастрия, сравнение карт, аспекты в синастрии",
    ],
  },
  {
    title: "Блок VII.",
    description: [
      "Секспертиза, композит, дирекции в композитах",
    ],
  },
  {
    title: "Блок VIII.",
    description: [
      "Кармическая астрология, аспекты кармы",
    ],
  },
  {
    title: "Блок IX.",
    description: [
      "Психологическая астрология, аспекты в психологии",
    ],
  },
  {
    title: "Блок X.",
    description: [
      "Медицинская астрология, здоровье, аспекты здоровья",
    ],
  },
  {
    title: "Блок XI.",
    description: [
      "Финансовая астрология, аспекты финансов",
    ],
  },
  {
    title: "Блок XII.",
    description: [
      "Эзотерическая астрология, аспекты духовности",
    ],
  },
];


const AstrologerConspectsSection: NextPage<AstrologerConspectsSectionType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch bg-oldlace flex flex-row items-end justify-start py-0 pl-40 pr-0 box-border gap-6 max-w-full text-left text-23xl text-dimgray-100 font-playfair-display mq1050:flex-wrap mq1050:pl-5 mq1050:pr-5 mq1050:pb-5 mq1050:box-border ${className}`}
      data-scroll-to="astrologerConspectsSection"
    >
      <div className="flex-1 flex flex-col items-start justify-between py-10 px-0 box-border min-w-[480px] min-h-[1094px] max-w-full mq750:pt-5 mq750:pb-5 mq750:box-border mq750:min-w-full mq1225:pt-[26px] mq1225:pb-[26px] mq1225:box-border">
        <div className="self-stretch flex flex-col items-start justify-end gap-[26px] max-w-full">
          <h1 className="m-0 w-[546px] relative text-inherit tracking-[0.05em] font-normal font-[inherit] inline-block max-w-full mq750:text-15xl mq450:text-6xl">
            Конспекты астролога
          </h1>
          <div className="self-stretch flex flex-col items-start justify-start py-0 pl-0 pr-0.5 box-border gap-[13px] max-w-full text-base text-dimgray-300 font-ibm-plex-sans">
            <div className="self-stretch h-[134px] relative inline-block">
              <p className="[margin-block-start:0] [margin-block-end:4px]">
                <span className="font-medium font-ibm-plex-sans">✓</span>
                <span>
                  {" "}
                  Имея все конспекты астролога, вы без труда сможете сами начать
                  разбираться в своих картах и картах ваших близких.
                </span>
              </p>
              <p className="[margin-block-start:0] [margin-block-end:4px]">
                <span className="font-medium font-ibm-plex-sans">✓</span>
                <span>{` Без воды, всё самое важное , структурированная информация собрана за многие годы работы. `}</span>
              </p>
              <p className="m-0">
                <span className="font-medium font-ibm-plex-sans">✓</span>
                <span>
                  {" "}
                  Вы можете взять личную консультацию и я вас научу, как
                  работать с конспектами, шаблонами, читать вашу натальную
                  карту.
                </span>
              </p>
            </div>
            <div className="relative text-black inline-block max-w-full">
              <span className="font-medium">{`Стоимость одного блока конспектов: `}</span>
              <span>1 250₽</span>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[13px] max-w-full text-base text-black font-ibm-plex-sans">
            <div className="self-stretch flex flex-col items-start gap-[13px] justify-start max-w-full mq750:h-auto">
              {blockRowsData.map((rowData, index) => (
                <BlockRow
                  key={index}
                  title={rowData.title}
                  description={rowData.description}
                />
              ))}
              {/* Add more BlockRow instances as needed */}
            </div>
          </div>
          {/* Additional content goes here */}
        </div>
      </div>
      <div className="h-[1014px] w-[517px] flex flex-col items-start justify-center min-w-[517px] max-w-full mq750:min-w-full mq1225:hidden">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-contain mq1225:self-stretch mq1225:w-auto"
          loading="lazy"
          alt=""
          src="/-----------------1-1-1@2x.png"
        />
      </div>
    </section>
  );
};

export default AstrologerConspectsSection;
