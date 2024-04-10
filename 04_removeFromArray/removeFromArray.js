const removeFromArray = function(array) {
    
    for(let i = 0;i<array.length;i++){

        for(let p = 1;p<=arguments.length;p++){
            if(array[i]===arguments[p]){
                array.splice(i,1);
                i=0;
            }
        }

    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
