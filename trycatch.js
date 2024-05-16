function sum(num, num2) {
  try {
    const sumvalue = num + num2;
    return sumvalue;
  } catch (error) {
    console.log("error message", error);
  }
}

sum();
