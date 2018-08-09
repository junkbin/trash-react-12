import React from 'react';

import './MainProps.css';
import MainPropsHeader from './MainPropsHeader';
import MainPropsFooter from './MainPropsFooter';

export default class MainProps extends React.Component{
    constructor(props){
        super(props);
        this.state = {"ctime" : Date.now()};
    }

    /* During Mount */
    componentDidMount(){
        console.log("During Mount");
    }

    /** During Update */
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("During Update");
    }

    /* During Unmount */
    componentWillUnmount(){
        console.log("During Unmount");
    }

    render(){
        return (
            <div className="container">
                {/* Header Section */}
                <MainPropsHeader />

                {/* BODY SECTION */}
                <div className="row div-fix-top-margin">
                    <div className="col-sm-3"></div>

                    <div className="col-sm-6">
                        
                        {/* CARD REPEAT */}
                        <div className="row mt-1">
                            <div className="col-sm-12 bg-light rounded div-card-height">
                            </div>
                        </div>

                        <div className="row mt-1">
                            <div className="col-sm-12 bg-light rounded div-card-height">
                            </div>
                        </div>

                        <div className="row mt-1">
                            <div className="col-sm-12 bg-light rounded div-card-height">
                            </div>
                        </div>

                        <div className="row mt-1">
                            <div className="col-sm-12 bg-light rounded div-card-height">
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-3"></div>
                </div>

                {/* Footer Section */}
                <MainPropsFooter />
            </div>
        );
    }
}