// let finances = [
// ['Jan-2010', 867884],
// ['Feb-2010', 984655],
// ['Mar-2010', 322013],
// ['Apr-2010', -69417],
// ['May-2010', 310503],
// ['Jun-2010', 522857],
// ['Jul-2010', 1033096],
// ['Aug-2010', 604885],
// ['Sep-2010', -216386],
// ['Oct-2010', 477532],
// ['Nov-2010', 893810],
// ['Dec-2010', -80353],
// ['Jan-2011', 779806],
// ['Feb-2011', -335203],
// ['Mar-2011', 697845],
// ['Apr-2011', 793163],
// ['May-2011', 485070],
// ['Jun-2011', 584122],
// ['Jul-2011', 62729],
// ['Aug-2011', 668179],
// ['Sep-2011', 899906],
// ['Oct-2011', 834719],
// ['Nov-2011', 132003],
// ['Dec-2011', 309978],
// ['Jan-2012', -755566],
// ['Feb-2012', 1170593],
// ['Mar-2012', 252788],
// ['Apr-2012', 1151518],
// ['May-2012', 817256],
// ['Jun-2012', 570757],
// ['Jul-2012', 506702],
// ['Aug-2012', -1022534],
// ['Sep-2012', 475062],
// ['Oct-2012', 779976],
// ['Nov-2012', 144175],
// ['Dec-2012', 542494],
// ['Jan-2013', 359333],
// ['Feb-2013', 321469],
// ['Mar-2013', 67780],
// ['Apr-2013', 471435],
// ['May-2013', 565603],
// ['Jun-2013', 872480],
// ['Jul-2013', 789480],
// ['Aug-2013', 999942],
// ['Sep-2013', -1196225],
// ['Oct-2013', 268997],
// ['Nov-2013', -687986],
// ['Dec-2013', 1150461],
// ['Jan-2014', 682458],
// ['Feb-2014', 617856],
// ['Mar-2014', 824098],
// ['Apr-2014', 581943],
// ['May-2014', 132864],
// ['Jun-2014', 448062],
// ['Jul-2014', 689161],
// ['Aug-2014', 800701],
// ['Sep-2014', 1166643],
// ['Oct-2014', 947333],
// ['Nov-2014', 578668],
// ['Dec-2014', 988505],
// ['Jan-2015', 1139715],
// ['Feb-2015', 1029471],
// ['Mar-2015', 687533],
// ['Apr-2015', -524626],
// ['May-2015', 158620],
// ['Jun-2015', 87795],
// ['Jul-2015', 423389],
// ['Aug-2015', 840723],
// ['Sep-2015', 568529],
// ['Oct-2015', 332067],
// ['Nov-2015', 989499],
// ['Dec-2015', 778237],
// ['Jan-2016', 650000],
// ['Feb-2016', -1100387],
// ['Mar-2016', -174946],
// ['Apr-2016', 757143],
// ['May-2016', 445709],
// ['Jun-2016', 712961],
// ['Jul-2016', -1163797],
// ['Aug-2016', 569899],
// ['Sep-2016', 768450],
// ['Oct-2016', 102685],
// ['Nov-2016', 795914],
// ['Dec-2016', 60988],
// ['Jan-2017', 138230],
// ['Feb-2017', 671099]
// ];






// This is my finances array, broken down so it's easier to read.
let finances = [
    ['Jan-2010', 100],
    ['Feb-2010', 200],
    ['Mar-2010', -100],
    ['Apr-2010', 100]
]

// Variable to store total number of months
let totalMonths = finances.length


// This is my main code

let profitLoss = 0
let dates = []
let changes = [0]

let highestChange
let lowestChange


    for (let i = 0; i < totalMonths; i++) {

        // this is taking the 1th index from the inner array
        const monthlyFinance = finances[i];
        const [date, amount] = monthlyFinance

        profitLoss = profitLoss + amount

        if (i > 0) {
            const lastMonthlyFinance = finances[i-1];
            const [lastDate, lastAmount] = lastMonthlyFinance
            // profitLoss = profitLoss + amount
            changes.push(amount - lastAmount)

        }
        
        
        // dates.push(date)
        
    }

    let averageChange = totalMonths / changes
    

    console.log(changes)
    console.log("The total number of months recorded is: " + totalMonths)
    console.log("The total profit/loss for this period is: " + profitLoss)
    console.log("The average change in profit/loss over the entire period is: " + averageChange)
 
    


// I know I talked about mixing datatypes in arrays being bad but here's how we would grab values from them anyway
// let twoDArray = [["hello", 2, true], 
//                  ["String1", "String2", "String3"], 
//                  [10, 20, 30]]

// here is an example that console.logs in a for loop the `1th` index from each inner array










// for (let i = 0; i < twoDArray.length; i++) {
//     console.log(twoDArray[i][1])
    
// }






// var animals = ["chickens", "pigs", "cows", "horses", "ostriches"];

// for (let i = 0; i < animals.length; i++) {
//     const animal = animals[i];


//     if (animal[1] === "h" || animal[1] === "s") {

//         console.log(animal + " second character contains the letter 'h' or 's' ")

//     }
// }








// Your task is to write JavaScript code that analyzes the records to calculate each of the following:

// The total number of months included in the dataset.
  // Count up how many things are in the array
  // array.length
  // Need a variable to store the value of array.length

// The net total amount of Profit / Losses over the entire period.
  // Adding up the money
  // Keep a rolling total
  // Need a variable to store the rolling total
  // for loop to iterate over the array
    // Inside that for loop, access position 1 of each array element to get the numbers

// The average of the changes in Profit / Losses over the entire period.
// You will need to track what the total change in profits are from month to month and then find the average.
// (Total / Number of months)

// The greatest increase in profits(date and amount) over the entire period.

// The greatest decrease in losses(date and amount) over the entire period.

  // Total up the differences between each pair of adjoining months & divide by number of array elements
  // for loop starting with i = 1
    // Each iteration, subtract the data at position [1] of the previous element from the data at position [1] of the current element
    // Put that data into a new array variable
      // So, we need to arr.push() each new 'change' value to the new array
    // Need a variable to store greatest amount of change (+)
    // Need a variable to store greatest amount of change (-)
    // Each iteration, compare the difference to the previous difference
    // If it's higher than what's already stored in greatest-profit variable, reassign that variable to equal finances[i]
      // greatest[0] = finances[i][0]
      // greatest[1] = changeArr[i-1]
    // If it's lower than what's already stored in greatest-loss variable, reassign that variable to equal finances[i]

  // Add up the total in the new 'changes' array
    // Need a variable to store the rolling total for this array that's different that the rolling total of profits
    // for loop to iterate over the changes array
      // add each element in turn to the rolling total

  // Take that 'total changes amount' variable and divide it by the number of elements in the array
    // Look up how to limit the answer to two decimal points

// Sample decrementing for loop
// for (let i = arr.length - 1; i < 0; i--) {
  
// }