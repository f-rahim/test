// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';
import Button from './Components/Button_class';
import Button_Function from './Components/Button_Function';
import Test_class_Component from './Components/Class_Components';
import Test_function from './Components/Function_component';
import State_test from './Components/State';


const App = props => {

  const [ PersonState, UpdateState ] = useState ({
    p: [
      { name: 'Abdur Rahim', roll: 26 },
      { name: 'Abdur Rahman', roll: 25 },
      { name: 'Shohan Gazi', roll: 50 },
      { name: 'Shohan Gazi', roll: 50 },
    ],
    other: "This is Other state",
  })

  const [ OtherState, UpdateOtherState ] =  useState ({
    s: [
      { some: 'This is another other state!'}
    ]
  })
 
  console.log(PersonState, OtherState );

  const switchNameHandelar = () => {
    
    UpdateState({
      p: [
        { name: 'Abdur Korim', roll: 26 },
        { name: 'Rayhan Aslam', roll: 25 },
        { name: 'Riajul Islam', roll: 57 },
        { name: 'Riajul Islam', roll: 57 },
      ]
    })
  }


  
  

    return (
      <div className="App">
        

        <button onClick={switchNameHandelar}>Click Me</button>

        <State_test name={PersonState.p[0].name} roll={PersonState.p[0].roll}></State_test>
        <State_test name={PersonState.p[1].name} roll={PersonState.p[1].roll}></State_test>
        <State_test name={PersonState.p[2].name} roll={PersonState.p[2].roll}></State_test>
        <State_test name={PersonState.p[3].name} roll={PersonState.p[3].roll}></State_test>
        
        <Welcome name='Abdur Rahim' age="20" />
        <Welcome name='Abdur Rahman' age="23" />
  
        <Hello country='Bangladesh'/>
        <Hello country='USA'/>
  
        <Button />
        <Button_Function />
  
        <Test_class_Component name='Abdur Rahim' />
        <Test_class_Component name='Abdur Rahim'>I will experiment react tag how it's work and finally i got the success!!!</Test_class_Component>
        <Test_class_Component name='Abdur Rahim' />
        <Test_class_Component name='Abdur Rahim' />
  
        <Test_function friend='Abdur Rahman'></Test_function>
  
      </div>
    );

}

export default App;
