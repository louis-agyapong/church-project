import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { AboutScreen } from '../screens'

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false)

	useEffect(() => {
		AOS.init()
	}, [menuOpen])

	return (
		<main
			data-aos={menuOpen ? 'fade' : null}
			className='w-full h-20  flex items-center fixed top-0 justify-between bg-[#161D2F] text-white z-50 AchivoRegular  lg:px-44 px-5'
		>
			<a className='flex items-center space-x-32 [&>p]:text-lg [&>p]:cursor-pointer' href='/'>
				<h3 className='text-2xl lg:text-3xl cursor-pointer uppercase AchivoBold'>The Waterbrook</h3>
			</a>
			<div className='lg:flex items-center space-x-12 [&>p]:text-base hidden [&>p]:cursor-pointer'>
				<a className='transitionAfter' href='/'>
					Home
				</a>
				<Router>
					<Routes>
						<Route className='transitionAfter' path='/about' element='{<AboutScreen />}'>Who We Are</Route>
					</Routes>
				</Router>
				<a className='transitionAfter' href='/group'>
					Get Involved
				</a>
				<a className='transitionAfter' href='/give'>
					Give
				</a>
			</div>
			<div
				className='lg:hidden flex items-center gap-5'
				onClick={e => {
					e.preventDefault()
					setMenuOpen(!menuOpen)
					console.log(menuOpen)
				}}
			>
				{menuOpen ? (
					<img src='/images/x.svg' width={36} height={36} alt='' />
				) : (
					<img src='/images/menu.svg' width={36} height={36} alt='' />
				)}
			</div>
			<div
				data-aos='fade-down'
				className={`w-full z-50 h-80 ${
					menuOpen ? 'block' : 'hidden'
				} menubar bg-[#161d2fca] shadow absolute left-0  top-[4.38rem] pt-6`}
			>
				<ul className='flex flex-col ml-2 gap-6 text-lg lg:px-44 px-4  font-normal cursor-pointer'>
					<li
						onClick={e => {
							e.preventDefault()
							setMenuOpen(false)
						}}
					>
						<a href='/'>Home</a>
					</li>
					<li
						onClick={e => {
							e.preventDefault()
							setMenuOpen(false)
						}}
					>
						<a href='/about'>Who We Are</a>
					</li>
					<li
						onClick={e => {
							e.preventDefault()
							setMenuOpen(false)
						}}
					>
						<a href='/group'>Get Involved</a>
					</li>
					<li
						onClick={e => {
							e.preventDefault()
							setMenuOpen(false)
						}}
					>
						<a href='/give'>Give</a>
					</li>
				</ul>
			</div>
		</main>
	)
}
