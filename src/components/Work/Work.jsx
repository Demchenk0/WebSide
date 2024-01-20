'use client';
import React from 'react';
import s from './Work.module.scss';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import Work1 from '../../img/work1.jpg';
import Work2 from '../../img/work2.jpg';
import Work3 from '../../img/work3.jpg';
import Work4 from '../../img/work4.jpg';
import Work5 from '../../img/work5.jpg';
import Work6 from '../../img/work6.jpg';
import Work7 from '../../img/work7.jpg';
import WorkDesc1 from '../../img/workDesc1.jpg';
import WorkDesc2 from '../../img/workDesc2.jpg';
import WorkDesc3 from '../../img/workDesc3.jpg';
import WorkDesc4 from '../../img/workDesc4.jpg';
import WorkDesc5 from '../../img/workDesc5.jpg';
import WorkDesc6 from '../../img/workDesc6.jpg';

const Work = () => {
	const isBigScreen = useMediaQuery({ query: '(min-width: 1300px)' });
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1299px)' });
	return (
		<section className={s.section}>
			<div className={s.container}>
			{isTabletOrMobile && <div className={s.wrapper}>
					<Image src={Work1} alt="work1" className={s.img1} />
					<Image src={Work2} alt="work2" className={s.img2} />
					<Image src={Work3} alt="work3" className={s.img3} />
					<Image src={Work4} alt="work4" className={s.img4} />
					<Image src={Work5} alt="work5" className={s.img5} />
					<Image src={Work6} alt="work6" className={s.img6} />
					<Image src={Work7} alt="work7" className={s.img7} />
				</div>}
			{isBigScreen && <div className={s.wrapper}>
					<Image src={WorkDesc1} alt="work1" className={s.img1} />
					<Image src={WorkDesc2} alt="work2" className={s.img2} />
					<Image src={WorkDesc3} alt="work3" className={s.img3} />
					<Image src={WorkDesc4} alt="work4" className={s.img4} />
					<Image src={WorkDesc5} alt="work5" className={s.img5} />
					<Image src={WorkDesc6} alt="work6" className={s.img6} />
				</div>}
				
				
			</div>
		</section>
	);
};

export default Work;
