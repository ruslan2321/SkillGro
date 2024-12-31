import React from 'react'


import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArchitectureIcon from '@mui/icons-material/Architecture'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import TerminalIcon from '@mui/icons-material/Terminal'
import StorefrontIcon from '@mui/icons-material/Storefront'
import Group from '@mui/icons-material/Group'
import People from '@mui/icons-material/Person'
import Star from '@mui/icons-material/Star'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import PersonIcon from '@mui/icons-material/Person'


const App = () => {
	return (
		<>
			<div className='flex  justify-between  bg-[#f6f5fa] '>
				<div className='flex flex-col justify-center items-center'>
					<h1 className='text-5xl  pb-10  font-bold text-center'>
						Never Stop Life Never Stop Teaching
					</h1>
					<p className='pb-5 text-center'>
						Every teaching and learning journey is unique Following <br></br>
						We'll help guide your way.
					</p>

					<button className='bg-[#5751E1] w-[150px] h-[50px] rounded-[20px] text-white font-bold shadow-[7px_7px_0px_0px_#030170] flex items-center justify-center transition-all hover:shadow-[4px_4px_5px_0px_#030170]'>
						Start Free Trial <ArrowForwardIcon />
					</button>
				</div>
				<img src='img/div.col-lg-6 (2).png' alt='' />
			</div>
			<div className=' flex justify-center flex-col items-center gap-[1rem]'>
				<div className='bg-[#EFEEFE] rounded-[20px] p-1 mt-3'>
					<p>Trending Categories</p>
				</div>
				<h1 className='text-[#161439] text-5xl font-bold'>
					Top Category We Have
				</h1>
				<p>when known printer took a galley of type scrambl edmake</p>
				<div className='bg-[#F7F7F9] w-[58rem] h-[10rem] rounded-full flex items-center content-center p-7 gap-5'>
					<div className='bg-gray-300 w-[100px] h-[100px] rounded-full  flex flex-col items-center justify-center p-[4rem] border-solid border-[2px] transition-all  hover:border-blue-400'>
						<ArchitectureIcon sx={{ fontSize: '40px' }} />
						<p className='text-center  '>Graphic Design</p>
					</div>
					<div className='bg-gray-300 w-[100px] h-[100px] rounded-full flex flex-col items-center justify-center p-[4rem] border-solid border-[2px] transition-all  hover:border-blue-400'>
						<MonetizationOnIcon sx={{ fontSize: '40px' }} />
						<p className='text-center '>Finance</p>
					</div>
					<div className='bg-gray-300 w-[100px] h-[100px] rounded-full flex flex-col items-center justify-center p-[4rem] border-solid border-[2px] transition-all  hover:border-blue-400'>
						<TerminalIcon sx={{ fontSize: '40px' }} />
						<p className='text-center '>Development</p>
					</div>
					<div className='bg-gray-300 w-[100px] h-[100px] rounded-full flex flex-col items-center justify-center p-[4rem] border-solid border-[2px] transition-all  hover:border-blue-400'>
						<StorefrontIcon sx={{ fontSize: '40px' }} />
						<p className='text-center '>Marketing</p>
					</div>
					<div className='bg-gray-300 w-[100px] h-[100px] rounded-full flex flex-col items-center justify-center p-[4rem] border-solid border-[2px] transition-all  hover:border-blue-400'>
						<People sx={{ fontSize: '40px' }} />
						<p className='text-center '>Life Style</p>
					</div>
					<div className='bg-gray-300 w-[100px] h-[100px] rounded-full flex flex-col items-center justify-center p-[4rem] border-solid border-[2px] transition-all  hover:border-blue-400'>
						<Group sx={{ fontSize: '40px' }} />
						<p className='text-center '>Management</p>
					</div>
				</div>
			</div>
			<img src='img/23.png' alt='' className='pt-20' />
			<div className='flex'>
				<img src='img/Section.png' alt='' className='p-20' />
				<div className=' flex pt-[5rem] flex-col gap-3'>
					<div className='bg-[#EFEEFE] rounded-[20px]  w-[11rem] p-2'>
						<p className='text-[18px] text-[#5751E1]'>Get More About Us</p>
					</div>
					<h1 className='text-5xl w-[35rem] font-bold '>
						Thousand Of Top cource Now in One Place
					</h1>
					<p className='w-[35rem]'>
						Groove’s intuitive shared inbox makes it easy for team members to
						organize, prioritize and.In this episode of the Smashing Pod we’re
						talking about Web Platform Baseline.
					</p>
					<ul className='font-bold text-2xl list-image-[url(img/List.png)]'>
						<li>The Most World Class Instructors</li>
						<li>Access Your Class anywhere</li>
						<li>Flexible Course Plan</li>
					</ul>
					<button className='bg-[#5751E1] w-[150px] h-[50px] rounded-full text-white font-bold shadow-[7px_7px_0px_0px_#030170] flex items-center justify-center transition-all hover:shadow-[4px_4px_5px_0px_#030170]'>
						Start Free Trial <ArrowForwardIcon />
					</button>
				</div>
			</div>
			<div className='flex justify-center flex-col items-center gap-[1rem]'>
				<div className='bg-[#EFEEFE] rounded-[20px]  w-[10rem] p-2 flex justify-center'>
					<p className='text-[15px] text-[#5751E1]'>Top Class Courses</p>
				</div>
				<p>When known printer took a galley of type scrambl edmake</p>
				<p className='font-bold after:content-[""] after:bg-[#5651e1] after:h-[5px] after:w-30 after:flex after:rounded-full'>
					All Courses
				</p>
				<div className='flex gap-2'>
					<div className='bg-[#ffffff] border-solid border-[#b6b5c3] border-[3px] rounded-[20px] w-[22rem] h-[30rem] p-7 gap-3  flex flex-col'>
						<img src='img/Link.png' alt='' />
						<div className='flex items-center justify-between '>
							<div className='bg-[#EFEFF2] rounded-[20px]  w-[7rem] p-2 flex justify-center'>
								<p className='text-[14px] text-black'>Development</p>
							</div>
							<label>
								<Star sx={{ color: '#F8BC24' }} />
								(4.8 Reviews)
							</label>
						</div>
						<h1 className='text-2xl font-bold'>
							Learning JavaScript With Imagination
						</h1>
						<p>By David Millar</p>
						<div className='flex items-center justify-between '>
							<button className='bg-[#FFC224] w-[150px] h-[50px] rounded-full text-black font-bold shadow-[7px_7px_0px_0px_#3d3d3d] flex items-center justify-center transition-all hover:shadow-[4px_4px_5px_0px_#3d3d3d]'>
								Enroll Now <ArrowForwardIcon />
							</button>
							<h1 className='text-3xl font-bold text-[#5751E1]'>$15.00</h1>
						</div>
					</div>
					<div className='bg-[#ffffff] border-solid border-[#b6b5c3] border-[3px] rounded-[20px] w-[22rem] h-[30rem] p-7 gap-3  flex flex-col'>
						<img src='img/Link2.png' alt='' />
						<div className='flex items-center justify-between '>
							<div className='bg-[#EFEFF2] rounded-[20px]  w-[7rem] p-2 flex justify-center'>
								<p className='text-[14px] text-black'>Desing</p>
							</div>
							<label>
								<Star sx={{ color: '#F8BC24' }} />
								(4.5 Reviews)
							</label>
						</div>
						<h1 className='text-2xl font-bold'>
							The Complete Graphic Design for Beginners
						</h1>
						<p>By David Millar</p>
						<div className='flex items-center justify-between '>
							<button className='bg-[#FFC224] w-[150px] h-[50px] rounded-full text-black font-bold shadow-[7px_7px_0px_0px_#3d3d3d] flex items-center justify-center transition-all hover:shadow-[4px_4px_5px_0px_#3d3d3d]'>
								Enroll Now <ArrowForwardIcon />
							</button>
							<h1 className='text-3xl font-bold text-[#5751E1]'>$19.00</h1>
						</div>
					</div>
					<div className='bg-[#ffffff] border-solid border-[#b6b5c3] border-[3px] rounded-[20px] w-[22rem] h-[30rem] p-7 gap-3  flex flex-col'>
						<img src='img/Link3.png' alt='' />
						<div className='flex items-center justify-between '>
							<div className='bg-[#EFEFF2] rounded-[20px]  w-[7rem] p-2 flex justify-center'>
								<p className='text-[14px] text-black'>Marketing</p>
							</div>
							<label>
								<Star sx={{ color: '#F8BC24' }} />
								(4.3 Reviews)
							</label>
						</div>
						<h1 className='text-2xl font-bold'>
							Learning Digital Marketing on Facebook
						</h1>
						<p>By David Millar</p>
						<div className='flex items-center justify-between '>
							<button className='bg-[#FFC224] w-[150px] h-[50px] rounded-full text-black font-bold shadow-[7px_7px_0px_0px_#3d3d3d] flex items-center justify-center transition-all hover:shadow-[4px_4px_5px_0px_#3d3d3d]'>
								Enroll Now <ArrowForwardIcon />
							</button>
							<h1 className='text-3xl font-bold text-[#5751E1]'>$29.00</h1>
						</div>
					</div>
					<div className='bg-[#ffffff] border-solid border-[#b6b5c3] border-[3px] rounded-[20px] w-[22rem] h-[30rem] p-7 gap-3  flex flex-col'>
						<img src='img/Link4.png' alt='' />
						<div className='flex items-center justify-between '>
							<div className='bg-[#EFEFF2] rounded-[20px]  w-[7rem] p-2 flex justify-center'>
								<p className='text-[14px] text-black'>Business</p>
							</div>
							<label>
								<Star sx={{ color: '#F8BC24' }} />
								(4.8 Reviews)
							</label>
						</div>
						<h1 className='text-2xl font-bold'>
							Financial Analyst Training & Investing Course
						</h1>
						<p>By David Millar</p>
						<div className='flex items-center justify-between '>
							<button className='bg-[#FFC224] w-[150px] h-[50px] rounded-full text-black font-bold shadow-[7px_7px_0px_0px_#3d3d3d] flex items-center justify-center transition-all hover:shadow-[4px_4px_5px_0px_#3d3d3d]'>
								Enroll Now <ArrowForwardIcon />
							</button>
							<h1 className='text-3xl font-bold text-[#5751E1]'>$12.00</h1>
						</div>
					</div>
				</div>
			</div>
			<div className='bg-[#5751E1] mt-10 flex items-end justify-center'>
				<img src='img/group2.png' alt='' className='w-[20rem]' />
				<div className=' flex flex-col gap-5 w-[32rem] h-[15rem] justify-center '>
					<h1 className='text-white  text-5xl font-bold w-[45rem]'>
						Want to stay informed about new courses & study?
					</h1>
					<input
						type='text'
						className='w-[30rem] h-14 rounded-full bg-[#4A44D1] pl-10  text-white outline-none'
						placeholder='Type your e-mail'
						maxLength={20}
					/>
				</div>
				<button className='bg-[#FFC224] w-[150px] h-[50px] rounded-full text-black font-bold shadow-[7px_7px_0px_0px_#3d3d3d] flex items-center justify-center transition-all hover:shadow-[4px_4px_5px_0px_#3d3d3d] mb-[2.3rem]'>
					Enroll Now <ArrowForwardIcon />
				</button>
			</div>
			<div className='flex items-center'>
				<div className='flex flex-col gap-5 p-[4rem]'>
					<div className='bg-[#EFEEFE] rounded-[20px] p-[5px] mt-3 w-[10rem] flex justify-center'>
						<p>Skilled Introduce</p>
					</div>
					<h1 className='text-[#161439] text-5xl font-bold w-[30rem]'>
						Our Top Class & Expert Instructors in One Place
					</h1>
					<p className='w-[23rem]'>
						when an unknown printer took a galley of type and scrambled
						makespecimen book has survived not only five centuries
					</p>
					<button className='bg-[#5751E1] w-[150px] h-[50px] rounded-[20px] text-white font-bold shadow-[7px_7px_0px_0px_#030170] flex items-center justify-center transition-all hover:shadow-[4px_4px_5px_0px_#030170]'>
						Start Free Trial <ArrowForwardIcon />
					</button>
				</div>
				<div className=' flex flex-wrap gap-3'>
					<div className=' flex items-center flex-col gap-1'>
						<img src='img/p1.png' alt='' />
						<h1 className='text-[1.5rem] font-bold text-[#161439]'>
							Mark Jukarberg
						</h1>
						<p className='text-[#5751E1]'>UX Design Lead</p>
						<label>
							<Star sx={{ color: '#F8BC24' }} />
							(4.8 Reviews)
						</label>
						<div className='flex gap-2'>
							<div className='w-[30px] h-[30px] border-solid border-[2px] border-gray rounded-full flex justify-center items-center'>
								<img
									src='img/Soc (1).png'
									alt=''
									className='w-[10px] h-[20px]'
								/>
							</div>
							<div className='w-[30px] h-[30px] border-solid border-[2px] border-gray rounded-full flex justify-center items-center'>
								<img
									src='img/Soc (2).png'
									alt=''
									className='w-[15px] h-[20px]'
								/>
							</div>
							<div className='w-[30px] h-[30px] border-solid border-[2px] border-gray rounded-full flex justify-center items-center'>
								<img
									src='img/Soc (3).png'
									alt=''
									className='w-[15px] h-[20px]'
								/>
							</div>
							<div className='w-[30px] h-[30px] border-solid border-[2px] border-gray rounded-full flex justify-center items-center'>
								<img
									src='img/Soc (4).png'
									alt=''
									className='w-[15px] h-[20px]'
								/>
							</div>
						</div>
					</div>
					<div className=' flex items-center flex-col gap-1'>
						<img src='img/p2.png' alt='' />
						<h1 className='text-[1.5rem] font-bold text-[#161439]'>
							Olivia Mia
						</h1>
						<p className='text-[#5751E1]'>Web Design</p>
						<label>
							<Star sx={{ color: '#F8BC24' }} />
							(4.8 Reviews)
						</label>
						<div className='flex gap-2'>
							<div className='w-[30px] h-[30px] border-solid border-[2px] border-gray rounded-full flex justify-center items-center'>
								<img
									src='img/Soc (1).png'
									alt=''
									className='w-[10px] h-[20px]'
								/>
							</div>
							<div className='w-[30px] h-[30px] border-solid border-[2px] border-gray rounded-full flex justify-center items-center'>
								<img
									src='img/Soc (2).png'
									alt=''
									className='w-[15px] h-[20px]'
								/>
							</div>
							<div className='w-[30px] h-[30px] border-solid border-[2px] border-gray rounded-full flex justify-center items-center'>
								<img
									src='img/Soc (3).png'
									alt=''
									className='w-[15px] h-[20px]'
								/>
							</div>
							<div className='w-[30px] h-[30px] border-solid border-[2px] border-gray rounded-full flex justify-center items-center'>
								<img
									src='img/Soc (4).png'
									alt=''
									className='w-[15px] h-[20px]'
								/>
							</div>
						</div>
					</div>
					<div className=' flex items-center flex-col gap-1'>
						<img src='img/p3.png' alt='' />
						<h1 className='text-[1.5rem] font-bold text-[#161439]'>
							William Hope
						</h1>
						<p className='text-[#5751E1]'>Digital Marketing</p>
						<label>
							<Star sx={{ color: '#F8BC24' }} />
							(4.8 Reviews)
						</label>
						<div className='flex gap-2'>
							<div className='w-[30px] h-[30px] border-solid border-[2px] border-gray rounded-full flex justify-center items-center'>
								<img
									src='img/Soc (1).png'
									alt=''
									className='w-[10px] h-[20px]'
								/>
							</div>
							<div className='w-[30px] h-[30px] border-solid border-[2px] border-gray rounded-full flex justify-center items-center'>
								<img
									src='img/Soc (2).png'
									alt=''
									className='w-[15px] h-[20px]'
								/>
							</div>
							<div className='w-[30px] h-[30px] border-solid border-[2px] border-gray rounded-full flex justify-center items-center'>
								<img
									src='img/Soc (3).png'
									alt=''
									className='w-[15px] h-[20px]'
								/>
							</div>
							<div className='w-[30px] h-[30px] border-solid border-[2px] border-gray rounded-full flex justify-center items-center'>
								<img
									src='img/Soc (4).png'
									alt=''
									className='w-[15px] h-[20px]'
								/>
							</div>
						</div>
					</div>
					<div className=' flex items-center flex-col gap-1'>
						<img src='img/p4.png' alt='' />
						<h1 className='text-[1.5rem] font-bold text-[#161439]'>
							Sophia Ava
						</h1>
						<p className='text-[#5751E1]'>UX Design Lead</p>
						<label>
							<Star sx={{ color: '#F8BC24' }} />
							(4.8 Reviews)
						</label>
						<div className='flex gap-2'>
							<div className='w-[30px] h-[30px] border-solid border-[2px] border-gray rounded-full flex justify-center items-center'>
								<img
									src='img/Soc (1).png'
									alt=''
									className='w-[10px] h-[20px]'
								/>
							</div>
							<div className='w-[30px] h-[30px] border-solid border-[2px] border-gray rounded-full flex justify-center items-center'>
								<img
									src='img/Soc (2).png'
									alt=''
									className='w-[15px] h-[20px]'
								/>
							</div>
							<div className='w-[30px] h-[30px] border-solid border-[2px] border-gray rounded-full flex justify-center items-center'>
								<img
									src='img/Soc (3).png'
									alt=''
									className='w-[15px] h-[20px]'
								/>
							</div>
							<div className='w-[30px] h-[30px] border-solid border-[2px] border-gray rounded-full flex justify-center items-center'>
								<img
									src='img/Soc (4).png'
									alt=''
									className='w-[15px] h-[20px]'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='flex justify-center'>
				<div className='bg-[#282568] w-[65rem] h-[10rem] rounded-[30px]  flex justify-around items-center p-10'>
					<div className='text-white flex items-center flex-col'>
						<h1 className='text-5xl font-bold'>45К+</h1>
						<p>Active Student</p>
					</div>
					<div className='bg-gradient-to-b from-white to-white-500 w-1 h-[6rem] rounded-[4rem]'></div>
					<div className='text-white flex items-center flex-col'>
						<h1 className='text-5xl font-bold'>89+</h1>
						<p>Faculty Courses</p>
					</div>
					<div className='bg-gradient-to-b from-white to-white-500 w-1 h-[6rem] rounded-[4rem]'></div>
					<div className='text-white flex items-center flex-col'>
						<h1 className='text-5xl font-bold'>156К</h1>
						<p>Best Professors</p>
					</div>
					<div className='bg-gradient-to-b from-white to-white-500 w-1 h-[6rem] rounded-[4rem]w'></div>
					<div className='text-white flex items-center flex-col'>
						<h1 className='text-5xl font-bold'>42К</h1>
						<p>Award Archived</p>
					</div>
				</div>
			</div>
			<div className='flex justify-center flex-col bg-[#282568] items-center gap-[1rem] mt-3 p-[4rem]'>
				<div className='bg-[#5751E1] rounded-[20px] p-2 mt-3 text-white'>
					<p>How We Start Journey</p>
				</div>
				<h1 className='text-white text-5xl font-bold'>
					Start your Learning Journey Today!
				</h1>
				<p className='text-[#ACAACC] text-center'>
					Groove’s intuitive shared inbox makesteam members together organize,
					prioritize and.In this episode.
				</p>
				<div className='flex gap-4 items-center'>
					<div className='flex flex-col items-center'>
						<img src='img/im.png' alt='' />
						<h1 className='text-white text-[20px] font-bold'>
							Learn with Experts
						</h1>
						<p className='text-white text-center w-[15rem]'>
							Curate anding area share Pluralsight content to reach your
						</p>
					</div>
					<div className='flex flex-col items-center pt-3'>
						<img src='img/Im (2).png' alt='' />
						<h1 className='text-white text-[20px] font-bold'>Learn Anything</h1>
						<p className='text-white text-center w-[15rem]'>
							Curate anding area share Pluralsight content to reach your
						</p>
					</div>
					<div className='flex flex-col items-center pt-2'>
						<img src='img/Im (3).png' alt='' />
						<h1 className='text-white text-[20px] font-bold'>Learn Anything</h1>
						<p className='text-white text-center w-[15rem]'>
							Curate anding area share Pluralsight content to reach your
						</p>
					</div>
					<div className='flex flex-col items-center pt-3'>
						<img src='img/Im (4).png' alt='' />
						<h1 className='text-white text-[20px] font-bold'>Learn Anything</h1>
						<p className='text-white text-center w-[15rem]'>
							Curate anding area share Pluralsight content to reach your
						</p>
					</div>
				</div>
				<div className='flex  gap-3 mt-6 '>
					<div className='bg-white w-[35rem] h-[14rem] rounded-[20px] flex items-center p-[2rem] flex-col gap-3'>
						<h1 className='text-3xl font-bold text-[#161439]'>
							Become a Instructor
						</h1>
						<p className='text-center'>
							To take a trivial example, which of us undertakes physical
							exercise yes is this happen here.
						</p>
						<button className='bg-[#5751E1] w-[155px] h-[55px] rounded-full text-white font-bold shadow-[7px_7px_0px_0px_#030170] flex items-center justify-center transition-all hover:shadow-[4px_4px_5px_0px_#030170]'>
							Apply Now <ArrowForwardIcon />
						</button>
					</div>
					<div className='bg-white w-[35rem] h-[14rem] rounded-[20px] flex items-center p-[2rem] flex-col gap-3'>
						<h1 className='text-3xl font-bold text-[#161439]'>
							Become a Student
						</h1>
						<p className='text-center'>
							Join millions of people from around the world learning together.
							Online learning.
						</p>
						<button className='bg-[#5751E1] w-[155px] h-[55px] rounded-full text-white font-bold shadow-[7px_7px_0px_0px_#030170] flex items-center justify-center transition-all hover:shadow-[4px_4px_5px_0px_#030170]'>
							Apply Now <ArrowForwardIcon />
						</button>
					</div>
				</div>
			</div>
			<div className='flex justify-center flex-col  items-center gap-3'>
				<div className='bg-[#EFEEFE] rounded-[20px] p-2 mt-3 text-[#5751E1]'>
					<p>How We Start Journey</p>
				</div>
				<h1 className='text-5xl font-bold'>Our Latest News Feed</h1>
				<p className='text-[#6D6C80]'>
					when known printer took a galley of type scrambl edmake
				</p>
				<div className='flex gap-3'>
					<div className='w-[25rem] h-[13rem] border-[#B5B5C3] border-[3px] border-solid rounded-[15px] flex items-start flex-col gap-3 p-3'>
						<div className='bg-[#5751E1] rounded-[20px] p-2 mt-3 text-[#5751E1]'>
							<p className='text-white'>Marketing</p>
						</div>
						<div className='flex gap-2 '>
							<CalendarMonthIcon sx={{ color: '#5751E1' }} />
							<p>20 July, 2024</p>
							<PersonIcon sx={{ color: '#5751E1' }} />
							<p>by Admin</p>
						</div>
						<h1 className='text-2xl font-bold'>
							How To Become idiculously Self-Aware In 20 Minutes
						</h1>
					</div>
					<div className='w-[25rem] h-[13rem] border-[#B5B5C3] border-[3px] border-solid rounded-[15px] flex items-start flex-col gap-3 p-3'>
						<div className='bg-[#5751E1] rounded-[20px] p-2 mt-3 text-[#5751E1]'>
							<p className='text-white'>Marketing</p>
						</div>
						<div className='flex gap-2 '>
							<CalendarMonthIcon sx={{ color: '#5751E1' }} />
							<p>20 July, 2024</p>
							<PersonIcon sx={{ color: '#5751E1' }} />
							<p>by Admin</p>
						</div>
						<h1 className='text-2xl font-bold'>
							Get Started With UI Design With Tips To Speed
						</h1>
					</div>
					<div className='w-[25rem] h-[13rem] border-[#B5B5C3] border-[3px] border-solid rounded-[15px] flex items-start flex-col gap-3 p-3'>
						<div className='bg-[#5751E1] rounded-[20px] p-2 mt-3 text-[#5751E1]'>
							<p className='text-white'>Marketing</p>
						</div>
						<div className='flex gap-2 '>
							<CalendarMonthIcon sx={{ color: '#5751E1' }} />
							<p>20 July, 2024</p>
							<PersonIcon sx={{ color: '#5751E1' }} />
							<p>by Admin</p>
						</div>
						<h1 className='text-2xl font-bold'>
							Make Your Own Expanding Contracting Content
						</h1>
					</div>
				</div>
			</div>
		</>
	)
}

export default App
