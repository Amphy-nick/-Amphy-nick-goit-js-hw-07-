// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes./

const controlInputEl = document.querySelector('input');
const renderBtnEl = document.querySelector('[data-action="render"]');
const destroyBtnEl = document.querySelector('[data-action="destroy"]');
const divBoxesEl = document.querySelector('#boxes');


renderBtnEl.addEventListener('click', () => createBoxes(controlInputEl.value));
destroyBtnEl.addEventListener('click', destroyBoxes)


function createBoxes(amount) {
  destroyBoxes();

  for (let i = 0; i < Number(amount); i += 1) {
    const divEl = document.createElement('div');
    divEl.style.width = `${30 + i * 10}px`;
    divEl.style.height = `${30 + i * 10}px`;
    divEl.style.marginTop = '20px';
    divEl.style.backgroundColor = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
    divBoxesEl.insertAdjacentElement('beforeend', divEl)
  }
}

function destroyBoxes() {
  divBoxesEl.innerHTML = '';
}