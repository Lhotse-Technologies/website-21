import React, { useState } from "react";

function Row(props) {

    /*const [number] = useState(props.number);
    const [size] = useState(props.size);*/
    const [input] = useState(props.input);

    let div = input.map(input => (
        <div class= "border-2 border-black rounded-full h-24 w-24 flex items-center justify-center"> {input.text} </div>
      ));
    return (
        <div class="flex justify-evenly">
            {div}
        </div>
    );


}
export default Row;