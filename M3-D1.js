/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
const sum = (a, b) => {
    if (a === b) {
        return (a + b) * 3
    } else {
        return a + b
    }
}
console.log(sum(2, 4))
console.log(sum(2, 2))


/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/

const checkNumber = (num1, num2) => {
    let numSum = num1 + num2
    return (num1 === 50 || num2 === 50 || numSum === 50) ? true : false
}

console.log(checkNumber(40, 20))
/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/

const removeChart = (str) => {
    return str.substring(1, 4)
}

console.log(removeChart("Hello"))
/*

4)
 Create a function to find the largest of three given integers.
*/

const findLargest = (num1, num2, num3) => {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2
    } else {
        return num3
    }

}
console.log(findLargest(0, 12, 50))
/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/

const checkRange = (numb1, numb2) => {
    if ((numb1 >= 40 && numb1 <= 60) || (numb1 >= 70 && numb1 <= 100)) {
        return true
    } else if ((numb2 >= 40 && numb2 <= 60) || (numb2 >= 70 && numb2 <= 100)) {
        return true
    }
    return false
}

console.log(checkRange(15, 15))
/*
6)

Create a function to create a new string of specified copies (positive number) of a given string.
*/

const createNewStr = (str) => {
    return str.substr(0, 7)
}
console.log(createNewStr("welcome"))
/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/

const cityName = (str) => {
    return (str.startsWith("Los") || str.startsWith("New")) ? str : " "
}
console.log(cityName("New york"))
/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/

const sumElements = (arr) => {
    let sum = 0
    for (let num of arr) {
        sum += num
    }
    return sum
}

console.log(sumElements([1, 2, 3]))
/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3.
*/

const testIncludeInt = (arr) => {
    return (arr.includes(1) || arr.includes(3)) ? true : false
}
console.log(testIncludeInt([4, 6]))
/*

10)

Create a function to test whether an array of integers of length 2 does not contain 1 or a 3

*/

const testNotIncludeInt = (arr) => {
    return !(arr.includes(1) || arr.includes(3)) ? true : false
}

console.log(testNotIncludeInt([5, 8]))


// 11)

// Create a function to find the longest string from a given array of strings.

const findLongeststr = (arr) => {
    return arr.sort((a, b) => {
        return b.length - a.length
    })[0]

}

console.log(findLongeststr(["whatever", "mango", "pineapple"]))

// 12)

// Create a function to find the types of a given angle.

// Types of angles:
//     Acute angle: An angle between 0 and 90 degrees.
//     Right angle: An 90 degree angle.
//     btuse angle: An angle between 90 and 180 degrees.
//     Straight angle: A 180 degree angle.


const findAngle = (angle) => {
    if (angle >= 0 && angle < 90) {
        return "This is an Acute Angle"
    } else if (angle === 90) {
        return "Right Angle"
    } else if (angle >= 90 && angle <= 180) {
        return "Obtuse Angle"
    }
    return "Straight Angle"
}

console.log(findAngle(90))

// 13)

// Create a function to find the index of the greatest element of a given array of integers

const findIndexOfElement = (arr) => {
    return arr.indexOf(Math.max(...arr))
}

console.log(findIndexOfElement([2, 9, 14, 60, 120, 500]))
// 14)

// Create a function to get the largest even number from an array of integers.

const largestEvenNum = (arr) => {
    arr.sort((a, b) => b - a)

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            return arr[i]
        }
    }
}

console.log(largestEvenNum([2, 30, 7, 5, 6, 20]))
// 16)

// Create a function to check from two given integers, whether one is positive and another one is negative.

const positiveOrNegative = (num1, num2) => {
    return ((num1 < 0 && num2 > 0) || num1 > 0 && num2 < 0) ? true : false

}

console.log(positiveOrNegative(3, -8))
// 17)

// Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case.

const strLowerAndUpperCase = (str) => {
    str.length < 3
        ? str.toUpperCase()
        : str.slice(0, 3).toLowerCase() + str.slice(3).toUpperCase();
}

console.log(strLowerAndUpperCase("strive"))
// 18)

// Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

const sumOfInt = (num1, num2) => {
    let sum = num1 + num2

    return (sum >= 50 && sum <= 80) ? 65 : 80

}

console.log(sumOfInt(30, 19))
// 19)

// Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

// If the number has 3 as a factor, output 'Diego'.
// If the number has 5 as a factor, output 'Riccardo'.
// If the number has 7 as a factor, output 'Stefano'.
// If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
// Examples
// 28's factors are 1, 2, 4, 7, 14, 28.
// this would be a simple "Stefano".
// 30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
// this would be a "DiegoRiccardo".
// 34 has four factors: 1, 2, 17, and 34.
// this would be "34".


const numToStringByFactor = (num) => {
    let str = "";
    if (num % 3 === 0) str += "Diego";
    if (num % 5 === 0) str += "Riccardo";
    if (num % 7 === 0) str += "Stefano";

    return str;

}

console.log(numToStringByFactor(2))

// 20)
// Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

const acronym = (str) => {
    return str
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase())
        .join("")

}
console.log(acronym("What thanks follows"))
// */
