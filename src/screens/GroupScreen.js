import React, { useEffect } from 'react'
import { Header, Footer } from '../components'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function GroupScreen() {
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
						href='https://us02web.zoom.us'
						target='_blank'
						rel='noopener noreferrer'
					>
						<button className='px-20 md:px-16 py-4  rounded-lg bg-orange-500 hover:bg-orange-600 transition text-white AchivoRegular tracking-widest font-semibold text-lg'>
							Join Zoom
						</button>
					</a>
					<p className='AchivoRegular text-center text-xl'>OR</p>
					<a href='+233' target='_blank' rel='noopener noreferrer'>
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
			</div>
			<Footer />
		</div>
	)
}
