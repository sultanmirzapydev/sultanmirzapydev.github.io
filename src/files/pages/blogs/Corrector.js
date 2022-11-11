import React,{useEffect,useState,Suspense} from 'react';
import ReactMarkdown from 'react-markdown';
import file from '../../markdowns/selfcorrector.md';
import { Container } from '@mui/material';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import Latex from './Latex';
import {useLocation} from 'react-router-dom';


const Corrector =() => {

   const [markdown, setMarkdown] = useState( "");
   let loc = useLocation();
//    useEffect(()=>{
//     import('../../markdowns/AutoEncoders.md').then((module)=>
//     fetch(module.default)
//     .then(res=>res.text())
//     .then(md=> setMarkdown(md))

//     )
//    },[]);
   useEffect(()=> {
    fetch(file).then((res)=> res.text()).then((text)=>setMarkdown(text));
   },[]);
   
   
    return (
        <>
          {/* <Suspense fallback={<div>Loading...</div>}>
        <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]}  rehypePlugins={[rehypeRaw]}/>
      </Suspense> */}
        <Latex>
        <Container component="main" sx={{marginTop:'10vh',width:'70vw',fontSize:'21px'}}>
       
        <ReactMarkdown children = {markdown} remarkPlugins={[remarkGfm]}  rehypePlugins={[rehypeRaw]}  />
        </Container> 
        </Latex>
        </>
    )
}

export default Corrector;

