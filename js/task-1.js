const itemsEl = document
  .querySelector('ul#categories')
  .querySelectorAll('.item');

console.log(`Number of categories: ${itemsEl.length}`);

itemsEl.forEach(item => {
  console.log(`Category: ${item.querySelector('.category').textContent}`);
  console.log(`Elements: ${item.querySelectorAll(`.subelements`).length}`);
});
