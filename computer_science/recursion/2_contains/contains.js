const contains = function(obj, find) {
  for(let value of Object.values(obj)){
    if(Object.is(value, find)) return true;
    if(typeof(value) === 'object' && value != null){
      if(contains(value, find)) return true;
    }
  }
  return false;
  }

// Do not edit below this line
module.exports = contains;
