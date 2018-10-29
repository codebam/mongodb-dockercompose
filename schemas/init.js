conn = new Mongo();

db = db.getSiblingDB('testing')

db.collection.insert( { item: "test", qty: 1 } )
db.collection.insert( { item: "lol", qty: 1000000 } )
