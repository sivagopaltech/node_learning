const MongoClient = require("mongodb").MongoClient;

MongoClient.connect('mongodb://localhost:27017/', (err, dbo) => {
    if(err){
       return console.log("unable to connect ot mongo db ");
    }
    var db = dbo.db("todo");
    db.collection("todos").insertOne({
        task: "todo2",
        status: "done"
    }, (err, result) => {
        if(err) {
            console.log("unable to connect to database", err);
        }
        console.log(JSON.stringify(result.ops,null,2));
    });
    console.log("connected to mongo db");
    dbo.close();
})