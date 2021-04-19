import React,{Component} from 'react';

class Hello extends Component {

    render(){
        return (
            <h2>I am from {this.props.country}</h2>
        );        
    }
}

export default Hello;