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
				<div className={s.textBox}>
					<h1 className={s.title}>Послуги</h1>
					<p className={s.text}>
						Оберіть те, що підходить саме Вам. Якщо важко зробити вибір, залиште
						заявку та ми Вам допоможемо
					</p>
				</div>

				<div className={s.service}>
					<div className={s.card}>
						<Image src={Service1} alt="phone" className={s.img} />
						<div className={s.boxText}>
							<p>Фуршет</p>
							<button>Детальніше</button>
						</div>
					</div>
					<div className={s.card}>
						<Image src={Service2} alt="phone" className={s.img} />
						<div className={s.boxText}>
							<p>Здорове  <br /> харчування</p>
							<button>Детальніше</button>
						</div>
					</div>
					<div className={s.card}>
						<Image src={Service3} alt="phone" className={s.img} />
						<div className={s.boxText}>
							<p>Доставка <br /> в офіси</p>
							<button>Детальніше</button>
						</div>
					</div>
				</div>
					<button className={`${s.button} ${s.animate}`}>
						Залишити заявку
					</button>
			</div>
		</section>
	);
};

export default Services;
