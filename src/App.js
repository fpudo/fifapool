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
    participants: [
      {
          name: "Steven",
          champion: "England",
          points: 20
      },
      {
          name: "Sergio",
          champion: "Brazil",
          points: 22
      },
      {
          name: "Sam",
          champion: "Uruguay",
          points: 16
      },
      {
          name: "Rory",
          champion: "Brazil",
          points: 12
      },
      {
          name: "Rob",
          champion: "Brazil",
          points: 16
      },
      {
          name: "Paul",
          champion: "Croatia",
          points: 24
      },
      {
          name: "Nicolae",
          champion: "Brazil",
          points: 16
      },
      {
          name: "Monica",
          champion: "Belgium",
          points: 24
      },
      {
          name: "Matt",
          champion: "Mexico",
          points: 18
      },
      {
          name: "Marco",
          champion: "France",
          points: 22
      },
      {
          name: "Marcelo",
          champion: "France",
          points: 24
      },
      {
          name: "Leandro",
          champion: "Brazil",
          points: 26
      },
      {
          name: "Kathleen",
          champion: "Mexico",
          points: 12
      },
      {
          name: "Chris",
          champion: "Croatia",
          points: 18
      },
      {
          name: "Cameron",
          champion: "Spain",
          points: 16
      },
      {
          name: "Bruna",
          champion: "Brazil",
          points: 20
      },
      {
          name: "Felipe",
          champion: "Brazil",
          points: 20
      }
  ]
  }

  componentDidMount(){
    // client.auth.loginWithCredential(new AnonymousCredential()).then(user => {
    //   console.log(user)
    //   db.collection('rank').find({owner_id: user.id}, {limit: 1000}).asArray()
    // }
    // ).then(docs => {
    //   this.setState({participants: docs[0].participants.sort(((a,b) => b.points - a.points))})
    //     console.log("Found docs", docs)  
    //     console.log("[MongoDB Stitch] Connected to Stitch")
    // }).catch(err => {
    //     console.error(err)
    // });

  }

  render() {
    const {participants} = this.state;
    return (
      <div>
        <RankPres participants={participants.sort(((a,b) => b.points - a.points))} />
      </div>
    );
  }
}


export default App;
