const express = require("express");
const { body, validationResult } = require("express-validator");
const User = require("../models/user.model");
const router = express.Router();

router.post("", 
    body("firstName").not().isEmpty().isLength({ min: 3, max: 30 }),
    body("lastName").not().isEmpty().isLength({ min: 3, max: 30 }),
    body("age").not().isEmpty().isNumeric().custom((value) => {

        if (value < 1 || value > 150) {
            throw new Error("Invalid Age");
        }
        return true;
    }),
    body("email").not().isEmpty().isEmail(), async (req, res) => {

        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const User = await User.create(req.body);
            return res.status(200).send(user);
        } catch (err) {
            return res.status(500).send({ messgae: err.messgae });
        }

    }) ;
    
    
    module.exports=router;
