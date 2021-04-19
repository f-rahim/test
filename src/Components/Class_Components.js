import React,{Component} from "react";

class Test_class_Component extends Component {

    render(){

        return(
            <div>
                {/* <h3>Class Components is work! and {Math.round(Math.random()*10)*2} is random number </h3> */}
                <h4>My name is: {this.props.name} and I learn about React.</h4>                
                <p>{this.props.children}</p>
            </div>
        );
    }
}

export default Test_class_Component;