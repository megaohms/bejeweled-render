
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
            while (checkIfDefault(cell) ||
                isInvalidHorizontalTrio(candidateCell, xIdx, row) ||
                isInvalidVerticalTrio(candidateCell, yIdx, xIdx, jewelData)) {
                candidateCell = generateJewel()
            }
            jewelData[yIdx][xIdx] = candidateCell
        })
    })
    return jewelData
}

function checkIfDefault(cell) {
    // if it's a default, it's invalid
    return cell === 0
}

// find so parent function can compare two directions
export function isInvalidHorizontalTrio(cell, xIdx, row) {
    return checkTwoToRightMatch(cell, xIdx, row) ||
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
    return checkTwoBelowMatch(cell, yIdx, xIdx, matrix) ||
        checkTwoAboveMatch(cell, yIdx, xIdx, matrix)
}


// todo: see if better syntax for safe nested array access
function checkTwoBelowMatch(cell, yIdx, xIdx, matrix) {
    return matrix[yIdx + 1] &&
        cell === matrix[yIdx + 1][xIdx] &&
        matrix[yIdx + 2] &&
        cell === matrix[yIdx + 2][xIdx]
}

function checkTwoAboveMatch(cell, yIdx, xIdx, matrix) {
    return matrix[yIdx - 1] &&
        cell === matrix[yIdx - 1][xIdx] &&
        matrix[yIdx - 2] &&
        cell === matrix[yIdx - 2][xIdx]
}