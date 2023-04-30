import React from 'react';
import {  Route,Routes,useRoutes} from 'react-router-dom'
import MarkdownParser from './blogs/MarkdownParser';
import Home from './Home';
import name_of_blogs from '../markdowns/list_of_blogs';


const Main = () => {
    

    return (<div>
    <Routes>
    <Route path='/' element={<Home/>} />
    {name_of_blogs.map(path => <Route path={path} element={<MarkdownParser/>} key = {path}/>)}
    

    </Routes>
      
    </div>)
}

export default Main;