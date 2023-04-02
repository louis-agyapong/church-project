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
						<img className='w-full h-full' src='/images/image-10.webp' objectFit='cover' alt='' />
					</div>
				</div>
			</div>
			<div
				data-aos='fade'
				data-aos-duration='1500'
				className='w-full flex flex-col  items-center pt-20  justify-center lg:px-32 px-5'
			>
				<p className='AchivoSemiBold text-lg pb-5'>WELCOME TO THE CHURCH</p>
				<h2 className='pb-5 text-center AchivoSemiBold py-3 text-4xl'>LOVE AND COMPASSION </h2>
				<p className='text-center pb-14 text-lg md:text-xl AchivoRegular md:w-10/12 lg:w-7/12'>
					Waterbrook, we choose to love people irrespective of our gender, color, and cultural
					differences, because we believe that everyone deserves it to the highest level.
				</p>
				<div className='w-full  lg:w-10/12 relative overflow-hidden flex flex-col items-center justify-center mt-5 rounded-3xl h-96 md:h-[34rem]'>
					<div className='w-full h-full relative z-30 bg-[#280600] flex flex-col items-center justify-center  bg-opacity-30'></div>

					<div className='absolute z-10 w-auto min-w-full min-h-full max-w-none overflow-hidden '>
						<img
							className='w-full h-full'
							src='/images/image-2.jpeg'
							objectFit='cover'
							placeholder='blur'
							blurDataURL='/images/image-2.jpeg'
							alt=''
						/>
					</div>
				</div>
			</div>
			<div
				data-aos='fade'
				data-aos-duration='1500'
				className='w-full flex  items-center pt-10  justify-center lg:px-32 px-5'
			>
				<div className='w-full lg:w-10/12 flex flex-col items-start md:items-center'>
					<div className='mt-5 px-3 w-full flex flex-col md:items-center items-start'>
						<h3 className='AchivoSemiBold text-3xl pb-5'>OUR MISSION</h3>
						<p className=' text-lg md:text-xl AchivoRegular'>
							Connect the heart of God to the heart of the people
						</p>
					</div>
					<div className='mt-10 px-3 w-full flex flex-col md:items-center items-start lg:[&>p]:text-center'>
						<h3 className='AchivoSemiBold text-3xl pb-5'>OUR CORE VALUES</h3>
						<p className=' text-lg md:text-xl AchivoRegular md:text-center'>
							<span className='AchivoSemiBold'>Love</span> - The best, highest-trust relationships
							are based in love. “For God so loved the world..” John 3:16. At the Waterbrook, we
							choose to love people irrespective of our gender, color, and cultural differences,
							because we believe that everyone deserves it to the highest level.
						</p>
						<p className=' text-lg md:text-xl AchivoRegular pt-2'>
							<span className='AchivoSemiBold text-[#181436]'>Faith</span> - With God all things are
							possible! Everything we do at The Waterbrook hangs on the faith we have in Jesus
							Christ, the son of God. This faith makes us dream big and know that we are never
							unstoppable.
						</p>
						<p className=' text-lg md:text-xl AchivoRegular pt-2'>
							<span className='AchivoSemiBold text-[#181436]'>Honor</span> - We are learning to see
							and treat people not as they are, but as they were meant to be! Real love shows honor,
							a deep respect and value for the person God made. At The Waterbrook, we treat people
							with great honor.
						</p>
						<p className=' text-lg md:text-xl AchivoRegular pt-2'>
							<span className='AchivoSemiBold text-[#181436]'>Excellence</span> - At The Waterbrook
							we understand that excellence builds trust and creates comfort. We know that
							excellence honors God and makes whatever we do worth doing…and more fun! We do not
							celebrate excellence because it is expected.
						</p>
					</div>
				</div>
			</div>
			<div
				data-aos='fade'
				data-aos-duration='1500'
				className='w-full flex flex-col mb-10 items-center pt-20  justify-center lg:px-32 px-5'
			>
				<h2 className=' text-center AchivoSemiBold text-4xl pb-2'>SUNDAYS, 10:00AM </h2>
				<p className='AchivoThin text-center text-xl'>7010 Southmoor St. Hanover MD 21076</p>
				<a
					href='/contact#contact'
					className='px-16 py-5 mt-10 border  border-orange-500 text-orange-500 AchivoRegular tracking-widest font-semibold text-lg'
				>
					Plan a Visit
				</a>
			</div>
			<Footer />
		</div>
	)
}
