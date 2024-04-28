import React,{useEffect,useState,Suspense, useLayoutEffect, useRef} from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeHighlight from 'rehype-highlight';
//import {read} from 'to-vfile';
import {rehype} from 'rehype';
import Latex from './Latex';
import { Container } from '@mui/material';
import {useLocation} from 'react-router-dom';
import data from '../../markdowns/list';
import "highlight.js/styles/github.css";





const MarkdownParser = () => {
    let loc = useLocation();
    const [text, setText] = useState();
    const [isMobile, setIsMobile] = useState(window.screen.width)
    
     const ref = useRef(null);
   
    let path_name = loc.pathname.substring(1);
    let file_name = path_name.charAt(0).toUpperCase() + path_name.slice(1,) + '.md';

    useLayoutEffect(()=>{
        let update_state = ()=> setIsMobile(window.screen.width);
        window.addEventListener('resize', update_state);
        return ()=> window.removeEventListener('resize', update_state);
    },[]);

    useEffect(()=>{
        import(`../../markdowns/${file_name}`).then((module)=>
    fetch(module.default))
     .then(res=>res.text())
    .then(md=> setText(md))

     
    },[]);
    useEffect(()=>{
        console.log('exec outside')
        if (text){
            //eles = ;
            console.log('exec inside')
            document.querySelectorAll('code').forEach(el=>el.style.cssText+=' margin: auto; width:65% ;');
            if (isMobile<640){document.querySelectorAll('code').forEach(el=>el.style.cssText+=' margin: auto;padding:15px 0; width:100% ;');
               }
            setTimeout(()=>{//  .style.cssText+='overflow: hidden;';
            if(isMobile<640){
                document.querySelectorAll('.MJXc-display').forEach(el=>el.style.cssText+='overflow: scroll;');
            };},2000);
        }            
    },[text])

     
    
    return (
        <Latex>

        <div id="new" className="text-justify mt-[10vh] w-[90%] sm:w-[80%] md:w-[65%] mx-auto"  >
        <div  className='text-center font-bold text-2xl mb-[20px]'>{data[path_name].title} </div>
        <Suspense fallback={<div>Loading...</div>}>
        
        <ReactMarkdown  className="[word-spacing:2px] "  children={text} remarkPlugins={[remarkGfm]}  rehypePlugins={[ rehypeRaw, rehypeHighlight]}/>
      </Suspense>
       <script src="https://giscus.app/client.js"
        data-repo="sultanmirzapydev/sultanmirzapydev.github.io"
        data-repo-id="R_kgDOK0Osfg"
        data-category="General"
        data-category-id="DIC_kwDOK0Osfs4CcqTI"
        data-mapping="pathname"
        data-strict="1"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="light_high_contrast"
        data-lang="en"
        data-loading="lazy"
        crossorigin="anonymous"
        async>
</script>
       </div> 
       </Latex>
       
       
       
    )
}

export default MarkdownParser;













