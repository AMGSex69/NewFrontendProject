import type { NextPage } from "next"
import Image from "next/image"
import { useTranslations } from "next-intl"

export type RetreatPricesType = {
	className?: string
	priceDetails?: string
	price?: string
	duration?: string
	pdfFileName?: string
}

const RetreatPrices: NextPage<RetreatPricesType> = ({
	className = "",
	priceDetails,
	price,
	duration,
	pdfFileName = "pdf.pdf",
}) => {
	const t = useTranslations("retreatPrices")

	const handleProgramClick = () => {
		if (pdfFileName) {
			window.open(`${pdfFileName}`, "_blank")
		}
	}

	return (
		<div
			className={`flex flex-col items-center justify-between gap-3 w-full max-w-sm mx-auto text-center text-black font-ibm-plex-sans ${className}`}
		>
			<div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden">
				<Image src={priceDetails || "/placeholder.svg"} alt="" layout="fill" objectFit="cover" loading="lazy" />
			</div>
			<div className="w-full space-y-1">
				<p className="text-xl lg:text-2xl">
					{t("price")}: {price}
				</p>
				<p className="text-xl lg:text-2xl">
					{t("duration")}: {duration}
				</p>
			</div>
			<div onClick={handleProgramClick} className="w-full cursor-pointer">
				<div className="inline-block rounded-full bg-oldlace px-4 py-2 text-sm uppercase">
					<p className="m-0">{t("programButton")}</p>
				</div>
			</div>
		</div>
	)
}

export default RetreatPrices