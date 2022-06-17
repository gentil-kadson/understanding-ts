// Let TypeScript infer the function types
function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  // it's infered, I just typed for demo reasons.
  console.log("The result is: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  // void type functions IGNORE the return statemente if there's one.
  const result = n1 + n2;
  cb(result);
}

printResult(add(64, 36));

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(8, 8));
addAndHandle(64, 36, (result) => {
  console.log(result);
});
