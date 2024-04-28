import React from 'react';
import { IoMdMenu } from "react-icons/io";
import { TbWriting } from "react-icons/tb";



const MobileNav = () => {
	return<> 
	<div className='flex justify-center h-full' style={{borderBottom:'solid 2px #B06161', backgroundColor:'#F0ECE5'}}>
	<div className="flex mt-1.5  justify-center" style={{width:'90%', verticalAlign:'middle'}}> 
	<TbWriting className=" text-4xl "/>
	<div className="  text-2xl " style={{marginLeft:'2%'}}> Sultan's Blog </div>
	
	{/*<IoMdMenu className=" text-4xl  justify-end"/> */}
	
	</div>
	
	
	</div>
	</>
}

export default MobileNav;