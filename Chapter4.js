// Q1. For a given array with marks of students -> [85, 97, 44, 37, 76, 60] Find the average Marks of the entire class.
let marks = [85,97,44,37,76,60];
let mark = 0;
for(i=0;i<marks.length;i++){
    console.log(marks[i]);
    mark = mark + marks[i];
}
for(let val of marks){
    console.log(val);
}
let total = mark / marks.length;
console.log(`Average of Marks is ${total}`);

// Q2. For a given array with prices of 5 items -> [250, 645, 300, 900, 50] All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.
let prices = [250,645,300,900,50];
let fval = 0;
let finalprice =[];
for(let val of prices){
    fval= val /10 + val;
    finalprice.push(fval);
}
console.log("Price after increment by 10%")
for(let val of finalprice){
    console.log(val);
}

// Q3. Create an array to store companies ["Bloomberg”,“Microsoft”,“Uber”,“Google”,“IBM”,“Netflix”]
let companies = ["bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// companies.shift();
companies.splice(2,1,"Ola");
companies.push("amazon");