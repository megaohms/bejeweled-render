
const numberOfJewelTypes = 7

export let jewelData = [
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
]

function generateJewel() {
    return Math.ceil(Math.random()*numberOfJewelTypes)
}

// generate new grid instead of mapping original
export function generateGrid() {
    jewelData.forEach((row, yIdx) => {
        row.forEach((cell, xIdx) => {
            let candidateCell = cell
            while (isInvalidHorizontalTrio(candidateCell, xIdx, row) ||
                isInvalidVerticalTrio(candidateCell, yIdx, xIdx, jewelData)) {
                candidateCell = generateJewel()
            }
            jewelData[yIdx][xIdx] = candidateCell
        })
    })
    return jewelData
}

// find so parent function can compare two directions
export function isInvalidHorizontalTrio(cell, xIdx, row) {
    return checkIfDefault(cell) ||
        checkTwoToRightMatch(cell, xIdx, row) ||
        checkTwoToLeftMatch(cell, xIdx, row)
}

function checkTwoToRightMatch(cell, xIdx, row) {
    // make sure current cell does not match both following cells
    return cell === row[xIdx + 1] && cell === row[xIdx + 2]
}

function checkTwoToLeftMatch(cell, xIdx, row) {
    // nor should it match previous cells
    return cell === row[xIdx - 1] && cell === row[xIdx - 2]
}

export function isInvalidVerticalTrio(cell, yIdx, xIdx, matrix) {
    return checkIfDefault(cell) ||
        checkTwoBelowMatch(cell, xIdx, yIdx, matrix) ||
        checkTwoAboveMatch(cell, xIdx, yIdx, matrix)
}

function checkIfDefault(cell) {
    // if it's a default, it's invalid
    return cell === 0
}

// todo: see if better syntax for safe nested array access
function checkTwoBelowMatch(cell, xIdx, yIdx, matrix) {
    return matrix[yIdx + 1] &&
        cell === matrix[yIdx + 1][xIdx] &&
        matrix[yIdx + 2] &&
        cell === matrix[yIdx + 2][xIdx]
}

function checkTwoAboveMatch(cell, xIdx, yIdx, matrix) {
    return matrix[yIdx - 1] &&
        cell === matrix[yIdx - 1][xIdx] &&
        matrix[yIdx - 2] &&
        cell === matrix[yIdx - 2][xIdx]
}