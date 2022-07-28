const searchCandies = (startingStr,maxPrice) =>{
  let selectedCandies = [];
   return selectedCandies = candies.filter(item => {
     return item.price < maxPrice && item.name.startsWith(startingStr);
  });
  selectedCandies.forEach(item => {
    console.log(item);
  });
}

module.exports = {candies, searchCandies};