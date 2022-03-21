const express = require("express");
const Book = require("../models/book.models");
const router = express.Router();

router.post("", async (req, res) => {

    try {
        const book = await User.create(req.body);
        return res.status(200).send(book);

    } catch (err) {
        return res.status(500).send({ messgae: err.messgae });
    }
});


module.exports = router;
