import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
import dataDAO from "./dao/dataDAO.js";
import contactDAO from "./dao/contactDAO.js";
dotenv.config();
const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 8000

MongoClient.connect(
    process.env.DATA_DB_URI,
    {
        maxpoolSize: 50,
        wtimeoutMS: 2500,
        useNewUrlParser: true
    }
  )
  .catch(err => {
    console.error(err.stack)
    process.exit(1)
  })
  .then(async client => {
    await dataDAO.injectDB(client)
    await contactDAO.injectDB(client)
    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`);
    })
  })