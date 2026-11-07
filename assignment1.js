import catalogSource from './data-minifed.json' with { type: 'json' };

document.addEventListener("DOMContentLoaded", () => {
   const itemsArray = Array.isArray(catalogSource) ? catalogSource : catalogSource.products;

   const targetEntries = itemsArray.slice(0, 20);

   const gridContainer = document.querySelector("#productsGrid"); // Find target container in HTML

   targetEntries.forEach(item => { // Card for each product + insert into the grid
      gridContainer.appendChild(buildProductCard(item));
   });
});

function buildProductCard(item) { // Image + info in list
   const listItem = document.createElement("li");
   listItem.classList.add("catalog-item");

   listItem.appendChild(buildImageNode(item));
   listItem.appendChild(buildLowerContent(item));

   return listItem;
}

function buildImageNode(item) { // Product thumbnail with click alert
   const imgNode = document.createElement("img");
   imgNode.classList.add("item-thumb");
   imgNode.src = item.thumbnail;
   imgNode.alt = item.title;

   imgNode.addEventListener("click", () => { // Item ID when the user clicks
      alert(`Product ID: ${item.id}`);
   });

   return imgNode;
}
// Price, title, and button
function buildLowerContent(item) {
   const container = document.createElement("div");
   container.classList.add("item-details");

   const textWrapper = document.createElement("div");
   textWrapper.classList.add("text-group");

   const headingElem = document.createElement("h3");
   headingElem.classList.add("item-heading");
   headingElem.textContent = item.title;

   const costElem = document.createElement("span");
   costElem.classList.add("item-cost");
   costElem.textContent = `$${Number(item.price).toFixed(2)}`;

   textWrapper.appendChild(headingElem);
   textWrapper.appendChild(costElem);

   const actionBtn = document.createElement("button"); // Alerts the item details on click
   actionBtn.classList.add("cart-action-btn");
   actionBtn.textContent = "+";
   actionBtn.setAttribute("title", "Add to Cart");

   actionBtn.addEventListener("click", () => {
      alert(`Product ID: ${item.id} - ${item.title}`);
   });

   container.appendChild(textWrapper);
   container.appendChild(actionBtn);

   return container;
}