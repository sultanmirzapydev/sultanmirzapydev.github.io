import React,{ useLayoutEffect} from 'react';
import ReactDOM from 'react-dom/client';
import Intro from '../components/home/intro';
import Navbar from '../components/Navbar';
import MobileNav from '../components/MobileNav';

import About from './about';
import { Link,useLocation } from 'react-router-dom';
import { Container } from '@mui/material';  
import {useState} from 'react';
import styled from "styled-components";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Blog_card from './blog_card';
import '../../index.css';


const HomeMainContainer = styled.div`
            display:            flex;
            flex-direction:     column;
            
            justify-content:    center;
            margin-top:         70px;           
     `;



const Home = () => {
  const [isMobile, setIsMobile] = useState(window.screen.width)
  const loc = useLocation();
   useLayoutEffect(()=>{
    let update_state = ()=> setIsMobile(window.screen.width);
    window.addEventListener('resize', update_state);
    return ()=> window.removeEventListener('resize', update_state);
  },[]);


  let SetNavview = ({is_mobile})=> {
     if (is_mobile<640) {

        return <MobileNav/>
    }
    return <Navbar/>

  }


  
    return (
        <>
         <Container maxWidth='false' className="font-sans" disableGutters={true} sx={{display:'flex',flexDirection:'column', }}>
            <SetNavview is_mobile= {isMobile} />
            
         <HomeMainContainer  className="sm:w-4/5  lg:w-2/3  mx-auto">  
         < About/>   
         <Blog_card/>
        </HomeMainContainer>
        
        </Container> 
     
        
        </>
    )

}

export default  Home;