import React, { Component }  from 'react';
import Main from './files/pages/Main';
import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }`



function App() {
  return (
    <>
      <Global/>
      <Main/>
    </>
    
  );
}

export default App;
