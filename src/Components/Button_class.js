import Rract,{Component} from 'react';

class Button extends Component {

    WriteSomething(a){
        console.log(a);
    }

    render (){
        return(
            <button onClick={this.WriteSomething.bind(this, "I am from Class Button.")}>Click Me</button>
        )
    }
}

export default Button;