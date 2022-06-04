import { sum } from './calculator';

it('should sum 2 and 2 and the result  must be 4', () => {
  expect(sum(2, 2)).toBe(4);
});

it('should sum 2 and 2 and the result is not equal to 7', () => {
  expect(sum(2, 2)).not.toBe(7);
});

it('should give an erro when passing infinity', ()=> {
  expect(()=> {
    sum(Infinity, 2)
  }).toThrowError()
})

