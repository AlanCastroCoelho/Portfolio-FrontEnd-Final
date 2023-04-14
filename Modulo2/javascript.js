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

//////////// NAV ANIMATION HAMBURGUER FOR MOBILE /////////////

const navSlide = () => {
  const burguer = document.querySelector('.burguer');
  const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');



  burguer.addEventListener('click',() => {
    //Toggle Nav
    nav.classList.toggle('nav-active');

  //Animate Links
  navLinks.forEach((link, index) => {
if(link.style.animation) {
  link.style.animation = ''
} else{
  link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .5}s`;
}
  });

//Burguer Animation
burguer.classList.toggle('toggle');

  });
}

navSlide();

/////// Circular Text- Hero Section - Start Code ///////



/////// Circular Text - Hero Section - End Code ///////

/////// Funcion Para editar ///////

/////// Funcion Para editar End ///////





//////// ALL CONTAINER WIDTH SCROLL ANIMATION /////////

const img = document.getElementById('skye-background');
window.addEventListener('scroll', ()=>{
  const current = window.scrollY;
  img.style.clipPath = `circle(${current} at center)`;
});