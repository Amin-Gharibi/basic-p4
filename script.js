const values = [100, 50, 30, 20, 5, 2, 1]
const counts = []
let count;
let leftOverNumber;

const number = +prompt("please enter a number:")

if (isNaN(number) || number <= 0) {
    alert('please enter a valid number')
} else {
    leftOverNumber = number
    for (let value of values) {
        if (leftOverNumber >= value) {
            count = Math.floor(leftOverNumber / value)
            counts.push(count)
            leftOverNumber -= (count * value)
        } else {
            counts.push(0)
        }
    }

    let resultString = "There are "
    for (let i = 0; i < values.length; i++) {
        resultString += `${counts[i]} of ${values[i]} tomani`
        if (i < (values.length - 1)) {
            resultString += " and "
        }
    }
    alert(resultString)
}