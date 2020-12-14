import React from 'react';
import './App.css';
import SlotM from './SlotM';



const App = () => {

  return (
    <>
    
      <h1 className = 'heading'> ❣️ WELCOME TO <span style = {{fontWeight: 'bold', backgroundColor: '#868686', textTransform: "uppercase" }}>slot Machine Game  </span> ❣️ </h1>
      <div className = 'slot_Mach'>
            <SlotM x = '❤️' y = '◀️'  z = '❤️' />
            <SlotM x = '❤️' y = '❤️' z = '❤️' />
            <SlotM  x = '❤️' y = '❤️' z = '◀️' />
      </div>


  </>
  )

}

export default App;
