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

    async getAjaxRequest() {
        try{
            const url = "https://jsonplaceholder.typicode.com/posts";
            const output = await fetch(url);

            return output;
        }catch(err){
            Promise.reject(err);
        }
    }

    componentDidMount(){
        const mpromise = this.getAjaxRequest();
        mpromise.then((data)=>{

            return data.json();
        }).then((data)=>{

            let cardList = data.map((item)=>
                <MainPropsCenter item={item.title} key={item.id} />
            );
            
            this.setState({cardList});
        }).catch((err)=>{
            console.log(err);
        });
    }

    render(){
        return (
            <div className="container">
                <MainPropsHeader />

                <div className="row div-fix-top-margin">
                    <div className="col-sm-2"></div>

                    <div className="col-sm-8">
                        {this.state.cardList}
                    </div>

                    <div className="col-sm-2"></div>
                </div>

                <MainPropsFooter />
            </div>
        );
    }
}