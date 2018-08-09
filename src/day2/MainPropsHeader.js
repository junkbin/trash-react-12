import React from 'react';
import './MainProps.css';

export default class MainPropsHeader extends React.Component{
    render(){
        return (
            <div className="bg-info fixed-top">
                <div className="row div-fix-height">
                    <div className="col-sm-1 text-light make-center">
                        CityAddr
                    </div>
                </div>
            </div>
        );
    }
}