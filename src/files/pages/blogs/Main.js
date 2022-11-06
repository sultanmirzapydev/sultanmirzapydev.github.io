import React from 'react';
import {  Route,Routes} from 'react-router-dom'
import Autoencoders from './Autoencoders';
import Corrector from './Corrector';
var Latex = require('react-latex');
const Main = () => {
    return (<div>
        
       <Routes>
            <Route path='/corrector' element={<Corrector/>} />
            <Route path='/autoencoder' element={<Autoencoders/>} /> 
            </Routes> 
             
       
    </div>)
}

export default Main;