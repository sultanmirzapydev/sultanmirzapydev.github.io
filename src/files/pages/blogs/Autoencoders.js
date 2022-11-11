import React,{useEffect,useState} from 'react';
import ReactMarkdown from 'react-markdown';
import file from '../../markdowns/AutoEncoders.md';
import { Container } from '@mui/material';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

const MathJax = require('react-mathjax')


const Autoencoders =() => {
   const [markdown, setMarkdown] = useState( "");
  
   useEffect(()=> {
    fetch(file).then((res)=> res.text()).then((text)=>setMarkdown(text));  
   },[]);

   
    return (
        <>
        
        <Container component="main" sx={{marginTop:'10vh',width:'70vw',fontSize:'23px'}}>
       
        <ReactMarkdown children = {markdown} remarkPlugins={[remarkMath,remarkGfm]}  rehypePlugins={[rehypeKatex,rehypeRaw]}  />
        </Container> 
        </>
    )
}

export default Autoencoders;

