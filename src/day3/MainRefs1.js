import React from 'react';

import './MainRefs1.css';

export default class MainRefs1 extends React.Component {

    constructor(props){
        super(props);
        this.state = {"a" : "...", "b" : "...", "c": "...", "d":"", "e" : "..."}

        this.aref = React.createRef();

        this.update = this.update.bind(this);
    }

    componentDidMount(){
        this.aref.current.focus();
    }

    update(){
        let a = this.aref.current.value;
        let b = this.refs.b.value;
        let c = this.c.value;

        let d = this.d.refs.childD.value;

        this.setState({a, b, c , d});
    }

    render(){
        return (
            <div className="container">
                <div className="fixed-top bg-info div-fix-height">
                </div>

                <div className="row div-top-margin">
                    <div className="col-sm-2"></div>

                    <div className="col-sm-8">
                        
                        <div className="row bg-light mt-1 div-min-height">
                            <div className="col-sm-12  pt-3 pb-2">
                                <input ref={this.aref} onChange={this.update} class="form-control " type="text" placeholder="Write here..." />
                                <div className="mt-2 text-info text-capitalize">{this.state.a}</div>
                            </div>
                        </div>

                        <div className="row bg-light mt-1 div-min-height">
                            <div className="col-sm-12  pt-3 pb-2">
                                <input ref="b" onChange={this.update} class="form-control " type="text" placeholder="Write here..." />
                                <div className="mt-2 text-success text-capitalize">{this.state.b}</div>
                            </div>
                        </div>

                        <div className="row bg-light mt-1 div-min-height">
                            <div className="col-sm-12  pt-3 pb-2">
                                <input ref={node=> this.c=node } onChange={this.update} class="form-control" type="text" placeholder="Write here..." />
                                <div className="mt-2 text-primary text-capitalize">{this.state.c}</div>
                            </div>
                        </div>

                        {/* Fourth Option */}
                        <div className="row bg-light mt-1 div-min-height">
                            <div className="col-sm-12  pt-3 pb-2">
                                <Input ref={component => this.d = component}  update={this.update} />
                                <div className="mt-2 text-warning text-capitalize">{this.state.d}</div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-2"></div>
                </div>
                
                <div className="fixed-bottom bg-info div-fix-height">
                </div>
            </div>
        );
    }
}

class Input extends React.Component{
    constructor(props){
        super(props);
        this.state= {};
    }

    render(){
        return (
            <div>
                <input ref="childD" onChange={this.props.update} class="form-control" type="text" placeholder="Write here..." />
            </div>
        );
    }
}


