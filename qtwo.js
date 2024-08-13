const pattern = [
    ["*", " ", " ", "*", " ", "*", " ", "*"],
    ["*", " ", " ", "*", " ", " ", " ", " "],
    ["*", " ", " ", "*", " ", " ", " ", " ","*"]
  ];
  
  // Function to print the pattern
  function printPattern(pattern) {
    for (let row of pattern) {
      console.log(row.join(''));
    }
  }
  
  // Print the pattern to the console
  printPattern(pattern);