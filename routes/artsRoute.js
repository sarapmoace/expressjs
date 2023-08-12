const express = require('express');
const router = express.Router();

const { getArts, postArts, getArtsById, updateArts, deleteArts } = require("../controllers/getArts")

router.get("/", getArts)

router.post("/", postArts)

router.get("/:id", getArtsById)

router.patch("/:id", updateArts)

router.delete("/:id", deleteArts)

module.exports = router;