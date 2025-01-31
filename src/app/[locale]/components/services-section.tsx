'use client'

import { useTranslations } from 'next-intl';
import { useState, useCallback } from "react";
import Karma from "./karma";
import PortalPopup from "./portal-popup";
import ExpressConsultation1 from "./express-consultation1";
import AstrologicalForecast from "./astrological-forecast";

export type ServicesSectionType = {
	className?: string;
};

const ServicesSection: React.FC<ServicesSectionType> = ({ className = "" }) => {
	const t = useTranslations('services');
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
					{t('title')}
				</h1>
				<div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-x-6 gap-y-[22.7px] min-h-[1882px] text-center text-xl text-black">
					<ExpressConsultation1
						image="/image@2x.png"
						prop={t('items.0.title')}
						prop2={t('items.0.price')}
					/>
					<ExpressConsultation1
						image="/image-1@2x.png"
						propAlignSelf="stretch"
						propOverflow="hidden"
						propWidth="unset"
						prop={t('items.1.title')}
						prop2={t('items.1.price')}
					/>
					<AstrologicalForecast
						image="/image-2@2x.png"
						prop={t('items.2.title')}
						prop1={t('items.2.price')}
					/>
					<div className="h-[442px] w-[262px] rounded-xl bg-oldlace overflow-hidden shrink-0 flex flex-col items-center justify-start pt-0 px-0 pb-[26px] box-border gap-[26px] text-mini text-darksalmon font-ibm-plex-sans">
						<div className="self-stretch flex-1 flex flex-row items-center justify-center pt-[84.5px] px-5 pb-[84px] bg-[url('/imagetext@3x.png')] bg-cover bg-no-repeat bg-[top]">
							<div className="relative font-semibold inline-block min-w-[53px]">
								{t('karma.title')}
							</div>
						</div>
						<div className="self-stretch flex flex-col items-start justify-start py-0 px-3 gap-[13px] text-xl text-black font-playfair-display">
							<div className="self-stretch relative font-semibold mq450:text-base">
								{t('karma.description')}
							</div>
							<div className="self-stretch relative font-ibm-plex-sans text-dimgray-100 mq450:text-base">
								{t('karma.price')}
							</div>
						</div>
						<button
							className="cursor-pointer [border:none] p-[15px] bg-beige-100 rounded-31xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-tan"
							onClick={openKarma}
						>
							<div className="relative text-mini font-ibm-plex-sans text-black text-left inline-block min-w-[128px]">
								{t('karma.button')}
							</div>
						</button>
					</div>
					<AstrologicalForecast
						image="/image-3@2x.png"
						propAlignSelf="stretch"
						propOverflow="hidden"
						propWidth="unset"
						prop={t('items.3.title')}
						prop1={t('items.3.price')}
					/>
					<ExpressConsultation1
						image="/image-4@2x.png"
						propAlignSelf="stretch"
						propOverflow="hidden"
						propWidth="unset"
						prop={t('items.4.title')}
						prop2={t('items.4.price')}
					/>
					<ExpressConsultation1
						image="/image-5@2x.png"
						propAlignSelf="stretch"
						propOverflow="hidden"
						propWidth="unset"
						prop={t('items.5.title')}
						prop2={t('items.5.price')}
					/>
					<AstrologicalForecast
						image="/image-6@2x.png"
						propAlignSelf="stretch"
						propOverflow="hidden"
						propWidth="unset"
						prop={t('items.6.title')}
						prop1={t('items.6.price')}
					/>
					<ExpressConsultation1
						image="/image-7@2x.png"
						propAlignSelf="stretch"
						propOverflow="hidden"
						propWidth="unset"
						prop={t('items.7.title')}
						prop2={t('items.7.price')}
					/>
					<AstrologicalForecast
						image="/image-8@2x.png"
						propAlignSelf="stretch"
						propOverflow="hidden"
						propWidth="unset"
						prop={t('items.8.title')}
						prop1={t('items.8.price')}
					/>
					<AstrologicalForecast
						image="/image-9@2x.png"
						propAlignSelf="stretch"
						propOverflow="hidden"
						propWidth="unset"
						prop={t('items.9.title')}
						prop1={t('items.9.price')}
					/>
					<ExpressConsultation1
						image="/image-10@2x.png"
						propAlignSelf="stretch"
						propOverflow="hidden"
						propWidth="unset"
						prop={t('items.10.title')}
						prop2={t('items.10.price')}
					/>
					<ExpressConsultation1
						image="/image-11@2x.png"
						propAlignSelf="unset"
						propOverflow="unset"
						propWidth="282px"
						prop={t('items.11.title')}
						prop2={t('items.11.price')}
					/>
					<AstrologicalForecast
						image="/image-12@2x.png"
						propAlignSelf="unset"
						propOverflow="unset"
						propWidth="269px"
						prop={t('items.12.title')}
						prop1={t('items.12.price')}
					/>
					<ExpressConsultation1
						image="/image-13@2x.png"
						propAlignSelf="unset"
						propOverflow="unset"
						propWidth="269px"
						prop={t('items.13.title')}
						prop2={t('items.13.price')}
					/>
					<AstrologicalForecast
						image="/image-14@2x.png"
						propAlignSelf="unset"
						propOverflow="unset"
						propWidth="269px"
						prop={t('items.14.title')}
						prop1={t('items.14.price')}
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