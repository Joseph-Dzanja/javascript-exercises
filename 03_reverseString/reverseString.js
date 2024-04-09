const reverseString = function(string) {
    let characters = "";
    for(let i = 0; i<string.length;i++){
        characters += string.at((string.length-1)-i);
    }
    return characters;
};

// Do not edit below this line
module.exports = reverseString;
