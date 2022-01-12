import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import notesRouter from './routes/notes.js'
import dotenv from 'dotenv'
const app = express()

dotenv.config();
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());


app.use('/notes' , notesRouter)

//const CONNECTION_URL = "mongodb+srv://shanza_gul:8GZQMkYkPfkZpvH@cluster0.54qid.mongodb.net/cluster0?retryWrites=true&w=majority";
const PORT = process.env.PORT|| 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

