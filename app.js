var userInput; // unknown type can't be assigned to a value other than unkown, because it can change later in the code.
// unknown is better than any because you have a type check to guarantee it's value, if assigned to a type other than unkown, won't change along the way and cause trouble as any might do.
var userName;
userInput = 20;
userInput = "Kadson";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error has occurred!", 500);
