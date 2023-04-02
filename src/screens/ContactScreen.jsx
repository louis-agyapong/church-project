import React, { useRef, useEffect, useState } from 'react'
import { Header, Footer } from '../components';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function ContactScreen() {
	// const [decisionContainer, setDecisionContainer] = useState([])
	const form = useRef();
	const [decisionsOne, setDecisionsOne] = useState([false, false, false]);
	const [decisionsTwo, setDecisionsTwo] = useState([false, false, false]);
	const [mailSent, setMailSent] = useState(false);
	const handleOnChange = position => {
		const newDecision = decisionsOne.map((item, index) =>
			index === parseInt(position) ? !item : item,
		);
		setDecisionsOne(newDecision);
		console.log(decisionsOne);
	};

	const handleOnChange2 = position => {
		const newDecision2 = decisionsTwo.map((item, index) =>
			index === parseInt(position) ? !item : item,
		);
		setDecisionsTwo(newDecision2);
		console.log(decisionsTwo);
	};

	const sendEmail = e => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_4dk1uyl',
				'template_aywr7qg',
				form.current,
				'2cjZfQwETW7pz2Vo1',
			)
			.then(
				result => {
					console.log(result.text);
					setMailSent(true);
				},
				error => {
					console.log(error.text);
					setMailSent(false);
					alert('Something went wrong, please try again');
				},
			);
	};
	useEffect(() => {
		AOS.init();
	}, []);

	// F5F5F5;
	return (
		<div className='w-full h-full bg-[#ffffff] max-w-[2010px] m-auto'>
			<Header />
			<div
				data-aos='fade-down'
				data-aos-duration='1300'
				className='w-full flex items-center justify-center '
			>
				<div className='w-full h-[80vh] md:h-screen mt-16 relative overflow-hidden flex flex-col items-center justify-center'>
					<div className='w-full h-full relative z-30 bg-[#DEA755] flex flex-col items-center justify-center  bg-opacity-40'>
						<div className='lg:w-9/12 md:w-10/12 md:py-20 flex flex-col justify-center items-center'>
							<h3 className='text-4xl lg:text-4xl AchivoSemiBold mt-10 text-white font-semibold'>
								CONTACT US
							</h3>
						</div>
					</div>

					<div className='absolute z-10 w-auto min-w-full min-h-full max-w-none overflow-hidden '>
						<img className='w-full h-full' src='/images/contact.jpeg' objectFit='cover' alt='' />
					</div>
				</div>
			</div>
			{mailSent ? (
				<div
					data-aos='fade'
					data-aos-duration='1500'
					className='w-full flex flex-col items-center py-44 p-20 justify-center lg:px-32 px-5'
				>
					<img width={72} height={72} src='/images/tick.svg' objectFit='cover' alt='' />
					<p className='text-center text-lg md:text-xl AchivoRegular md:w-10/12 lg:w-5/12 mt-10'>
						Thank you for your sending us a message! We will get back to you within 48 hours.
					</p>
				</div>
			) : (
				<div
					data-aos='fade'
					data-aos-duration='1500'
					id='contact'
					className='w-full flex flex-col items-center pt-20  justify-center lg:px-32 px-5'
				>
					<h2 className='pb-3 text-center AchivoSemiBold text-4xl'>CONTACT US </h2>
					<p className='text-center text-lg md:text-xl AchivoRegular md:w-10/12 lg:w-9/12'>
						Send us a message and we will get back to you as soon as possible.
					</p>
					<form
						ref={form}
						onSubmit={sendEmail}
						className='w-11/12 md:w-10/12 mt-16 flex flex-col items-center'
					>
						<div className='w-full grid md:grid-cols-2 gap-x-20 gap-y-5'>
							<input
								type='text'
								className='border-b border-slate-700 py-2 pl-2 focus:outline-none'
								placeholder='First Name'
								name='First_Name'
								required
							/>
							<input
								type='text'
								className='border-b border-slate-700 py-2 pl-2 focus:outline-none'
								placeholder='Last Name'
								name='Last_Name'
								required
							/>
							<input
								type='email'
								className='border-b border-slate-700 py-2 pl-2 focus:outline-none'
								placeholder='Email'
								name='Email'
								required
							/>
							<input
								type='tel'
								className='border-b border-slate-700 py-2 pl-2 focus:outline-none'
								placeholder='Phone'
								name='Phone'
								required
							/>

							<div className='w-full flex mt-5 flex-col items-start justify-center'>
								<h2 className=' AchivoSemiBold text-xl uppercase md:text-2xl pb-2'>
									My Decision Today
								</h2>
								<div>
									<div className='py-1'>
										<input
											type='checkbox'
											checked={decisionsOne[0]}
											onChange={() => handleOnChange(0)}
											name='commiting'
											id='commiting'
											value='I am planning to visit the church '
										/>
										<label htmlFor='commiting' className='py-2'>
											{' '}
											I am planning to visit the church{' '}
										</label>
									</div>
									<div className='py-1'>
										<input
											type='checkbox'
											checked={decisionsOne[1]}
											onChange={() => handleOnChange(1)}
											name='renewing'
											id='renewing'
											value='I am committing my life to Christ
'
										/>
										<label htmlFor='renewing'> I am committing my life to Christ</label>
									</div>
									<div className='py-1'>
										<input
											type='checkbox'
											checked={decisionsOne[2]}
											onChange={() => handleOnChange(2)}
											name='baptized'
											id='baptized'
											value='Others, please you can leave a message below'
										/>
										<label htmlFor='baptized'> Others, please you can leave a message below</label>
									</div>
								</div>
							</div>

							<div className='w-full mt-5 flex flex-col items-start justify-center'>
								<h2 className=' AchivoSemiBold text-xl uppercase md:text-2xl pb-2'>
									I&apos;d like more info about
								</h2>
								<div>
									<div className='py-1'>
										<input
											type='checkbox'
											checked={decisionsTwo[0]}
											onChange={() => handleOnChange2(0)}
											name='connecting'
											id='connecting'
											value='Connecting groups'
										/>
										<label htmlFor='connecting'> Connecting groups</label>
									</div>
									<div className='py-1'>
										<input
											type='checkbox'
											checked={decisionsTwo[1]}
											onChange={() => handleOnChange2(1)}
											name='voting'
											id='voting'
											value='Membership Voting'
										/>
										<label htmlFor='voting'> Membership Voting</label>
									</div>
									<div className='py-1'>
										<input
											type='checkbox'
											checked={decisionsTwo[2]}
											onChange={() => handleOnChange2(2)}
											name='volunteering'
											id='volunteering'
											value='Volunteering'
										/>
										<label htmlFor='volunteering'> Volunteering</label>
									</div>
								</div>
							</div>

							<input
								type='text'
								className='border-b md:col-span-2 mt-16 border-slate-700 py-2 pl-2 focus:outline-none'
								placeholder='Message'
								name='Message'
							/>
						</div>

						<button className='px-16 py-4 rounded-lg mt-10 bg-orange-500 hover:bg-orange-600 transition text-white AchivoRegular tracking-widest font-semibold text-lg'>
							Submit
						</button>
					</form>
				</div>
			)}

			<div
				data-aos='fade'
				data-aos-duration='1500'
				className='w-full flex flex-col items-center pt-20  justify-center lg:px-32 px-5'
			>
				<div className='w-full md:w-10/12 flex flex-col md:flex-row md:items-center md:justify-between'>
					<div className='w-full flex flex-col md:items-start items-center justify-center'>
						<h2 className=' AchivoSemiBold text-2xl pb-2'>Address</h2>
						<a
							href='https://www.google.com/maps/place/7010+Southmoor+St,+Hanover,+MD+21076/@39.1829771,-76.738635,17z/data=!4m6!3m5!1s0x89b7e1fccb3afd83:0x6ffe99f3e495ac4!8m2!3d39.182973!4d-76.7364463!16s%2Fg%2F11qr7wq9r8'
							target='_blank'
							rel='noopener noreferrer'
						>
							<p className='text-2xl AchivoThin'>7010 Southmoor Street</p>
							<p className='text-2xl AchivoThin'>Hanover MD 21076</p>
						</a>
					</div>
					<div className='w-full flex flex-col mt-5 md:mt-0 items-center md:items-end justify-center'>
						<h2 className='AchivoSemiBold text-2xl pb-2'>Contact Details</h2>
						<a
							href='tel:4438159899'
							target='_blank'
							rel='noopener noreferrer'
							className='text-2xl AchivoThin'
						>
							(443) 815-9899
						</a>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='mailto:hello@thewaterbrookchurch.com'
							className='text-2xl AchivoThin'
						>
							Hello@thewaterbrookchurch.com
						</a>
					</div>
				</div>
			</div>
			<div
				data-aos='fade'
				data-aos-duration='1500'
				className='w-full flex flex-col items-center pt-20  justify-center lg:px-32 px-5'
			>
				<h2 className='pb-3 text-center AchivoSemiBold text-2xl'>FIND US </h2>
				<div className='flex mt-10 justify-center gap-5 items-center w-full'>
					<a
						href='https://instagram.com/yourwaterbrookchurch?igshid=YmMyMTA2M2Y='
						target='_blank'
						rel='noopener noreferrer'
					>
						<div className='w-14 h-14 relative overflow-hidden'>
							<img className='w-full h-full' objectFit='cover' src='/images/instagram.png' alt='' />
						</div>
					</a>
					<a href='' target='_blank' rel='noopener noreferrer'>
						<div className='w-14 h-14 relative overflow-hidden'>
							<img className='w-full h-full' objectFit='cover' src='/imgs/youtube_icon.png' alt='' />
						</div>
					</a>
					<a
						href='https://m.facebook.com/The-Waterbrook-105006165649651/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<div className='w-14 h-14 relative overflow-hidden'>
							<img className='w-full h-full' objectFit='cover' src='/images/facebook.png' alt='' />
						</div>
					</a>
				</div>
			</div>
			<div
				data-aos='fade'
				data-aos-duration='1500'
				className='w-full flex flex-col items-center pt-20  justify-center '
			>
				<div className='w-full h-[50vh] md:h-[70vh] relative overflow-hidden'>
					<a
						href='https://www.google.com/maps/place/7010+Southmoor+St,+Hanover,+MD+21076/@39.1829771,-76.738635,17z/data=!4m6!3m5!1s0x89b7e1fccb3afd83:0x6ffe99f3e495ac4!8m2!3d39.182973!4d-76.7364463!16s%2Fg%2F11qr7wq9r8'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img src={'/images/map.png'} alt='map' objectFit='cover' className='w-full h-full' />
					</a>
				</div>
			</div>

			<Footer />
		</div>
	)
}
