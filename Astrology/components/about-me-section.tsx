import type { NextPage } from "next";
import { useRef } from "react";

export type AboutMeSectionType = {
  className?: string;
};

const AboutMeSection: NextPage<AboutMeSectionType> = ({ className = "" }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -150, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 150, behavior: "smooth" });
    }
  };
  
  return (
    <section
      className={`self-stretch bg-oldlace flex flex-col items-start justify-start py-9 px-40 box-border gap-[22px] max-w-full text-left text-23xl text-dimgray-100 font-playfair-display mq750:py-[23px] mq750:px-20 mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
      data-scroll-to="aboutMeSection"
    >
      <h1 className="m-0 w-[357px] relative text-inherit tracking-[0.05em] font-normal font-[inherit] inline-block max-w-full mq750:text-15xl mq450:text-6xl">
        Приветствие
      </h1>
      <div className="self-stretch flex flex-row items-start justify-start gap-[119px] max-w-full text-xl text-black mq750:gap-[30px] mq1225:gap-[59px] mq1225:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start gap-10 min-w-[356px] max-w-full mq750:gap-5 mq750:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[26px]">
            <div className="relative mq450:text-base">
              Здравствуйте, друзья!
            </div>
            <div className="self-stretch relative text-base font-ibm-plex-sans text-dimgray-300">
              <p className="[margin-block-start:0] [margin-block-end:14px]">{`Я – Оксана Юрлова, практикующий астролог с опытом в решении самых разных клиентских запросов. `}</p>
              <p className="[margin-block-start:0] [margin-block-end:14px]">
                Консультирую более 5 лет.
              </p>
              <p className="[margin-block-start:0] [margin-block-end:14px]">
                Закончила Профессиональную школу Западной Астрологии Елены
                Негрей. Обучалась на курсах Константина Дарагана.
              </p>
              <p className="m-0">{`Много путешествую, объездила 56 стран. `}</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[26px] max-w-full text-sm">
      <div className="flex flex-row items-center justify-start gap-2 max-w-full">
        {/* Left Arrow */}
        <img
          className="h-[25px] w-[25px] object-contain cursor-pointer"
          alt="Scroll Left"
          src="/certificate-images@2x.png"
          onClick={scrollLeft}
        />

        {/* Images Container */}
        <div
          className="w-[438.4px] overflow-hidden flex flex-row items-center justify-start gap-[58.4px] max-w-[calc(100%_-_66px)] mq750:gap-[29px]"
          ref={scrollContainerRef}
        >
          <img
            className="self-stretch w-[107.2px] relative max-h-full shrink-0 object-cover min-h-[151px]"
            loading="lazy"
            alt=""
            src="/1@2x.png"
          />
          <img
            className="self-stretch w-[107.2px] relative max-h-full shrink-0 object-cover min-h-[151px]"
            loading="lazy"
            alt=""
            src="/2@2x.png"
          />
          <img
            className="self-stretch w-[107.2px] relative max-h-full shrink-0 object-cover min-h-[151px]"
            loading="lazy"
            alt=""
            src="/3@2x.png"
          />
          <img
            className="self-stretch w-[107.2px] relative max-h-full shrink-0 object-cover min-h-[151px]"
            loading="lazy"
            alt=""
            src="/4@2x.png"
          />
          <img
            className="self-stretch w-[107.2px] relative max-h-full shrink-0 object-cover min-h-[151px]"
            loading="lazy"
            alt=""
            src="/5@2x.png"
          />
          <img
            className="self-stretch w-[107.2px] relative max-h-full shrink-0 object-cover min-h-[151px]"
            loading="lazy"
            alt=""
            src="/6@2x.png"
          />
          <img
            className="self-stretch w-[107.2px] relative max-h-full shrink-0 object-cover min-h-[151px]"
            alt=""
            src="/certificate-placeholders@2x.png"
          />
        </div>

        {/* Right Arrow */}
        <div className="flex flex-row items-center justify-center py-5 px-0">
          <img
            className="h-[25px] w-[25px] relative rounded-12xs-3 object-contain cursor-pointer"
            alt="Scroll Right"
            src="/polygon-1.svg"
            onClick={scrollRight}
          />
        </div>
      </div>
      <div className="relative">
        Cертификаты, подтвержденные лицензией от Министерства образования
      </div>
    </div>
        </div>
        <div className="w-[453px] flex flex-col items-start justify-start gap-[26px] min-w-[453px] max-w-full mq1050:min-w-full mq1225:flex-1">
          <div className="relative inline-block max-w-full mq450:text-base">
            В чём вам помогут мои консультации:
          </div>
          <div className="self-stretch relative text-base tracking-[-0.05px] text-dimgray-300 font-ibm-plex-sans">
            <p className="[margin-block-start:0] [margin-block-end:4px]">
              <span className="font-medium font-ibm-plex-sans">✓</span>
              <span> Работаю по найму, хочу свой бизнес;</span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:4px]">
              <span className="font-medium font-ibm-plex-sans">✓</span>
              <span> Подбор даты оформления бизнеса;</span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:4px]">
              <span className="font-medium font-ibm-plex-sans">✓</span>
              <span> Яркие события в этом году, прогноз на год;</span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:4px]">
              <span className="font-medium font-ibm-plex-sans">✓</span>
              <span> Профессия для ребенка;</span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:4px]">
              <span className="font-medium font-ibm-plex-sans">✓</span>
              <span> Иммиграция, хочу переехать;</span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:4px]">
              <span className="font-medium font-ibm-plex-sans">✓</span>
              <span> Ребенок не говорит, почему;</span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:4px]">
              <span className="font-medium font-ibm-plex-sans">✓</span>
              <span> Хочу развод/или как сохранить свой брак;</span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:4px]">
              <span className="font-medium font-ibm-plex-sans">✓</span>
              <span>{` Где искать свою любовь; `}</span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:4px]">
              <span className="font-medium font-ibm-plex-sans">✓</span>
              <span> Нет детей/но хочу;</span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:4px]">
              <span className="font-medium font-ibm-plex-sans">✓</span>
              <span>
                {" "}
                Хочу анализ своей жены/мужа/друга/ребенка/ начальника;
              </span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:4px]">
              <span className="font-medium font-ibm-plex-sans">✓</span>
              <span> Моя совместимость с другим человеком;</span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:4px]">
              <span className="font-medium font-ibm-plex-sans">✓</span>
              <span> Где развивать ребенка: секции/кружки;</span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:4px]">
              <span className="font-medium font-ibm-plex-sans">✓</span>
              <span>
                {" "}
                Какой лучший день для моего свидания/ бракосочетания/ покупки
                машины/ квартиры/отпуска/переезда;
              </span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:4px]">
              <span className="font-medium font-ibm-plex-sans">✓</span>
              <span>
                {" "}
                Понимание сексуального, психологического взаимодействия в паре;
              </span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:4px]">
              <span className="font-medium font-ibm-plex-sans">✓</span>
              <span> Финансы, приход/потеря денег в прогностике;</span>
            </p>
            <p className="m-0">
              <span className="font-medium font-ibm-plex-sans">✓</span>
              <span> Сделки с недвижимостью (сдача/аренда/покупка).</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
