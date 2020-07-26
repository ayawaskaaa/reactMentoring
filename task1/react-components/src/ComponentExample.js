import React from 'react'

export default class ComponentExample extends React.Component {
    render(props) {
        return (
            <div>Created by {this.props.message}</div>
        );
    }
}