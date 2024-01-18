'use client';
import React, { useState } from 'react';
import s from './Header.module.scss';
import Logo from '../../img/Logo.svg';
import Image from 'next/image';
import Left from '../../img/left.svg';
import Right from '../../img/right.svg';
import Phone from '../../img/Phone.svg';

const HeaderMob = () => {
	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};

	return (
		<header className={s.header}>
			<div className={s.container}>
				{/* Modal */}
				<div className={s.icon} onClick={handleNav}>
					{nav ? (
						<>
							<a href="/">
								<Image src={Logo} alt="logo" className={s.logo} />
							</a>
							<Image src={Left} alt="left" />
						</>
					) : (
						<>
							<a href="/">
								<Image src={Logo} alt="logo" className={s.logo} />
							</a>
							<Image src={Right} alt="right" />
						</>
					)}
				</div>

				{/* Modal menu */}
				{nav && (
					<div className={s.mobmenu}>
						<button className={`${s.button} ${s.animate}`}>
							Залишити заявку
						</button>
						<ul className={s.listMob}>
							<li className={s.itemMob}>Послуги</li>
							<li className={s.itemMob}>Про нас</li>
							<li className={s.itemMob}>Галерея</li>
							<li className={s.itemMob}>Відгуки</li>
						</ul>
						<div className={s.box}>
							<div className={s.boxNumber}>
								<Image src={Phone} alt="phone" />
								<div className={s.number}>095 234 23 23</div>
							</div>
							<p className={s.boxText}>
								Безкоштовний дзвінок зі стаціонарних та мобільних телефонів по
								всій території України
							</p>
						</div>
					</div>
				)}
				{/* <div class={s.hamburger}>
					<span class={s.hamburgerTop}></span>
					<span class={s.hamburgerMiddle}></span>
					<span class={s.hamburgerBottom}></span>
				</div> */}
			</div>
		</header>
	);
};

export default HeaderMob;
