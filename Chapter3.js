// Q1. Print all even numbers from 0 to 100.
for (i=0;i<=100;i++){
    console.log(i);
}
// Q2. Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.

// Q3. Prompt the user to enter their full name. Generate a username for them based on the input. 
// Start username with @, followed by their full name and ending with the fullname length.
// eg: user name = “shradhakhapra”, username should be “@shradhakhapra13

let fullName = prompt("Enter your Full Name : ");

let userName = `@${fullName.toLowerCase()}${fullName.length}`
alert(`Your UserName is : ${userName}`);