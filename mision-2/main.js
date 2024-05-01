const img = document.querySelector('img')
const p = document.querySelector('p')
const btn = document.querySelector('button')

btn.addEventListener('click', () => {
  if (img.classList.contains('hello')) {
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqlu-Osmv5xoabmVG0kypoUy5WdK3KKqTLzg&s'
    img.classList.add('world')
    img.classList.remove('hello')
    img.style.backgroundColor = '#A63A50'

    p.textContent = 'Con Manipulación del DOM usando JavaScript'
  } else {
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYnpC5h3Mj4V75Arx4reTDWJmnd6jaIMrWdw27cVpaOA&s'
    img.classList.add('hello')
    img.classList.remove('world')
    img.style.backgroundColor = '#248290'

    p.textContent = 'Aprendí a programar'
  }
})

