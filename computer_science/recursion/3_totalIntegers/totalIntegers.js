const contains = require("../2_contains/contains");

const totalIntegers = function(items, total = 0) {
    if(typeof(items) != 'object' || items == null) return;
    for(let item of Object.values(items)){
        if(Number.isInteger(item)){
            total = total + 1;
        }
        if(typeof(item) == 'object' && item != null){
           total = total + totalIntegers(item);
        }
    }
    return total;
};
const tite = totalIntegers([[1,2,3],[0,1,2,2,2]]);
console.log(tite)  
// Do not edit below this line
module.exports = totalIntegers;
