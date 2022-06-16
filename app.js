function combine(input1, input2, resultConversion) {
    //let result = input1 + input2; // it's gonna say it's an error because it can't know the types involved in the union types.
    var result;
    if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if(resultConversion === "as-number") {
    //     return +result;
    // } else {
    //     return result.toString(); 
    // }
}
var combinedAges = combine(10, 20, "as-number");
console.log(combinedAges);
var combinedStringAges = combine('10', '20', "as-number");
console.log(combinedStringAges);
var combinedNames = combine("Gentil", " Kadson", "as-text");
console.log(combinedNames);
