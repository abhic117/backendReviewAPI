import mongodb from "mongodb"
import app from "./server.js"
import ReviewsDAO from "./dao/reviewsDAO.js"

const MongoClient = mongodb.MongoClient;
// const mongo_username = `$(process.env.MONGO_USERNAME)`;
// const mongo_password = `$(process.env.MONGO_PASSWORD)`;
const mongo_username = "abhishekc117";
const mongo_password = "8IAdCtwPltuCKWhV";
const uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.e4dlg.mongodb.net/`;

const port = 8000;

MongoClient.connect(
    uri,
    {
        maxPoolSize: 50,
        wtimeoutMS: 2500
    })
    .catch(err => {
        console.error(err.stack);
        process.exit(1);
    })
    .then(async client => {
        await ReviewsDAO.injectDB(client);
        app.listen(port, () => {
            console.log(`listening on port ${port}`);
        })
    })