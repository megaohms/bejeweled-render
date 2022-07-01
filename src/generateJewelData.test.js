import {
    isInvalidVerticalTrio,
    isInvalidHorizontalTrio
} from './generateJewelData';

test('correctly identifies valid vertical sequences', () => {
    const testWithVerticalTrio = [
        [1,2,3],
        [2,3,2],
        [1,2,3]
    ]
    // top left corner
    //  console.log(isInvalidVerticalTrio(testWithVerticalTrio[0][0], 0, 0, testWithVerticalTrio) === false)
    // middle
    console.log(isInvalidVerticalTrio(testWithVerticalTrio[1][1], 1, 1, testWithVerticalTrio) === false)
    // bottom right corner
    console.log(isInvalidVerticalTrio(testWithVerticalTrio[2][2], 2, 2, testWithVerticalTrio) === false)
});

test('correctly identifies invalid vertical sequences', () => {
  const testWithVerticalTrio = [
      [1,2,3],
      [1,3,2],
      [1,2,3]
  ]
    // top left corner
    // console.log(isInvalidVerticalTrio(testWithVerticalTrio[0][1], 0, 0, testWithVerticalTrio) === true)
    // middle left
    // console.log(isInvalidVerticalTrio(testWithVerticalTrio[1][0], 1, 0, testWithVerticalTrio) === true)
    // bottom left
    console.log(isInvalidVerticalTrio(testWithVerticalTrio[2][0], 2, 0, testWithVerticalTrio) === true)
});

test('correctly identifies valid horizontal sequences', () => {
    const testWithHorizontalTrio = [
        [1,2,1],
        [2,3,2],
        [3,2,3]
    ]
    // top left
    const row1 = testWithHorizontalTrio[0]
    console.log(isInvalidHorizontalTrio(row1[0], 0, row1) === false)
    // middle
    const row2 = testWithHorizontalTrio[1]
    console.log(isInvalidHorizontalTrio(row2[1], 1, row2) === false)
    // bottom right
    const row3 = testWithHorizontalTrio[2]
    console.log(isInvalidHorizontalTrio(row3[2], 2, row3) === false)
});

test('correctly identifies invalid horizontal sequences', () => {
    const testWithHorizontalTrio = [
        [1,1,1],
        [2,3,2],
        [3,2,3]
    ]
    // top left
    console.log(isInvalidHorizontalTrio(testWithHorizontalTrio[0][0], 0, testWithHorizontalTrio[0]) === true)
    // top middle
    // console.log(isInvalidHorizontalTrio(testWithHorizontalTrio[0][1], 1, testWithHorizontalTrio[0]) === true)
    // top right
    console.log(isInvalidHorizontalTrio(testWithHorizontalTrio[0][1], 2, testWithHorizontalTrio[0]) === true)
});
