'use client';
import React from 'react';
import s from './Header.module.scss';
import Image from 'next/image';
import Logo from '../../img/Logo.svg';
import Phone from '../../img/Phone.svg';
import { useMediaQuery } from 'react-responsive'
// import HeaderMob from './HeaderMob';

const Header = () => {
    // const isDesktopOrLaptop = useMediaQuery({
    //     query: '(max-width: 756px)'
    //   })
	return (
		<header className={s.header}>
			<div className={s.container}>
				<a href="/">
					<Image src={Logo} alt="logo" />
				</a>
				<nav>
					<ul className={s.list}>
						<li className={s.item}>Послуги</li>
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
