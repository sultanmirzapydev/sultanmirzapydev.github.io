import React, { Component }  from 'react';
import Intro from '../../images/programming.jpg';
import { Container } from '@mui/material';
import { Box } from '@mui/system';


const intro = () => {

    return (
        <Box component="img"  
        sx = {{width:'100%',height:'100%'}}
        alt = "A picture of a computer"
        src = {Intro}
         />
    )
        

}

export default intro;