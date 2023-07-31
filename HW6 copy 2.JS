const numbers = [
  parseFloat(document.getElementById("a").value),
  parseFloat(document.getElementById("b").value),
  parseFloat(document.getElementById("c").value),
];

function sortNumbers() {
  numbers.sort((a, b) => a - b);

  // Add the numbers to the console
  console.log(numbers);

  // Create DIVs for each number
  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const div3 = document.createElement("div");

  // Add the numbers to the DIVs
  if (a > b && a > c) {
    div1.innerHTML = a;
    div2.innerHTML = b;
    div3.innerHTML = c;
  } else if (b > a && b > c) {
    div1.innerHTML = b;
    div2.innerHTML = a;
    div3.innerHTML = c;
  } else if (c > a && c > b) {
    div1.innerHTML = c;
    div2.innerHTML = b;
    div3.innerHTML = a;
  } else {
    // If two or more numbers are equal, put them in the same DIV
    if (a === b) {
      div1.innerHTML = a;
      div2.innerHTML = a;
      div3.innerHTML = c;
    } else if (a === c) {
      div1.innerHTML = a + "," + c;
      div2.innerHTML = b;
    } else {
      div1.innerHTML = b + "," + c;
      div2.innerHTML = a;
    }
  }

  // Add the DIVs to the result div
  document.getElementById("result").appendChild(div1);
  document.getElementById("result").appendChild(div2);
  document.getElementById("result").appendChild(div3);
}
