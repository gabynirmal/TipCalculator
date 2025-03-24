buttons = document.querySelectorAll("button");
console.log(buttons);
const input = document.querySelector("input").value;
const tipText = document.querySelector(".tip");
const tipTotalText = document.querySelector(".tipTotal");
//const tipPercent = event.target.getAttribute("data-target") / 100;
console.log(input);
console.log(tipText);
console.log(tipTotalText);

buttons.forEach((item) => {
  item.addEventListener("click", (event) => {
    const input = parseFloat(document.querySelector("input").value);
    const tipText = document.querySelector(".tip");
    const tipTotalText = document.querySelector(".tipTotal");
    const tipPercent =
      parseFloat(event.target.getAttribute("data-target")) / 100;
    tipText.textContent = input * tipPercent;
    tipTotalText.textContent = input * tipPercent + input;
  });
});
