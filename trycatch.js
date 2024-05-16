function sum(num2) {
  try {
    const sumvalue = num1 + num2;
    return sumvalue;
  } catch (error) {
    console.log("error message", error);
  }
}

sum();
