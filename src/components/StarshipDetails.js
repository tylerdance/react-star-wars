import React, { Component } from 'react';

class StarshipDetails extends Component {
    constructor(props) {
        super()
    }

    render() {
        // const shipDetails = this.props.ship
        // console.log(this.props.location);
        return(
            <div>
                <h2>{this.props.location.state.name}</h2>
                <h4>{this.props.location.state.model}</h4>
            </div>
        )
    }
}

export default StarshipDetails;