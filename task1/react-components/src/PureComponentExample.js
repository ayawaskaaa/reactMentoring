import React from 'react'

export default class PureComponentExample extends React.PureComponent{
    render(props) {
        return (
            <div>Created by {this.props.message}</div>
        );
    }
}