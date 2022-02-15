import React from 'react';
import ReactDOM from 'react-dom';

import Timer from './components/timer'

let counter = 0

const MainPage = () => {
  return <>
    <Timer timeElapsed={counter}/>
  </>
}

setInterval(()=>{
  counter++
  ReactDOM.render(<MainPage/>,document.getElementById('root'));
},1000)



