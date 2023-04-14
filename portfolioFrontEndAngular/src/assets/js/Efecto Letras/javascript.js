//////////// NAV ANIMATION TEXT /////////////
const menuItems = [...document.querySelectorAll('.menu-item')];
menuItems.forEach(item => {

  let word = item.children[0].children[0].innerText.split('');
  item.children[0].innerHTML = '';
  word.forEach((letter, idx) => {
    item.children[0].innerHTML += `<span style="--index: ${idx};color:white">${letter}</span>`;
  })

let cloneDiv = item.children[0].cloneNode(true);

cloneDiv.style.position = 'absolute';
cloneDiv.style.top = '0';
cloneDiv.style.width = '100%';
item.appendChild(cloneDiv)
})