import React from 'react';



let History = function(props) {
        return(
            <ul>
                {props.items.map((item, key) => <li>{key={key}} {item.left} {item.operator}  {item.right} = {item.result}</li>)}
            </ul>
        )
}


export default History