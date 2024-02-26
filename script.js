//your code here!

const list = document.getElementById("infi-list");

for(let i = 1;i<=10;i++){
	const listItem = document.getElementById("li");
	listItem.textContent = `Item ${i}`;
	list.appendChild(listItem);
}

list.addEventListener("scroll", function() {
	if(list.scrollHeight - list.scrollTop === list.clientHeight) {
		addMoreItems();
	}
});

function addMoreItems() {
	for(let i = 1;i<=2;i++){
		const newItem = document.createElement("li");
		newItem.textContent = `Item ${list.children.length + i}`;
		list.appendChild(newItem);
	}
}

