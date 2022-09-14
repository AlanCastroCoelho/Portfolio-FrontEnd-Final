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
}

/////// Funcion Para editar End ///////

/////// Function para cambiar la foto de About Me ///////

const imgDiv = document.querySelector('about-pic-div');
const img = document.getElementById("profile-photo");
const file = document.getElementById("file");
const uploadBtn = document.querySelector('change-photo-button');

//if user hover on profile div

imgDiv.addEventListener('mouseenter', function()

{
uploadBtn.style.display = "flex"
});

//if user hover out from img div

imgDiv.addEventListener('mouseleave'), function()
{
  uploadBtn.style.display = "none";
}

// image showing funcionality

//when user choose aphoto to upload+
/*
file.addEventListener('change',function{
  //this refers to file
  const choosedFile = this.files[0];

  if(choosedFile){
    const reader = new FileReader(); 
    reader.addEventListener('load',function(){
img.setAttribute('src', reader.result);
    });
reader.readAsDataURL(choosedFile);

  }
});

*/


