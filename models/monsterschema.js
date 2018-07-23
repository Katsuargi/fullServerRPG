const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MonsterSchema = new Schema ({
    nameM: {type: String, default: 'John Doe'},
    baseStr: {type: Number, default:5},
    baseDex: {type: Number, default:5},
    baseSta: {type: Number, default:5},
    health: {type: Number, default:10},
    money: {type: Number, default:100},
    exp: {type: Number, default:10},
    location: {type: String, default: 'forest'},
});

const Monster = mongoose.model("Monster", MonsterSchema);
module.exports = Monster;