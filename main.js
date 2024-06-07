const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("input-btn");
const output = document.getElementById("output");

const convertToRoman = (num) => {
  const reference = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];
  const rest = [];

  reference.forEach(function (arr) {
    while (num >= arr[1]) {
      rest.push(arr[0]);
      num -= arr[1];
    }
  });

  return rest.join("");
};

const updateNum = () => {
  const numStr = numberInput.value;

  if (numStr == "") {
    output.classList.add("error");
    output.innerHTML = `<p>Please Enter a Valid Number</p>`;
    output.classList.remove("value");
  } else if (numStr <= 0) {
    output.classList.add("error");
    output.innerHTML = `<p>Please Enter a number greater than or equal to 1.</p>`;
    output.classList.remove("value");
  } else if (numStr > 3999) {
    output.classList.add("error");
    output.innerHTML = `<p>Please enter a number less than or equal to 3999.`;
    output.classList.remove("value");
  } else {
    const int = parseInt(numStr, 10);
    output.innerText = convertToRoman(int);
    output.classList.add("value");
    output.classList.remove("error");
  }
};

numberInput.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    e.preventDefault();
    updateNum();
  }
});

convertBtn.addEventListener("click", () => {
  updateNum();
});
