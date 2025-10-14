// Evento 1: Hover → change text
const event1 = document.getElementById('event1');
const originalText = event1.querySelector('p').textContent;
event1.addEventListener('mouseenter', () => {
  event1.querySelector('p').textContent = '1. Obrigado por passares!';
});
event1.addEventListener('mouseleave', () => {
  event1.querySelector('p').textContent = originalText;
});

// Evento 2: Click buttons to change text color
document.querySelectorAll('#event2 button').forEach(btn => {
  btn.addEventListener('click', () => {
    const color = btn.textContent.toLowerCase();
    event2.querySelector('p').style.color = color;
  });
});

// Evento 3: Input changes background color (red → gray → yellow → lightblue)
const input3 = document.getElementById('input3');
let colorIndex = 0;
const colors = ['red', 'gray', 'yellow', 'lightblue'];

input3.addEventListener('input', () => {
  input3.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
});

// Evento 4: Submit English color → change page background
const input4 = document.getElementById('input4');
const submitBtn = document.querySelector('#event4 button');

submitBtn.addEventListener('click', () => {
  const color = input4.value.trim().toLowerCase();
  if (color === 'red' || color === 'green' || color === 'blue' || color === 'white' || color === 'black' || color === 'yellow' || color === 'orange' || color === 'purple' || color === 'pink' || color === 'brown') {
    document.body.style.backgroundColor = color;
  }
});

// Evento 5: Click button → increment counter
const counter = document.getElementById('counter');
const countBtn = document.getElementById('event5').querySelector('button');
let count = 0;

countBtn.addEventListener('click', () => {
  count++;
  counter.textContent = count;
});