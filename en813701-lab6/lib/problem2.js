function readInput() {
    let allNum = [];

    while (true) {
        let input = Number(prompt("Enter an integer (a negative integer to quit):"));

        if (!isNaN(input) && input >= 0 && Number.isInteger(input)) {
            allNum.push(input);
        }
        if (input < 0) {
            return allNum;
        }

    }
}

function minNum(allNum) {
    let min = allNum.sort(function (x, y) {return x - y})[0]
    return min;
}

function maxNum(allNum) {
    let max = allNum.sort((x, y) => x - y)[allNum.length - 1]
    return max;
}

function avgNum(allNum) {
    let total = 0;
    for (let number of allNum) {
        total += Number(number);
    }
    return Number((total / allNum.length).toFixed(2));
}



let allNum = readInput();
let min = minNum(allNum);
let max = maxNum(allNum);
let avg = avgNum(allNum);

alert(`For the list ${allNum} the average is ${avg}, the minimum is ${min}, and the maximum is ${max}`);
console.log(allNum, min, max, avg);