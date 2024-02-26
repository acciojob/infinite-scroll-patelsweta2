//your code here!

const list = document.getElementById("infi-list");

for(let i = 1;i<=10;i++){
	const listItem = document.getElementById("li");
	listItem.textContent = `Item ${i}`;
	list.appendChild(listItem);
}

function addMoreItems() {

  const initialItems = list.querySelectorAll("li");
  for (let i = 0; i < initialItems.length; i++) {
    const clonedItem = initialItems[i].cloneNode(true);
    list.appendChild(clonedItem);
  }
}

list.addEventListener("scroll", function() {
	if(list.scrollHeight - list.scrollTop === list.clientHeight) {
		addMoreItems();
	}
});



