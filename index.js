const express= require("express");
const mongo = require ("./connect");
const dotenv= require ("dotenv");
const questionRouter= require ("./Router/QuestionRouter");
const answerRouter= require ("./Router/answerRouter");
const commentRouter= require ("./Router/commentRouter");
const auth= require ("./Module/authModule");
const registerRouter= require ("./Router/registerRouter");
const cors= require("cors");
const app= express();
dotenv.config();

mongo.connect();
app.use(cors());
app.use(express.json());


app.use("/register", registerRouter);

app.use("/", auth.authenticUser);
 
app.use("/question",questionRouter);
app.use("/answer",answerRouter);
app.use("/comment", commentRouter);

app.listen(process.env.PORT);