import React from 'react';

import './MainProps.css';
import MainPropsHeader from './MainPropsHeader';
import MainPropsFooter from './MainPropsFooter';
import MainPropsCenter from './MainPropsCenter';

export default class MainProps extends React.Component{
    constructor(props){
        super(props);
        this.state = {"ctime" : Date.now(), "cardList" : ["Kharghar"], "cardList1":[]}; 
    }

    /* During Mount */
    componentDidMount(){
        console.log("During Mount", this.state.cardList);

        const cardList = ["Kharghar", "Belapur", "Nerul", "Jui Nagar", "Sanpada", "Vashi"];
        const cardList1 = cardList.map((item, index)=>
            <MainPropsCenter item={item + " world!!"} key={index+1} />
        );
        
        setTimeout(()=>{
            this.setState({cardList});
        }, 200);

        setTimeout(()=>{
            this.setState({cardList1});
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
        return (
            <div className="container">
                {/* Header Section */}
                <MainPropsHeader />

                {/* BODY SECTION */}
                <div className="row div-fix-top-margin">
                    <div className="col-sm-3"></div>

                    <div className="col-sm-6">
                        {this.state.cardList1}

                        {this.state.cardList.map((item, index)=>
                            <MainPropsCenter item={item} key={index} />
                        )}
                    </div>

                    <div className="col-sm-3"></div>
                </div>

                {/* Footer Section */}
                <MainPropsFooter />
            </div>
        );
    }
}