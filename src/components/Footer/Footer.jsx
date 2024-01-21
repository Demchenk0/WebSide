'use client';
import React from 'react';
import s from './Footer.module.scss';
import Image from 'next/image';
import Map from '../../img/map.jpg';
import Logo from '../../img/Logo.svg';
import FB from '../../img/facebook.svg';
import Inst from '../../img/instagram.svg';
import MapDecs from '../../img/mapDesc.jpg';
import { useMediaQuery } from 'react-responsive';

const Footer = () => {
	const isBigScreen = useMediaQuery({ query: '(min-width: 1300px)' });
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1299px)' });
	return (
		<section className={s.section}>
			<div className={s.container}>
				{isTabletOrMobile && <Image src={Map} alt="map" className={s.map} />}
				{isBigScreen && <Image src={MapDecs} alt="map" className={s.map} />}
				<div>
					<Image src={Logo} alt="logo" className={s.logo} />
					<div className={s.inf}>
						<div>
							<p className={s.text}>Приїжджайте до нас на адресу</p>
							<p className={s.textSecondary}>м.Луцьк, вул.Лесі Українки, 17</p>
						</div>
						<div>
							<p className={s.text}>Дзвоніть</p>
							<p className={s.textSecondary}>+ 38 (095) 234 23 23</p>
						</div>
						<div>
							<p className={s.text}>Пишіть</p>
							<p className={s.textSecondary}>cateringco@gmail.com</p>
						</div>
						<div>
							<p className={s.text}>Му у соц.мережах</p>
							<div className={s.svg}>
								<Image src={Inst} alt="logo" />
								<Image src={FB} alt="logo" />
							</div>
						</div>
					</div>
					<ul className={s.list}>
						<li>Послуги</li>
						<li>Про нас</li>
						<li>Галерея</li>
						<li>Чому саме ми?</li>
						<li>Відгуки</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Footer;
