const mongoose = require("mongoose");

const Bet = require("../models/bet");
const User = require("../models/user");


exports.bets_create_bet = (req, res, next) => {
  User.findById(req.params._id)
    .then(User => {
      if (!User) {
        return res.status(404).json({
          message: "For some reason, I cannot find you in the database"
        });
      }
      const bet = new Bet({
        _id: mongoose.Types.ObjectId(),
        betName: req.body.betName,
        description: req.body.description,
        money: req.body.money,
        otherBets: req.body.otherBets,
        friends: req.body.friends       
      });
      return bet.save();
    })
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Bet created",
        createdBet: {
          _id: result._id,
          betName: result.betName,
          description: result.description,
          money: result.money,
          otherBets: result.otherBets,
          friends: result.friends     
        },
        request: {
          type: "POST",
          url: "http://localhost:4000/bets/" + result._id
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

exports.bets_delete = (req, res, next) => {
  Bet.remove({ _id: req.params.betId })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Bet deleted",
        request: {
          type: "DELETE",
          url: "http://localhost:4000/bets",
        }
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};
