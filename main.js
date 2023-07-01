let size = 10;
let orderElement = 1;

const init = () => {
  // tutaj kod
  const btn = document.createElement("button");
  const btnReset = document.createElement("button");
  const ul = document.createElement("ul");

  btn.textContent = "Dodaj 10 elementów listy";
  btnReset.textContent = "Wyczyść";

  document.body.appendChild(btn);
  document.body.appendChild(btnReset);
  document.body.appendChild(ul);

  btn.addEventListener("click", createLiElements);
  btnReset.addEventListener("click", removeElements);
};

const createLiElements = () => {
  // tutaj kod
  const ul = document.querySelector("ul");
  for (let i = 0; i < 10; i++) {
    const li = document.createElement("li");
    li.textContent = `Element nr ${orderElement++}`;
    li.style.fontSize = `${size++}px`;
    ul.appendChild(li);
  }
};

const removeElements = () => {
  document.querySelector("ul").textContent = "";
  size = 10;
  orderElement = 1;
};

init();
