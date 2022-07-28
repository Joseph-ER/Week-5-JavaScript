const {candies, searchCandies} = require('./Candies');


describe('Candies search', () => {
    it('Candies is full array of candies',()=>{
      expect(candies.length).toBe(13)
    });

    it('returns a list of candies starting with Ma and with prices less than £10', () => {
      expect(searchCandies('Ma', 10)).toEqual(['Mars', 'Maltesers'])
    });
    it('returns only mars when passed MA 2',()=> {
      expect(searchCandies('Ma',2)).toEqual(['Mars'])
    });
    it('returns 3 when pass S 10',() => {
      expect(searchCandies('S',10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ])
    });
    it('returns 2 when passed S 4',()=> {
      expect(searchCandies('S',4)).toEqual([ 'Skitties', 'Skittles'])
    });
});