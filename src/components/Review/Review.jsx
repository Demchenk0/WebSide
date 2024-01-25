'use client';
import React from 'react';
import s from './Review.module.scss';

// import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import Swiper from './MySwiper';

const Review = () => {
	const isBigScreen = useMediaQuery({ query: '(min-width: 1300px)' });
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1299px)' });
	return (
		<section className={s.section}>
		{isTabletOrMobile && <div className={s.container}>
				<div className={s.box}>
					<h1 className={s.title}>Відгуки клієнтів</h1>
					<button className={s.btn}>Детальніше</button>
				</div>
				<ul className={s.list}>
					<li className={s.item}>
						<span className={s.img}></span>
						<p className={s.text}>Олександра</p>
						<span className={s.span}>23.11.2023</span>
						<p className={s.text}>
							Чудовий сервіс! Швидке обслуговування!Все на дуже високому рівні!
						</p>
					</li>
					<li className={s.item}>
						<span className={s.img}></span>
						<p className={s.text}>Олександра</p>
						<span className={s.span}>23.11.2023</span>
						<p className={s.text}>
							Чудовий сервіс! Швидке обслуговування!Все на дуже високому рівні!
						</p>
					</li>
					<li className={s.item}>
						<span className={s.img}></span>
						<p className={s.text}>Олександра</p>
						<span className={s.span}>23.11.2023</span>
						<p className={s.text}>
							Чудовий сервіс! Швидке обслуговування!Все на дуже високому рівні!
						</p>
					</li>
				</ul>
			</div>}
			{isBigScreen && <Swiper />}
			
			
		</section>
	);
};

export default Review;
