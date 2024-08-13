 
 given_number = 6
 let num1 = 0, num2 = 1, nextnumber;
 
 console.log('Fibonacci Series:');
 
 for (let i = 1; i <= given_number; i++) {
     console.log(num1);
     nextnumber = num1 + num2;
     num1 = num2;
     num2 = nextnumber;
 }