let array = [1, 2, 3, 4, 5];
// 1. Use a forEach loop to print each element to the console.
array.forEach(function(arr){
    console.log(arr);
})


// 2. Create an array of colors ['red', 'green', 'blue']. 
//  - Use a forEach loop to add "Color:" before each element and print them to the console. 
//  - The output should look like "Color: red", "Color: green", "Color: blue".
let colors = ["red", "green", "blue"];

colors.forEach(function(col){
    console.log("Color: "+col);
})


let numbers = [1, 2, 3, 4, 5];
let sum = 0;
// 3. Use a forEach loop to calculate and print the sum of all the elements in the array.
//  - There's a couple ways to solve this one - think through the logic and ask for support if you need it :)
numbers.forEach(function(num){
    sum+=num;
})
console.log(sum);


let fruits = ["apple", "banana", "cherry"]
// 4. Use a forEach loop to print each element to the console.
fruits.forEach(function(fru){
    console.log(fru);
})


let names = ["Simba", "Scar", "Nala", "Mufasa", "Zazu"];
// 5. Use a forEach loop to print each name along with its index number.
names.forEach(function(nam, index){
    console.log(nam + " Index: "+index);
})
//  - Remember: the index can be put as a second parameter.
//  - Example: the first message should read something like "Simba (Index: 0)"
