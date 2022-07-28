// const person = {
//   name: 'Maxine',
//   age: 32,
//   address: {
//     city: 'London',
//     postcode: 'E13'
//   },
//   hobbies: ['writing', 'tennis', 'cooking']
// };

// console.log(person.address.city);

const cohort ={
  name: 'June2022',
  id: 1234,
  students: ['Joe', 'Ev', 'Paris', 'Irina']
};

const cohortPrinter = (cohortName) =>{
  console.log(`${cohort.name} - ${cohort.id} - ${cohort.students.length} in this cohort`);
}
