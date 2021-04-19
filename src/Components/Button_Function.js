import React from 'react';

function Button_Function(){
    
    function Button(a,b){
        console.log(a,b);
    }

    return(
        <div>
            <button onClick={Button.bind(this, "I am from Function Buttom", "Function Button Two")}>Click Me for Funational Button</button>
        </div>
    )
}

export default Button_Function;