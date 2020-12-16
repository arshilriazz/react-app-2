import React, { Component } from 'react';

class UserCC extends Component {
    render() {
        return (
            <div>{this.props.children}</div>
        )
    }
}

export default UserCC