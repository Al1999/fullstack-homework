/** Exercise 01 - Coins **/

const calculateChange = (input) => { 
  // spliting decimal value
  let amount = input ;
  let str = amount.toString() ;
  let numarray = str.split('.') ;
  let a = new Array() ;
  
  // converting strings to integer values
  let dollar = parseInt(numarray[0]) ;
  let change = parseInt(numarray[1]) ;
  
  // converting change to coins
  if (dollar > 10) {
    const result = '\nError: the number is too large' ;
    return result ;
  } else {
    let quarters = change / 25 ;
    change = change % 25 ;
    let dimes = change / 10 ;
    change = change % 10 ;
    let nickels = change / 5 ;
    change = change % 5 ;
    let pennies = change / 1 ;
    const result = `\n$${amount} ==> ${dollar} dollars, ${quarters} quarters, ${dimes} dimes, ${nickels} nickels, ${pennies} pennies` ; 
    return result ; 
  }
};

// Sample Test Cases
console.log(calculateChange(4.62));
// $4.62 ==> 4 dollars, 2 quarters, 1 dime, 2 pennies
console.log(calculateChange(9.74));
// $9.74 ==> 9 dollars, 2 quarters, 2 dimes, 4 pennies
console.log(calculateChange(0.16));
// $0.16 ==> 1 dime, 1 nickel, 1 penny
console.log(calculateChange(15.11));
// $15.11 ==> Error: the number is too large
