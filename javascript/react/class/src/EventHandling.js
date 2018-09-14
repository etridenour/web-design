import React, { Component } from 'react';

class EventHandling extends Component {

    constructor(props){
        super(props);
        this.state = {isToggleOn: true};
    }

    handleClick(){
        this.setState({isToggleOn})
    }

    render(){

        return(
            <div>
                <button onClick=''>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
            </div>
        );

    }
}