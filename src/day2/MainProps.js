import React from 'react';

import './MainProps.css';
import MainPropsHeader from './MainPropsHeader';
import MainPropsFooter from './MainPropsFooter';

export default class MainProps extends React.Component{
    constructor(props){
        super(props);
        this.state = {"ctime" : Date.now(), "cardList" : ["Kharghar"]}; 
    }

    /* During Mount */
    componentDidMount(){
        console.log("During Mount", this.state.cardList);

        const cardList = ["Kharghar", "Belapur", "Nerul", "Jui Nagar", "Sanpada", "Vashi"];
        
        setTimeout(()=>{
            this.setState({"cardList" : cardList});
        }, 1000);
    }

    /** During Update */
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("During Update", this.state.cardList);
    }

    /* During Unmount */
    componentWillUnmount(){
        console.log("During Unmount");
    }

    render(){
        /*const newCardList = this.state.cardList.map((item)=>{
            <div className="row mt-1">
                <div className="col-sm-12 bg-light rounded div-card-height">
                </div>
            </div>
        });*/

        return (
            <div className="container">
                {/* Header Section */}
                <MainPropsHeader />

                {/* BODY SECTION */}
                <div className="row div-fix-top-margin">
                    <div className="col-sm-3"></div>

                    <div className="col-sm-6">
                        {this.state.cardList.map((item, index)=>{
                            <div key={index} className="row mt-1">
                                <div className="col-sm-12 bg-light rounded div-card-height">
                                    {item}
                                </div>
                            </div>
                        })}
                    </div>

                    <div className="col-sm-3"></div>
                </div>

                {/* Footer Section */}
                <MainPropsFooter />
            </div>
        );
    }
}