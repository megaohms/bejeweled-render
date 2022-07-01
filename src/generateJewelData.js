export const jewelDataDefault = [
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
]
export const jewelDataSample = [
    [1,2,3,4,5,6,7,1],
    [4,5,6,7,1,1,2,3],
    [3,4,5,6,7,7,1,2],
    [2,3,4,5,6,7,1,1],
    [1,2,3,4,5,6,7,1],
    [4,5,6,7,1,1,2,3],
    [3,4,5,6,7,7,1,2],
    [2,3,4,5,6,7,1,1],
]

function generateJewel() {
    return Math.ceil(Math.random()*8)
}

export function generateGrid() {
    return jewelDataDefault.map((row, yIdx) => {
        return row.map((cell, xIdx) => {
            let candidateCell = cell
            while (isInvalidHorizontalTrio(candidateCell, xIdx, row) ||
                isInvalidVerticalTrio(candidateCell, yIdx, xIdx, jewelDataDefault)) {
                candidateCell = generateJewel()
            }
            return candidateCell
        })
    })
}

// find so parent function can compare two directions
export function isInvalidHorizontalTrio(cell, xIdx, row) {
    // make sure current cell does not match following cells
    return cell === row[xIdx + 1] && cell === row[xIdx + 2] &&
        // nor should it match previous cells
        cell === row[xIdx - 1] && cell === row[xIdx - 2]
}

// find so parent function can compare two directions
export function isInvalidVerticalTrio(cell, yIdx, xIdx, matrix) {
    // if it's a default, it's invalid, without checking the next
    return cell === 0 ||
        // todo: see if better syntax for safe nested array access
        (
            // todo: break these into different functions
            // make sure current cell does not match both following cells
            matrix[yIdx + 1] &&
            cell === matrix[yIdx + 1][xIdx] &&
            matrix[yIdx + 2] &&
            cell === matrix[yIdx + 2][xIdx] &&
            // nor should it match both previous cells
            matrix[yIdx - 1] &&
            cell === matrix[yIdx - 1][xIdx] &&
            matrix[yIdx - 2] &&
            cell === matrix[yIdx - 2][xIdx]
        )
}
