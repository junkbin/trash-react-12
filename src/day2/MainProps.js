import React from 'react';

import './MainProps.css';
import MainPropsHeader from './MainPropsHeader';
import MainPropsFooter from './MainPropsFooter';

export default class MainProps extends React.Component{
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