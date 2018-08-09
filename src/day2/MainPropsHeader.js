import React from 'react';
import './MainProps.css';

export default class MainPropsHeader extends React.Component{
    constructor(props){
        super(props);
        this.state = {"placeholder" : "Yeee Watsappp.."};
    }

    render(){
        return (
            <div className="bg-info fixed-top">
                <div className="row div-fix-height">
                    <div className="col-sm-1 text-light make-center">
                        Tymbuk
                    </div>

                    <div className="offset-sm-2 col-sm-7 make-center">
                        <input  value={this.props.postBox}  onChange={this.props.readInput} className="form-control form-control-lg" type="text" placeholder='Wattssaappp' />

                        <button onClick={this.props.addPost}  type="button" className="btn ml-1 rounded btn-primary">
                            Post Option1
                        </button>
                        <button onClick={this.props.addPost} type="button" className="btn ml-1 rounded btn-secondary">
                            Post Option2
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}