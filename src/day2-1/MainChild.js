import React from 'react';

export default class MainChild extends React.Component{

    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
            <div>
                <button onClick={this.props.action}>Hello World</button>
            </div>
        );
    }

}