import React from 'react'

export default class CoordinatesButton extends React.Component {
    getCoordinates = (event) => {this.props.onReceiveCoordinates([event.clientX, event.clientY])}

    render() {
        return(
            <button onClick={this.getCoordinates}> Click here to get coordinates! </button>
        )
    }
}