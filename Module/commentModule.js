const mongo= require ("../connect");
const {ObjectId}= require ("mongodb");

exports.getComment= async(req,res,next) => {
    
    try{
        const comments= await mongo.Db.collection("comment").find().toArray();
        res.send(comments);
    }catch(err) {
        console.error(err);
        res.status(500).send(err);
    }
}

// exports.updateComment= async (req,res) => {
//     try{
//         const id= req.params.id;
//         const modify= await mongo.Db.collection("comment").findOneAndUpdate({_id: ObjectId(id) },{$set:{...req.body.comment}},{returnDocument: "after"});
//         res.send(modify);
//     }catch(err) {
//         console.error(err);
//         res.status(500).send(err);
//     }
    
// }

exports.createComment= async(req,res) => {
  
    try{
        console.log(req.body);
        const insertedResponse= await mongo.Db.collection("comment").insertOne(req.body.comment);
        res.send(insertedResponse);
    }catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
}

// exports.deleteComment= async (req,res) => {
//     try{
//         const id= res.params.id;
//         const removeComment= await mongo.Db.collection("comment").remove({_id: ObjectId(id)});
//         res.send(removeComment);
//     }catch(err) {
//         console.error(err);
//         res.status(500).send(err);
//     }
// }