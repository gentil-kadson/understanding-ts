let userInput: unknown; // unknown type can't be assigned to a value other than unkown, because it can change later in the code.
// unknown is better than any because you have a type check to guarantee it's value, if assigned to a type other than unkown, won't change along the way and cause trouble as any might do.
// let userName: string;

// userInput = 20;
// userInput = "Kadson";

// if (typeof userInput === "string") {
//   userName = userInput;
// }

function generateError(message: string, code: number): never { // never specificies that it will NEVER return something, either because the script (or this part of the script) crashed or because of an infinite loop.
  throw { message: message, errorCode: code };
  // while(true) {}
}

generateError("An error has occurred!", 500);
