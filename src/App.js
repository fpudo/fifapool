import React, { Component } from 'react';
import { 
  Stitch,
  RemoteMongoClient,
  AnonymousCredential
} from "mongodb-stitch-browser-sdk";
import RankPres from './rankPres';

const client = Stitch.initializeDefaultAppClient('sqbox-pool-fvwhb');
const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('fifa-pool');

class App extends Component {

  state = {
    participants: []
  }

  componentDidMount(){
    client.auth.loginWithCredential(new AnonymousCredential()).then(user => 
      db.collection('Users').updateOne({owner_id: client.auth.user.id}, {$set:{number:42}}, {upsert:true})
    ).then(() => 
      db.collection('rank').find({owner_id: client.auth.user.id}, {limit: 1000}).asArray()
    ).then(docs => {
      this.setState({participants: docs[0].participants.sort(((a,b) => b.points - a.points))})
        console.log("Found docs", docs)  
        console.log("[MongoDB Stitch] Connected to Stitch")
    }).catch(err => {
        console.error(err)
    });
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
