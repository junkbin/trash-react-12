import React from 'react';

import './MainProps.css';
import MainPropsHeader from './MainPropsHeader';
import MainPropsFooter from './MainPropsFooter';
import MainPropsCenter from './MainPropsCenter';

export default class MainPropsAjaxExt extends React.Component{
    constructor(props){
        super(props);

        this.addPost = this.addPost.bind(this);
        this.readInput = this.readInput.bind(this);

        this.state = {"ctime" : Date.now(), "refList":[],  "cardList" : [], "postBox":""}; 
    }

    readInput(e){
        console.log(e.target.value);

        if(e && e.target.value !== ""){
            this.setState({"postBox" : e.target.value});
        }
    }

    addPost(e){
        if(this.state.postBox !== ""){
            let refList = this.state.refList;
            
            let ref = {"title" : this.state.postBox, "id": refList.length + 1};
            refList.splice(0, 0, ref);
            
            let cardList = refList.map((item)=>
                <MainPropsCenter item={item.title} key={item.id} />
            );

            this.setState({cardList, "postBox":""});
        }
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
            
            this.setState({cardList, "refList": data});
        }).catch((err)=>{
            console.log(err);
        });
    }

    render(){
        return (
            <div className="container">
                <MainPropsHeader postBox={this.state.postBox}  readInput={this.readInput} addPost={this.addPost}  />

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