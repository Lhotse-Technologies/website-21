import React, { useState } from "react";

function Grid(props) {

    /*const [number] = useState(props.number);
    const [size] = useState(props.size);*/
    const [input] = useState(props.input);

    let div = input.map(input => (
        <div class= "border-2 border-blue-500 rounded-full h-24 w-24 flex items-center justify-center"> {input.text} </div>
      ));
    return (
        <div class="grid grid-flow-col grid-cols-3 grid-rows-2 gap-4  justify-items-center">
            {div}
        </div>
    );


}
export default Grid;