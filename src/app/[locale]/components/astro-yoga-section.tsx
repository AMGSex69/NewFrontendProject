'use client'

import { useState } from 'react'
import type { NextPage } from "next"
import RetreatPrices from "./retreat-prices"
import { ChevronLeft, ChevronRight } from 'C:/Users/ega/Desktop/Frontend/nextjs-v14-starterkit/node_modules/lucide-react'
import { useTranslations } from 'next-intl';

export type AstroYogaSectionType = {
	className?: string
}

const AstroYogaSection: React.FC<{ className?: string }> = ({ className = "" }) => {
	const t = useTranslations("AstroYogaSection")
	const [currentIndex, setCurrentIndex] = useState(0)
	const images = [
		"/1-2@2x.png",
		"/2-2@2x.png",
		"/3-2@2x.png",
		"/4-1@2x.png",
		"/5-1@2x.png",
		"/6-1@2x.png",
		"/7-1@2x.png",
		"/8@2x.png",
		"/image-collection@2x.png",
		"/10@2x.png",
		"/image-collection1@2x.png",
		"/image-collection2@2x.png",
		"/image-collection3@2x.png",
		"/image-collection4@2x.png",
		"/image-collection5@2x.png",
		"/image-collection6@2x.png",
		"/image-collection7@2x.png",
		"/image-collection8@2x.png",
		"/image-collection9@2x.png",
		"/image-collection10@2x.png",
		"/image-collection11@2x.png",
		"/image-collection12@2x.png",
		"/image-collection13@2x.png",
		"/image-collection14@2x.png",
		"/image-collection15@2x.png",
		"/image-collection16@2x.png",
	]

	const visibleImagesCount = 9
	const imageWidth = 100.5 // Adjusted image width in px
	const gapWidth = 24 // Gap between images in px
	const maxIndex = images.length - visibleImagesCount

	const moveGallery = (direction: "left" | "right") => {
		setCurrentIndex((prev) => {
			if (direction === "left") {
				return Math.max(prev - 1, 0)
			} else {
				return Math.min(prev + 1, maxIndex)
			}
		})
	}

	return (
		<section
			className={`self-stretch bg-beige-100 flex flex-col items-start justify-start py-10 px-40 box-border gap-6 max-w-full text-left text-3xl text-dimgray-100 font-playfair-display ${className}`}
			data-scroll-to="astroYogaSection"
		>
			<h1 className="m-0 tracking-wide font-normal">{t("title")}</h1>
			<div className="self-stretch flex flex-col items-start justify-start gap-6 max-w-full text-base text-black font-ibm-plex-sans">
				<div className="self-stretch flex flex-row items-center justify-start max-w-full text-xl font-playfair-display">
					<div className="flex-1">{t("subtitle")}</div>
				</div>
				<div className="self-stretch flex flex-row items-center justify-start max-w-full text-dimgray-300">
					<div className="flex-1">{t("description")}</div>
				</div>
				<div className="self-stretch flex flex-row items-center justify-center flex-wrap content-center gap-x-6 gap-y-16 text-center text-xl">
					<RetreatPrices
						priceDetails="/1-1@2x.png"
						prop={t("RetreatPrices.sriLanka.price")}
						prop1={t("RetreatPrices.sriLanka.included")}
						prop2={t("RetreatPrices.sriLanka.name")}
						pdfFileName="shrilanka.pdf"
					/>
					<RetreatPrices
						priceDetails="/2-1@2x.png"
						prop={t("RetreatPrices.india.price")}
						prop1={t("RetreatPrices.india.additional")}
						prop2={t("RetreatPrices.india.name")}
						pdfFileName="india.pdf"
					/>
					<RetreatPrices
						priceDetails="/3-1@2x.png"
						prop={t("RetreatPrices.abkhazia.price")}
						prop1={t("RetreatPrices.abkhazia.additional")}
						prop2={t("RetreatPrices.abkhazia.name")}
						pdfFileName="abkhazia.pdf"
					/>
				</div>
				<div className="self-stretch flex flex-row items-start justify-start gap-6 max-w-full flex-wrap">
					<div className="flex-1 flex flex-col items-start justify-start gap-4 min-w-[300px]">
						<div className="self-stretch">
							<span className="font-medium">{t("mainGoal.title")}</span>
							<span className="text-dimgray-300"> {t("mainGoal.description")}</span>
						</div>
						<div className="self-stretch text-dimgray-300">
							<p className="m-0">
								<span className="font-medium">✓</span> {t("features.0")}
							</p>
							<p className="m-0">
								<span className="font-medium">✓</span> {t("features.1")}
							</p>
							<p className="m-0">
								<span className="font-medium">✓</span> {t("features.2")}
							</p>
							<p className="m-0">
								<span className="font-medium">✓</span> {t("features.3")}
							</p>
							<p className="m-0">
								<span className="font-medium">✓</span> {t("features.4")}
							</p>
							<p className="m-0">
								<span className="font-medium">✓</span> {t("features.5")}
							</p>
							<p className="m-0">
								<span className="font-medium">✓</span> {t("features.6")}
							</p>
							<p className="m-0">
								<span className="font-medium">✓</span> {t("features.7")}
							</p>
							<p className="m-0">
								<span className="font-medium">✓</span> {t("features.8")}
							</p>
							<p className="m-0">
								<span className="font-medium">✓</span> {t("features.9")}
							</p>
							<p className="m-0">
								<span className="font-medium">✓</span> {t("features.10")}
							</p>
							<p className="m-0">
								<span className="font-medium">✓</span> {t("features.11")}
							</p>
							<p className="m-0">
								<span className="font-medium">✓</span> {t("features.12")}
							</p>
						</div>
						<p className="m-0 self-stretch uppercase font-bold">{t("checkInDates")}</p>
					</div>
				</div>
				<div className="self-stretch flex flex-row items-center justify-between py-14 gap-5 max-w-full">
					<button
						onClick={() => moveGallery("left")}
						className="cursor-pointer bg-transparent border-none p-2"
						aria-label="Previous image"
					>
						<ChevronLeft className="h-6 w-6" />
					</button>
					<div className="w-full overflow-hidden">
						<div
							className="flex transition-transform duration-300 ease-in-out"
							style={{ transform: `translateX(-${currentIndex * (imageWidth + gapWidth)}px)` }}
						>
							{images.map((src, index) => (
								<img
									key={index}
									className="w-[100.5px] flex-shrink-0 object-cover mr-6 last:mr-0"
									loading="lazy"
									alt={`Gallery image ${index + 1}`}
									src={src || "/placeholder.svg"}
								/>
							))}
						</div>
					</div>
					<button
						onClick={() => moveGallery("right")}
						className="cursor-pointer bg-transparent border-none p-2"
						aria-label="Next image"
					>
						<ChevronRight className="h-6 w-6" />
					</button>
				</div>
				<div className="self-stretch flex flex-col items-start justify-between py-1 min-h-[62px]">
					<button className="cursor-pointer border-none py-5 px-9 bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500 shadow-md rounded-full flex items-center justify-center">
						<div className="text-sm uppercase font-medium text-black text-center">{t("learnMore")}</div>
					</button>
				</div>
			</div>
		</section>
	)
}

export default AstroYogaSection
