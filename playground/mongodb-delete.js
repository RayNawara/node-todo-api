//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server!');
    }
    console.log('Connected to MongoDB server!');
    const db = client.db('TodoApp')

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
    //   console.log(result);
    // });
    // deleteOne
    // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
    //   console.log(result);
    // });
    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({text: 'eat lunch'}).then((result) => {
    //   console.log(result);
    // });

    // db.collection('Users').deleteMany({name: 'Walt'}).then((result) => {
    //   console.log(result);
    // });

    db.collection('Users').findOneAndDelete({
           _id: new ObjectID('5bbf95d5fc914b0c806145d6')
         }).then((result) => {
      console.log(result);
    });


//    client.close();
});
