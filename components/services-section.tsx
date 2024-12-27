import type { NextPage } from "next";
import { useState, useCallback } from "react";
import Karma from "./karma";
import PortalPopup from "./portal-popup";
import ExpressConsultation1 from "./express-consultation1";
import AstrologicalForecast from "./astrological-forecast";

export type ServicesSectionType = {
  className?: string;
};

const ServicesSection: NextPage<ServicesSectionType> = ({ className = "" }) => {
  const [isKarmaOpen, setKarmaOpen] = useState(false);

  const openKarma = useCallback(() => {
    setKarmaOpen(true);
  }, []);

  const closeKarma = useCallback(() => {
    setKarmaOpen(false);
  }, []);

  return (
    <>
      <section
        className={`self-stretch bg-beige-100 flex flex-col items-start justify-start py-10 px-40 gap-10 text-left text-23xl text-dimgray-100 font-playfair-display mq750:gap-5 mq750:pl-20 mq750:pr-20 mq750:box-border mq1050:pt-5 mq1050:pb-5 mq1050:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq1225:pt-[26px] mq1225:pb-[26px] mq1225:box-border ${className}`}
        data-scroll-to="servicesSection"
      >
        <h1 className="m-0 w-[262px] relative text-inherit tracking-[0.05em] font-normal font-[inherit] inline-block mq750:text-15xl mq450:text-6xl">
          Мои услуги
        </h1>
        <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-x-6 gap-y-[22.7px] min-h-[1882px] text-center text-xl text-black">
          <ExpressConsultation1
            image="/image@2x.png"
            prop="Астрологическая"
            prop1="консультация"
            prop2="от 3 000₽ | 35$"
          />
          <ExpressConsultation1
            image="/image-1@2x.png"
            propAlignSelf="stretch"
            propOverflow="hidden"
            propWidth="unset"
            prop="Бизнес-консультация."
            prop1="Деньги"
            prop2="5 000₽ | 55$"
          />
          <AstrologicalForecast
            image="/image-2@2x.png"
            prop="Астрологический прогноз на 1 год. Соляр"
            prop1="10 000₽ | 110$"
          />
          <div className="h-[442px] w-[262px] rounded-xl bg-oldlace overflow-hidden shrink-0 flex flex-col items-center justify-start pt-0 px-0 pb-[26px] box-border gap-[26px] text-mini text-darksalmon font-ibm-plex-sans">
            <div className="self-stretch flex-1 flex flex-row items-center justify-center pt-[84.5px] px-5 pb-[84px] bg-[url('/imagetext@3x.png')] bg-cover bg-no-repeat bg-[top]">
              <div className="relative font-semibold inline-block min-w-[53px]">
                KARMA
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start py-0 px-3 gap-[13px] text-xl text-black font-playfair-display">
              <div className="self-stretch relative font-semibold mq450:text-base">
                <p className="m-0">Кармический</p>
                <p className="m-0">{`гороскоп `}</p>
              </div>
              <div className="self-stretch relative font-ibm-plex-sans text-dimgray-100 mq450:text-base">
                5 000₽ | 55$
              </div>
            </div>
            <button
              className="cursor-pointer [border:none] p-[15px] bg-beige-100 rounded-31xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-tan"
              onClick={openKarma}
            >
              <div className="relative text-mini font-ibm-plex-sans text-black text-left inline-block min-w-[128px]">
                Узнать подробнее
              </div>
            </button>
          </div>
          <AstrologicalForecast
            image="/image-3@2x.png"
            propAlignSelf="stretch"
            propOverflow="hidden"
            propWidth="unset"
            prop="Гороскоп совместимости"
            prop1="8 000₽ | 90$"
          />
          <ExpressConsultation1
            image="/image-4@2x.png"
            propAlignSelf="stretch"
            propOverflow="hidden"
            propWidth="unset"
            prop="Детская "
            prop1="астрология"
            prop2="5 000₽ | 55$"
          />
          <ExpressConsultation1
            image="/image-5@2x.png"
            propAlignSelf="stretch"
            propOverflow="hidden"
            propWidth="unset"
            prop="Профориентация."
            prop1="Выбор профессии"
            prop2="5 000₽ | 55$"
          />
          <AstrologicalForecast
            image="/image-6@2x.png"
            propAlignSelf="stretch"
            propOverflow="hidden"
            propWidth="unset"
            prop="Гороскоп переезда и иммиграции"
            prop1="8 000₽ | 90$"
          />
          <ExpressConsultation1
            image="/image-7@2x.png"
            propAlignSelf="stretch"
            propOverflow="hidden"
            propWidth="unset"
            prop="Подбор "
            prop1="важной даты"
            prop2="5 000₽ | 55$"
          />
          <AstrologicalForecast
            image="/image-8@2x.png"
            propAlignSelf="stretch"
            propOverflow="hidden"
            propWidth="unset"
            prop="Медицинская астрология"
            prop1="10 000₽ | 110$"
          />
          <AstrologicalForecast
            image="/image-9@2x.png"
            propAlignSelf="stretch"
            propOverflow="hidden"
            propWidth="unset"
            prop="Геммоастрология. Волшебная сила камней"
            prop1="10 000₽ | 110$"
          />
          <ExpressConsultation1
            image="/image-10@2x.png"
            propAlignSelf="stretch"
            propOverflow="hidden"
            propWidth="unset"
            prop="Ректификация."
            prop1="Точное время рождения"
            prop2="от 3 000₽ | 35$"
          />
          <ExpressConsultation1
            image="/image-11@2x.png"
            propAlignSelf="unset"
            propOverflow="unset"
            propWidth="282px"
            prop="Натальная "
            prop1="карта"
            prop2="от 8 000₽ | 90$"
          />
          <AstrologicalForecast
            image="/image-12@2x.png"
            propAlignSelf="unset"
            propOverflow="unset"
            propWidth="269px"
            prop="Коррекционная астрология"
            prop1="от 8 000₽ | 90$"
          />
          <ExpressConsultation1
            image="/image-13@2x.png"
            propAlignSelf="unset"
            propOverflow="unset"
            propWidth="269px"
            prop="Годовое"
            prop1="сопровождение"
            prop2="от 40 000₽ | 440$"
          />
          <AstrologicalForecast
            image="/image-14@2x.png"
            propAlignSelf="unset"
            propOverflow="unset"
            propWidth="269px"
            prop="Астрологический календарь / ежедневник"
            prop1="от 1 250₽ | 15$"
          />
        </div>
      </section>
      {isKarmaOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeKarma}
        >
          <Karma onClose={closeKarma} />
        </PortalPopup>
      )}
    </>
  );
};

export default ServicesSection;
