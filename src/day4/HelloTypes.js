import React from 'react';
import PropTypes from 'prop-types';

export default class HelloTypes extends React.Component{
    static propTypes = {
        "id" : PropTypes.number.isRequired,
        "title" : PropTypes.string
    };

    static defaultProps = {
        "id" : 100,
        "title" : "Affixus"
    }

    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
            <div>
                Hello Types in React {this.props.id} {this.props.title}!!!
            </div>
        );
    }
}