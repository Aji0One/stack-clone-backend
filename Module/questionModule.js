const mongo= require ("../connect");
const {ObjectId}= require ("mongodb");

exports.getQuestion= async(req,res,next) => {
    
    try{
        const questions= await mongo.Db.collection("question").find().toArray();
      
        res.send(questions);
    }catch(err) {
        console.error(err);
        res.status(500).send(err);
    }
}

// exports.updateQuestion= async (req,res) => {
//     try{
//         const id= req.params.id;
//         const updateQuestion= await mongo.Db.collection("question").findOneAndUpdate({_id: ObjectId(id) },{$set:{...req.body.question}},{returnDocument: "after"});
//         res.send(updateQuestion);
//     }catch(err) {
//         console.error(err);
//         res.status(500).send(err);
//     }
    
// }

exports.createQuestion= async(req,res) => {
  
    try{
        console.log(req.body);
    

        const insertedResponse= await mongo.Db.collection("question").insertOne( req.body.question);
        res.send(insertedResponse);
    }catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
}

// exports.deleteQuestion= async (req,res) => {
//     try{
//         const id= res.params.id;
//         const removeQuestion= await mongo.Db.collection("question").remove({_id: ObjectId(id)});
//         res.send(removeQuestion);
//     }catch(err) {
//         console.error(err);
//         res.status(500).send(err);
//     }
// }