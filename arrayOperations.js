// const checkLength = (num) => {
//   if (num.length <= 10){
//     return true;
//   }else{
//     return false;
//   }
// }

// const filterLongNumbers = (num) => {
//     return num.filter(checkLength);
// }

// const numbers = [
//   '1763687364',
//   '4763687363',
//   '7867867862',
//   'aaaaaaaabbbbbbbcccccdddddddd' 
// ];

const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];

const message = (namesAndDiscounts) => {
  console.log(`Hi ${namesAndDiscounts.name}, ${namesAndDiscounts.discount} off our best candies for you!`);
}
const generateMessage = namesAndDiscounts.map(message);

console.log(generateMessage);
