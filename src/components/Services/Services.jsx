import React from 'react';
import s from './Services.module.scss';
import Image from 'next/image';
import Service1 from '../../img/service1.jpg';
import Service2 from '../../img/service2.jpg';
import Service3 from '../../img/service3.jpg';

const Services = () => {
	return (
		<section className={s.section}>
			<div className={s.container}>
					<h1 className={s.title}>Послуги</h1>
					<p className={s.text}>
						Оберіть те, що підходить саме Вам. Якщо важко зробити вибір, залиште
						заявку та ми Вам допоможемо
					</p>
				<div className={s.service}>
					<div className={s.card}>
						<Image src={Service1} alt="phone" className={s.img} />
						<div className={s.boxText}>
							<p>Фуршет</p>
							<a href="/">Детальніше</a>
						</div>
					</div>
                    <div className={s.card}>
						<Image src={Service2} alt="phone" className={s.img} />
						<div className={s.boxText}>
							<p>Здорове харчування</p>
							<a href="/">Детальніше</a>
						</div>
					</div>
                    <div className={s.card}>
						<Image src={Service3} alt="phone" className={s.img} />
						<div className={s.boxText}>
							<p>Доставка в офіси</p>
							<a href="/">Детальніше</a>
						</div>
					</div>
                    <button className={`${s.button} ${s.animate}`}>Залишити заявку</button>
				</div>
			</div>
		</section>
	);
};

export default Services;
