import React from 'react';

import './MainBootstrap.css';

export default class MainBootstrap extends React.Component{
    render(){
        return (
            <div className="container">
                <div className="fixed-top bg-primary div-fixed-height">
                    Header
                </div>


                <div className="fixed-bottom bg-info div-fixed-height">
                    Footer
                </div>
            </div>
        );
    }
}