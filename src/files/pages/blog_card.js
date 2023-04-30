import React from 'react';
import ReactDOM from 'react-dom/client';
import { Container } from '@mui/material';
import Intro from '../components/home/intro';
import { Link,useLocation } from 'react-router-dom';
import {useState} from 'react';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import data from '../markdowns/list';

const Blog_card = () => {
  const [isTrue, setIsTrue] = useState(false)
  const loc = useLocation();
   
  const keys = Object.keys(data)
  
    return (    
        <>
         {keys.map((item,idx)=>
            <Container key ={idx}>
           <Link to={data[item].url} style={{textDecoration:'none'}} >
            <Paper>
                <Typography gutterBottom variant="h5"  component="div" >
                    {data[item].title}
                </Typography>
            </Paper>
            
            </Link> 
            </Container>
            )}
            
            
          
                      
        </>
    )

}

export default  Blog_card;