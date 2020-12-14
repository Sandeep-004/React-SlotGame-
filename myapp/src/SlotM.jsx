import React from 'react';

const SlotM = (props) =>{
    // let x = '❤️';
    // let y = '❤️';
    // let z = '❤️' ;

    let {x, y, z} = props;
    
    if ((x===y) && (y===z)){
      return (
        <>
        <div className = "slot_inner">
        <h1 className = "slot_item"> {x} {y} {z} </h1>
      <h3 className = 'slot_heading'>This is Matching</h3>
      <hr />
      </div>
        </>
        )
      } else {
        return (
          <>
          
          <div className = "slot_inner">
          <h1 className = "slot_item"> {x} {y} {z} </h1>
        <h3 className = 'slot_heading'>This is not Matching</h3>
        <hr />
        </div>
          </>
          )
      }
    }

    
    export default SlotM;