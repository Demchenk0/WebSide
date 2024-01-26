'use client';
import React from 'react';
import s from './Header.module.scss';
import Image from 'next/image';
import Logo from '../../img/Logo.svg';
import Phone from '../../img/Phone.svg';

const Header = () => {
	return (
		<header className={s.header}>
			<div className={s.container}>
				<a href="/">
					<Image src={Logo} alt="logo" />
				</a>
				<nav>
					<ul className={s.list}>
						<li className={s.item}>
							<div className={s.dropdown}>
							<a href="/" className={s.item}>Послуги</a>
							<span className={s.point}></span>
								<ul className={s.content}>
									<li className={s.contentItem}>
										<a href="">Фуршет</a>
									</li>
									<li className={s.contentItem}>
										<a href="">Доставка в офіс</a>
									</li>
									<li className={s.contentItem}>
										<a href="">Здорове харчування</a>
									</li>
								</ul>
							</div>
						</li>
						<li className={s.item}>Про нас</li>
						<li className={s.item}>Галерея</li>
						<li className={s.item}>Відгуки</li>
					</ul>
				</nav>
				<div className={s.box}>
					<div className={s.boxNumber}>
						<Image src={Phone} alt="phone" />
						<div className={s.number}>095 234 23 23</div>
					</div>
					<p className={s.boxText}>
						Безкоштовний дзвінок зі стаціонарних та мобільних телефонів по всій
						території України
					</p>
				</div>
			</div>
		</header>
	);
};

export default Header;
