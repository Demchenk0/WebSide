// 'use client';
import React  from 'react';
import s from './Hero.module.scss';
import Image from 'next/image';
// import Photo from '../../img/hero.jpg';
import Left from '../../img/left.svg'
import Right from '../../img/right.svg'
// import Carousel from './Carousel';

const Hero = () => {

	return (
		<section className={s.section}>
			<div className={s.container}>
      <Image src={Left} alt="left" />
      <Image src={Right} alt="right" />
      <button className={`${s.button} ${s.animate}`}>Залишити заявку</button>
      {/* <Carousel/> */}
      {/* <div>
				<h2> Multiple items </h2>
				<Slider {...settings}>
					<div>
          <h3>Hello</h3>
							<img className={s.img} src="/img/hero.jpg"  alt="Slide 1"
            width={300}
            height={200}/>
					</div>
					<div>
          <img className={s.img} src="/img/hero.jpg"  alt="Slide 1"
            width={300}
            height={200}/>

					</div>
					<div>
          <img className={s.img} src="/img/hero.jpg"  alt="Slide 1"
            width={300}
            height={200}/>

					</div>
					<div>
          <img className={s.img} src="/img/hero.jpg"  alt="Slide 1"
            width={300}
            height={200}/>

					</div>
					<div>
          <img className={s.img} src="/img/hero.jpg"  alt="Slide 1"
            width={300}
            height={200}/>

					</div>
					<div>
          <img className={s.img} src="/img/hero.jpg"  alt="Slide 1"
            width={300}
            height={200}/>

					</div>
					<div>
          <img className={s.img} src="/img/hero.jpg"  alt="Slide 1"
            width={300}
            height={200}/>

					</div>
					<div>
          <img className={s.img} src="/img/hero.jpg"  alt="Slide 1"
            width={300}
            height={200}/>

					</div>
					<div>
          <img className={s.img} src="/img/hero.jpg"  alt="Slide 1"
            width={300}
            height={200}/>

					</div>
				</Slider>
			</div> */}
			</div>
		</section>
	);
};

export default Hero;


	{/* {slides.map((slide, index) => (
        <Image
          key={index}
          className={s.img} 
          src={Photo}
          alt='foto'
          width={200}
          height={200}
        />
      ))} */}
				