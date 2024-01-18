'use client';
import React from 'react';
import Slider from 'react-slick';
// import '~slick-carousel/slick/slick.css';
// import '~slick-carousel/slick/slick-theme.css';
import s from './Hero.module.scss';
import Image from 'next/image';
import Photo from '../../img/hero.jpg';



const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
};
const Carousel = () => {
	return (
		<div>
			<h2> Single Item</h2>
			<Slider {...settings}>
				<div>
					<Image src={Photo} width={100} height={100} alt="foto" />
                    <div>
                    <h3>Slick</h3>
                        <p>We use</p>
                        </div>
				</div>
                <div className={s.card}>
					<Image src={Photo} width={100} height={100} alt="foto" />
                    <div>
                    <h3>Slick</h3>
                        <p>We use</p>
                        </div>
				</div><div className={s.card}>
					<Image src={Photo} width={100} height={100} alt="foto" />
                    <div>
                    <h3>Slick</h3>
                        <p>We use</p>
                        </div>
				</div><div className={s.card}>
					<Image src={Photo} width={100} height={100} alt="foto" />
                    <div>
                    <h3>Slick</h3>
                        <p>We use</p>
                        </div>
				</div><div className={s.card}>
					<Image src={Photo} width={100} height={100} alt="foto" />
                    <div>
                    <h3>Slick</h3>
                        <p>We use</p>
                        </div>
				</div><div className={s.card}>
					<Image src={Photo} width={100} height={100} alt="foto" />
                    <div>
                    <h3>Slick</h3>
                        <p>We use</p>
                        </div>
				</div>
			</Slider>
		</div>
	);
};

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

export default Carousel;
