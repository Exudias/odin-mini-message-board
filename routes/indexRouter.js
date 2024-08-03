const { Router } = require("express");
const db = require("../db/queries");

const indexRouter = Router();
  
indexRouter.get("/", async (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: await db.getAllMessages() });
});

indexRouter.get("/messages/:id", async (req, res) => {
  const id = req.params.id;
  const message = await db.getMessageById(id);
  res.render("message", { message });
});

indexRouter.get("/new", (req, res) => {
  res.render("form");
});

indexRouter.post("/new", async (req, res) => {
  const text = req.body.text;
  const user = req.body.user;
  await db.createMessage(text, user, new Date());
  res.redirect("/");
});

module.exports = indexRouter;