const fizzbuzz = (num) => {
  if (num % 3 === 0){
    if (num % 5 === 0){
      return 'Fizzbuzz';
    }return 'Fizz';
  }else if (num % 5 === 0 ){
    return 'Buzz';
  }else{
    return num;
  }
}

const fizzbuzzUntil = (total) => {
  for(let i = 1; i<=total; i++){
    const fb = fizzbuzz(i);
   console.log(fb);
  }
}

module.exports = fizzbuzz;
// module.exports = fizzbuzzUntil;