const itemForm = document.querySelector("#item-form");

const itemInput = document.querySelector("#item-input");

const itemList = document.querySelector("#item-list");

itemForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (itemInput.value === "") {
    alert("Please add an item");
    return;
  } else {
    const li = document.createElement("li");
    li.createTextNode = itemInput.value;
    itemList.appendChild(li);

    const button = document.createElement("button");
    button.className = "remove-item btn-link text-red";
    li.appendChild(button);

    const i = document.createElement("i");
    i.className = "fa-solid fa-xmark";
    button.appendChild(i);

    itemInput.value = "";
  }
});
