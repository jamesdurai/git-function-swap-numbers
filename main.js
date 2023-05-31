function swapNumbers(num1, num2) {
    document.write("Before swapping: n1 =", num1 + ", n2 =", num2);
  
    // Swapping logic
    var temp = num1;
    num1 = num2;
    num2 = temp;
    
    document.write(" <br> ")
    document.write("After swapping: n1 =", num1 + ", n2 =", num2);
  }
  
  var number1 = 2;
  var number2 = 4;
  
  swapNumbers(number1, number2);