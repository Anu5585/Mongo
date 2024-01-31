// // searching  data in mongodb

// use annasKart

// db.items.find({rating: 4.5})
// db.items.find({rating: {$gte:4.5}}) // find all items in mongodb jis mn rating 3.5 sy zaida h wo show kry ga 
// //And operator 
// db.items.find({rating: {$gte:4.5} , price:{$gt:4000}}) //gte = grater 
// db.items.find({rating: {$lt:3.5} , price:{$gt:124000}}) //lt = less then 
