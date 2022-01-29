import React from 'react';

function Todolist(props) {



  return(
      <>
        <li>
            
          <input onClick={()=>{
          props.onSelect(props.id)
          }} type="checkbox" value="" />

          {props.text}, {props.priority}
        </li>
      </>

  ) 
}

export default Todolist;
