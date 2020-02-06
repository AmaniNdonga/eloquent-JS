for (number = 0; number<= 100; number++){
    output = "";
    if (number % 3 == 0) {output += "fizz"};
    if (number % 5 == 0) {output += "buzz"};
    console.log(output || number);
  }