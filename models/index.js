const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CharacterSchema = new Schema ({
    name: {type: String, default: 'John Doe'},
    baseStr: {type: Number, default:5},
    baseDex: {type: Number, default:5},
    baseSta: {type: Number, default:5},
    health: {type: Number, default:10},
    money: {type: Number, default:100},
    weapon: {type: String, default: ' Knife'},
    armor: {type: String, default: ' Clothes'},
    weaponDam: {type: Number, default:1},
    defense: {type: Number, default:1},
    exp: {type: Number, default:10},
    level: {type: Number, default:1},
    eStats: {type: Number, default:0},
    saves: {type: Number, default:0},
    inventory: {type: Array,},
    fInventory: {type: Array,},
    questFlags: {type: Object, default:{princess: 1,}},
    saveCode: {type: String, defualt: 'password'},
});



const Character = mongoose.model("Character", CharacterSchema);


module.exports = Character;
