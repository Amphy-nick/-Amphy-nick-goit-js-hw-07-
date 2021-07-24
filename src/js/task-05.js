// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input), подставляет его текущее
// значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const inputEl = document.querySelector('#name-input')
const textEl = document.querySelector('#name-output')

inputEl.addEventListener('input', onInputChange)

function onInputChange(event) {
    textEl.textContent = event.currentTarget.value.trim() || 'незнакомец'
}