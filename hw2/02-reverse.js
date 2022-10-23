/** Exercise 02 - Reverse **/

// Add your code here
function Reverse () {

    let input = document.querySelector("input").value;
    
    str = input.toString() ; 
    len = str.length ;

    if ( len != 8 ){
        let result = '\nError: Please input an 8-digit number' ;
        document.getElementById("error").innerHTML = result ;
        return result ;
    } else {
        const reversed = input.toString().split('').reverse().join('') ;
        let result = `\n${input} --> ${reversed}` ;
        document.getElementById("result").innerHTML = result ;
        return result ;
    }
};
