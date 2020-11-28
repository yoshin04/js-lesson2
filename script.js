'use strict';
{
  document.getElementById('button').addEventListener('click', () => {
    const fizz = document.getElementById('fizz').value;
    const buzz = document.getElementById('buzz').value;
    const pattern = /^[-]?([1-9]\d*|0)$/;
    const ul = document.getElementById('list');
    if (!(pattern.test(fizz)) || !(pattern.test(buzz))) {
      const li = document.createElement('li');
      li.textContent = '整数を入力して下さい。';
      ul.appendChild(li);
      return;
    }
    for (let i = 1; i < 100; i++) {
      const li = document.createElement('li');
      if (i % fizz === 0 && i % buzz === 0) {
        li.textContent = i + 'FizzBuzz';
      } else if (i % fizz === 0) {
        li.textContent = `${i} Fizz`;
      } else if (i % buzz === 0) {
        li.textContent = `${i} Buzz`;
      }
      ul.appendChild(li);
    }
  });
}