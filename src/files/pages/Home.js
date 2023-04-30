import React from 'react';
import ReactDOM from 'react-dom/client';
import { Container } from '@mui/material';
import Intro from '../components/home/intro';
import { Link,useLocation } from 'react-router-dom';
import {useState} from 'react';

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Blog_card from './blog_card';

const Home = () => {
  const [isTrue, setIsTrue] = useState(false)
  const loc = useLocation();
  

 
  
    return (
        <>
         <Container maxWidth='false' disableGutters={false} sx={{display:'flex',flexDirection:'column',height:'100vh',width:'100%',justifyContent:'center'}}>
            
         <Blog_card/>
          
        </Container> 
     
        
        </>
    )

}

export default  Home;