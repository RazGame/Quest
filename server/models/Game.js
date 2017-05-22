var mongoose = require('mongoose');

var gameSchema = mongoose.Schema({
    title: {type: String, required: '{PATH} is required!', unique: true},
    city: {type: String, required: '{PATH} is required!'},
    dateofstart: { type : Date, default: Date.now, required: '{PATH} is required!'},
    dateofend: { type : Date, default: Date.now, required: '{PATH} is required!'},
    deposit: {type: String, required: '{PATH} is required!'},
    prize: {type: String, required: '{PATH} is required!'},
    description: {type: String, required: '{PATH} is required!'},
    //gameAppls: [mongoose.Schema.Types.ObjectId]
    gameAppls: [{type: mongoose.Schema.Types.ObjectId, ref: 'GameAppl'}]
});

var Game = mongoose.model('Game', gameSchema);

function createDefaultGames() {
    Game.find({}).exec(function (err, collection) {
        if (collection.length === 0) {
            Game.create({
                title: 'Первая игра',
                city: 'Санкт-Петербург',
                deposit: '1400',
                prize:'3000',
                description:'Это будет незабываемое приключение для вас',
                gameAppls: []
            });
            Game.create({
                title: 'Вторая игра',
                city: 'Санкт-Петербург',
                deposit: '1222',
                prize:'4324',
                description:'Это будет незабываемое приключение для вас',
                gameAppls: []
            });
        }
    });
}

exports.createDefaultGames = createDefaultGames;