import React,{useEffect,useState,Suspense} from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import Latex from './Latex';
import { Container } from '@mui/material';
import {useLocation} from 'react-router-dom';


const MarkdownParser = () => {
    let loc = useLocation();
    
    const [text, setText] = useState();
    let path_name = loc.pathname.substring(1);
    let file_name = path_name.charAt(0).toUpperCase() + path_name.slice(1,) + '.md';
    useEffect(()=>{
        import(`../../markdowns/${file_name}`).then((module)=>
    fetch(module.default))
     .then(res=>res.text())
    .then(md=> setText(md))

     
    },[]);

    return (
        <Latex>
        <Container component="main" sx={{marginTop:'10vh',width:'70vw',fontSize:'21px'}}>
        <Suspense fallback={<div>Loading...</div>}>
        <ReactMarkdown children={text} remarkPlugins={[remarkGfm]}  rehypePlugins={[rehypeRaw]}/>
      </Suspense>
       
       </Container> 
       </Latex>
       
       
       
    )
}

export default MarkdownParser;













