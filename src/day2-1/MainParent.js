import React from 'react';

import MainChild from './MainChild';

export default class MainParent extends React.Component{

    constructor(props){
        super(props);
        this.state = {};

        this.handler = this.handler.bind(this);
    }

    handler(){
        console.log(this);
        console.log("Parent method");
    }

    render(){
        return (
            <div>
                <MainChild action={this.handler} />
            </div>
        );
    }

}