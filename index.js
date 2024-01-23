const express = require("express");
const cors = require("cors");
const {MongoClient} = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/save" , (req,res)=>{
    const url = "mongodb+srv://arnavamol77:wtVeaSg0lNOm0dM3@cluster0.vy2vnie.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(url);
    const db = client.db("kc22jan24");
    const coll = db.collection("student");
    const record = {"_id":req.body.rno, "name":req.body.name, "marks":req.body.marks};
    coll.insertOne(record)
    .then(result => res.send(result))
    .catch(error => res.send(error));
} );

app.get("/read" , (req,res)=>{
    const url = "mongodb+srv://arnavamol77:wtVeaSg0lNOm0dM3@cluster0.vy2vnie.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(url);
    const db = client.db("kc22jan24");
    const coll = db.collection("student");
    coll.find({}).toArray()
    .then(result => res.send(result))
    .catch(error => res.send(error));
} );
app.delete("/remove" , (req,res)=>{
    const url = "mongodb+srv://arnavamol77:wtVeaSg0lNOm0dM3@cluster0.vy2vnie.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(url);
    const db = client.db("kc22jan24");
    const coll = db.collection("student");
    const record = {"_id":req.body.rno};
    coll.deleteOne(record)
    .then(result => res.send(result))
    .catch(error => res.send(error));
} );

app.put("/modify" , (req,res)=>{
    const url = "mongodb+srv://arnavamol77:wtVeaSg0lNOm0dM3@cluster0.vy2vnie.mongodb.net/?retryWrites=true&w=majorityu";
    const client = new MongoClient(url);
    const db = client.db("kc22jan24");
    const coll = db.collection("student");
    coll.updateOne({"_id":req.body.rno},{"$set":{"name":req.body.name,"marks":req.body.marks}})
    .then(result => res.send(result))
    .catch(error => res.send(error));
} );

app.listen(9000,()=>{console.log("Ready @ 9000");});