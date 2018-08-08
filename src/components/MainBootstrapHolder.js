import React from 'react';
import './MainBootstrap.css';

export default class MainBoostrapHolder extends React.Component{
    render(){
        return (
            <div className="container">
                <div className="fixed-top bg-info div-fixed-height">
                    Header.
                </div>

                <div className="row div-margin-top">
                    <div className="col-sm-3"></div>

                    <div className="col-sm-6 ">
                        <div className="row">
                            <div className="col-sm-12 mt-1 text-white rounded bg-secondary div-main-body">
                                1.
                            </div>

                            <div className="col-sm-12 mt-1 text-info rounded bg-secondary div-main-body">
                                2.
                            </div>

                            <div className="col-sm-12 mt-1 text-success rounded bg-secondary div-main-body">
                                3.
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-3"></div>
                </div>


                <div className="fixed-bottom bg-info div-fixed-height">
                    Footer.
                </div>
            </div>
        );
    }
}