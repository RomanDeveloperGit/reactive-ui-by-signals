import { createSignal, createEffect } from 'reactive-signals-by-roman';

const counterSignal = createSignal(0);

const elements = {
  root: document.querySelector('#app') as HTMLElement,
  counter: {
    info: document.createElement('div'),
    incrementButton: document.createElement('button'),
    decrementButton: document.createElement('button'),
    clearButton: document.createElement('button'),
  },
};

elements.root.append(...Object.values(elements.counter));

elements.counter.incrementButton.innerHTML = 'Увеличить счетчик';
elements.counter.incrementButton.addEventListener('click', () => {
  counterSignal.value++;
});

elements.counter.decrementButton.innerHTML = 'Уменьшить счетчик';
elements.counter.decrementButton.addEventListener('click', () => {
  counterSignal.value--;
});

elements.counter.clearButton.innerHTML = 'Обнулить счетчик';
elements.counter.clearButton.addEventListener('click', () => {
  counterSignal.value = 0;
});

createEffect(() => {
  elements.counter.info.innerHTML = `Counter valus is ${counterSignal.value}`;
});
