const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const BetsController = require('../controllers/bets');

// Handle incoming GET requests to /orders
//router.get("/", checkAuth, BetsController.bets_get_all_friends);

router.post("/", checkAuth, BetsController.bets_create_bet);

router.delete("/:betId", checkAuth, BetsController.bets_delete);

module.exports = router;
