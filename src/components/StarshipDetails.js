import React, { Component } from 'react';
import '../starshipDetails.css';

class StarshipDetails extends Component {
    constructor(props) {
        super()
    }

    render() {
        // const shipDetails = this.props.ship
        // console.log(this.props.location);
        return(
            <div id="details-container">
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h2>{this.props.location.state.name}</h2>
                <h4>{this.props.location.state.model}</h4>
            </div>
        )
    }
}

export default StarshipDetails;