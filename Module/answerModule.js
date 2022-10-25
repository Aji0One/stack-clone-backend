const mongo= require ("../connect");
const {ObjectId}= require ("mongodb");

// exports.getAnswer= async(req,res,next) => {
    
//     try{
//         const answers= await mongo.Db.collection("answer").find().toArray();
//         res.send(answers);
//     }catch(err) {
//         console.error(err);
//         res.status(500).send(err);
//     }
// }

// exports.updateAnswer= async (req,res) => {
//     try{
//         const id= req.params.id;
//         const updateAnswer= await mongo.Db.collection("answer").findOneAndUpdate({_id: ObjectId(id) },{$set:{...req.body.answer}},{returnDocument: "after"});
//         res.send(updateAnswer);
//     }catch(err) {
//         console.error(err);
//         res.status(500).send(err);
//     }
    
// }

exports.createAnswer= async(req,res) => {
  
    try{
        console.log(req.body);
        const insertedResponse= await mongo.Db.collection("answer").insertOne(req.body.answer);
        res.send(insertedResponse);
    }catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
}

// exports.deleteAnswer= async (req,res) => {
//     try{
//         const id= res.params.id;
//         const removeAnswer= await mongo.Db.collection("answer").remove({_id: ObjectId(id)});
//         res.send(removeAnswer);
//     }catch(err) {
//         console.error(err);
//         res.status(500).send(err);
//     }
// }