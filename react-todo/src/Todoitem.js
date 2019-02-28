import React from 'react';

function Todoitem(props){
    return(
        <p>
          <label>
            <input type="checkbox" checked={props.item.completed} />
            <span>{props.item.text}</span>
          </label>
        </p>   
    )
}

export default Todoitem;