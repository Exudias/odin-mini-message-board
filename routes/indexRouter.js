const { Router } = require("express");

const indexRouter = Router();

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
];
  
indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

indexRouter.get("/messages/:id", (req, res) => {
  const id = req.params.id;
  const message = messages[id];
  res.render("message", { message });
});

indexRouter.get("/new", (req, res) => {
  res.render("form");
});

indexRouter.post("/new", (req, res) => {
  const text = req.body.text;
  const user = req.body.user;
  messages.push({ text: text, user: user, added: new Date() });
  res.redirect("/");
});

module.exports = indexRouter;