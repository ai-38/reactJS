import React, { Component } from 'react';


class todo1 extends Component {
    render() {
        return (
            <div className = "todo1">
                <h2>wellcome to ReactJs hihi</h2>
                <p>{ this.props.hi }</p>
                <p>{ this.props.hi2 }</p>
            </div>
        
        );
    }
}

export default todo1;