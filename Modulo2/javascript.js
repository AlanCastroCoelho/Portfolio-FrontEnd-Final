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

const text = document.querySelector(".text p");
text.innerHTML = text.innerText
  .split("")
  .map(
    (char, i) => `
  <span style="transform:rotate(${i * 3}deg)">${char}</span>`
  )
  .join("");

/////// Circular Text - Hero Section - End Code ///////

/////// Funcion Para editar ///////

 const listId = ["edit-name-about-me","about-me-name",
 "edit-paragraph-about-me","about-me-paragraph","edit-subtitle-skills",
 "skills-subtitle","edit-subtitle-proyects","proyects-subtitle"];

 function change_name(num,numTwo){
  document.getElementById(listId[num]).style.display="block";
  let texto = document.getElementById(listId[numTwo]).innerText;
  console.log(texto);
  //Controla si se presiona un enter//
  let textarea = document.getElementById(listId[num]);
textarea.addEventListener('keyup', (e) => {
  if(e.key=='Enter'){
    document.getElementById(listId[num]).style.display="none"}
});
};

function myFunction2(valor,numTwo){
  document.getElementById(listId[numTwo]).innerText=valor;
};

/////// Funcion Para editar End ///////



///////////////// SKILLS ANIMATION ///////////////
//const caca = document.querySelectorAll("div.option");

//
//caca.forEach(function(parametro) {
 // parametro.addEventListener(click, animationSkills}
  
// function animationSkills() { 
 // document.querySelectorAll("div.option").classList.remove("active");
  //document.querySelectorAll("div.option").classList.add("active");
 //};

///////// Texto SKILLS ARROUND CONTAINER /////////

//////// ALL CONTAINER WIDTH SCROLL ANIMATION /////////

let animationPoint = document.querySelectorAll(".about-me-right");
let allContainer = document.querySelector(".all-page-container");
let leftBodySection = document.getElementById('body-left');
let rightBodySection = document.getElementById('body-right');
let bodySection = document.getElementById('all-body');

allContainer.addEventListener('scroll', function(){
  let breakPoint = document.getElementById('break-point-anim');
  let positionObj1 = breakPoint.getBoundingClientRect().top;
  console.log(positionObj1);
if(positionObj1 < 0){
  allContainer.classList.add('all-page-full');
  leftBodySection.classList.add('out-of-view-left');
  rightBodySection.classList.add('out-of-view-right');
  bodySection.classList.add('no-padding');
}

else {
  allContainer.classList.remove('all-page-full');
  leftBodySection.classList.remove('out-of-view-left');
  rightBodySection.classList.remove('out-of-view-right');
  bodySection.classList.remove('no-padding');
}

})
