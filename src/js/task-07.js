// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input) и
// изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const rangeInput = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

const changeFontSize = rangeInput.addEventListener('input', textTargetInputEvent)

function textTargetInputEvent(event) {
   const fontSize = Number(event.currentTarget.value)

   textEl.setAttribute(`style`, `font-size: ${fontSize}px`)
};
