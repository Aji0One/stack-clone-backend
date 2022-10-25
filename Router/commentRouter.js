const express= require ("express");
const commentModule= require("../Module/commentModule");
// const auth= require("../Module/authModule");

const router= express.Router();

router.get("/get", commentModule.getComment);

// router.put("/update/:id", commentModule.updateComment);

router.post("/create", commentModule.createComment);

// router.delete("/delete/:id", auth.authoriseUser, commentModule.deleteComment);

module.exports= router;