var mongoose = require('mongoose');

var gameApplSchema = mongoose.Schema({
    userParent: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    gameParent: {type: mongoose.Schema.Types.ObjectId, ref: 'Game'},
    signed: {type: Date, required: '{PATH} is required!', default: Date.now},
});

var GameAppl = mongoose.model('GameAppl', gameApplSchema);

function createDefaultGameAppls() {
    GameAppl.find({}).exec(function (err, collection) {
        if (collection.length === 0) {
        }
    });
}

exports.createDefaultGameAppls = createDefaultGameAppls;