import React from 'react';
import s from './Form.module.scss';

const Form = () => {
	return (
		<section className={s.section}>
			<div className={s.container}>
			<div>
				<h1 className={s.title}>Залиште заявку</h1>
				<p className={s.text}>Заповнюйте форму і ми зв’яжемось з вами</p>
			</div>
				<div className={s.boxForm}>
					<form action="" className={s.form}>
						<input type="text" name="name" placeholder="Ваше Ім’я" required className={s.input}/>
						<input type="number" name="phone" placeholder="+380" required className={s.input}/>
						<button className={`${s.button} ${s.animate}`}>
							Залишити заявку
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Form;
