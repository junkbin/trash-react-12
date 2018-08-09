import React from 'react';

export default class MainPropsCenter extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
        console.log("Mount", this);
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("C.Update", this);
    }

    componentWillUnmount(){
        console.log("Unmount", this);
    }

    render(){
        return (
            <div className="row mt-1">
                <div className="col-sm-12 bg-light rounded div-card-height">
                    {this.props.item}
                </div>
            </div>
        );
    }
}