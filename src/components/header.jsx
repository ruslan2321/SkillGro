import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Badge from '@mui/material/Badge'
import LoginIcon from '@mui/icons-material/Login'
import Login from './Pages/Login'

const Header = () => {

    const[count, setCount] = useState(0);
    const [count_1, setCount_1] = useState(0)

    const add1 = () =>{
      setCount(count + 1)
    }
    const add2 = () =>{
      setCount_1(count_1 + 1)
    }

		const link = () =>{
			push('./components/pages/Login') 
		}


		return (
			<header className='w-full h-15'>
				<div className='w-full h-10  bg-[#161439] flex items-center justify-between '>
					<div className=' flex items-center p-20 gap-5'>
						<img src='img/marker.png' alt='' className='' />
						<p className='text-white'>589 5th Ave, NY 10024, USA</p>
						<img src='img/email.png ' alt='' className='' />
						<p className='text-white'>info@skillgrodemo.com</p>
					</div>
					<div className='flex items-center gap-5 p-20'>
						<img src='img/phone.png' alt='' />
						<p className='text-white'>Call us:+123 599 8989</p>
						<p className='text-white'>Follow Us On :</p>
						<img src='img/Symbol.png' alt='' />
						<img src='img/Symbol-1.png' alt='' />
						<img src='img/Symbol-2.png' alt='' />
						<img src='img/Symbol-3.png' alt='' />
						<img src='img/Symbol-4.png' alt='' />
					</div>
				</div>
				<div className='w-full h-24 p-5 flex items-center'>
					<img src='img/Logo.png' alt='' className='p-[3rem] w-[250px]' />
					<nav className='flex justify-center pr-[4rem]'>
						<ul className='flex gap-3'>
							<li className='hover:text-[#5751E1] cursor-pointer text-[18px]'>
								Home
							</li>
							<li className='hover:text-[#5751E1] cursor-pointer text-[18px]'>
								Courses
							</li>
							<li className='hover:text-[#5751E1] cursor-pointer text-[18px]'>
								Pages
							</li>
							<li className='hover:text-[#5751E1] cursor-pointer text-[18px]'>
								Shop
							</li>
							<li className='hover:text-[#5751E1] cursor-pointer text-[18px]'>
								Blog
							</li>
						</ul>
					</nav>
					<div className='flex items-center gap-3 border-solid border-[#D3D2DF] border-[1px] rounded-[30px]  h-[3rem] pl-3 pr-1 '>
						<img src='img/Vector.png' alt='' />
						<p>Categories</p>
						<div className='w-[1px] h-6 bg-[#D3D2DF]'></div>
						<input
							type='text'
							placeholder='Search For Course . . .'
							maxLength={20}
							className=' w-[15rem] h-[2rem] p-4 outline-none'

						/>
						<button className='w-10 h-10 bg-[#5751E1] rounded-[30px] flex justify-center items-center'>
							<img src='img/search.png' alt='' className='w-5' />
						</button>
					</div>
					<div className='p-[3rem] gap-5 flex'>
						<Badge badgeContent={count} color='secondary' overlap='circular'>
							<button
								className='border-solid border-[2px]  border-[#7F7E97] p-3 rounded-full transition-all hover:scale-105'
								onClick={add1}>
								<img src='img/Vector (2).png' alt='' />
							</button>
						</Badge>
						<Badge badgeContent={count_1} color='primary' overlap='circular'>
							<button
								className='border-solid border-[2px] border-[#7F7E97] p-3 rounded-full transition-all hover:scale-105 '
								onClick={add2}>
								<img src='img/Vector (3).png' alt='' />
							</button>
						</Badge>
						<button className='bg-[#FFC224] w-[7rem] h-[3rem] rounded-2xl border-[#d3a835] border-solid border-[3px] transition-all hover:bg-[#d3a835] hover:text-white'>
							Log In <LoginIcon/>
						</button>
					</div>
				</div>
			</header>
		)
	}
export default Header;