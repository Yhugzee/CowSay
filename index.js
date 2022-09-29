const info = require('./information');
const cowsay = require("cowsay");

console.log(cowsay.say({
    text: `Salut je m'appelle ${info.name} et mon campus se trouve à ${info.campus}`,
    e: "oO",
    T: "U "
}));