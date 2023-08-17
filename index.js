/* eslint-disable */ 
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors");
const express = require("express");
const app = express();

let serviceAccount = require("../functions/permissions.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();
app.use(cors({ origin: true }));
app.post("/create", (req, res) => {
  (async () => {
    try {
      await db
        .collection("products")
        .doc("/" + req.body.id + "/")
        .create({
          name: req.body.name,
          description: req.body.description,
          price: req.body.price,
          cat: req.body.cat,
          bedroom: req.body.bedroom,
        });
      return res.status(200).send();
    } catch (error) {
      return res.status(500).send(error);
    }
  })();
});
 
app.get("/read/:id", (req, res) => {
  (async () => {
    try {
      const document = db.collection("products").doc(req.params.id);
      let product = await document.get();
      let response = product.data();
      return res.status(200).send(response);
    } catch (error) {
      return res.status(500).send(error);
    }
  })();
});
 
app.get("/read", (req, res) => {
  (async () => {
    try {
      let query = db.collection("products");
      let response = [];

      await query.get().then((querySnapshot) => {
        let docs = querySnapshot.docs;
        for (let doc of docs) {
          const selectedItems = {
            id: docs.id,
            name: doc.data().name,
            description: doc.data().description,
            price: doc.data().price,
            cat: doc.data().cat,
          };
          response.push(selectedItems);
        }
        return response;
      });

      return res.status(200).send(response);
    } catch (error) {
      return res.status(500).send(error);
    }
  })();
});
 
app.put("/update/:id", (req, res) => {
  (async () => {
    try {
      const document = db.collection("products").doc(req.params.id);

      await document.update({
        name: req.body?.name,
        description: req.body.description,
        // cat: req.body.cat,
        // price: req.body.price,
      });

      return res.status(200).send();
    } catch (error) {
      return res.status(500).send(error);
    }
  })();
});
app.delete("/delete/:id", (req, res) => {
  (async () => {
    try {
      const document = db.collection("products").doc(req.params.id);

      await document.delete();

      return res.status(200).send();
    } catch (error) {
      return res.status(500).send(error);
    }
  })();
});

app.get("/hello", (req, res) => {
  return res.status(200).send("hey");
});

exports.app = functions.https.onRequest(app);
