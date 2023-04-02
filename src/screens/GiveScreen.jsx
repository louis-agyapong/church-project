import React, { useEffect } from 'react';
import { Header, Footer } from '../components';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function GiveScreen() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div className='w-full h-full bg-[#ffffff] max-w-[2010px] m-auto'>
			<Header />
			<div
				data-aos='fade-down'
				data-aos-duration='1300'
				className='w-full flex items-center justify-center lg:px-32 px-0'
			>
				<div className='w-full h-[80vh] md:h-full  mt-32  relative overflow-hidden  hidden lg:flex flex-row items-center justify-center'>
					<div className='w-9/12 flex flex-col items-start justify-center'>
						<p className='text-2xl AchivoThin'>Give</p>
						<p className='text-4xl AchivoRegular py-2'>Family Treasure</p>
						<p className='text-xl AchivoRegular pr-4'>
							We believe that our generosity shows the place and priority of God in our hearts. It
							is an expression of our worship of God. We are a church that believes in giving. We
							believe that God has given us everything we have and we are called to give back to
							Him.
						</p>
						<p className='pt-5 AchivoRegular text-xl'>Fuel The Mission</p>
					</div>
					<div className='w-full h-[70vh] relative overflow-hidden flex flex-col items-center justify-center'>
						<div className='w-full h-full py-56 md:py-0 relative z-30 bg-[#DEA755] flex flex-col items-center justify-center  bg-opacity-40'></div>
						<div className='absolute z-10 w-auto min-w-full min-h-full max-w-none overflow-hidden '>
							<img className='w-full h-full' src='/images/give-page.jpeg' objectFit='cover' alt='' />
						</div>
					</div>
				</div>
				<div className='w-full h-[80vh] md:h-screen lg:hidden mt-16 relative overflow-hidden flex flex-col items-center justify-center'>
					<div className='w-full h-full relative z-30 bg-[#DEA755] flex flex-col items-center justify-center  bg-opacity-40'>
						<div className='lg:w-9/12 md:w-10/12  md:py-20 flex flex-col justify-center items-center'>
							<h3 className='text-4xl lg:text-4xl AchivoSemiBold mt-10 text-white font-semibold'>
								GIVE
							</h3>
						</div>
					</div>

					<div className='absolute z-10 w-auto min-w-full min-h-full max-w-none overflow-hidden '>
						<img className='w-full h-full' src='/images/give-page.jpeg' objectFit='cover' alt='' />
					</div>
				</div>
			</div>

			<div
				data-aos='fade'
				data-aos-duration='1500'
				className='w-full flex flex-col  items-center pt-20  justify-center lg:px-32 px-5'
			>
				<h2 className='pb-3 text-center AchivoSemiBold text-4xl'>PARTNER WITH WATERBROOK </h2>
				<p className='text-center text-lg AchivoRegular md:text-xl md:w-10/12 lg:w-9/12'>
					God{'’'}s generous nature is expressed through us when we give. Your obedience and
					sacrifice allow us to impact our community and the world,and God is always ready to bless
					us in return.
				</p>
			</div>
			<div
				data-aos='fade'
				data-aos-duration='1500'
				id='ways'
				className='w-full flex flex-col  items-center pt-20  justify-center lg:px-32 px-5'
			>
				<h2 className='pb-3 text-center AchivoSemiBold text-4xl'>WAYS TO GIVE </h2>
				<p className='text-center AchivoRegular text-lg md:text-xl md:w-10/12 lg:w-9/12'>
					To make giving simple, convenient, and secure, we have created several options you can
					explore
				</p>
				<div className='flex gap-5 mb-20 items-center flex-col md:flex-row justify-center mt-10'>
					<a href='https://cash.app/$Waterbrook' target='_blank' rel='noopener noreferrer'>
						<button className='w-72  md:px-16 py-4 flex justify-center rounded-lg bg-[#00D632] hover:bg-green-500 transition text-white AchivoRegular tracking-widest font-semibold text-lg'>
							CASH APP
						</button>
					</a>
					<p className='AchivoRegular text-center text-xl'>OR</p>
					<a
						href='https://www.paypal.me/TheWaterbrook?locale.x=en_US7'
						target='_blank'
						rel='noopener noreferrer'
						className='w-72 md:px-16 py-4 flex justify-center rounded-lg bg-[#0079C1] hover:bg-blue-600 transition text-white AchivoRegular tracking-widest font-semibold text-lg'
					>
						PAYPAL
					</a>
				</div>
			</div>

			<Footer />
		</div>
	)
}
