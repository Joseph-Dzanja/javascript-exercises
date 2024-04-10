const sumAll = function(a,b) {
    let c = 0;
    if(a<0 || b < 0 || typeof a !== "number" || typeof b !== "number"){
        return "ERROR";
    }
    else if(a<b){
        for(a;a<=b;a++){
            c+=a;
        }
        return c;
    }
    else{
        for(b;b<=a;b++){
            c+=b;
        }
        return c;
    }
    
};

// Do not edit below this line
module.exports = sumAll;
