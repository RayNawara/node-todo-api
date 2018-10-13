//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server!');
    }
    console.log('Connected to MongoDB server!');
    const db = client.db('TodoApp')

    // db.collection('Todos').findOneAndUpdate({
    //        _id: new ObjectID('5bc20a37b61328c39991aa1f')
    //      }, {
    //        $set: {
    //          completed: true
    //        }
    //      }, {
    //        returnOriginal: false
    //      }).then((result) => {
    //   console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
           _id: new ObjectID('5bbf9396b3b93330a8060b03')
         }, {
           $set: {
             name: 'Ray'
           },
           $inc: {
             age: 1
           }
         }, {
           returnOriginal: false
         }).then((result) => {
      console.log(result);
    });

//    client.close();
});
