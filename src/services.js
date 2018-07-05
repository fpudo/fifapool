import { 
    Stitch,
    RemoteMongoClient,
    AnonymousCredential
  } from "mongodb-stitch-browser-sdk";


const client = Stitch.initializeDefaultAppClient('sqbox-pool-fvwhb');

const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('fifaPool');


export const loadRank = () => {
  return db.collection('rank').find({}, {limit: 1000}).asArray()
}

export const addRank = () => {
    client.auth.loginWithCredential( new AnonymousCredential() ).then(() => 
        db.collection('rank').insertOne({
            owner_id : client.auth.user.id,
            participants: [
                {
                    name: "Steven",
                    champion: "England",
                    points: 0
                },
                {
                    name: "Sergio",
                    champion: "Brazil",
                    points: 0
                },
                {
                    name: "Sam",
                    champion: "Uruguay",
                    points: 0
                },
                {
                    name: "Rory",
                    champion: "Brazil",
                    points: 0
                },
                {
                    name: "Rob",
                    champion: "Brazil",
                    points: 0
                },
                {
                    name: "Paul",
                    champion: "Croatia",
                    points: 0
                },
                {
                    name: "Nicolae",
                    champion: "Brazil",
                    points: 0
                },
                {
                    name: "Monica",
                    champion: "Belgium",
                    points: 0
                },
                {
                    name: "Matt",
                    champion: "Mexico",
                    points: 0
                },
                {
                    name: "Marco",
                    champion: "France",
                    points: 0
                },
                {
                    name: "Marcelo",
                    champion: "France",
                    points: 0
                },
                {
                    name: "Leandro",
                    champion: "Brazil",
                    points: 0
                },
                {
                    name: "Kathleen",
                    champion: "Mexico",
                    points: 0
                },
                {
                    name: "Chris",
                    champion: "Croatia",
                    points: 0
                },
                {
                    name: "Cameron",
                    champion: "Spain",
                    points: 0
                },
                {
                    name: "Bruna",
                    champion: "Brazil",
                    points: 0
                },
                {
                    name: "Felipe",
                    champion: "Brazil",
                    points: 0
                }
            ]
        })
    )
}

export const addUsers = () => {
    client.auth.loginWithCredential(new AnonymousCredential()).then(() =>
      db.collection('participants').insertOne(
        {
          owner_id : client.auth.user.id,
          name: "Cameron",
          champion: "Spain",
          matches: [
            {
              match: 50, //1
              winner: "France",
              winnerScore: 1,
              loserScore: 1
            },
            {
              match: 49, //2
              winner: "Uruguay",
              winnerScore: 1,
              loserScore: 0
            },
            {
              match: 51, //3
              winner: "Spain",
              winnerScore: 3,
              loserScore: 0
              },
            {
              match: 52, //4
              winner: "Croatia",
              winnerScore: 2,
              loserScore: 2
              },
            {
              match: 53, //5
              winner: "Brazil",
              winnerScore: 2,
              loserScore: 1
              },
            {
              match: 54, //6
              winner: "Belgium",
              winnerScore: 3,
              loserScore: 1
              },
            {
              match: 55,
              winner: "Switzerland",
              winnerScore: 0,
              loserScore: 0
              },
            {
              match: 56,
              winner: "England",
              winnerScore: 2,
              loserScore: 1
            },
             // Quarter
            {
              match: 57,
              winner: "Uruguay",
              winnerScore: 2,
              loserScore: 0
            },
            {
              match: 58,
              winner: "Belgium",
              winnerScore: 1,
              loserScore: 0
            },
            {
              match: 59,
              winner: "spain",
              winnerScore: 2,
              loserScore: 2
            },
            {
              match: 60,
              winner: "England",
              winnerScore: 2,
              loserScore: 1
            },
            //Semi
            {
                match: 61,
                winner: "Belgium",
                winnerScore: 3,
                loserScore: 0
            },
              {
                match: 62,
                winner: "Spain",
                winnerScore: 2,
                loserScore: 0
            },
            // third
            {
                match: 63,
                winner: "England",
                winnerScore: 1,
                loserScore: 0
            },
            //Final
            {
                match: 64,
                winner: "Spain",
                winnerScore: 3,
                loserScore: 1
            }  
          ]
         })
      )
  }