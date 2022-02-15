import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './components/timer'

const MainPage = () => {
  return <>
    <Timer/>
  </>
}


ReactDOM.render(<MainPage/>,document.getElementById('root'));