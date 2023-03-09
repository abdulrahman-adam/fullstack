import express from "express";
// const mongoUrl = "mongodb://127.0.0.1:27017/articles";
const app = express();
const port = 5000;

app.get("/bonjour", (req, rep) => {
  rep.json({ message: "bonjour" });
});

app.listen(port, () => {
  console.log(`Serveur lancé sur le port: ${port}`);
});
