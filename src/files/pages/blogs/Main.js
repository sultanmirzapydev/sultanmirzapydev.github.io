import React from 'react';
import {  Route,Routes} from 'react-router-dom'

import Corrector from './Corrector';
var Latex = require('react-latex');
const Main = () => {
    return (<div>
        
       <Routes>
            <Route path='/corrector' element={<Corrector/>} />
            </Routes> 
           {/* <Route path='/autoencoder' component={Autoencoders} />  */}
       
    </div>)
}

export default Main;