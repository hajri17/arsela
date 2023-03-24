const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.set('strictQuery', true);
const app = express();
const corsOptions = {
    origin:'*', 
    credentials:true, // access-control-allow-credentials:true
    optionSuccessStatus:200,
}

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

//configure mongoose
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb+srv://arsela:arsela@firstdatabase.zhm3uyk.mongodb.net/arsela',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Connected to MongoDB");
        }
    }
);

// app.listen(process.env.PORT, () => { console.log("Server is running on port: "+process.env.PORT) });
app.listen(3090, () => { console.log("Server is running on port: 3090") });

//Routes
const taskRouter = require("./routes/taskRoutes");
const nodeRouter = require("./routes/nodeRoutes");
const edgeRouter = require("./routes/edgeRoutes");

app.use("/api/task", taskRouter);
app.use("/api/node", nodeRouter);
app.use("/api/edge", edgeRouter);

app.get("/", (req, res) => {
    res.json({
        msg: "Welcome to processUI Backend REST API",
    });
});

module.exports = app;