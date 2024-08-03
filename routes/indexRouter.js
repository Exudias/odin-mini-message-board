const { Router } = require("express");
const db = require("../db/queries");

const indexRouter = Router();
  
indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: db.getAllMessages() });
});

indexRouter.get("/messages/:id", (req, res) => {
  const id = req.params.id;
  const message = db.getMessageById(id);
  res.render("message", { message });
});

indexRouter.get("/new", (req, res) => {
  res.render("form");
});

indexRouter.post("/new", (req, res) => {
  const text = req.body.text;
  const user = req.body.user;
  db.createMessage(text, user, new Date());
  res.redirect("/");
});

module.exports = indexRouter;