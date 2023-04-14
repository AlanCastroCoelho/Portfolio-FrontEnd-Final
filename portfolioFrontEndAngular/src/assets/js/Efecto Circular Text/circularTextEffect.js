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