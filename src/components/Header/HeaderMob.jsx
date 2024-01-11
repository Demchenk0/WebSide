import React from 'react'
import s from './Header.module.scss';

const HeaderMob = () => {
  return (
    <header className={s.header}>
			<div className={s.container}>
				<a href="/">
					<Image src={Logo} alt="logo" />
				</a>
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
  )
}

export default HeaderMob
