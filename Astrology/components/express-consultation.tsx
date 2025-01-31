import type { NextPage } from "next";
import Container from "./container";

export type ExpressConsultationType = {
  className?: string;
  onClose?: () => void;
};

const ExpressConsultation: NextPage<ExpressConsultationType> = ({
  className = "",
  onClose,
}) => {
  return (
    <div
      className={`w-[1116px] relative rounded-31xl bg-oldlace overflow-y-auto flex flex-col items-start justify-start py-0 px-[86px] box-border leading-[normal] tracking-[normal] max-w-full max-h-full overflow-auto mq450:pl-5 mq450:pr-5 mq450:box-border mq525:pl-[43px] mq525:pr-[43px] mq525:box-border ${className}`}
    >
      <section className="self-stretch flex flex-row items-end justify-start flex-wrap content-end py-10 px-0 box-border gap-[26px] min-h-[511px] max-w-full text-left text-mini text-black font-ibm-plex-sans mq450:pt-[26px] mq450:pb-[26px] mq450:box-border">
        <Container />
        <button className="cursor-pointer [border:none] py-[15px] px-[42px] bg-beige-100 rounded-31xl overflow-hidden flex flex-row items-center justify-center hover:bg-tan">
          <div className="relative text-mini font-medium font-ibm-plex-sans text-black text-left inline-block min-w-[75px]">
            ЗАКАЗАТЬ
          </div>
        </button>
        <div className="rounded-31xl [background:conic-gradient(from_212.53deg_at_50%_50%,_#f2d399_-134.63deg,_#f2deb6_32.93deg,_#fbe6be_156.79deg,_#f2d399_225.37deg,_#f2deb6_392.93deg)] overflow-hidden flex flex-row items-center justify-center py-[15px] px-4 whitespace-nowrap">
          <div className="relative uppercase font-medium">
            Подарить сертификат
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExpressConsultation;
