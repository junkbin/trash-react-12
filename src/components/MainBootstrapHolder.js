import React from 'react';
import './MainBootstrap.css';

export default class MainBoostrapHolder extends React.Component{
    render(){
        return (
            <div className="container">
                <div className="fixed-top bg-info div-fixed-height">
                    Header.
                </div>



                <div className="fixed-bottom bg-info div-fixed-height">
                    Footer.
                </div>
            </div>
        );
    }
}