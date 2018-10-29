const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const client = new MongoClient('mongodb://root:toor@localhost:27017/admin', { useNewUrlParser: true });
const dbName = 'testing';

const insertDocuments = function(db, callback) {
  const collection = db.collection('posts');
  collection.insertMany([
    {title : 'hello', content: 'world', author: 'sean'}
  ], function(err, result) {
    assert.equal(err, null);
    callback(result);
  });
}

client.connect(function(err) {
  assert.equal(null, err);

  const db = client.db(dbName);
  
  insertDocuments(db, function() {
    client.close();
  });
});
