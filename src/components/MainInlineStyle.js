import React from 'react';

const divPrimary = {
    height : 100,
    color : "white",
    backgroundColor : "tomato"
};

export default class MainInlineStyle extends React.Component{
    render(){
        return (
            <div style={divPrimary}> 
                Hello React; I am inline style!!!
            </div>
        );
    }
}