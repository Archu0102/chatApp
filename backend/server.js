const express = require('express');
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes');

const PORT = process.env.PORT||7000;
const app = express()

app.use(cors());
app.use(express.json());

app.use("/api/auth",userRoutes);

app.listen(PORT, ()=>{
    console.log(`server is running on port: ${PORT}`)
});

// app.get('/', (req, res)=>{
//     res.send('i am running')
// })

mongoose.connect(process.env.MY_DB)
// useNewUrlParser: true,
// useUnifieldTopology: true,
.then(()=>{console.log("database connecterd successfully")})
.catch(()=>{
    console.log("error with database")
})