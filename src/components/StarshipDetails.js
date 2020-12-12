import React, { Component } from 'react';

class StarshipDetails extends Component {
    constructor(props) {
        super()
    }

    render() {
        // const shipDetails = this.props.ship

        return(
            <div>
                <h2>{this.props.starship.name}</h2>
            </div>
        )
    }
}

export default StarshipDetails;