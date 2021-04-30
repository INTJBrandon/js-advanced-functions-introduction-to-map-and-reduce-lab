// Your code here
function mapToNegativize(arr) {
    const result = []
    arr.forEach(element => {
        result.push(-element)
    })
    return result
}

function mapToNoChange(arr) {
    const result = []
    arr.forEach(element => {
        result.push(element)
    })
    return result
}

function mapToDouble(arr) {
    const result = []
    arr.forEach(element => {
        result.push(element * 2)
    })
    return result
}

function mapToSquare(arr) {
    const result = []
    arr.forEach(element => {
        result.push(element * element)
    })
    return result
}

function reduceToTotal(arr, startingPoint = 0) {
    arr.forEach(element => {
        startingPoint += element
    })
    return startingPoint
}

function reduceToAllTrue(arr) {
    for(const element of arr) {
        if(!element) {
            return false
        }
    }
    return true
}

function reduceToAnyTrue(arr) {
    for(const element of arr) {
        if(!!element) return true
    }
    return false
}