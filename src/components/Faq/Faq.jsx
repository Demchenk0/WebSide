'use client';
import React, { useState } from 'react';
import s from './Faq.module.scss';
import Image from 'next/image';
import Arrow from '../../img/Arrow.svg';

const Faq = () => {
	const [isTextVisible1, setTextVisibility1] = useState(false);
	const [isTextVisible2, setTextVisibility2] = useState(false);
	const [isTextVisible3, setTextVisibility3] = useState(false);
	const [isTextVisible4, setTextVisibility4] = useState(false);
	const [isTextVisible5, setTextVisibility5] = useState(false);

	const toggleTextVisibility1 = () => {
		setTextVisibility1(!isTextVisible1);
	};

	const toggleTextVisibility2 = () => {
		setTextVisibility2(!isTextVisible2);
	};
	const toggleTextVisibility3 = () => {
		setTextVisibility3(!isTextVisible3);
	};
	const toggleTextVisibility4 = () => {
		setTextVisibility4(!isTextVisible4);
	};
	const toggleTextVisibility5 = () => {
		setTextVisibility5(!isTextVisible5);
	};
	return (
		<section className={s.section}>
			<div className={s.container}>
				<h1 className={s.title}>
					Поширені <br /> запитання
				</h1>
				<ul className={s.list}>
					<li className={s.item} onClick={toggleTextVisibility1}>
						<div className={s.itemBox}>
							<h3 className={s.titleSecondary}>Як оформити замовлення?</h3>
							<Image
								src={Arrow}
								alt="Arrow"
								className={isTextVisible1 ? `${s.rotated}` : ''}
							/>
						</div>
						{isTextVisible1 && (
							<div className={s.hidden}>
								<p className={s.text}>
									Заповнити <span>заявку</span> на сайті чи подзвонити по
									вказаному номеру телефону +380951726633
								</p>
							</div>
						)}
					</li>
					<li className={s.item} onClick={toggleTextVisibility2}>
						<div className={s.itemBox}>
							<h3 className={s.titleSecondary}>
								На які свята я можу замовити кейтерінг?
							</h3>
							<Image
								src={Arrow}
								alt="Arrow"
								className={isTextVisible2 ? `${s.rotated}` : ''}
							/>
						</div>
						{isTextVisible2 && (
							<div className={s.hidden}>
								<p className={s.text}>
									Заповнити <span>заявку</span> на сайті чи подзвонити по
									вказаному номеру телефону +380951726633
								</p>
							</div>
						)}
					</li>
					<li className={s.item} onClick={toggleTextVisibility3}>
						<div className={s.itemBox}>
							<h3 className={s.titleSecondary}>Які страви Ви пропонуєте</h3>
							<Image
								src={Arrow}
								alt="Arrow"
								className={isTextVisible3 ? `${s.rotated}` : ''}
							/>
						</div>
						{isTextVisible3 && (
							<div className={s.hidden}>
								<p className={s.text}>
									Заповнити <span>заявку</span> на сайті чи подзвонити по
									вказаному номеру телефону +380951726633
								</p>
							</div>
						)}
					</li>
					<li className={s.item} onClick={toggleTextVisibility4}>
						<div className={s.itemBox}>
							<h3 className={s.titleSecondary}>
								Які умови скасування або заміни замовлення?
							</h3>
							<Image
								src={Arrow}
								alt="Arrow"
								className={isTextVisible4 ? `${s.rotated}` : ''}
							/>
						</div>
						{isTextVisible4 && (
							<div className={s.hidden}>
								<p className={s.text}>
									Заповнити <span>заявку</span> на сайті чи подзвонити по
									вказаному номеру телефону +380951726633
								</p>
							</div>
						)}
					</li>
					<li className={s.item} onClick={toggleTextVisibility5}>
						<div className={s.itemBox}>
							<h3 className={s.titleSecondary}>
								Які способи оплати ви приймаєте?
							</h3>
							<Image
								src={Arrow}
								alt="Arrow"
								className={isTextVisible5 ? `${s.rotated}` : ''}
							/>
						</div>
						{isTextVisible5 && (
							<div className={s.hidden}>
								<p className={s.text}>
									Заповнити <span>заявку</span> на сайті чи подзвонити по
									вказаному номеру телефону +380951726633
								</p>
							</div>
						)}
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Faq;
