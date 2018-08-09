import React from 'react';

import './MainProps.css';
import MainPropsHeader from './MainPropsHeader';
import MainPropsFooter from './MainPropsFooter';
import MainPropsCenter from './MainPropsCenter';

export default class MainProps extends React.Component{
    constructor(props){
        super(props);
        this.state = {"ctime" : Date.now(), "cardList" : []}; 
    }

    componentDidMount(){
        const refList = ["Kharghar", "Belapur", "Nerul", "Jui Nagar", "Sanpada", "Vashi"];
        const cardList = refList.map((item, index)=>
            <MainPropsCenter item={"Navi " +  item } key={index} />
        );
        
        setTimeout(()=>{
            this.setState({cardList});
        }, 100);
    }

    render(){
        return (
            <div className="container">
                <MainPropsHeader />

                <div className="row div-fix-top-margin">
                    <div className="col-sm-3"></div>

                    <div className="col-sm-6">
                        {this.state.cardList}
                    </div>

                    <div className="col-sm-3"></div>
                </div>

                <MainPropsFooter />
            </div>
        );
    }
}