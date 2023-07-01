let size = 10;
let orderElement = 1;

const init = () => {
  // tutaj kod
  const btn = document.createElement("button");
  const ul = document.createElement("ul");

  btn.textContent = "Dodaj 10 elementów listy";

  document.body.appendChild(btn);
  document.body.appendChild(ul);

  btn.addEventListener("click", createLiElements);
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

init();
