import React, { Component } from 'react';
import {loadRank} from './services';
import RankPres from './rankPres';

// client.auth.loginWithCredential(new AnonymousCredential()).then(user => 
//   // db.collection('users').updateOne({owner_id: client.auth.user.id}, {$set:{number:42}}, {upsert:true})
//   db.collection('users').find({owner_id: client.auth.user.id}, { limit: 100}).asArray()
// ).then(docs => {
//     console.log("Found docs", docs)
//     console.log("[MongoDB Stitch] Connected to Stitch")
// }).catch(err => {
//     console.error(err)
// });

// addUsers();


class App extends Component {

  state = {
    participants: []
  }

  componentDidMount(){
     loadRank().then(res => this.setState({participants: res[0].participants}) )
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
