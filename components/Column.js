import React, { useState } from "react";

function Column(props) {

    /*const [number] = useState(props.number);
    const [size] = useState(props.size);*/
    const [input] = useState(props.input);

    let div = input.map(input => (
        <div class= "border-2 border-red-500 rounded-full h-24 w-24 flex items-center justify-center"> {input.text} </div>
      ));
    return (
        <div class="grid grid-cols-1 justify-items-center space-y-4 ">
            {div}
        </div>
    );


}
export default Column;