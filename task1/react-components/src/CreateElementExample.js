import React from 'react'
export default class CreateElementExample extends React.Component {
    render() {
        return React.createElement('div', null, `Created by ${this.props.message}`)
    }
}