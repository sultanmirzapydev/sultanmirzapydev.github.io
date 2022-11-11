import React from 'react';
import ReactDOM from 'react-dom/client';
import { Container } from '@mui/material';
import Intro from '../components/home/intro';
import { Link,useLocation } from 'react-router-dom';
import {useState} from 'react';

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Main from './blogs/Main';


const Home = () => {
  const [isTrue, setIsTrue] = useState(false)
  const loc = useLocation();
  

 
  
    return (
        <>
         <Container maxWidth='false' disableGutters={false} sx={{display:'flex',flexDirection:'column',height:'100vh',width:'100%',display:'flex',justifyContent:'center',overflow:'hidden',}}>
            
          
          <Card raised={true} style={{height:isTrue?'0%':'30%'}}  sx={{width:'80%',display:'flex',position:'relative',margin:'auto',marginTop:'6%',height:'30%',justifyContent:'center',textAlign:'center',left:'0',right:'0'}}>
          <Link to='/selfcorrector' style={{textDecoration:'none'}} >
            <div style={{display:'flex',  justifyContent:'center',alignItems:'center', height:'100%',width:'100%'}}>
            
                <Typography gutterBottom variant="h5"  component="div" >
                    Generating sequences by learning  to self-correct - paper explained
                </Typography>
               
            </div>
            </Link>
          </Card> 
        
          
          
          {/*<!-- in need of organizing -->  */}
          <Card raised={true} sx={{width:'80%',display:'flex',position:'relative',margin:'auto',marginTop:'3%',height:'30%',justifyContent:'center',textAlign:'center',left:'0',right:'0'}}>
          <Link to='/autoencoder'   style={{textDecoration:'none'}}>
            <div style={{display:'flex',  justifyContent:'center',alignItems:'center', height:'100%',width:'100%'}}>
            
                <Typography gutterBottom variant="h5"  component="div" >
                    Autoencoders -  explained
                </Typography>
               
            </div>
            </Link>
          </Card>
          
        </Container> 
     
        
        </>
    )

}

export default  Home;