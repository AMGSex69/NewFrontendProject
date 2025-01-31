'use client'

import { useTranslations } from "next-intl"
import { useCallback } from "react"

export type ContactInfoType = {
	className?: string
}

const ContactInfo: React.FC<ContactInfoType> = ({ className = "" }) => {
	const t = useTranslations()

	const scrollTo = useCallback((selector: string) => {
		const anchor = document.querySelector(selector)
		if (anchor) {
			anchor.scrollIntoView({ block: "start", behavior: "smooth" })
		}
	}, [])

	const onTextClick = useCallback(() => scrollTo("[data-scroll-to='aboutMeSection']"), [scrollTo])
	const onTextClick1 = useCallback(() => scrollTo("[data-scroll-to='servicesSection']"), [scrollTo])
	const onTextClick2 = useCallback(() => scrollTo("[data-scroll-to='astrologerConspectsSection']"), [scrollTo])
	const onTextClick3 = useCallback(() => scrollTo("[data-scroll-to='astroYogaSection']"), [scrollTo])
	const onTextClick4 = () => {
		window.location.href = "https://www.instagram.com/p/C6RWBDVsACw/?igsh=cWFyc3M1cXdzYnoy"
	}

	return (
		<div
			className={`flex-1 flex flex-row items-start justify-between min-w-[515px] max-w-full gap-5 text-left text-xl text-dimgray-100 font-playfair-display mq750:flex-wrap mq1050:min-w-full ${className}`}
		>
			<div className="w-[106px] flex flex-col items-start justify-start gap-[13px]">
				<div className="relative tracking-[0.05em] inline-block min-w-[60px] mq450:text-base">{t("menu")}</div>
				<div className="self-stretch flex flex-col items-start justify-start gap-3 text-base text-black font-ibm-plex-sans">
					<a
						onClick={onTextClick}
						className="[text-decoration:none] cursor-pointer self-stretch relative text-[inherit]"
					>
						{t("home")}
					</a>
					<div className="self-stretch relative cursor-pointer" onClick={onTextClick}>
						{t("aboutMe")}
					</div>
					<div className="relative inline-block min-w-[106px] cursor-pointer" onClick={onTextClick1}>
						{t("consultations")}
					</div>
					<div className="self-stretch relative cursor-pointer" onClick={onTextClick2}>
						{t("notes")}
					</div>
					<div className="relative inline-block min-w-[106px] cursor-pointer" onClick={onTextClick3}>
						{t("yogaRetreats")}
					</div>
					<div onClick={onTextClick4} className="self-stretch cursor-pointer relative">
						{t("reviews")}
					</div>
				</div>
			</div>
			<div className="w-[188px] flex flex-col items-start justify-start gap-[13px]">
				<div className="relative tracking-[0.05em] inline-block min-w-[104px] mq450:text-base">{t("contacts")}</div>
				<div className="self-stretch flex flex-col items-start justify-start gap-3 text-base text-black font-ibm-plex-sans">
					<div className="self-stretch relative">+7 (999) 445-54-94</div>
					<div className="relative whitespace-nowrap">yurlavaaksana@yandex.ru</div>
				</div>
			</div>
			<div className="flex flex-row items-center justify-start gap-3 text-base text-black font-ibm-plex-sans">
				<div className="flex flex-col items-start justify-start gap-[21px]">
					<div className="relative inline-block min-w-[67px]">{t("telegram")}</div>
					<div className="relative inline-block min-w-[62px]">{t("youtube")}</div>
					<div className="relative inline-block min-w-[75px]">{t("instagram")}</div>
				</div>
				<div className="w-10 flex flex-col items-center justify-start py-0 px-1.5 box-border gap-[22px]">
					<img className="w-[21px] h-[21px] relative" alt="" src="/telegram-1.svg" />
					<img className="w-[26.8px] h-[19.7px] relative" alt="" src="/youtube-1.svg" />
					<img className="w-[20.2px] h-[20.2px] relative" alt="" src="/instagram-1.svg" />
				</div>
			</div>
		</div>
	)
}

export default ContactInfo
