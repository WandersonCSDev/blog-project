const express = require("express");
const helmet = require("helmet");
//const { MongoClient, ServerApiVersion } = require("mongodb");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const PORT = process.env.PORT || 5000;

const app = express();

dotenv.config();

const mongoString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@coding-blog.ejls7vd.mongodb.net/blog?retryWrites=true&w=majority`;

mongoose.connect(mongoString);

mongoose.connection.on("error", function (error) {
  if (process.env.NODE_ENV === "development") {
    console.log(error);
  }
});

mongoose.connection.on("open", function () {
  console.log("Connected to MongoDB database.");
});

app.use(helmet());

app.listen(PORT, function () {
  console.log(`Express app listening on port ${PORT}`);
});

//Outra opção para conectar com o driver nativo mongodb
/**
const uri =
  "mongodb+srv://mongo-root:X3por2d2@coding-blog.ejls7vd.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment.\nYou successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
**/
