'use client';
import React from 'react';
import s from './About.module.scss';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import AboutMob1 from '../../img/aboutMob1.jpg';
import AboutMob2 from '../../img/aboutMob2.jpg';
import AboutDes1 from '../../img/aboutDes1.jpg';
import AboutDes2 from '../../img/aboutDes2.jpg';

const About = () => {
	const isBigScreen = useMediaQuery({ query: '(min-width: 1300px)' });
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1299px)' });
	return (
		<section className={s.section}>
			{isBigScreen && (
				<div className={s.boxImg}>
					<Image src={AboutDes1} alt="about2" />
					<Image src={AboutDes2} alt="about2" />
				</div>
			)}
			{isTabletOrMobile && (
				<div className={s.boxImg}>
					<Image src={AboutMob1} alt="about1" />
					<Image src={AboutMob2} alt="about2" />
				</div>
			)}

			<div className={s.container}>
				<p className={s.text}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetu
					nostrud Lorem ipsum dolor sit amet nostrud{' '}
				</p>
				<div className={s.boxText}>
					<h1>Про нас </h1>
					<button>Детальніше</button>
				</div>
			</div>
		</section>
	);
};

export default About;

{
	/* <div style={{width: 320, height: 558, position: 'relative'}}>
  <div style={{width: 320, height: 533, left: 0, top: 25, position: 'absolute', background: '#771010'}} />
  <img style={{width: 198, height: 298, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(0deg, #EAE6DF 0%, #EAE6DF 100%)'}} src="https://via.placeholder.com/198x298" />
  <img style={{width: 107, height: 298, left: 213, top: 0, position: 'absolute', background: 'linear-gradient(0deg, #EAE6DF 0%, #EAE6DF 100%)'}} src="https://via.placeholder.com/107x298" />
  <div style={{width: 293, height: 230, left: 12, top: 313, position: 'absolute'}}>
    <div style={{width: 290, left: 3, top: 46, position: 'absolute', color: 'white', fontSize: 15, fontFamily: 'Montserrat', fontWeight: '400', lineHeight: 22.50, wordWrap: 'break-word'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetu nostrud Lorem ipsum dolor sit amet nostrud </div>
    <div style={{width: 293, height: 36, left: 0, top: 0, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 71, display: 'inline-flex'}}>
      <div style={{color: 'white', fontSize: 24, fontFamily: 'Montserrat', fontWeight: '500', textTransform: 'uppercase', lineHeight: 36.48, letterSpacing: 1.20, wordWrap: 'break-word'}}>Про нас</div>
      <div style={{textAlign: 'center', color: 'white', fontSize: 15, fontFamily: 'Montserrat', fontWeight: '600', textDecoration: 'underline', lineHeight: 22.50, wordWrap: 'break-word'}}>Детальніше</div>
    </div>
  </div>
</div> */
}
