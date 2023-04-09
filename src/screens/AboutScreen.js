import React, { useEffect } from 'react'
import { Header, Footer } from '../components'
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function AboutScreen() {
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
							<h3 className='text-4xl lg:text-4xl AchivoSemiBold text-white font-semibold'>
								WHO WE ARE
							</h3>
						</div>
					</div>

					<div className='absolute z-10 w-auto min-w-full min-h-full max-w-none overflow-hidden '>
						<img className='w-full h-full' src='/images/campus-ministry.jpg' objectFit='cover' alt='' />
					</div>
				</div>
			</div>
			<div
				data-aos='fade'
				data-aos-duration='1500'
				className='w-full flex flex-col  items-center pt-20  justify-center lg:px-32 px-5'
			>
				<p className='AchivoSemiBold text-lg pb-5'>WELCOME TO Good News Ministries</p>
				<h2 className='pb-5 text-center AchivoSemiBold py-3 text-4xl'>LOVE AND COMPASSION </h2>
				<p className='text-center pb-14 text-lg md:text-xl AchivoRegular md:w-10/12 lg:w-7/12'>
				Through various activities such as Bible studies, prayer meetings, and outreach programs, the GIMPA Campus Ministry seeks to impact the lives of those within the university community and beyond.
				</p>
				<div className='w-full  lg:w-10/12 relative overflow-hidden flex flex-col items-center justify-center mt-5 rounded-3xl h-96 md:h-[34rem]'>
					<div className='w-full h-full relative z-30 bg-[#280600] flex flex-col items-center justify-center  bg-opacity-30'></div>

					<div className='absolute z-10 w-auto min-w-full min-h-full max-w-none overflow-hidden '>
						<img
							className='w-full h-full'
							src='/images/our-ministry.jpg'
							objectFit='cover'
							placeholder='blur'
							blurDataURL='/images/our-ministry.jpg'
							alt=''
						/>
					</div>
				</div>
			</div>
			<div
				data-aos='fade'
				data-aos-duration='1500'
				className='w-full flex flex-col mb-10 items-center pt-20  justify-center lg:px-32 px-5'
			>
			</div>
			<Footer />
		</div>
	)
}
