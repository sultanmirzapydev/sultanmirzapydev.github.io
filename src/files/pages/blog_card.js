import React from 'react';
import ReactDOM from 'react-dom/client';
import Intro from '../components/home/intro';
import { Link,useLocation } from 'react-router-dom';
import {useState} from 'react';
import { FaCalendarAlt } from "react-icons/fa";
import { FaTags } from "react-icons/fa6";
import data from '../markdowns/list';

const Blog_card = () => {
  const [isTrue, setIsTrue] = useState(false)
  const loc = useLocation();
   
  const keys = Object.keys(data)
  
  
    return (    
        <>
         {keys.map((item,idx)=>
            <div key ={idx} >
           <Link to={data[item].url}  >
            <div className="bg-[#fafafa] flex flex-col mx-auto w-[94%] mb-6 shadow-md shadow-[#dbeafe] h-full">
                <div  className="  capitalize p-5 font-semibold [word-spacing:4px] text-xl md:text-2xl  text-blue-700"> {data[item].title} jkkgfui   yuuyrtuioi </div>
                <div className=" text-base italic underline px-4 pb-6 decoration-[#0ea5e9] decoration-2 underline-offset-2"> {data[item].sub_title} </div>
                <div className="flex px-4  pb-4">
                    <div className='flex  justify-start '>
                        <FaCalendarAlt className=' text-xl md:text-2xl text-[#f97316]' />
                        <div className="pl-3 font-medium text-[#a3a3a3]"> {data[item].date} </div>
                    </div>
                    <div className='flex grow pl-6'>
                        <FaTags className=" text-xl md:text-2xl text-[#f97316]"/>
                        <div className='pl-3 font-medium text-[#a3a3a3]'> {data[item].tag} </div>
                    </div>
                </div>

            </div>
            
            </Link> 
            </div>
            )}
            
            
          
                      
        </>
    )

}

export default  Blog_card;