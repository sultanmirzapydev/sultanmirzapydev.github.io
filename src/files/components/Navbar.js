import React from 'react';
import styled from 'styled-components';
import { MdEmail } from "react-icons/md";
import { GrLinkedin } from "react-icons/gr";
import { ImGithub } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";

import {Container, NavInnerContainer} from './navStyles';


const Navbar = () => {
	
	return (<>
			<Container >

				<div className=' sm:w-5/6 md:w-5/6 lg:w-2/3 mx-auto flex items-stretch items-center'>

					<address className='grow  flex items-center' >
					
					<ol className=' flex  items-center '>
					<li className='text-2xl pb-1'> Sultan mirza </li>
					<li className='text-4xl ml-4 pt-1 hover:hover:text-sky-500'><a href='mailto:sultanmirza03021@gmail.com'> <MdEmail /> </a> </li>
					<li className='text-3xl ml-3 pt-1 hover:hover:text-sky-500'><a href='https://www.linkedin.com/in/sultan-mirza-89055220b/'> <FaLinkedin /> </a>  </li>
					<li className='text-4xl ml-3 pt-1  hover:text-navBtn '> <a href='https://github.com/sultanmirzapydev'><FaGithubAlt className="hover:text-sky-500 rounded-full"/> </a> </li>
					</ol>
					</address>
					<nav className='ml-auto grow flex items-center justify-end'>
						<ol className='flex  font-normal justify-center'>
							<button className="transition underline decoration-navBtn decoration-[3.3px] underline-offset-[4px]  p-2 hover:bg-navBtn hover:text-white text-lg text-center grow  rounded 	"><a href="bb">About</a></button>
						    <button className="underline decoration-navBtn decoration-[3.3px] underline-offset-[4px] p-2 hover:bg-navBtn text-lg text-center grow hover:text-white rounded "><a href="#">AI Blogs</a></button>
						    <button className="underline decoration-navBtn decoration-[3.3px] underline-offset-[4px] p-2 hover:bg-navBtn text-lg text-center grow hover:text-white rounded "><a href="#">Projects</a></button>
						    
						</ol>
					</nav>
				</div>
			</Container>
		   </>)
}

export default Navbar;