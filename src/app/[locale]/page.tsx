
import { useTranslations } from 'next-intl'
import Button from './components/Button'
import HeroSection from './components/hero-section'
import AboutMeSection from './components/about-me-section'
import ServicesSection from './components/services-section'
import AstrologerConspectsSectionType from './components/astrologer-conspects-section'
import AstroYogaSection from './components/astro-yoga-section'
import ContactInfo from './components/contact-info'
import FooterContent from './components/footer-content'


export default function DashboardPage() {
	const t = useTranslations('')
	return (
		<div className="w-full relative bg-oldlace overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-10 box-border leading-[normal] tracking-[normal]">
			{/* <HeroSection />
			<AboutMeSection />
			<ServicesSection />
			<AstrologerConspectsSection />
			<AstroYogaSection /> */}
			<footer className="self-stretch flex flex-col items-end justify-start gap-[7px] max-w-full text-center text-base text-black font-ibm-plex-sans">
				<div
					className="self-stretch flex flex-row items-start justify-start flex-wrap content-start py-10 px-40 box-border gap-40 max-w-full mq750:gap-20 mq750:pl-20 mq750:pr-20 mq750:box-border mq450:gap-10 mq450:pl-5 mq450:pr-5 mq450:box-border"
					data-scroll-to="infoContainer"
				>
					{/* <FooterContent />
					<ContactInfo /> */}
				</div>
				<div className="self-stretch flex flex-row items-start justify-center py-0 pl-[21px] pr-5">
					<div className="w-[339px] relative inline-block">
						<p className="m-0">{`© ${2025} Школа Астрологии Оксаны Юрловой `}</p>
						<p className="m-0">Дизайн и создание сайта - asyama</p>
						<a
							className="[text-decoration:none] relative text-[inherit] inline-block min-w-[66px] whitespace-nowrap cursor-pointer"
						>
							{t('About')}
						</a>
					</div>
				</div>
			</footer>
		</div>
	)
}
async function getStaticProps() {
	const locale = 'zn';

	return {
		props: {
			// You can get the messages from anywhere you like. The recommended pattern
			// is to put them in JSON files separated by locale (e.g. `en.json`).
			messages: (await import(`../../../messages/zn.json`)).default
		}
	};
}