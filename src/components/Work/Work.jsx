import React from 'react';
import s from './Work.module.scss';
import Image from 'next/image';
import Work1 from '../../img/work1.jpg';
import Work2 from '../../img/work2.jpg';
import Work3 from '../../img/work3.jpg';
import Work4 from '../../img/work4.jpg';
import Work5 from '../../img/work5.jpg';
import Work6 from '../../img/work6.jpg';
import Work7 from '../../img/work7.jpg';
const Work = () => {
	return (
		<section className={s.section}>
			<div className={s.container}>
				<div className={s.wrapper}>
					<Image src={Work1} alt="phone" className={s.img1} />
					<Image src={Work2} alt="phone" className={s.img2} />
					<Image src={Work3} alt="phone" className={s.img3} />
					<Image src={Work4} alt="phone" className={s.img4} />
					<Image src={Work5} alt="phone" className={s.img5} />
					<Image src={Work6} alt="phone" className={s.img6} />
					<Image src={Work7} alt="phone" className={s.img7} />
				</div>
			</div>
		</section>
	);
};

export default Work;
