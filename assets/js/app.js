var iconCards = document.querySelectorAll('.icon-card');

iconCards.forEach(function(card) {
  card.addEventListener('mouseover', function() {
    card.classList.add('enlarged');
  });

  card.addEventListener('mouseout', function() {
    card.classList.remove('enlarged');
  });
});

const text = "Hello! My name is Natiq (or Syed) and I'm a fourth-year Mathematics, Statistics and Computer Science student at the University of Toronto.";
const typedTextElement = document.getElementById("typed-text");

function typeText() {
    typedTextElement.innerHTML = "";
    let i = 0;
    const typingEffect = setInterval(function () {
      typedTextElement.innerHTML += text.charAt(i);
      i++;
      if (i >= text.length) {
        clearInterval(typingEffect);
      }
    }, 50);
  }
  
  typeText();