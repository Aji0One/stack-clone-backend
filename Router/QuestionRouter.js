const express= require ("express");
const questionModule= require("../Module/questionModule");
const auth= require("../Module/authModule");

const router= express.Router();

router.get("/get", questionModule.getQuestion);

router.get("/get/:id", questionModule.getQuestion);
// router.put("/update/:id", auth.authoriseUser, questionModule.updateQuestion);

router.post("/create", questionModule.createQuestion);

// router.delete("/delete/:id", auth.authoriseUser, questionModule.deleteQuestion);

module.exports= router;