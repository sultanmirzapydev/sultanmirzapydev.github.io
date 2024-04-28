import React,{useEffect,useState,useLayoutEffect } from 'react';
import dummy from '../images/dummyMan.png';





const  About = () => {

	const [isMobile, setIsMobile] = useState(window.screen.width)
  	useLayoutEffect(()=>{
	    let update_state = ()=> setIsMobile(window.screen.width);
	    window.addEventListener('resize', update_state);
	    return ()=> window.removeEventListener('resize', update_state);
  	},[]);

  	const curmbs = (isMobile)=>{
  		if(isMobile < 640){
  			return <> </>
  		}
  	}


	return (<>
			

				<div id ='about' className="text-center w-5/6 md:w-4/6 mx-auto text-justify mb-8">
					
					<img src={dummy} className="mt-8 mb-8 rounded-full h-32 mx-auto" />
					<curmbs isMobile={isMobile}/>
					<p> Hi, I'm Sultan Mirza. Welcome to my website.   </p>
					<p>  I am a machine learning enthusiast and has keen interest in natural language processing and
					 reinforcement learning, and an avid reader of the latest literature for various nlp tasks. 
					 I spend most of my time learning new advancements in the machine learning field from research papers.
					  My research interest is in Reinforcement learning with Human feedback(RLHF), positional 
					  encoding, reasoning, and anything inbetween reinforment learning and NLP. 
					</p>
					<p> Email me if you are looking for a research collaborator </p>
					
				</div>



				

		</>)
};

export default About;	