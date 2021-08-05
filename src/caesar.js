// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
const alphabet = "abcdefghijklmnopqrstuvwxyz"
  
function caesar(input, shift, encode = true) {
   let inputInLow = input.toLowerCase();
    let solved = "";
    if(!shift || shift < -25 || shift > 25){
      return false;
    }
    for(let i = 0; i < inputInLow.length; i++) {
      let inputs = inputInLow[i];
      if(inputs === " " || !(alphabet.includes(inputs))) {
        solved += inputs;
        continue;
      }
      for(let j in alphabet) {
      if(inputs === alphabet[j]) {
        let cipher
        if(encode) {
          cipher = Number(j) + Number(shift);
        }else{
          cipher = Number(j) - Number(shift);
        }
        if(cipher > 25) cipher = cipher - 26;
        if(cipher < 0) cipher = cipher + 26;
        solved += alphabet[cipher];
      }
     }   
    }
  return solved;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
