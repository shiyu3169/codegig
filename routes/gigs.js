const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Gig = require("../models/Gig");

// Get gig list
router.get("/", (req, res) =>
  Gig.findAll()
    .then(gigs => {
      res.render("gigs", { gigs });
    })
    .catch(err => console.log(err))
);

// Add a gig
router.get("/add", (req, res) => {
  const data = {
    title: "Simple Wordpress Website",
    technologies: "php,html,css",
    budget: "$1000",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem I",
    contact_email: "user2@gmail.com"
  };

  const { title, technologies, budget, description, contact_email } = data;

  // Insert into table
  Gig.create({
    title,
    technologies,
    budget,
    description,
    contact_email
  })
    .then(gig => res.redirect("/gigs"))
    .catch(err => console.log(err));
});

module.exports = router;
