
const express = require('express')


const router = express.Router();

const {contactUS} = require("../Controller/ContactUs")


router.post("/contact-us", contactUS);

module.exports = router;

