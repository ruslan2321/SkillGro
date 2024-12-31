import React from 'react'

export default function footer() {
  return (
		<footer className='bg-[#06042E] h-[25rem] mt-6 pt-[5rem] flex justify-around'>
			<div className='w-[15rem] gap-[1rem] flex flex-col'>
				<img src='img/Logo.png' alt='' className='w-[10rem]' />
				<p className='text-[#B2BBCC] text-[16px]'>
					when an unknown printer took galley of type and scrambled it to make
					pspecimen bookt has.
				</p>
				<p className='text-[#B2BBCC] text-[16px]'>463 7th Ave, NY 10018, USA</p>
				<p className='text-[#B2BBCC] text-[16px]'>+123 88 9900 456</p>
			</div>
			<div className='flex flex-col gap-4'>
				<h1 className='text-white text-[1.5rem] font-bold'>Useful Links</h1>
				<div className='bg-[#5751E1] w-[4rem] h-2 rounded-full'></div>
				<div className='text-[#B2BBCC] text-[16px]'>
					<p>Our values</p>
					<p>Our advisory board</p>
					<p>Our partners</p>
					<p>Become a partner</p>
					<p>Work at Future Learn</p>
					<p>Quizlet Plus</p>
				</div>
			</div>
			<div className='flex flex-col gap-4'>
				<h1 className='text-white text-[1.5rem] font-bold'>Our Company</h1>
				<div className='bg-[#5751E1] w-[4rem] h-2 rounded-full'></div>
				<div className='text-[#B2BBCC] text-[16px]'>
					<p>Contact Us</p>
					<p>Become Teacher</p>
					<p>Blog</p>
					<p>Instructor</p>
					<p>Events</p>
				</div>
			</div>
			<div className='flex flex-col gap-6'>
				<h1 className='text-white text-[1.5rem] font-bold'>Our Company</h1>
				<div className='bg-[#5751E1] w-[4rem] h-2 rounded-full'></div>
				<p className='text-[#B2BBCC] text-[16px] w-[15rem]'>
					when an unknown printer took galley type and scrambled
				</p>
				<div className='flex gap-5'>
					<img src='img/Symbol.png' alt='' />
					<img src='img/Symbol-1.png' alt='' />
					<img src='img/Symbol-2.png' alt='' />
					<img src='img/Symbol-3.png' alt='' />
					<img src='img/Symbol-4.png' alt='' />
				</div>
				<div className='flex gap-2'>
					<div className='w-[9rem] h-[6rem] bg-[#1c1b3b] rounded-[10px] flex justify-center  flex-col items-center'>
						<img src='img/play.png' alt='' className='w-5' />
						<p className='text-[#b1bac9]'>Get In On</p>
						<h1 className='text-white'>Google Play</h1>
					</div>
					<div className='w-[9rem] h-[6rem] bg-[#1c1b3b] rounded-[10px] flex justify-center  flex-col items-center'>
						<img src='img/app-store.png' alt='' className='w-5' />
						<p className='text-[#b1bac9]'>Get In On</p>
						<h1 className='text-white'>Apple Store</h1>
					</div>
				</div>
			</div>
		</footer>
	)
}
