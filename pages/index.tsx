import type { NextPage } from "next";
import { useState, useEffect } from "react";
import HeroSection from "../components/hero-section";
import AboutMeSection from "../components/about-me-section";
import ServicesSection from "../components/services-section";
import AstrologerConspectsSection from "../components/astrologer-conspects-section";
import AstroYogaSection from "../components/astro-yoga-section";
import FooterContent from "../components/footer-content";
import ContactInfo from "../components/contact-info";

const MainPage: NextPage = () => {

	// State to hold the current year
	const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

	// Update the current year when the component mounts
	useEffect(() => {
		setCurrentYear(new Date().getFullYear());
	}, []);


	return (

		<div className="w-full relative bg-oldlace overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-10 box-border leading-[normal] tracking-[normal]">
			<HeroSection />
			<AboutMeSection />
			<ServicesSection />
			<AstrologerConspectsSection />
			<AstroYogaSection />
			<footer className="self-stretch flex flex-col items-end justify-start gap-[7px] max-w-full text-center text-base text-black font-ibm-plex-sans">
				<div
					className="self-stretch flex flex-row items-start justify-start flex-wrap content-start py-10 px-40 box-border gap-40 max-w-full mq750:gap-20 mq750:pl-20 mq750:pr-20 mq750:box-border mq450:gap-10 mq450:pl-5 mq450:pr-5 mq450:box-border"
					data-scroll-to="infoContainer"
				>
					<FooterContent />
					<ContactInfo />
				</div>
				<div className="self-stretch flex flex-row items-start justify-center py-0 pl-[21px] pr-5">
					<div className="w-[339px] relative inline-block">
						<p className="m-0">{`© ${currentYear} Школа Астрологии Оксаны Юрловой `}</p>
						<p className="m-0">Дизайн и создание сайта - asyama</p>
					</div>
				</div>
			</footer>
		</div>
	);
};


