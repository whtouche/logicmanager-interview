import React, { Component } from 'react';
import Station from './Station';

class Stations extends Component {
  state = {
    network: { stations: [] },
  };

  componentDidMount() {
    fetch('https://api.citybik.es/v2/networks/bicincitta-siena')
      .then((res) => res.json())
      .then((data) => this.setState({ network: data.network }));
  }

  render() {
    return (
      <div>
        <h1>{this.state.network.name}</h1>
        {this.state.network.stations.map((station, index) => {
          return <Station station={station} key={index} />;
        })}
      </div>
    );
  }
}

export default Stations;
