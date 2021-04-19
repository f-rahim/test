import React from 'react';


function Welcome(props){

    return(
        <div className="welcome">
            <h2>My Name is: {props.name}. I am {props.age} Years old.</h2>
        </div>
    );
}

export default Welcome;