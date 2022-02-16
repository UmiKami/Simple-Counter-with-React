import React from 'react';
import ReactDOM from 'react-dom';

import Timer from './components/timer'

const MainPage = () => {
  return <>
    <Timer/>
  </>
}

setInterval(()=>{
  ReactDOM.render(<MainPage/>,document.getElementById('root'));
},1000)