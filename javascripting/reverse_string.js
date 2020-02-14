//reverse
function reverseString(str) {
    return str
    .split('')
    .reverse('')
    .join('')

}

//reduce
function reverseString(str) {
    return [...str].reduce((acc, current) => 
    
    current + acc
    )
}

//for loop
function reverseString(str) {
    let results = ''
    
    for (let i = str.length - 1; i >= 0; i--) {
        results += str[i];

    }

    return results;
}

//sort

function reverseString(str) {
    return str
    .split('')
    .sort(() => 1)
    .join('')
}