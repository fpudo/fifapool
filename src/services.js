import { 
    Stitch,
    RemoteMongoClient,
    AnonymousCredential
  } from "mongodb-stitch-browser-sdk";

const client = Stitch.initializeDefaultAppClient('sqbox-pool-fvwhb');
console.log(client)

const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('fifa-pool');

export const loadRank = (id) => {
  let ret;
  client.auth.loginWithCredential(new AnonymousCredential()).then(user => 
    db.collection('Users').updateOne({owner_id: client.auth.user.id}, {$set:{number:42}}, {upsert:true})
  ).then(() => 
    // db.collection('Users').find({owner_id: client.auth.user.id}, { limit: 100}).asArray()
    db.collection('rank').find({owner_id: client.auth.user.id}, {limit: 1000}).asArray()
  ).then(docs => {
      ret = docs[0]
      console.log("Found docs", docs)  
      console.log("[MongoDB Stitch] Connected to Stitch")
  }).catch(err => {
      console.error(err)
  });
  return ret
}

export const addRank = () => {
    client.auth.loginWithCredential( new AnonymousCredential() ).then(user => 
        db.collection('rank').insertOne({
            owner_id : client.auth.user.id,
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
        })
    )
}

// export const addUsers = () => {   
//     db.collection('participants').insertOne(
//       {
//         owner_id : client.auth.user.id,
//         name: "Cameron",
//         champion: "Spain",
//         matches: [
//           {
//             match: 50, //1
//             winner: "France",
//             winnerScore: 1,
//             loserScore: 1
//           },
//           {
//             match: 49, //2
//             winner: "Uruguay",
//             winnerScore: 1,
//             loserScore: 0
//           },
//           {
//             match: 51, //3
//             winner: "Spain",
//             winnerScore: 3,
//             loserScore: 0
//             },
//           {
//             match: 52, //4
//             winner: "Croatia",
//             winnerScore: 2,
//             loserScore: 2
//             },
//           {
//             match: 53, //5
//             winner: "Brazil",
//             winnerScore: 2,
//             loserScore: 1
//             },
//           {
//             match: 54, //6
//             winner: "Belgium",
//             winnerScore: 3,
//             loserScore: 1
//             },
//           {
//             match: 55,
//             winner: "Switzerland",
//             winnerScore: 0,
//             loserScore: 0
//             },
//           {
//             match: 56,
//             winner: "England",
//             winnerScore: 2,
//             loserScore: 1
//           },
//             // Quarter
//           {
//             match: 57,
//             winner: "Uruguay",
//             winnerScore: 2,
//             loserScore: 0
//           },
//           {
//             match: 58,
//             winner: "Belgium",
//             winnerScore: 1,
//             loserScore: 0
//           },
//           {
//             match: 59,
//             winner: "spain",
//             winnerScore: 2,
//             loserScore: 2
//           },
//           {
//             match: 60,
//             winner: "England",
//             winnerScore: 2,
//             loserScore: 1
//           },
//           //Semi
//           {
//               match: 61,
//               winner: "Belgium",
//               winnerScore: 3,
//               loserScore: 0
//           },
//             {
//               match: 62,
//               winner: "Spain",
//               winnerScore: 2,
//               loserScore: 0
//           },
//           // third
//           {
//               match: 63,
//               winner: "England",
//               winnerScore: 1,
//               loserScore: 0
//           },
//           //Final
//           {
//               match: 64,
//               winner: "Spain",
//               winnerScore: 3,
//               loserScore: 1
//           }  
//         ]
//       }
//     )
//   }