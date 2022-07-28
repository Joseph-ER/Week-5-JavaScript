let counter = 0;

const increment = () =>{
  console.log(counter);
  counter++;
}

setInterval(increment,2000);