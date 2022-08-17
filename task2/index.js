const formElement = document.querySelector("#formElement");

formElement.addEventListener("focusin", (e) => {
  e.target.classList.add("focused");
});

formElement.addEventListener("focusout", (e) => {
  e.target.classList.remove("focused");
});
