import React, { useRef, useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Footer() {
	const form = useRef()
	const [mailSent, setMailSent] = useState(false)
	const sendEmail = e => {
		e.preventDefault()

		emailjs.sendForm('service_4dk1uyl', 'template_qsfy8xp', form.current, '2cjZfQwETW7pz2Vo1').then(
			result => {
				console.log(result.text)
				setMailSent(true)
			},
			error => {
				console.log(error.text)
				setMailSent(false)
				alert('Something went wrong, please try again')
			},
		)
	}
	useEffect(() => {
		AOS.init()
	}, [])
	return (
		<div
			// data-aos='fade-up'
			// data-aos-duration='1000'
			className='w-full grid lg:grid-cols-7 gap-10 py-16 lg:px-32 px-5 justify-center bg-[#161D2F]'
		>
			<div className='lg:col-span-2 flex flex-col justify-start'>
				<div className='flex items-center space-x-32 [&>p]:text-lg [&>p]:cursor-pointer mb-10'>
					<a className='text-2xl text-white uppercase AchivoBold' href='/'>
						The Waterbrook
					</a>
				</div>
				<p className='text-white mb-6 AchivoThin'>@ COPYRIGHT WATERBROOK 2022</p>
				<a
					className='mb-4 text-white AchivoThin'
					href='tel:4438159899'
					target='_blank'
					rel='noopener noreferrer'
				>
					(443) 815-9899
				</a>
				<a
					className='mb-4 text-white AchivoThin'
					href='https://www.google.com/maps/place/7010+Southmoor+St,+Hanover,+MD+21076/@39.1829771,-76.738635,17z/data=!4m6!3m5!1s0x89b7e1fccb3afd83:0x6ffe99f3e495ac4!8m2!3d39.182973!4d-76.7364463!16s%2Fg%2F11qr7wq9r8'
					target='_blank'
					rel='noopener noreferrer'
				>
					7010 Southmoor St. HANOVER, MD 21076
				</a>
				<a
					target='_blank'
					href='mailto:hello@thewaterbrookchurch.com'
					className='mb-4 text-white AchivoThin'
					rel='noopener noreferrer'
				>
					Hello@thewaterbrookchurch.com
				</a>
			</div>
			<div>
				<p className='text-xl AchivoRegular text-white mb-12'>Quicklinks</p>
				<a className='mb-4 text-white AchivoThin cursor-pointer' href='/about'>
					WHO WE ARE
				</a>
				<a className='mb-4 text-white AchivoThin cursor-pointer' href='/group'>
					GET INVOLVED
				</a>
				<a className='mb-4 text-white AchivoThin cursor-pointer' href='/give'>
					GIVE
				</a>
				<a href='/contact' className='mb-4 text-white AchivoThin cursor-pointer'>
					CONTACT US
				</a>
			</div>
			<div className='lg:pl-10'>
				<p className='text-xl AchivoRegular text-white mb-12'>Connect</p>
				<div className='flex md:justify-center md:flex-col  gap-5  w-full'>
					<a
						href='https://instagram.com/yourwaterbrookchurch?igshid=YmMyMTA2M2Y='
						target='_blank'
						rel='noopener noreferrer'
					>
						<div className='w-12 h-12 relative overflow-hidden'>
							<img className='w-full h-full' objectFit='cover' src='/images/instagram.png' />
						</div>
					</a>
					<a href='' target='_blank' rel='noopener noreferrer'>
						<div className='w-12 h-12 relative overflow-hidden'>
							<img className='w-full h-full' objectFit='cover' src='/images/youtube_icon.png' />
						</div>
					</a>
					<a
						href='https://m.facebook.com/The-Waterbrook-105006165649651/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<div className='w-12 h-12 relative overflow-hidden'>
							<img className='w-full h-full' objectFit='cover' src='/images/facebook.png' />
						</div>
					</a>
				</div>
			</div>
			<div className='md:col-span-3 md:w-7/12 lg:w-full lg:max-w-[600px] lg:pl-20'>
				<p className='text-3xl AchivoMedium text-white'>
					SUBSCRIBE TO GET LATEST UPDATES AND NEWS{' '}
				</p>
				{mailSent ? (
					<div className='w-full flex flex-col items-start pt-20 justify-center'>
						<p className='text-center text-white text-lg md:text-xl AchivoRegular  '>
							Thanks for subscribing. We will keep you updated
						</p>
					</div>
				) : (
					<div className='flex items-center mt-10 '>
						<form ref={form} onSubmit={sendEmail}>
							<input
								type='email'
								placeholder='Enter your email'
								name='Subscibing_Email'
								id=''
								className='h-16 md:w-72 w-48 px-3 focus:outline-none'
								required
							/>
							<button className='md:px-10 px-6 h-16 bg-orange-500 hover:bg-orange-600 transition text-white AchivoRegular tracking-widest font-semibold text-lg'>
								Subscibe
							</button>
						</form>
					</div>
				)}
			</div>
		</div>
	)
}
