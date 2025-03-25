//TODO: add error alert if input is not a number

const slider = document.querySelector(".slider");

slider.addEventListener("input", () => {
  const output = slider.value;
  const customButtonText = document.querySelector(".customTip");
  customButtonText.textContent = output + "%";
});

const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.addEventListener("click", (event) => {
    const input = parseFloat(document.querySelector("#price").value);
    const tipText = document.querySelector(".tip");
    const tipTotalText = document.querySelector(".tipTotal");
    const data = event.currentTarget.getAttribute("data-target");
    const customVal = slider.value;
    const tipVal = data === "custom" ? customVal : data;
    const tipPercent = parseFloat(tipVal) / 100;
    tipText.textContent = "$" + (input * tipPercent).toFixed(2);
    tipTotalText.textContent = "$" + (input * tipPercent + input).toFixed(2);
  });
});
