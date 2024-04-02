// Q1 : Get user to input a number using prompt("Enter a number:").Check if the number is a multiple of 5 or not.
// let number = prompt("Enter a number: ");
// result = number%5==0 ? "Divisable" : "not Divisible";
// alert(`${number} is ${result}`);/

// Q2 : write a code which can give grades to students according their Scores:
let score = prompt("Enter the Score: ");
if(score>=80){
    console.log("A");
}
else if(score>=70){
    console.log("B");
}
else if(score>=60){
    console.log("C");
}
else if(score>=50){
    console.log("D");
} else {
    console.log("F");
}