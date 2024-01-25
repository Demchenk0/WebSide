'use client';
import React from 'react';
import Left from '../../img/leftSmall.svg';
import Right from '../../img/rightSmall.svg';
import Image from 'next/image';
import { register } from 'swiper/element/bundle';
import { useEffect, useRef } from 'react';
import s from './Review.module.scss';

register();

const MySwiper = () => {
	const swiperRef = useRef(null);

	useEffect(() => {
		const swiperContainer = swiperRef.current;
		const params = {
			navigation: true,
			pagination: true,
			slidesPerView: 3,
			pagination: { clickable: true },
			//add thi
			injectStyles: [
				`
        .swiper {
          display: flex;
          justify-content: end;
          flex-direction: column;
        }
        .swiper-wrapper{
          gap:15px;
        }
          .swiper-button-next,
          .swiper-button-prev {
            background-repeat: no-repeat;
            padding: 8px 16px;
            background-color: white;
            background-position: center;
            padding: 0;
            background-size: 40px;
            top: auto;
            height: 20px;
            width: 44px;
            margin-left: 384px;
            margin-right: 384px;
          }
          svg {
            display: none;
          }
          .button-prev {
            position: absolute;
            wight: 100%;
            margin: 0;
            z-index: 10;
          }

          .swiper-button-prev {
            background-image: url("/leftSmall.svg");
          }

          .swiper-button-next {
            background-image: url("/rightSmall.svg");
          }
          
          .swiper-button-next::after,
          .swiper-button-prev::after {
            content: "";
          }
          .swiper-pagination{
            display: flex;
            align-items: center;
            gap: 15px;
            justify-content: center;
            margin-top: 20px;
            position: unset;
            z-index: auto;
          }
          .swiper-pagination-bullet{
            width: 12px;
            height: 12px;
            background-color: #d9d9d9;
          }
          .swiper-pagination-bullet-active{
            width: 20px;
            height: 20px;
            background-color: #d9d9d9;
          }
      `,
			],
		};

		Object.assign(swiperContainer, params);
		swiperContainer.initialize();
	}, []);

	return (
		<div className={s.container}>
			<div className={s.box}>
				<h1 className={s.title}>Відгуки клієнтів</h1>
				<button className={s.btn}>Детальніше</button>
			</div>
			<swiper-container ref={swiperRef} init="false">
				<swiper-slide>
					<div className={s.item}>
						<span className={s.img}></span>
						<p className={s.text}>Олександра</p>
						<span className={s.span}>23.11.2023</span>
						<p className={s.text}>
							Чудовий сервіс! Швидке обслуговування! Все на дуже високому рівні.
							Гостям дуже сподобалось, всі детальніше
						</p>
					</div>
				</swiper-slide>
				<swiper-slide>
					<div className={s.item}>
						<span className={s.img}></span>
						<p className={s.text}>Олександра</p>
						<span className={s.span}>23.11.2023</span>
						<p className={s.text}>
            Чудовий сервіс! 
Швидке обслуговування!Все на дуже високому рівні. Гостям дуже сподобалось, всі смачно поїли та відпочили. Дякуємо організаторам за таке свято!
						</p>
					</div>
				</swiper-slide>
				<swiper-slide>
					<div className={s.item}>
						<span className={s.img}></span>
						<p className={s.text}>Олександра</p>
						<span className={s.span}>23.11.2023</span>
						<p className={s.text}>
							Чудовий сервіс! Швидке обслуговування!Все на дуже високому рівні!
						</p>
					</div>
				</swiper-slide>
				<swiper-slide>
					<div className={s.item}>
						<span className={s.img}></span>
						<p className={s.text}>Олександра</p>
						<span className={s.span}>23.11.2023</span>
						<p className={s.text}>
							Чудовий сервіс! Швидке обслуговування!Все на дуже високому рівні!
						</p>
					</div>
				</swiper-slide>
				<swiper-slide>
					<div className={s.item}>
						<span className={s.img}></span>
						<p className={s.text}>Олександра</p>
						<span className={s.span}>23.11.2023</span>
						<p className={s.text}>
							Чудовий сервіс! Швидке обслуговування!Все на дуже високому рівні!
						</p>
					</div>
				</swiper-slide>
				<swiper-slide>
					<div className={s.item}>
						<span className={s.img}></span>
						<p className={s.text}>Олександра</p>
						<span className={s.span}>23.11.2023</span>
						<p className={s.text}>
							Чудовий сервіс! Швидке обслуговування!Все на дуже високому рівні!
						</p>
					</div>
				</swiper-slide>
			</swiper-container>
		</div>
	);
};

export default MySwiper;

// <Image src={Left} alt="left" />
// 			<Image src={Right} alt="right" />
