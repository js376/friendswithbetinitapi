const mongoose = require('mongoose');

const betSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    betName: { type: String, required: true },
    description: { type: String },
    money: { type: Number },
    otherBets: { type: String },
    gamblers: { type:[Number]}
});

module.exports = mongoose.model('Bet', betSchema);