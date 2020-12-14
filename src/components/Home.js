import React, { Component } from 'react';
import Axios from 'axios'; 
import { Link } from 'react-router-dom';
import '../home.css';

class Home extends Component {
    constructor() {
        super()

        this.state = {
            starships: [],
        }
    }

    async componentDidMount() {
        const res = await Axios.get(`https://swapi.dev/api/starships/`)
        console.log('successful');
        // console.log(res.data.results);
        
        this.setState({
            starships: res.data.results
        })
    }
    
    componentDidUpdate(prevProps, prevState) {
    if (this.state.starships === '') {
        return;
    }
    if (prevState.starships === this.state.starshipName) {
        return;
    }

    Axios.get(`https://swapi.dev/api/starships/`).then((res) => {
    }).catch(err => {
        console.log(err);
    })
    }

    render() {
        return(
            <div className="App">
              <h2 id="header">Starships</h2>
              <div id="starships">
                  {this.state.starships.map((starship, index) =>
                        <Link id="starship-link"
                        key={starship.name}
                        to={{
                            pathname: '/starship',
                            state: starship
                        }}
                        >
                        {starship.name}
                        </Link>
                  )}
              </div>
          </div>
        )
    }
}

export default Home;