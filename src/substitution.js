// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

function substitution(input, alphabet, encode = true) {
  let alphabets = "abcdefghijklmnopqrstuvwxyz";
  let result = '';
  let unique = [];
  
  if(!alphabet || alphabet.length !== 26){
    return false;
  }
  
  for(let i=0; i<alphabet.length; i++){
    unique.push(alphabet[i])
  }
  unique = unique.sort();
  for(let i=0; i<unique.length; i++){
    if(unique[i]===unique[i+1]){
      return false;
    }
  }
  for (let i=0; i<input.length; i++){
    let inputs = input[i].toLowerCase();
    if(inputs === ' ') {
      result+=inputs;
      continue;
    }
    
    if(encode){
      for (let j=0; j<alphabets.length; j++){
        if(inputs === alphabets[j]){
          result+=alphabet[j];
          
        }
    }
    }
    else {
      for (let k=0; k<alphabet.length; k++){
        if(inputs === alphabet[k]){
          result+=alphabets[k];
        }
      }
    }
  }

return result;
}

  return {
    substitution,
  };
})();
module.exports = { substitution: substitutionModule.substitution };
