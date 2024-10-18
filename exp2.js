// Generate multiplication table using For loop
function generateTableForLoop() {
  const number = parseInt(document.getElementById("number").value);
  if (isNaN(number)) {
      document.getElementById("result2").innerHTML = "Please enter a valid number.";
      return;
  }
  
  let result = `<h3>Table of ${number} using For Loop:</h3>`;
  for (let i = 1; i <= 10; i++) {
      result += `${number} x ${i} = ${number * i}<br>`;
  }
  document.getElementById("result2").innerHTML = result;
}

// Generate multiplication table using While loop
function generateTable() {
  const number = parseInt(document.getElementById("number").value);
  if (isNaN(number)) {
      document.getElementById("result").innerHTML = "Please enter a valid number.";
      return;
  }
  
  let i = 1;
  let result = `<h3>Table of ${number} using While Loop:</h3>`;
  while (i <= 10) {
      result += `${number} x ${i} = ${number * i}<br>`;
      i++;
  }
  document.getElementById("result").innerHTML = result;
}

// Generate multiplication table using Do While loop
function generateTableDoWhileLoop() {
  const number = parseInt(document.getElementById("number").value);
  if (isNaN(number)) {
      document.getElementById("result3").innerHTML = "Please enter a valid number.";
      return;
  }

  let i = 1;
  let result = `<h3>Table of ${number} using Do While Loop:</h3>`;
  do {
      result += `${number} x ${i} = ${number * i}<br>`;
      i++;
  } while (i <= 10);
  
  document.getElementById("result3").innerHTML = result;
}
