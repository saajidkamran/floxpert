var admin = require("firebase-admin");

var serviceAccount = require("../floxpert-backend-firebase-adminsdk-4gu9e-6b9fac4bae.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();
module.exports = { admin, db };
