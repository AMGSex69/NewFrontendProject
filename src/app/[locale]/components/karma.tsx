"use client"

import { useTranslations } from "next-intl"
import type { NextPage } from "next"

export type KarmaType = {
	className?: string
	onClose?: () => void
}

const Karma: NextPage<KarmaType> = ({ className = "", onClose }) => {
	const t = useTranslations()

	return (
		<div
			className={`w-[1151px] relative rounded-31xl bg-oldlace overflow-y-auto flex flex-col items-start justify-start py-0 px-[86px] box-border leading-[normal] tracking-[normal] max-w-full max-h-full overflow-auto mq700:pl-[43px] mq700:pr-[43px] mq700:box-border mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
		>
			<section className="self-stretch flex flex-row items-end justify-start flex-wrap content-end py-10 pl-0 pr-[35px] box-border gap-[26px] min-h-[667px] max-w-full shrink-0 text-left text-mini text-black font-ibm-plex-sans mq700:pt-[26px] mq700:pb-[26px] mq700:box-border">
				<div className="w-[944px] flex flex-col items-start justify-start gap-[26px] max-w-full text-xl font-playfair-display">
					<div className="relative font-semibold inline-block max-w-full mq450:text-base">{t("title")}</div>
					<div className="self-stretch flex flex-row items-start justify-start gap-6 max-w-full text-base font-ibm-plex-sans mq975:flex-wrap">
						<div className="flex-1 flex flex-col items-start justify-start gap-[11px] min-w-[376px] max-w-full mq700:min-w-full">
							<div className="self-stretch relative text-dimgray-300">
								<p className="[margin-block-start:0] [margin-block-end:4px]">{t("features.past")}</p>
								<p className="[margin-block-start:0] [margin-block-end:4px]">{t("features.talents")}</p>
								<p className="m-0">{t("features.abilities")}</p>
							</div>
							<div className="self-stretch relative text-dimgray-300">
								<p className="[margin-block-start:0] [margin-block-end:4px]">{t("karmaDescription.path")}</p>
								<p className="[margin-block-start:0] [margin-block-end:4px]">{t("karmaDescription.warning")}</p>
								<p className="m-0">{t("karmaDescription.development")}</p>
							</div>
							<div className="relative">
								<span className="font-medium">{t("price")}</span>
							</div>
							<div className="self-stretch relative">
								<span className="font-medium">{t("format.label")}</span>
								<span className="text-dimgray-300"> {t("format.description")}</span>
							</div>
							<div className="self-stretch h-[117px] relative inline-block">
								<p className="[margin-block-start:0] [margin-block-end:4px]">
									<span className="font-medium">{t("requiredData.title")}</span>
								</p>
								<p className="[margin-block-start:0] [margin-block-end:4px] text-dimgray-300">
									{t("requiredData.date")}
								</p>
								<p className="[margin-block-start:0] [margin-block-end:4px]">{t("requiredData.city")}</p>
								<p className="m-0">{t("requiredData.time")}</p>
							</div>
						</div>
						<div className="h-[302px] w-[342px] rounded-xl flex flex-row items-center justify-center py-[125px] px-5 box-border bg-[url('/imagetext1@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[342px] max-w-full text-center text-mini text-darksalmon mq700:min-w-full mq975:flex-1">
							<div className="relative font-semibold inline-block min-w-[53px]">KARMA</div>
						</div>
					</div>
				</div>
				<div className="h-[50px] w-[159px] rounded-31xl bg-beige-100 overflow-hidden shrink-0 flex flex-row items-center justify-center py-[15px] px-[42px] box-border">
					<div className="self-stretch flex-1 relative font-medium">{t("order")}</div>
				</div>
				<div className="h-[50px] w-[215px] rounded-31xl [background:conic-gradient(from_212.53deg_at_50%_50%,_#f2d399_-134.63deg,_#f2deb6_32.93deg,_#fbe6be_156.79deg,_#f2d399_225.37deg,_#f2deb6_392.93deg)] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[15px] px-4 box-border whitespace-nowrap">
					<div className="self-stretch flex-1 relative uppercase font-medium">{t("giftCertificate")}</div>
				</div>
			</section>
		</div>
	)
}

export default Karma
