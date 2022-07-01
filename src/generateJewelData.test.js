import {
    isInvalidVerticalTrio,
    isInvalidHorizontalTrio
} from './generateJewelData';



test('correctly identifies invalid vertical sequences', () => {
  // grid should not render with 1s in vertical line
  const testWithVerticalTrio = [
      [1,2,3],
      [1,3,2],
      [1,2,3]
  ]
    console.log(isInvalidVerticalTrio(testWithVerticalTrio) === false)
});

test('correctly identifies valid vertical sequences', () => {
    // grid should not render with 1s in vertical line
    const testWithVerticalTrio = [
        [1,2,3],
        [1,3,2],
        [1,2,3]
    ]
    console.log(isInvalidVerticalTrio(testWithVerticalTrio) === true)
});

test('correctly identifies invalid horizontal sequences', () => {
    const testWithHorizontalTrio = [
        [1,1,1],
        [2,3,2],
        [3,2,3]
    ]
    console.log(isInvalidHorizontalTrio(testWithHorizontalTrio) === true)
});

test('correctly identifies valid horizontal sequences', () => {
    const testWithHorizontalTrio = [
        [1,2,1],
        [2,3,2],
        [3,2,3]
    ]
    console.log(isInvalidHorizontalTrio(testWithHorizontalTrio) === false)
});
