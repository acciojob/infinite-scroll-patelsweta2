const list = document.getElementById("infi-list");

// Function to add more items
function addMoreItems() {
  // Clone the initial items and append them to the list
  const initialItems = list.querySelectorAll("li");
  for (let i = 0; i < initialItems.length; i++) {
    const clonedItem = initialItems[i].cloneNode(true);
    list.appendChild(clonedItem);
  }
}

// Add an event listener for scrolling
list.addEventListener("scroll", function () {
  // Check if the user has reached the end of the list
  if (list.scrollHeight - list.scrollTop === list.clientHeight) {
    // If yes, add more items
    addMoreItems();
  }
});

// Initial items
const initialItemCount = 10;
for (let i = 1; i <= initialItemCount; i++) {
  const listItem = document.createElement("li");
  listItem.textContent = `Item ${i}`;
  list.appendChild(listItem);
}
