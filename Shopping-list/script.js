// All Selector

const itemForm = document.querySelector("#item-form");

const itemInput = document.querySelector("#item-input");

const itemList = document.querySelector("#item-list");

const clearBtn = document.querySelector("#clear");

const itemFilter = document.querySelector("#filter");

function displayItems() {
  let items = JSON.parse(localStorage.getItem("items")) || [];

  items.forEach((item) => addItemfn(item));
}
// form submit function

function formSubmitfn(e) {
  e.preventDefault();

  let newItem = itemInput.value;

  if (itemInput.value === "") {
    alert("Please add an item");
    return;
  }

  addItemfn(newItem);
  toAddInLocalStorage(newItem);

  checkUI();

  itemInput.value = "";
}

// Add item function

function addItemfn(item) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));

  const button = document.createElement("button");
  button.className = "remove-item btn-link text-red";
  li.appendChild(button);

  const i = document.createElement("i");
  i.className = "fa-solid fa-xmark";
  button.appendChild(i);

  itemList.appendChild(li);
}

// Remove Each Item function

function removeItemfn(e) {
  if (e.target.parentElement.classList.contains("remove-item")) {
    if (confirm("Are You Sure?")) {
      e.target.parentElement.parentElement.remove();

      checkUI();
    }
  }
}

// Clear All Item function

function clearAllfn() {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
  checkUI();
}

// Check UI function

function checkUI() {
  const items = itemList.querySelectorAll("li");

  if (items.length === 0) {
    clearBtn.style.display = "none";
    itemFilter.style.display = "none";
  } else {
    clearBtn.style.display = "block";
    itemFilter.style.display = "block";
  }
}

// Item filter Function

function itemFilterfn() {
  const items = itemList.querySelectorAll("li");
  const text = e.target.value.toLowerCase();

  items.forEach((item) => {
    const itemName = item.firstChild.textContent.toLowerCase();
    if (itemName.indexOf(text) != -1) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}
// Add to Storage by Gopal

function toAddInLocalStorage(newItem) {
  let items = getItemFromLocalStorage()
  items.push(newItem);
  localStorage.setItem("items", JSON.stringify(items));
}

function getItemFromLocalStorage(){
  return JSON.parse(localStorage.getItem('items')) || [];
}

// Event listners function
function Eventfn() {
  itemForm.addEventListener("submit", formSubmitfn);

  itemList.addEventListener("click", removeItemfn);

  clearBtn.addEventListener("click", clearAllfn);

  itemFilter.addEventListener("input", itemFilterfn);

  document.addEventListener("DOMContentLoaded", displayItems);

  checkUI();
}

Eventfn();
