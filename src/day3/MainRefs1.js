import React from 'react';

import './MainRefs1.css';

export default class MainRefs1 extends React.Component {

    constructor(props){
        super(props);
        this.state = {"a" : "...", "b" : "...", "c": "..."}

        this.update = this.update.bind(this);
    }

    update(){
        let a = this.refs.a.value;
        let b = this.refs.b.value;
        let c = this.refs.c.value;

        this.setState({a, b, c});
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
                                <input ref="a" onChange={this.update} class="form-control " type="text" placeholder="Write here..." />
                                <div className="mt-2 text-info text-capitalize">{this.state.a}</div>
                            </div>
                        </div>

                        <div className="row bg-light mt-1 div-min-height">
                            <div className="col-sm-12  pt-3 pb-2">
                                <input ref="b" onChange={this.update} class="form-control " type="text" placeholder="Write here..." />
                                <span className="mt-1 text-success text-capitalize">{this.state.b}</span>
                            </div>
                        </div>

                        <div className="row bg-light mt-1 div-min-height">
                            <div className="col-sm-12  pt-3 pb-2">
                                <input ref="c" onChange={this.update} class="form-control" type="text" placeholder="Write here..." />
                                <span className="mt-1 text-primary text-capitalize">{this.state.c}</span>
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