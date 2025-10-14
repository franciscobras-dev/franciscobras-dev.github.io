const box1 = document.getElementById('box1');
box1.addEventListener('mouseenter', () => {
  box1.style.backgroundColor = '#e74c3c';
});
box1.addEventListener('mouseleave', () => {
  box1.style.backgroundColor = '#3498db';
});

const box2 = document.getElementById('box2');
box2.addEventListener('dblclick', () => {
  box2.style.backgroundColor = '#9b59b6';
  box2.textContent = 'Clicado duas vezes!';
  setTimeout(() => {
    box2.style.backgroundColor = '#3498db';
    box2.textContent = 'Clique duas vezes aqui';
  }, 800);
});

document.getElementById('btn1').addEventListener('click', () => {
  document.body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
});

const input1 = document.getElementById('input1');
input1.addEventListener('blur', () => {
  document.getElementById('output').textContent = input1.value ? 'Você escreveu: ' + input1.value : 'Campo vazio';
});

const box3 = document.getElementById('box3');
box3.tabIndex = 0;
box3.addEventListener('keydown', (e) => {
  box3.textContent = 'Tecla: ' + e.key;
});
box3.addEventListener('focus', () => {
  box3.style.outline = '2px solid #f39c12';
});
box3.addEventListener('blur', () => {
  box3.style.outline = 'none';
  box3.textContent = 'Pressione qualquer tecla (clique aqui primeiro)';
});