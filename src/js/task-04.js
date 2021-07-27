// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса


const refs = {
    decrementBtn: document.querySelector('button[data-action="decrement"]'),
    incrementBtn: document.querySelector('button[data-action="increment"]'),
    valueEl: document.querySelector('#value'),
};

const counterValue = {
    value: 0,
    Decrement() {
        this.value -= 1
        console.log('Это клик по декременту ')

    },
    Increment() {
        this.value += 1
        console.log('Это клик по инкременту ')

    }
};

function buttonDecrementClick() {
    counterValue.Decrement()
    refs.valueEl.textContent = counterValue.value;
}

function buttonIncrementClick() {
    counterValue.Increment()
    refs.valueEl.textContent = counterValue.value;
}

refs.decrementBtn.addEventListener('click', buttonDecrementClick);
refs.incrementBtn.addEventListener('click', buttonIncrementClick);