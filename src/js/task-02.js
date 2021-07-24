// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li
// за одну операцию в список ul.ingredients.Для создания DOM - узлов используй document.createElement().

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const findElement = document.querySelector('#ingredients');

const createElements = option => {
return option.map(el => {
  const addItem = document.createElement('li');
  addItem.textContent = el;
  return addItem
});
}

findElement.append(...createElements(ingredients));