'use client'
import type { NextPage } from "next";
import { useRef } from "react";
import { useTranslations } from 'next-intl';

export type AboutMeSectionType = {
	className?: string;
};

const AboutMeSection: NextPage<AboutMeSectionType> = ({ className = "" }) => {
	const scrollContainerRef = useRef<HTMLDivElement>(null)
	const t = useTranslations("aboutMe")

	const scrollLeft = () => {
		if (scrollContainerRef.current) {
			scrollContainerRef.current.scrollBy({ left: -150, behavior: "smooth" })
		}
	}

	const scrollRight = () => {
		if (scrollContainerRef.current) {
			scrollContainerRef.current.scrollBy({ left: 150, behavior: "smooth" })
		}
	}

	return (
		<section
			className={`self-stretch bg-oldlace flex flex-col items-start justify-start py-9 px-4 sm:px-8 md:px-16 lg:px-40 box-border gap-[22px] max-w-full text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-dimgray-100 font-playfair-display ${className}`}
			data-scroll-to="aboutMeSection"
		>
			<h1 className="m-0 w-full sm:w-[357px] relative text-inherit tracking-[0.05em] font-normal font-inherit inline-block max-w-full">
				{t("greeting")}
			</h1>
			<div className="self-stretch flex flex-col lg:flex-row items-start justify-start gap-[30px] lg:gap-[119px] max-w-full text-xl text-black">
				<div className="flex-1 flex flex-col items-start justify-start gap-10 min-w-[300px] max-w-full">
					<div className="self-stretch flex flex-col items-start justify-start gap-[26px]">
						<div className="relative text-lg sm:text-xl">{t("hello")}</div>
						<div className="self-stretch relative text-sm sm:text-base font-ibm-plex-sans text-dimgray-300">
							{t("introduction")}
						</div>
					</div>
					<div className="flex flex-col items-center justify-start gap-[26px] max-w-full text-sm">
						<div className="flex flex-row items-center justify-start gap-2 max-w-full">
							<img
								className="h-[25px] w-[25px] object-contain cursor-pointer"
								alt="Scroll Left"
								src="/certificate-images@2x.png"
								onClick={scrollLeft}
							/>
							<div
								className="w-full sm:w-[438.4px] overflow-hidden flex flex-row items-center justify-start gap-[58.4px] max-w-[calc(100%_-_66px)]"
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
							<div className="flex flex-row items-center justify-center py-5 px-0">
								<img
									className="h-[25px] w-[25px] relative rounded-12xs-3 object-contain cursor-pointer"
									alt="Scroll Right"
									src="/polygon-1.svg"
									onClick={scrollRight}
								/>
							</div>
						</div>
						<div className="relative text-center">{t("certificatesTitle")}</div>
					</div>
				</div>
				<div className="w-full lg:w-[453px] flex flex-col items-start justify-start gap-[26px] max-w-full">
					<div className="relative inline-block max-w-full text-lg sm:text-xl">{t("helpTitle")}</div>
					<div className="self-stretch relative text-sm sm:text-base tracking-[-0.05px] text-dimgray-300 font-ibm-plex-sans">
						<p className="[margin-block-start:0] [margin-block-end:4px]">
							<span className="font-medium font-ibm-plex-sans">✓</span>
							<span> {t("helpItems.0")}</span>
						</p>
						<p className="[margin-block-start:0] [margin-block-end:4px]">
							<span className="font-medium font-ibm-plex-sans">✓</span>
							<span> {t("helpItems.1")}</span>
						</p>
						<p className="[margin-block-start:0] [margin-block-end:4px]">
							<span className="font-medium font-ibm-plex-sans">✓</span>
							<span> {t("helpItems.2")}</span>
						</p>
						<p className="[margin-block-start:0] [margin-block-end:4px]">
							<span className="font-medium font-ibm-plex-sans">✓</span>
							<span> {t("helpItems.3")}</span>
						</p>
						<p className="[margin-block-start:0] [margin-block-end:4px]">
							<span className="font-medium font-ibm-plex-sans">✓</span>
							<span> {t("helpItems.4")}</span>
						</p>
						<p className="[margin-block-start:0] [margin-block-end:4px]">
							<span className="font-medium font-ibm-plex-sans">✓</span>
							<span> {t("helpItems.5")}</span>
						</p>
						<p className="[margin-block-start:0] [margin-block-end:4px]">
							<span className="font-medium font-ibm-plex-sans">✓</span>
							<span> {t("helpItems.6")}</span>
						</p>
						<p className="[margin-block-start:0] [margin-block-end:4px]">
							<span className="font-medium font-ibm-plex-sans">✓</span>
							<span> {t("helpItems.7")}</span>
						</p>
						<p className="[margin-block-start:0] [margin-block-end:4px]">
							<span className="font-medium font-ibm-plex-sans">✓</span>
							<span> {t("helpItems.8")}</span>
						</p>
						<p className="[margin-block-start:0] [margin-block-end:4px]">
							<span className="font-medium font-ibm-plex-sans">✓</span>
							<span> {t("helpItems.9")}</span>
						</p>
						<p className="[margin-block-start:0] [margin-block-end:4px]">
							<span className="font-medium font-ibm-plex-sans">✓</span>
							<span> {t("helpItems.10")}</span>
						</p>
						<p className="[margin-block-start:0] [margin-block-end:4px]">
							<span className="font-medium font-ibm-plex-sans">✓</span>
							<span> {t("helpItems.11")}</span>
						</p>
						<p className="[margin-block-start:0] [margin-block-end:4px]">
							<span className="font-medium font-ibm-plex-sans">✓</span>
							<span> {t("helpItems.12")}</span>
						</p>
						<p className="[margin-block-start:0] [margin-block-end:4px]">
							<span className="font-medium font-ibm-plex-sans">✓</span>
							<span> {t("helpItems.13")}</span>
						</p>
						<p className="[margin-block-start:0] [margin-block-end:4px]">
							<span className="font-medium font-ibm-plex-sans">✓</span>
							<span> {t("helpItems.14")}</span>
						</p>
						<p className="m-0">
							<span className="font-medium font-ibm-plex-sans">✓</span>
							<span> {t("helpItems.15")}</span>
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutMeSection;
