const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MonsterSchema = new Schema ({
    nameM: {type: String, default: 'Goblin'},
    location: {type: String, default: 'forest'},
    str: {type: Number, default:5},
    dex: {type: Number, default:5},
    sta: {type: Number, default:5},
    health: {type: Number, default:10},
    exp: {type: Number, default:10},
    gold: {type: Number, default:100},
});

const Monster = mongoose.model("Monster", MonsterSchema);
module.exports = Monster;