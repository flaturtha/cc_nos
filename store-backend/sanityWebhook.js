const express = require("express");
const router = express.Router();

// This route will handle POST requests sent to /hooks/sanity
router.post("/hooks/sanity", (req, res) => {
    console.log("Received webhook:", req.body);
    // Add your logic to process the webhook data here

    res.status(200).send("Webhook received successfully");
});

module.exports = router;
