import React from 'react';
import s from './Footer.module.scss';
import Image from 'next/image';
import Map from '../../img/map.jpg';
import Logo from '../../img/Logo.svg';
import FB from '../../img/facebook.svg';
import Inst from '../../img/instagram.svg';
const Footer = () => {
	return (
		<section className={s.section}>
			<div className={s.container}>
				<Image src={Map} alt="map" />
				<Image src={Logo} alt="logo" className={s.img} />
				<div className={s.inf}>
					<div>
						<p className={s.text}>Приїжджайте до нас на адресу</p>
						<p className={s.text}>м.Луцьк, вул.Лесі Українки, 17</p>
					</div>
					<div>
						<p className={s.text}>Дзвоніть</p>
						<p className={s.text}>+ 38 (095) 234 23 23</p>
					</div>
					<div>
						<p className={s.text}>Пишіть</p>
						<p className={s.text}>cateringco@gmail.com</p>
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
		</section>
	);
};

export default Footer;
