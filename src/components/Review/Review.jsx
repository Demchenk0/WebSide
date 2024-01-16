import React from 'react';
import s from './Review.module.scss';
const Review = () => {
	return (
		<section className={s.section}>
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
