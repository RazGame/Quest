var mongoose = require('mongoose'),
    encrypt = require('../utilities/encryption');

var userSchema = mongoose.Schema({
    firstName: {type: String, required: '{PATH} is required!'},
    lastName: {type: String, required: '{PATH} is required!'},
    nickname: {type: String, required: '{PATH} is required!', unique: true},
    username: {type: String, required: '{PATH} is required!', unique: true},
    city: {type: String, required: '{PATH} is required!'},
    phone: {type: String, required: '{PATH} is required!'},
    salt: {type: String, required: '{PATH} is required!'},
    hashed_pwd: {type: String, required: '{PATH} is required!'},
    roles: [String],
    gameAppls: [mongoose.Schema.Types.ObjectId]
});
userSchema.methods = {
    authenticate: function (passwordToMatch) {
        return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
    },
    hasRole: function (role) {
        return this.roles.indexOf(role) > -1;
    }
};
var User = mongoose.model('User', userSchema);

function createDefaultUsers() {
    User.find({}).exec(function (err, collection) {
        if (collection.length === 0) {
            var salt, hash;
            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, 'walkman');
            User.create({
                firstName: 'Михаил',
                lastName: 'Селяков',
                username: 'razgame@mail.ru',
                nickname: 'RazGame',
                city: 'Санкт-Петербург',
                phone: '+79213640415',
                salt: salt,
                hashed_pwd: hash,
                roles: ['admin'],
                gameAppls: []
            });
        }
    });
}

exports.createDefaultUsers = createDefaultUsers;