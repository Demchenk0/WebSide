import React from 'react';
import s from './Advantages.module.scss';

const Advantages = () => {
	return (
		<section className={s.section}>
			<div className={s.container}>
				<h1 className={s.title}>Наші переваги</h1>
				<ul className={s.list}>
					<li className={s.item}>
						<h3>Реалізація будь-яких заходів</h3>
						<p>Від домашніх посиділок до масштабних корпоративних заходів</p>
					</li>
					<li className={s.item}>
						<h3>Співпраця з локаціями</h3>
						<p>
							Можливість працювати на різних місцях, включа.чи івент простори,
							відпочинкові бази та інші місця
						</p>
					</li>
					<li className={s.item}>
						<h3>Великий вибір</h3>
						<p>
							Банкет, фуршет, весілля, день народження все можно замовити в
							одному місці
						</p>
					</li>
					<li className={s.item}>
						<h3>Репутація та рекомендації</h3>
						<p>
							Відгуки клієнтів, що підкреслюють надійсніть та високу якість
							послуг
						</p>
					</li>
					<li className={s.item}>
						<h3>Різноманітність меню</h3>
						<p>Широкий вибір страв та меню під будь-які заходи</p>
					</li>
					<li className={s.item}>
						<h3>Швидке замовлення</h3>
						<p>Можливість замовити кейтерінг за декілька хвилин</p>
					</li>
				</ul>
                <button className={`${s.button} ${s.animate}`}>Залишити заявку</button>
			</div>
		</section>
	);
};

export default Advantages;
