import { useEffect, useState, useRef } from 'react'
import { Footer, Header } from '../components'

import AOS from 'aos'
import 'aos/dist/aos.css'

if (typeof window !== 'undefined') {
	const accordionHeader = document.querySelectorAll('.accordion-header')
	accordionHeader.forEach(header => {
		header.addEventListener('click', function () {
			const accordionContent = header.parentElement.querySelector('.accordion-content')
			let accordionMaxHeight = accordionContent.style.maxHeight

			// Condition handling
			if (accordionMaxHeight === '0px' || accordionMaxHeight.length === 0) {
				accordionContent.style.maxHeight = `${accordionContent.scrollHeight + 40}px`
				header.querySelector('.fas').classList.remove('fa-plus')
				header.querySelector('.fas').classList.add('fa-minus')
				header.parentElement.classList.add('bg-indigo-50')
			} else {
				accordionContent.style.maxHeight = `0px`
				header.querySelector('.fas').classList.add('fa-plus')
				header.querySelector('.fas').classList.remove('fa-minus')
				header.parentElement.classList.remove('bg-indigo-50')
			}
		})
	})
}

export default function HomeScreen() {
	const videoRef = useRef(null)
	const [open, setOpen] = useState(false)

	useEffect(() => {
		const video = videoRef.current
		video?.play()
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
				<div className='w-full h-screen mt-16 relative overflow-hidden flex flex-col items-center justify-center'>
					<div className='w-full h-full relative z-30 bg-[#2E4378] flex flex-col items-center justify-center  bg-opacity-60'>

						<div className='w-full flex justify-center items-center space-x-5 md:space-x-10 mt-10 px-4'>
							<p className='text-4xl md:text-8xl lg:text-9xl text-white  AchivoMedium'>WELCOME!</p>
						</div>
						<a
							href='https://www.google.com/maps/dir/39.1445453,-76.6990166/7010+Southmoor+St,+Hanover,+MD+21076/@39.1637801,-76.7363255,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x89b7e1fccb3afd83:0x6ffe99f3e495ac4!2m2!1d-76.7364463!2d39.182973'
							target='_blank'
							rel='noopener noreferrer'
							className='text-center text-2xl lg:text-4xl AchivoSemiBold mt-10 text-white font-semibold'
						>
							GIMPA Greenhill, West Legon
						</a>
						<p className='py-10 text-center  text-orange-500 AchivoRegular tracking-widest font-semibold text-lg md:text-2xl'>
							Church service starts at 10:00AM
						</p>
						<a
							href='/contact#contact'
							className='px-10 py-5 mt-10 border  border-orange-500 text-white AchivoRegular tracking-widest font-semibold text-lg'
						>
							Be the first to know
						</a>
					</div>
					<video
						className='absolute z-10 w-auto min-w-full min-h-full max-w-none hidden md:block'
						src='/videos/file.mp4'
						ref={videoRef}
						playsInline
						autoPlay
						loop
						disablePictureInPicture
						muted
					/>
					<div className='absolute z-10 w-auto min-w-full min-h-full max-w-none overflow-hidden md:hidden'>
						<img className='w-full h-full' src='/images/home_mobile.jpg' objectFit='cover' alt='' />
					</div>
				</div>
			</div>
			<div
				data-aos='fade'
				data-aos-duration='1500'
				className='w-full flex flex-col  items-center pt-16  justify-center lg:px-32 px-5'
			>
				<h2 className=' md:w-8/12 lg:w-6/12  text-center AchivoRegular text-2xl lg:text-3xl'>
					CONNECTING the HEART of GOD to the HEART of the PEOPLE
				</h2>
				<a
					href='/about'
					className='px-20 md:px-16 py-4 mt-10  rounded-lg bg-orange-500 hover:bg-orange-600 transition text-white AchivoRegular tracking-widest font-semibold text-lg'
				>
					Learn more
				</a>
			</div>
			<div
				data-aos='fade'
				data-aos-duration='1500'
				className='w-full flex flex-col  items-center lg:mt-20 pt-16 lg:pt-0 justify-center lg:px-32 px-5'
			>
				<h3 className='text-4xl AchivoSemiBold text-[#161D2F] w-full text-center font-semibold'>
					Join Our Groups
				</h3>
				<p className='AchivoRegular font-normal mt-5 text-lg md:text-xl text-center md:w-11/12 lg:w-7/12 '>
					Be a part of a community that is passionate about God and are on a mission to connect the
					heart of God to the heart of the people
				</p>
				<div className='w-full h-full flex justify-center gap-10 lg:my-20 mt-5'>
					<div
						href='/group#launch'
						className='w-full  h-72 md:h-96 flex items-center justify-center rounded-xl shadow-md relative overflow-hidden'
					>
						<img
							placeholder='blur'
							blurDataURL='/images/image-3.jpeg'
							layout='fill'
							src='/images/image-3.jpeg'
							objectFit='cover'
							className='w-full h-full'
							alt=''
						/>
						<div className='absolute w-full h-full flex flex-col items-center justify-center bg-[#59d8d2]  transition-colors duration-1000 bg-opacity-60 hover:bg-opacity-80'>
							<h3 className='text-4xl lg:text-4xl AchivoSemiBold text-white font-semibold'>
								OUR GROUPS
							</h3>
							<p className='text-xl AchivoRegular text-white font-semibold'> Be part of a team</p>
						</div>
					</div>
				</div>
			</div>
			<div
				data-aos='fade'
				data-aos-duration='1500'
				className='w-full flex flex-col  items-center md:mt-10 lg:mt-0 lg:pt-0 justify-center lg:px-32 px-5'
			>
				<div className='w-full   h-full grid md:grid-cols-2  gap-14 lg:my-20 mt-5'>
					<div className='w-full h-full hidden py-10  md:flex items-center justify-center rounded-xl relative overflow-hidden'>
						<img
							layout='fill'
							src='/images/our-pastors.jpg'
							objectFit='cover'
							placeholder='blur'
							blurDataURL='/images/our-pastors.jpg'
							alt='our-pastors'
						/>
					</div>
					<div className='w-full h-full  flex flex-col items-center md:items-start justify-center'>
						<h3 className='text-4xl AchivoSemiBold my-4 text-[#161D2F] font-semibold'>
							Our Pastors
						</h3>
						<p className='AchivoRegular font-normal text-center md:text-left mt-6 text-lg md:text-xl md:w-11/12 '>
							Barth and Opey Omoba are the dynamic, diligent, and passionate pastors of The
							Waterbrook. They both met a couple of years ago while serving at a local church (RCCG
							- Mercy Court) before getting married in August 2019 and are blessed with a lovely
							daughter - Ariah.
						</p>
						<p className='AchivoRegular font-normal mt-8 mb-2 text-lg md:text-xl  md:w-11/12 hidden lg:block'>
							Even though they both served together in the music ministry and other areas, their
							hearts and passion for the purposes of God being fulfilled in the lives of people are
							the enabling force to answering and pursuing the call of God. This call as a seed is
							what has birthed The Waterbrook. Barth and Opey are excited to see the hearts of their
							community - Howard and Anne Arundel counties transformed and the unconnected being
							connected to God.
						</p>
					</div>
					<div className='w-full h-96 md:hidden py-10  flex items-center justify-center rounded-xl relative overflow-hidden'>
						<img
							layout='fill'
							src='/images/our-pastors.jpg'
							objectFit='cover'
							placeholder='blur'
							blurDataURL='/images/our-pastors.jpg'
							alt='our-pastors'
						/>
					</div>
				</div>
			</div>

			<div
				data-aos='fade'
				data-aos-duration='1500'
				className='w-full flex flex-col  items-center mb-10 lg:mt-20 pt-16 lg:pt-0 justify-center lg:px-32 px-5'
			>
				<h3 className='text-4xl AchivoSemiBold text-[#161D2F] w-full text-center font-semibold'>
					Frequently Asked Questions
				</h3>
				<div className='lg:w-8/12 mx-auto mt-5 rounded border'>
					<div className='bg-white p-10 shadow-sm'>
						<h3 className='text-xl font-medium text-gray-800'>
							Please contact us if your question is not answered here
						</h3>
						<p className='text-lg AchivoThin text-gray-600 my-3'>
							We are here to help you. If you have any questions, please contact
						</p>

						<div className='h-1 w-full mx-auto border-b my-5'></div>

						<div className='transition hover:bg-indigo-50'>
							<div
								onClick={() => setOpen(!open)}
								className='accordion-header cursor-pointer text-base md:text-lg transition flex space-x-5 px-5 items-center h-16'
							>
								<i className='fas fa-plus'></i>
								<h3>How can I get involved in the launch?</h3>
							</div>

							<div className='accordion-content px-5 pt-0  overflow-hidden max-h-0'>
								<p className=' AchivoThin pl-9 text-justify'>
									There are many ways to get involved. You can begin by signing up to get updates
									about the launch of the Waterbrook. Secondly, you can make a difference by being a
									part of the launch team. Just fill out an interest form{' '}
									<a hreaf='/group#launch' className='text-blue-500 underline cursor-pointer'>
										here
									</a>
								</p>
							</div>
						</div>

						<div className='transition hover:bg-indigo-50'>
							<div
								onClick={() => setOpen(!open)}
								className='accordion-header cursor-pointer text-base md:text-lg transition flex space-x-5 px-5 items-center h-16'
							>
								<i className='fas fa-plus'></i>
								<h3>What are your worship experiences like?</h3>
							</div>

							<div className='accordion-content px-5  pt-0 overflow-hidden max-h-0'>
								<p className='leading-6 AchivoThin pl-9 text-justify'>
									Every weekend, you will have a great experience filled with an engaging service
									that lasts about 75 minutes. An inspiring and relevant message. Amazing live
									worship music. A welcoming and friendly atmosphere. An amazing Brook Kids
									experience that your children would love.
								</p>
							</div>
						</div>

						<div className='transition hover:bg-indigo-50'>
							<div
								onClick={() => setOpen(!open)}
								className='accordion-header cursor-pointer text-base md:text-lg transition flex space-x-5 px-5 items-center h-16'
							>
								<i className='fas fa-plus'></i>
								<h3>Will my kids enjoy their experience?</h3>
							</div>

							<div class='accordion-content px-5 pt-0 overflow-hidden max-h-0'>
								<p className='leading-6 AchivoThin pl-9 text-justify'>
									At Brook Kids, we believe in building the next generation of pace setters. Every
									service experience is tailor-made to reach your child at their level. Not only
									will they have fun, but they will learn the fundamentals of the Christian faith.
									Upon arrival at church, you will be able to check in your child at the Brook Kids
									station. Your child will then be led to their classroom and taken care of by
									background-checked volunteers.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='w-full flex flex-col  items-center mb-10 lg:mt-20 pt-16 lg:pt-0 justify-center lg:px-32 px-5'>
					<h3 className='text-4xl AchivoSemiBold text-[#161D2F] w-full text-center font-semibold'>
						Latest Events
					</h3>
					<p className='AchivoRegular font-normal mt-5 text-lg md:text-xl text-center md:w-11/12 lg:w-full '>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim quod eos optio
						exercitationem eaque
					</p>
					<div className='w-full   h-full grid md:grid-cols-2  gap-14 lg:my-20 mt-5'>
						<div className='w-full h-96 hover:-rotate-3 transition-all duration-700 flex items-center justify-center rounded-xl shadow-md relative overflow-hidden'>
							<img className='w-full h-full' src='/images/image-3.jpeg' objectFit='cover' alt='' />
							<div className='absolute w-full h-full flex flex-col items-center justify-center bg-[#2E4378] bg-opacity-60' />
						</div>
						<div className='w-full h-96 hover:rotate-3 transition-all duration-700 flex items-center justify-center rounded-xl shadow-md relative overflow-hidden'>
							<img className='w-full h-full' src='/images/image-3.jpeg' objectFit='cover' alt='' />
							<div className='absolute w-full h-full flex flex-col items-center justify-center bg-[#2E4378] bg-opacity-60' />
						</div>
					</div>
				</div>
				<a
					href='/give#ways'
					className='px-20 md:px-16 py-4 mt-10  rounded-lg bg-orange-500 hover:bg-orange-600 transition text-white AchivoRegular tracking-widest font-semibold text-lg'
				>
					Give
				</a>
			</div>

			<Footer />
		</div>
	)
}
