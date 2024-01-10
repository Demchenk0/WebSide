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
					<Image
						src={Logo}
						alt="logo"
					/>
				</a>
				<nav>
					<ul className={s.list}>
						<li className={s.item}>Послуги</li>
						<li className={s.item}>Про нас</li>
						<li className={s.item}>Галерея</li>
						<li className={s.item}>Відгуки</li>
					</ul>
				</nav>
				<div
					style={{
						width: 170,
						height: 54,
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						display: 'inline-flex',
					}}
				>
					<div
						style={{
							justifyContent: 'flex-start',
							alignItems: 'flex-start',
							gap: 19,
							display: 'inline-flex',
						}}
					>
						{/* <div style={{ width: 24, height: 24, position: 'relative' }}> */}
                        <Image src={Phone} alt="phone" />
						{/* </div> */}
						<div
							style={{
								color: '#3F3F3F',
								fontSize: 18,
								fontFamily: 'Montserrat',
								fontWeight: '400',
								wordWrap: 'break-word',
							}}
						>
							095 234 23 23
						</div>
					</div>
					<div
						style={{
							width: 170,
							opacity: 0.5,
							textAlign: 'center',
							color: '#3F3F3F',
							fontSize: 8,
							fontFamily: 'Montserrat',
							fontWeight: '400',
							wordWrap: 'break-word',
						}}
					>
						Безкоштовний дзвінок зі стаціонарних та мобільних телефонів по всій
						території України
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
