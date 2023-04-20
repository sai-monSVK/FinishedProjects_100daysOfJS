const search = document.querySelector('#glob-search');
const list = document.querySelector('#list');
let displayedItems = [];

search.addEventListener('keyup', filterList);

function filterList(e) {
  e.preventDefault();
  const searchTerm = search.value;
  displayedItems = [];

  for (let i = 0; i < list.children.length; i++) {
    if (list.children[i].innerHTML.toLowerCase().includes(searchTerm)) {
      list.children[i].style.display = "";
      displayedItems.push(list.children[i]);
    } else {
      list.children[i].style.display = "none";
    }
  }

  removeLastItemBorder();
}

function removeLastItemBorder() {
  if (displayedItems.length > 0) {
    for (let i = 0; i < list.children.length; i++) {
      list.children[i].style.borderBottom = "";
    }
    displayedItems[displayedItems.length - 1].style.borderBottom = "none";
  }
}
