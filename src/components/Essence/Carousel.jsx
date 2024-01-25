'use client';

// import React from 'react';
// import s from './Essence.module.scss';
import Image from 'next/image';
import Photo from '../../img/hero.jpg';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

// const settings = {
// 	dots: true,
// 	infinite: true,
// 	speed: 500,
// 	slidesToShow: 1,
// 	slidesToScroll: 1,
// };

const Carousel = () => {
	return (
		<>
			<Swiper
				spaceBetween={50}
				slidesPerView={3}
				onSlideChange={() => console.log('slide change')}
				onSwiper={swiper => console.log(swiper)}
               
			>
				<SwiperSlide>
					<div>
						<Image src={Photo} width={100} height={100} alt="foto" />
						<div>
							<h3>Slick</h3>
							<p>We use</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>Slide 2</SwiperSlide>
				<SwiperSlide>Slide 3</SwiperSlide>
				<SwiperSlide>Slide 4</SwiperSlide>
				...
			</Swiper>
		</>
		// <div>
		// 	<h2> Single Item</h2>
		// 	<Slider {...settings}>
		// 		<div>
		// 			<Image src={Photo} width={100} height={100} alt="foto" />
		//             <div>
		//             <h3>Slick</h3>
		//                 <p>We use</p>
		//                 </div>
		// 		</div>
		//         <div className={s.card}>
		// 			<Image src={Photo} width={100} height={100} alt="foto" />
		//             <div>
		//             <h3>Slick</h3>
		//                 <p>We use</p>
		//                 </div>
		// 		</div><div className={s.card}>
		// 			<Image src={Photo} width={100} height={100} alt="foto" />
		//             <div>
		//             <h3>Slick</h3>
		//                 <p>We use</p>
		//                 </div>
		// 		</div><div className={s.card}>
		// 			<Image src={Photo} width={100} height={100} alt="foto" />
		//             <div>
		//             <h3>Slick</h3>
		//                 <p>We use</p>
		//                 </div>
		// 		</div><div className={s.card}>
		// 			<Image src={Photo} width={100} height={100} alt="foto" />
		//             <div>
		//             <h3>Slick</h3>
		//                 <p>We use</p>
		//                 </div>
		// 		</div><div className={s.card}>
		// 			<Image src={Photo} width={100} height={100} alt="foto" />
		//             <div>
		//             <h3>Slick</h3>
		//                 <p>We use</p>
		//                 </div>
		// 		</div>
		// 	</Slider>
		// </div>
	);
};
export default Carousel;

// function Carousel  ()  {
//   return (
//     <div>
//         <h2> Single Item</h2>
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//       </div>
//   )
// }
