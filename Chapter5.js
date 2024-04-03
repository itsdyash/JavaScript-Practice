// Q1. Create a function using the “function” keyword that takes a String as an argument & returns the number of vowels in the string.
function vowels(x){
    let count =0;
    let str = x;
    for(i=0;i<str.length;i++){
        
        if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
            
            count++

        }
    }
    console.log(count);
}
// Q2. Create an arrow function to perform the same task.
let vowel = (x) =>{
    let count =0;
    let str = x;
    for(i=0;i<str.length;i++){
        
        if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
            
            count++

        }
    }
    console.log(count);
}

// Q3. For a given array of numbers, print the square of each value using the forEach loop

let arr = [10,20,30,40,98];
arr.forEach((val)=>{
    console.log(val*val);
});

// Q4. We are given array of marks of students. Filter our of the marks of students that scored 90+.
let mark = arr.filter((val)=>{
    return val>90;
});
console.log(mark);

//Q5.  
let num = prompt("Enter a Number : ");
let numArr = [];
for(i=1;i<=num;i++){
    numArr.push(i);

}
for(i=0;i<numArr.length;i++){
    console.log(numArr[i]);

}
let sum = numArr.reduce((pre , cur)=>{
    return pre + cur;
});
console.log("Sum of the array is :",sum);
let product = numArr.reduce((pre , cur)=>{
    return pre * cur;
});
console.log("Product of array elements is :",product);