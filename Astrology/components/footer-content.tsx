import type { NextPage } from "next";

export type FooterContentType = {
  className?: string;
};

const FooterContent: NextPage<FooterContentType> = ({ className = "" }) => {
  return (
    <div
      className={`h-[154.3px] w-[167px] flex flex-col items-start justify-start gap-[5.3px] text-left text-base-8 text-dimgray-200 font-playfair-display ${className}`}
    >
      <img
        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
        loading="lazy"
        alt=""
        src="/vectors.svg"
      />
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[15px] pr-4">
        <div className="flex-1 flex flex-col items-start justify-start gap-[6.6px]">
          <div className="relative">AKSANA YURLOVA</div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[47px]">
            <div className="h-[0.9px] w-[41.3px] relative border-gray border-t-[0.9px] border-solid box-border" />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 pl-[47px] pr-12 text-3xs-2">
        <div className="relative inline-block min-w-[72.3px]">ВАШ АСТРОЛОГ</div>
      </div>
    </div>
  );
};

export default FooterContent;
