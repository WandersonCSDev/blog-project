const express = require("express");
const helmet = require("helmet");
const { MongoClient, ServerApiVersion } = require("mongodb");

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

const PORT = process.env.PORT || 5000;

const app = express();

app.use(helmet());

app.listen(PORT, function () {
  console.log(`Express app listening on port ${PORT}`);
});
