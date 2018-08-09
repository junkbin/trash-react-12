import React from 'react';
import './MainProps.css';

export default class MainPropsHeader extends React.Component{
    render(){
        return (
            <div className="bg-info fixed-top">
                <div className="row div-fix-height">
                    <div className="col-sm-1 text-light make-center">
                        Tymbuk
                    </div>

                    <div className="offset-sm-2 col-sm-6 make-center">
                        <input class="form-control form-control-lg" type="text" placeholder="Yeee Watsappp.." />
                        <button type="button" class="btn ml-1 rounded  btn-success">Post Something</button>
                    </div>
                </div>
            </div>
        );
    }
}