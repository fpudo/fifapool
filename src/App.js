import React, { Component } from 'react';
import {loadRank, addRank} from './services';
import RankPres from './rankPres';

class App extends Component {

  state = {
    participants: []
  }

  componentDidMount(){
     loadRank().then(res => this.setState({participants: res[0].participants.sort(((a,b) => b.points - a.points))}) )
  }

  render() {
    const {participants} = this.state;
    return (
      <div>
        <RankPres participants={participants} />
      </div>
    );
  }
}


export default App;
