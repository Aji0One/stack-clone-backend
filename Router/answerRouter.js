const express= require ("express");
const answerModule= require("../Module/answerModule");
// const auth= require ("../Module/authModule")

const router= express.Router();

// router.get("/get", answerModule.getAnswer);

// router.put("/update/:id", answerModule.updateAnswer);

router.post("/create", answerModule.createAnswer);

// router.delete("/delete/:id", auth.authoriseUser, answerModule.deleteAnswer);

module.exports= router;