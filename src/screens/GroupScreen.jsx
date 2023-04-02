import React, { useRef, useState, useEffect } from 'react'
import { Header, Footer } from '../components'
import emailjs from '@emailjs/browser'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function GroupScreen() {
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
		<div className='w-full h-full bg-[#ffffff] max-w-[2010px] m-auto'>
			<Header />
			<div
				data-aos='fade-down'
				data-aos-duration='1300'
				className='w-full flex items-center justify-center'
			>
				<div className='w-full h-[80vh] md:h-screen mt-16 relative overflow-hidden flex flex-col items-center justify-center'>
					<div className='w-full h-full relative z-30 bg-[#DEA755] flex flex-col items-center justify-center  bg-opacity-40'>
						<div className='lg:w-9/12 md:w-10/12  md:py-20 flex flex-col justify-center items-center'>
							<h3 className='text-4xl lg:text-4xl AchivoSemiBold  text-white font-semibold'>
								GET INVOLVED
							</h3>
						</div>
					</div>

					<div className='absolute z-10 w-auto min-w-full min-h-full max-w-none overflow-hidden '>
						<img className='w-full h-full' src='/images/get-involved.jpg' objectFit='cover' alt='' />
					</div>
				</div>
			</div>
			<div
				data-aos='fade'
				data-aos-duration='1500'
				id='worship'
				className='w-full flex flex-col  items-center pt-20  justify-center lg:px-32 px-5'
			>
				<h2 className='pb-5 text-center AchivoSemiBold text-2xl'>OUR GROUPS </h2>
				<h2 className='pb-5 text-center AchivoSemiBold text-4xl'>WORSHIP TEAM </h2>
				<p className='text-center md:w-10/12 text-lg md:text-xl AchivoRegular lg:w-9/12'>
					God is seeking worshipers! At the Waterbrook, we enjoy praising and worshipping God for
					who He truly is because He deserves it all. The worship team provides us with a community
					for expressions of worship. If God has given you the gift of music, what is holding you
					back from joining the team? Bring it all to God. Step out and be the worshiper God has
					created you to be!
				</p>
				<div className='w-full h-full grid md:grid-cols-2 gap-10 lg:mt-20 mt-5'>
					<div className='w-full h-72 flex items-center justify-center rounded-xl shadow-md relative overflow-hidden'>
						<img
							className='w-full h-full'
							src='/images/worship-team.jpg'
							objectFit='cover'
							placeholder='blur'
							blurDataURL='/images/worship-team.jpg'
							alt='worship team'
						/>
						<div className='absolute w-full h-full flex flex-col items-center justify-center  transition-colors duration-1000 bg-opacity-60 hover:bg-opacity-80' />
					</div>
					<div className='w-full h-72 flex items-center justify-center rounded-xl shadow-md relative overflow-hidden'>
						<img
							className='w-full h-full'
							src='/images/worship-with-us.jpg'
							objectFit='cover'
							placeholder='blur'
							blurDataURL='/images/worship-with-us.jpg'
							alt='worship team'
						/>
						<div className='absolute w-full h-full flex flex-col items-center justify-center transition-colors duration-1000 bg-opacity-60 hover:bg-opacity-80' />
					</div>
				</div>
				<a
					href='#jointeam'
					className='px-16 py-4 mt-5 rounded-lg bg-orange-500 hover:bg-orange-600 transition text-white AchivoRegular tracking-widest font-semibold text-lg'
				>
					Join
				</a>
			</div>
			<div
				data-aos='fade'
				data-aos-duration='1500'
				id='prayer'
				className='w-full flex flex-col  items-center pt-20  justify-center lg:px-32 px-5'
			>
				<h2 className='pb-5 text-center AchivoSemiBold text-4xl'>PRAYER TEAM </h2>
				<p className='text-center md:w-10/12 text-lg md:text-xl AchivoRegular lg:w-9/12'>
					Prayer is one of the core missions of our church. We seek God first in prayer, trusting in
					His power alone to create lasting impacts in lives, our church, and our communities. If
					you are ready to see miracles in your life, press into prayer. The Lords purpose in giving
					the parable is specifically stated; it was to this end, that men ought always to pray..
					Luke 18:1.
				</p>

				<div className='flex gap-5 items-center flex-col md:flex-row justify-center mt-10'>
					<a
						href='https://us02web.zoom.us/j/2898131924?pwd=ZVZTQmxLYmw0aTh1UlNYck9keDhNUT09'
						target='_blank'
						rel='noopener noreferrer'
					>
						<button className='px-20 md:px-16 py-4  rounded-lg bg-orange-500 hover:bg-orange-600 transition text-white AchivoRegular tracking-widest font-semibold text-lg'>
							Join Zoom
						</button>
					</a>
					<p className='AchivoRegular text-center text-xl'>OR</p>
					<a href='tel:+1-301-715-8592' target='_blank' rel='noopener noreferrer'>
						<button className='px-20 md:px-16 py-4  rounded-lg bg-orange-500 hover:bg-orange-600 transition text-white AchivoRegular tracking-widest font-semibold text-lg'>
							Call to Join
						</button>
					</a>
				</div>
			</div>
			<div
				data-aos='fade'
				data-aos-duration='1500'
				className='w-full flex flex-col items-center pt-20  justify-center lg:px-32 px-5'
			>
				<h2 className='pb-5 text-center AchivoSemiBold text-4xl'>CHURCH SERVICE </h2>
				<p className='text-center text-lg md:text-xl AchivoRegular md:w-10/12 lg:w-9/12'>
					With God all things are possible! Everything we do at The Waterbrook hangs on the faith we
					have in Jesus Christ, the son of God. This faith makes us dream big and know that we are
					never unstoppable. Join us
				</p>

				<h3 className=' text-center AchivoRegular text-3xl mt-3'>EVERY SUNDAY, 10:00AM </h3>

				<a
					href='/contact#contact'
					className='px-16 py-5 mt-5 border  border-orange-500 text-orange-500 AchivoRegular tracking-widest font-semibold text-lg'
				>
					Plan a Visit
				</a>
			</div>
			{mailSent ? (
				<div
					data-aos='fade'
					data-aos-duration='600'
					className='w-full flex flex-col items-center py-44 p-20 justify-center lg:px-32 px-5'
				>
					<img width={72} height={72} src='/images/tick.svg' objectFit='cover' />
					<p className='text-center text-lg md:text-xl AchivoRegular md:w-10/12 lg:w-5/12 mt-10'>
						Thank you for your sending us a message! We will get back to you within 48 hours.
					</p>
				</div>
			) : (
				<div
					data-aos='fade'
					data-aos-duration='1500'
					id='jointeam'
					className='w-full flex flex-col items-center pt-20 mb-10 justify-center lg:px-32 px-5'
				>
					<h2 className='pb-3 text-center AchivoSemiBold text-4xl'>JOIN ANY OF OUR TEAM</h2>
					<p className='text-center text-lg md:text-xl AchivoRegular md:w-10/12 lg:w-9/12'>
						Join any of our teams and be a part of the family. We are always looking for people who
						are passionate about God and want to make a difference in the lives of others.
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
						</div>
						<div className='w-full flex justify-center mt-10'>
							<select
								name='Team_Selected'
								required
								className='border-b w-11/12 md:w-4/12 border-slate-700 py-2 pl-2 focus:outline-none'
							>
								<option value='' selected hidden>
									Select a Team
								</option>
								<option value='Worship Team'>Worship Team</option>
								<option value='Launch Team'>Launch Team</option>
								<option value='Prayer Team'>Prayer Team</option>
							</select>
						</div>
						<button className='px-16 py-4 rounded-lg mt-10 bg-orange-500 hover:bg-orange-600 transition text-white AchivoRegular tracking-widest font-semibold text-lg'>
							Submit
						</button>
					</form>
				</div>
			)}
			<Footer />
		</div>
	)
}
