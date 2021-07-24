// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const refs = {
    btnDecrement: document.querySelector('button[data-action="decrement"]'),
    btnIncrement: document.querySelector('button[data-action="increment"]'),
    valueEl: document.querySelector('#value')

}

const counterValue = {
    value: 0,

    Decrement() {

    console.log('это клик по декременту')
        this.value -= 1
    },

    Increment() {
    console.log('это клик по инкременту')
    this.value += 1
    }
}


function buttonDecrementClick() {
    counterValue.Decrement()
    refs.valueEl.textContent = counterValue.value
}

function buttonIncrementClick() {
counterValue.Increment()
    refs.valueEl.textContent = counterValue.value
}

refs.btnDecrement.addEventListener('click', buttonDecrementClick)
refs.btnIncrement.addEventListener('click', buttonIncrementClick)