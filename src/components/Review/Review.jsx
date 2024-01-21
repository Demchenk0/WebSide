'use client';
import React from 'react';
import s from './Review.module.scss';
import Left from '../../img/leftSmall.svg';
import Right from '../../img/rightSmall.svg';
import Image from 'next/image';
const Review = () => {
	return (
		<section className={s.section}>
			<Image src={Left} alt="left" />
			<Image src={Right} alt="right" />
			<div className={s.container}>
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
			</div>
		</section>
	);
};

export default Review;
