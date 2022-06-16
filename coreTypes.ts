// TypeScript does that under the hood
// const person: {
//     name: string;
//     age: number;
// } = {

// Tuple:
// const person: {
//     name: string; 
//     age: number;
//     hobbies: string[],
//     role: [number, string] // way to define a tuple
// } = {
//   name: "Kadson",
//   age: 19,
//   hobbies: ['Gaming', 'Coding'],
//   role: [1, "programmer"]
// };

// person.role.push("admin"); => allows this
// person.role[1] = 10; // does not allow this
// person.role = [2, 'admin', '']; does not allow this
// ======================================================

// Array:
// let favoriteActivities: string[];
// favoriteActivities = ['Sport'];

// console.log(person.name);

// for(const hobby of person.hobbies) {
//     console.log(hobby);
//     // console.log(hobby.map()) // !!! ERROR !!!
// }
// =========================================================

// Enum:

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
  name: "Kadson",
  age: 19,
  hobbies: ['Gaming', 'Coding'],
  role: Role.ADMIN 
};

if(person.role === Role.READ_ONLY) {
    console.log(`${person.name} is an admin.`)
}


