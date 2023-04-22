// scripts.js

const data = {
    lists: [
        ['first', [15, 11, 13, 7, 5]],
        ['second', [2, 6, 8, 4, 14, 12, 10]],
        ['third', [9, 3, 1]],
    ]
}

// Only edit below

const [ , first] = data.lists[0]
const [ , second] = data.lists[1]
const [ , third] = data.lists[2]

const result = []

const extractBiggest = () => {
    const firstLast = first[first.length - 1] || 0
    const secondLast = second[second.length - 1] || 0
    const thirdLast = third[third.length - 1] || 0
    
    if (firstLast >= secondLast && firstLast >= thirdLast) {
        const value = first.pop()
        result.push(value)
        return value
    }
    if (secondLast >= firstLast && secondLast >= thirdLast) {
        const value = second.pop()
        result.push(value)
        return value
    }

    if (thirdLast >= firstLast && thirdLast >= secondLast) {
        const value = third.pop()
        result.push(value)
        return value
    }
}

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)







