import React from 'react';
import s from './Header.module.scss';
import Logo from '../../img/Logo.svg';
import Image from 'next/image';

const HeaderMob = () => {
	return (
		<header className={s.header}>
			<div className={s.container}>
				<a href="/">
					<Image src={Logo} alt="logo" width={107} height={40} />
				</a>
				<div class={s.hamburger}>
					<span class={s.hamburgerTop}></span>
					<span class={s.hamburgerMiddle}></span>
					<span class={s.hamburgerBottom}></span>
				</div>
			</div>
		</header>
	);
};

export default HeaderMob;
