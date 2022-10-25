const jwt= require("jsonwebtoken");

//Authentication
exports.authenticUser= (req,res,next) => {
    // check whether token exist in header
    if(! req.headers.accesstoken){
        return res.status(400).send({msg: "Token not found"});
    }

    try {
        const user= jwt.verify(req.headers.accesstoken ,process.env.SECRET_KEY);
        req.body.user= user;
        next();
    }
    catch(err){
        res.status(400).send({msg: "unauthorised"});
    }
}


// Authorisation

// exports.authoriseUser= (req,res,next) => {
//     if(req.body.currentUser.role === "admin")
//         next();

//     else    
//         return res.status(404).send({msg: "Forbidden: Access Denied"})
// }