import React from 'react';
import {  Route,Routes,useRoutes} from 'react-router-dom'
import MarkdownParser from './MarkdownParser';
import Home from '../Home';


const Main = () => {


    return (<div>
    <Routes>
    <Route path='/' element={<Home/>} />
    {['/selfcorrector','/autoencoder'].map(path => <Route path={path} element={<MarkdownParser/>} key = {path}/>)}
    

    </Routes>
      
    </div>)
}

export default Main;