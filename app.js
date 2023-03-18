const button = document.querySelector("button");

button.addEventListener("click", () => {
  const input = parseInt(document.getElementById("inputBox").value);

  const results = document.getElementById("result");
  const text = document.createElement("p");

  const fizzBuzz = (x) => {
    if (x === 0 || isNaN(x)) {
      return "invalid input";
    } else if (x % 3 === 0 && x % 5 === 0) {
      return "FizzBuzz!";
    } else if (x % 3 === 0) {
      return "Fizz!";
    } else if (x % 5 === 0) {
      return "Buzz!";
    } else {
      return x;
    }
  };

  const final = fizzBuzz(input);
  text.innerHTML = final;
  results.appendChild(text);
});
